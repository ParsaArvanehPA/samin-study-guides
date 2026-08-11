import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';
import {
  FillBlankQuestion,
  MatchingQuestion,
  McqQuestion,
  OrderingQuestion,
  QuizQuestion,
  TrueFalseQuestion,
} from '@studyhub/shared-models';

type ChoiceState = 'idle' | 'correct' | 'wrong' | 'missed';

interface MatchState {
  /** Pair-index shown at each rendered right-column position, i.e. rightOrder[pos] = pairIndex. */
  rightOrder: number[];
  selectedLeft: number | null;
  /** leftIndex -> rendered right-column position it was correctly matched to. */
  matched: Record<number, number>;
  /** Right-column position currently flashing red, if any. */
  wrongPulse: number | null;
}

interface OrderState {
  /** shuffled[slot] = original (correct-order) index of the step shown at that rendered slot. */
  shuffled: number[];
  /** Slot numbers, in the order the user clicked them (claims slot picks[k] belongs at final position k). */
  picks: number[];
}

@Component({
  selector: 'lib-quiz-engine',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quiz-engine.html',
  styleUrl: './quiz-engine.scss',
})
export class QuizEngine {
  readonly questions = input.required<QuizQuestion[]>();

  private readonly selections = signal<Record<string, number>>({});
  private readonly tfSelections = signal<Record<string, boolean>>({});
  private readonly revealed = signal<Record<string, boolean>>({});
  private readonly matchState = signal<Record<string, MatchState>>({});
  private readonly orderState = signal<Record<string, OrderState>>({});

  constructor() {
    // Lazily seed shuffle state for match/order questions as they appear, without
    // clobbering in-progress attempts on unrelated re-evaluations of `questions()`.
    effect(() => {
      const qs = this.questions();

      this.matchState.update((state) => {
        let changed = false;
        const next = { ...state };
        for (const q of qs) {
          if (q.type === 'match' && !next[q.id]) {
            next[q.id] = {
              rightOrder: this.shuffleIndices(q.pairs.length),
              selectedLeft: null,
              matched: {},
              wrongPulse: null,
            };
            changed = true;
          }
        }
        return changed ? next : state;
      });

      this.orderState.update((state) => {
        let changed = false;
        const next = { ...state };
        for (const q of qs) {
          if (q.type === 'order' && !next[q.id]) {
            next[q.id] = { shuffled: this.shuffleIndices(q.steps.length), picks: [] };
            changed = true;
          }
        }
        return changed ? next : state;
      });
    });
  }

  // --- scoring (mcq + truefalse only; other types are self-paced practice) ---

  readonly gradedCount = computed(
    () => this.questions().filter((q) => q.type === 'mcq' || q.type === 'truefalse').length,
  );
  readonly answeredCount = computed(() => {
    const sel = this.selections();
    const tf = this.tfSelections();
    return this.questions().filter(
      (q) =>
        (q.type === 'mcq' && sel[q.id] !== undefined) ||
        (q.type === 'truefalse' && tf[q.id] !== undefined),
    ).length;
  });
  readonly correctCount = computed(() => {
    const sel = this.selections();
    const tf = this.tfSelections();
    return this.questions().filter(
      (q) =>
        (q.type === 'mcq' && sel[q.id] === q.correctIndex) ||
        (q.type === 'truefalse' && tf[q.id] === q.isTrue),
    ).length;
  });
  readonly isComplete = computed(
    () => this.answeredCount() >= this.gradedCount() && this.gradedCount() > 0,
  );

  // --- type guards ---

  isMcq(q: QuizQuestion): q is McqQuestion {
    return q.type === 'mcq';
  }
  isTrueFalse(q: QuizQuestion): q is TrueFalseQuestion {
    return q.type === 'truefalse';
  }
  isFill(q: QuizQuestion): q is FillBlankQuestion {
    return q.type === 'fill';
  }
  isMatch(q: QuizQuestion): q is MatchingQuestion {
    return q.type === 'match';
  }
  isOrder(q: QuizQuestion): q is OrderingQuestion {
    return q.type === 'order';
  }

  // --- shared reveal state (short + fill) ---

  isRevealed(id: string): boolean {
    return !!this.revealed()[id];
  }
  reveal(id: string): void {
    this.revealed.update((r) => ({ ...r, [id]: true }));
  }

  // --- mcq ---

  selectedIndex(id: string): number | undefined {
    return this.selections()[id];
  }
  choose(question: McqQuestion, index: number): void {
    if (this.selectedIndex(question.id) !== undefined) return; // locked after first answer
    this.selections.update((s) => ({ ...s, [question.id]: index }));
  }
  choiceState(question: McqQuestion, index: number): ChoiceState {
    const sel = this.selectedIndex(question.id);
    if (sel === undefined) return 'idle';
    if (index === question.correctIndex) return 'correct';
    if (index === sel) return 'wrong';
    return 'missed';
  }

  // --- true/false ---

  tfSelected(id: string): boolean | undefined {
    return this.tfSelections()[id];
  }
  chooseTf(question: TrueFalseQuestion, value: boolean): void {
    if (this.tfSelected(question.id) !== undefined) return;
    this.tfSelections.update((s) => ({ ...s, [question.id]: value }));
  }
  tfButtonState(question: TrueFalseQuestion, value: boolean): ChoiceState {
    const sel = this.tfSelected(question.id);
    if (sel === undefined) return 'idle';
    if (value === question.isTrue) return 'correct';
    if (value === sel) return 'wrong';
    return 'missed';
  }

  // --- fill-in-the-blank ---

  fillParts(question: FillBlankQuestion): [string, string] {
    const idx = question.textWithBlank.indexOf('___');
    if (idx === -1) return [question.textWithBlank, ''];
    return [question.textWithBlank.slice(0, idx), question.textWithBlank.slice(idx + 3)];
  }

  // --- matching ---

  matchRightOrder(question: MatchingQuestion): number[] {
    return this.matchState()[question.id]?.rightOrder ?? [];
  }
  matchSelectedLeft(question: MatchingQuestion): number | null {
    return this.matchState()[question.id]?.selectedLeft ?? null;
  }
  isLeftMatched(question: MatchingQuestion, leftIndex: number): boolean {
    const st = this.matchState()[question.id];
    return !!st && st.matched[leftIndex] !== undefined;
  }
  isRightMatched(question: MatchingQuestion, rightPos: number): boolean {
    const st = this.matchState()[question.id];
    return !!st && Object.values(st.matched).includes(rightPos);
  }
  isRightWrongPulse(question: MatchingQuestion, rightPos: number): boolean {
    return this.matchState()[question.id]?.wrongPulse === rightPos;
  }
  isMatchComplete(question: MatchingQuestion): boolean {
    const st = this.matchState()[question.id];
    return !!st && Object.keys(st.matched).length === question.pairs.length;
  }

  selectLeft(question: MatchingQuestion, leftIndex: number): void {
    const st = this.matchState()[question.id];
    if (!st || st.matched[leftIndex] !== undefined) return;
    this.matchState.update((s) => ({
      ...s,
      [question.id]: { ...st, selectedLeft: leftIndex, wrongPulse: null },
    }));
  }

  chooseRight(question: MatchingQuestion, rightPos: number): void {
    const st = this.matchState()[question.id];
    if (!st || st.selectedLeft === null) return;
    if (Object.values(st.matched).includes(rightPos)) return;

    const left = st.selectedLeft;
    if (st.rightOrder[rightPos] === left) {
      const matched = { ...st.matched, [left]: rightPos };
      this.matchState.update((s) => ({
        ...s,
        [question.id]: { ...st, matched, selectedLeft: null, wrongPulse: null },
      }));
    } else {
      this.matchState.update((s) => ({ ...s, [question.id]: { ...st, wrongPulse: rightPos } }));
      setTimeout(() => {
        this.matchState.update((s) => {
          const cur = s[question.id];
          if (!cur) return s;
          return { ...s, [question.id]: { ...cur, wrongPulse: null, selectedLeft: null } };
        });
      }, 550);
    }
  }

  // --- ordering ---

  orderSlots(question: OrderingQuestion): number[] {
    return Array.from({ length: question.steps.length }, (_, i) => i);
  }
  orderStepText(question: OrderingQuestion, slot: number): string {
    const st = this.orderState()[question.id];
    const originalIdx = st ? st.shuffled[slot] : slot;
    return question.steps[originalIdx];
  }
  orderPickNumber(question: OrderingQuestion, slot: number): number | null {
    const st = this.orderState()[question.id];
    if (!st) return null;
    const k = st.picks.indexOf(slot);
    return k === -1 ? null : k + 1;
  }
  isOrderPicked(question: OrderingQuestion, slot: number): boolean {
    return this.orderPickNumber(question, slot) !== null;
  }
  isOrderComplete(question: OrderingQuestion): boolean {
    const st = this.orderState()[question.id];
    return !!st && st.picks.length === question.steps.length;
  }
  isSlotCorrect(question: OrderingQuestion, slot: number): boolean {
    const st = this.orderState()[question.id];
    if (!st) return false;
    const k = st.picks.indexOf(slot);
    if (k === -1) return false;
    return st.shuffled[slot] === k;
  }
  isOrderFullyCorrect(question: OrderingQuestion): boolean {
    const st = this.orderState()[question.id];
    if (!st || st.picks.length !== question.steps.length) return false;
    return st.picks.every((slot, k) => st.shuffled[slot] === k);
  }

  pickOrderItem(question: OrderingQuestion, slot: number): void {
    const st = this.orderState()[question.id];
    if (!st) return;
    if (st.picks.length >= question.steps.length) return;
    if (st.picks.includes(slot)) return;
    this.orderState.update((s) => ({
      ...s,
      [question.id]: { ...st, picks: [...st.picks, slot] },
    }));
  }

  resetOrder(question: OrderingQuestion): void {
    this.orderState.update((s) => {
      const st = s[question.id];
      return { ...s, [question.id]: { shuffled: st?.shuffled ?? this.shuffleIndices(question.steps.length), picks: [] } };
    });
  }

  resetMatch(question: MatchingQuestion): void {
    this.matchState.update((s) => {
      const st = s[question.id];
      return {
        ...s,
        [question.id]: {
          rightOrder: st?.rightOrder ?? this.shuffleIndices(question.pairs.length),
          selectedLeft: null,
          matched: {},
          wrongPulse: null,
        },
      };
    });
  }

  // --- whole-quiz reset ---

  resetQuiz(): void {
    this.selections.set({});
    this.tfSelections.set({});
    this.revealed.set({});
    this.matchState.update((state) => {
      const next: Record<string, MatchState> = {};
      for (const [id, st] of Object.entries(state)) {
        next[id] = { rightOrder: st.rightOrder, selectedLeft: null, matched: {}, wrongPulse: null };
      }
      return next;
    });
    this.orderState.update((state) => {
      const next: Record<string, OrderState> = {};
      for (const [id, st] of Object.entries(state)) {
        next[id] = { shuffled: st.shuffled, picks: [] };
      }
      return next;
    });
  }

  private shuffleIndices(n: number): number[] {
    const arr = Array.from({ length: n }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
