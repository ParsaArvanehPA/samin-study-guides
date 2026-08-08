export type CourseStatus = 'live' | 'coming-soon';

export interface CourseMeta {
  id: string;
  titleFa: string;
  titleEn: string;
  descriptionFa: string;
  /** Absolute path/URL to the course app (e.g. '/obgyn/'). */
  href: string;
  status: CourseStatus;
  /** Single emoji used as the card's accent icon. */
  icon: string;
  chapterCount?: number;
}
