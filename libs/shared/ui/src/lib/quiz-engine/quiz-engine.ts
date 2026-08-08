import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { McqQuestion, QuizQuestion } from '@studyhub/shared-models';

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
  private readonly revealed = signal<Record<string, boolean>>({});

  readonly mcqCount = computed(
    () => this.questions().filter((q): q is McqQuestion => q.type === 'mcq').length,
  );
  readonly answeredCount = computed(() => Object.keys(this.selections()).length);
  readonly correctCount = computed(() => {
    const sel = this.selections();
    return this.questions().filter(
      (q): q is McqQuestion => q.type === 'mcq' && sel[q.id] === q.correctIndex,
    ).length;
  });
  readonly isComplete = computed(() => this.answeredCount() >= this.mcqCount() && this.mcqCount() > 0);

  isMcq(q: QuizQuestion): q is McqQuestion {
    return q.type === 'mcq';
  }

  selectedIndex(id: string): number | undefined {
    return this.selections()[id];
  }

  isRevealed(id: string): boolean {
    return !!this.revealed()[id];
  }

  choose(question: McqQuestion, index: number): void {
    if (this.selectedIndex(question.id) !== undefined) return; // locked after first answer
    this.selections.update((s) => ({ ...s, [question.id]: index }));
  }

  reveal(id: string): void {
    this.revealed.update((r) => ({ ...r, [id]: true }));
  }

  resetQuiz(): void {
    this.selections.set({});
    this.revealed.set({});
  }

  choiceState(question: McqQuestion, index: number): 'idle' | 'correct' | 'wrong' | 'missed' {
    const sel = this.selectedIndex(question.id);
    if (sel === undefined) return 'idle';
    if (index === question.correctIndex) return 'correct';
    if (index === sel) return 'wrong';
    return 'missed';
  }
}
