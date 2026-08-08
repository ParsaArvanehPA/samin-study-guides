export interface McqQuestion {
  id: string;
  type: 'mcq';
  /** Question stem, plain text (may contain short English/Latin terms inline). */
  question: string;
  choices: string[];
  correctIndex: number;
  /** One or two sentence explanation of why the correct choice is correct. */
  explanation: string;
}

export interface ShortAnswerQuestion {
  id: string;
  type: 'short';
  prompt: string;
  /** Revealed on demand — not graded, just a study aid. */
  answer: string;
}

export type QuizQuestion = McqQuestion | ShortAnswerQuestion;
