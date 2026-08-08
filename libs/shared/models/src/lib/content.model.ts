import { QuizQuestion } from './quiz.model';

export interface FigureRef {
  /** Path relative to the app's public/figures/ directory, e.g. 'figures/ch02/friedman-curve.jpg'. */
  src: string;
  captionFa: string;
  captionEn?: string;
  /** e.g. original source page reference, shown small/muted under the caption. */
  sourceNote?: string;
}

export type CalloutKind = 'note' | 'key' | 'warn';

export interface CalloutBlock {
  kind: CalloutKind;
  label: string;
  /** Trusted, hand-authored HTML fragment (bold/em/<span class="en">/<br>) — not user input. */
  html: string;
}

export interface DataTable {
  caption?: string;
  headers: string[];
  rows: string[][];
  note?: string;
}

export interface ContentSection {
  heading: string;
  /** Trusted, hand-authored HTML paragraphs — supports <span class="en">, <sup>, <strong>, <ul>/<li>, etc. */
  paragraphsHtml: string[];
  figures?: FigureRef[];
  callouts?: CalloutBlock[];
  table?: DataTable;
}

export interface ChapterData {
  /** URL slug, e.g. 'ch02-physiology'. */
  id: string;
  /** Display order within the course. */
  order: number;
  /** Internal chapter code matching the transcripts/figures archive, e.g. 'ch02', 'p2ch17'. */
  code: string;
  titleFa: string;
  titleEn: string;
  /** One-line description shown on the course-home card. */
  summaryFa: string;
  /** Approx. reading time in minutes, shown on the card. */
  readingMinutes: number;
  sections: ContentSection[];
  quiz: QuizQuestion[];
}
