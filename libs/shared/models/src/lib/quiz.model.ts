export interface McqQuestion {
  id: string;
  type: 'mcq';
  /** Question stem, plain text (may contain short English/Latin terms inline). */
  question: string;
  choices: string[];
  correctIndex: number;
  /** One or two sentence explanation of why the correct choice is correct. */
  explanation: string;
  /** Render with a case-vignette visual treatment (longer clinical-scenario stem). */
  vignette?: boolean;
}

export interface ShortAnswerQuestion {
  id: string;
  type: 'short';
  prompt: string;
  /** Revealed on demand — not graded, just a study aid. */
  answer: string;
}

export interface TrueFalseQuestion {
  id: string;
  type: 'truefalse';
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export interface FillBlankQuestion {
  id: string;
  type: 'fill';
  /** Plain-text sentence with the blank marked by a literal '___'. */
  textWithBlank: string;
  answer: string;
  explanation?: string;
}

export interface MatchingQuestion {
  id: string;
  type: 'match';
  prompt: string;
  /** Right-hand side is shuffled for display; left order is preserved as-authored. */
  pairs: { left: string; right: string }[];
}

export interface OrderingQuestion {
  id: string;
  type: 'order';
  prompt: string;
  /** Steps/events in their correct order — shuffled for display. */
  steps: string[];
}

export type QuizQuestion =
  | McqQuestion
  | ShortAnswerQuestion
  | TrueFalseQuestion
  | FillBlankQuestion
  | MatchingQuestion
  | OrderingQuestion;
