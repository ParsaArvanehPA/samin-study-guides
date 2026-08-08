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
    id: 'ch02-physiology',
    order: 1,
    code: 'ch02',
    titleFa: 'فیزیولوژی لیبر',
    titleEn: 'Physiology of Labor',
    summaryFa: 'سکون رحم، آمادگی برای لیبر، و ۴ فاز فیزیولوژیک لیبر و نفاس.',
    readingMinutes: 22,
  },
  {
    id: 'ch03-normal-labor',
    order: 2,
    code: 'ch03',
    titleFa: 'لیبر طبیعی',
    titleEn: 'Normal Labor',
    summaryFa: 'تشخیص شروع لیبر، مراحل زایمان، و اداره‌ی لیبر طبیعی.',
    readingMinutes: 18,
  },
  {
    id: 'ch04-abnormal-labor',
    order: 3,
    code: 'ch04',
    titleFa: 'لیبر غیرطبیعی',
    titleEn: 'Abnormal Labor',
    summaryFa: 'دیستوشی، اختلال عملکرد رحم، و پرزانتاسیون‌های غیرطبیعی.',
    readingMinutes: 16,
  },
  {
    id: 'ch05-intrapartum-assessment-a',
    order: 4,
    code: 'ch05',
    titleFa: 'بررسی هنگام زایمان',
    titleEn: 'Intrapartum Assessment',
    summaryFa: 'پایش ضربان قلب جنین، طبقه‌بندی NICHD، و اقدامات کمکی.',
    readingMinutes: 24,
  },
  {
    id: 'ch08-vaginal-delivery',
    order: 5,
    code: 'ch08',
    titleFa: 'زایمان واژینال',
    titleEn: 'Vaginal Delivery',
    summaryFa: 'مکانیسم خروج سر و شانه، دیستوشی شانه، اپی‌زیاتومی و ترمیم پارگی‌ها.',
    readingMinutes: 20,
  },
  {
    id: 'ch09-breech-delivery',
    order: 6,
    code: 'ch09',
    titleFa: 'زایمان بریچ',
    titleEn: 'Breech Delivery',
    summaryFa: 'روش‌های زایمان بریچ، مانورهای کمکی، و چرخش سفالیک خارجی.',
    readingMinutes: 16,
  },
  {
    id: 'ch29-puerperium',
    order: 7,
    code: 'ch29',
    titleFa: 'دوره‌ی نفاس',
    titleEn: 'Puerperium',
    summaryFa: 'تغییرات فیزیولوژیک بعد از زایمان، شیردهی، و مراقبت‌های پس از زایمان.',
    readingMinutes: 20,
  },
  {
    id: 'p2ch17-normal-labor-b',
    order: 8,
    code: 'p2ch17',
    titleFa: 'زایمان طبیعی و وضع حمل',
    titleEn: 'Normal Labor and Delivery',
    summaryFa: 'حرکات اصلی لیبر، مانورهای لئوپولد، و اداره‌ی مراحل زایمان.',
    readingMinutes: 22,
  },
  {
    id: 'p2ch18-intrapartum-assessment-b',
    order: 9,
    code: 'p2ch18',
    titleFa: 'ارزیابی حین زایمان',
    titleEn: 'Intrapartum Assessment',
    summaryFa: 'پایش الکترونیک جنین، الگوهای افت ضربان قلب، و طبقه‌بندی سه‌گروهی.',
    readingMinutes: 22,
  },
  {
    id: 'p2ch21-amniotic-fluid',
    order: 10,
    code: 'p2ch21',
    titleFa: 'اختلالات حجم مایع آمنیوتیک',
    titleEn: 'Amniotic Fluid Volume Disorders',
    summaryFa: 'پلی‌هیدرآمنیوس و الیگوهیدرآمنیوس.',
    readingMinutes: 10,
  },
  {
    id: 'ch49-gi-disorders',
    order: 11,
    code: 'ch49',
    titleFa: 'اختلالات گوارشی',
    titleEn: 'GI Disorders in Pregnancy',
    summaryFa: 'هایپرمزیس، بیماری التهابی روده، و اختلالات گوارشی در حاملگی.',
    readingMinutes: 14,
  },
  {
    id: 'ch25-prenatal-care',
    order: 12,
    code: 'ch25',
    titleFa: 'مراقبت‌های پرناتال',
    titleEn: 'Prenatal Care',
    summaryFa: 'ویزیت‌های دوران بارداری، غربالگری‌های روتین، تغذیه و ایمن‌سازی.',
    readingMinutes: 24,
  },
];

export const CHAPTER_LOADERS: Record<string, () => Promise<{ chapter: ChapterData }>> = {
  'ch02-physiology': () => import('./ch02-physiology.data'),
  'ch03-normal-labor': () => import('./ch03-normal-labor.data'),
  'ch04-abnormal-labor': () => import('./ch04-abnormal-labor.data'),
  'ch05-intrapartum-assessment-a': () => import('./ch05-intrapartum-assessment-a.data'),
  'ch08-vaginal-delivery': () => import('./ch08-vaginal-delivery.data'),
  'ch09-breech-delivery': () => import('./ch09-breech-delivery.data'),
  'ch29-puerperium': () => import('./ch29-puerperium.data'),
  'p2ch17-normal-labor-b': () => import('./p2ch17-normal-labor-b.data'),
  'p2ch18-intrapartum-assessment-b': () => import('./p2ch18-intrapartum-assessment-b.data'),
  'p2ch21-amniotic-fluid': () => import('./p2ch21-amniotic-fluid.data'),
  'ch49-gi-disorders': () => import('./ch49-gi-disorders.data'),
  'ch25-prenatal-care': () => import('./ch25-prenatal-care.data'),
};
