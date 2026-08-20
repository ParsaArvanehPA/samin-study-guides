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
    id: 'physiology-of-labor',
    order: 1,
    code: 'ch21',
    titleFa: 'فیزیولوژی لیبر',
    titleEn: 'Physiology of Labor',
    summaryFa: 'سکون رحم، آمادگی برای لیبر، و ۴ فاز فیزیولوژیک لیبر و نفاس — بر پایه‌ی فصل ۲۱ ویلیامز ۲۶.',
    readingMinutes: 22,
  },
];

export const CHAPTER_LOADERS: Record<string, () => Promise<{ chapter: ChapterData }>> = {
  'physiology-of-labor': () => import('./physiology-of-labor.data'),
};
