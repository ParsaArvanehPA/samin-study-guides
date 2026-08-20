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
  {
    id: 'normal-labor',
    order: 2,
    code: 'ch22',
    titleFa: 'لیبر طبیعی',
    titleEn: 'Normal Labor',
    summaryFa: 'تشخیص شروع لیبر، جهت‌گیری جنین، حرکات اصلی، مراحل زایمان، و اداره‌ی لیبر طبیعی — بر پایه‌ی فصل ۲۲ ویلیامز ۲۶.',
    readingMinutes: 24,
  },
  {
    id: 'abnormal-labor',
    order: 3,
    code: 'ch23',
    titleFa: 'لیبر غیرطبیعی',
    titleEn: 'Abnormal Labor',
    summaryFa: 'دیستوشی، اختلال عملکرد رحم، عدم‌تناسب فتوپلویک، و پرزانتاسیون‌های غیرطبیعی — بر پایه‌ی فصل ۲۳ ویلیامز ۲۶.',
    readingMinutes: 20,
  },
  {
    id: 'intrapartum-assessment',
    order: 4,
    code: 'ch24',
    titleFa: 'بررسی هنگام زایمان',
    titleEn: 'Intrapartum Assessment',
    summaryFa: 'پایش ضربان قلب جنین، تعاریف NICHD، طبقه‌بندی سه‌گروهی، و اقدامات کمکی — بر پایه‌ی فصل ۲۴ ویلیامز ۲۶.',
    readingMinutes: 26,
  },
];

export const CHAPTER_LOADERS: Record<string, () => Promise<{ chapter: ChapterData }>> = {
  'physiology-of-labor': () => import('./physiology-of-labor.data'),
  'normal-labor': () => import('./normal-labor.data'),
  'abnormal-labor': () => import('./abnormal-labor.data'),
  'intrapartum-assessment': () => import('./intrapartum-assessment.data'),
};
