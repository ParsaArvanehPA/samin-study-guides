import { ChapterData } from '@studyhub/shared-models';

export interface ChapterMeta {
  id: string;
  order: number;
  code: string;
  titleFa: string;
  titleEn: string;
  summaryFa: string;
  readingMinutes: number;
}

export const CHAPTER_META: ChapterMeta[] = [
  {
    id: 'ch01-fundamentals',
    order: 1,
    code: 'L1',
    titleFa: 'مبانی احیای نوزاد',
    titleEn: 'Fundamentals of Neonatal Resuscitation',
    summaryFa: 'چرایی احیای نوزاد، فیزیولوژی گذار از زندگی جنینی به نوزادی، نمودار گام‌به‌گام احیا، و مهارت‌های رفتاری کلیدی کار گروهی — بر پایه‌ی درس ۱ برنامه‌ی احیای نوزاد (NRP)، ویراست هشتم.',
    readingMinutes: 16,
  },
];

export const CHAPTER_LOADERS: Record<string, () => Promise<{ chapter: ChapterData }>> = {
  'ch01-fundamentals': () => import('./ch01-fundamentals.data'),
};
