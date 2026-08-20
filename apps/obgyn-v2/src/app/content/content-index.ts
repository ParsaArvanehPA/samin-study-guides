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
  {
    id: 'vaginal-delivery',
    order: 5,
    code: 'ch27',
    titleFa: 'زایمان واژینال',
    titleEn: 'Vaginal Delivery',
    summaryFa: 'تکنیک زایمان، دیستوشی شانه، مرحله‌ی سوم لیبر، و ترمیم پارگی‌ها/اپیزیاتومی — بر پایه‌ی فصل ۲۷ ویلیامز ۲۶.',
    readingMinutes: 24,
  },
  {
    id: 'breech-delivery',
    order: 6,
    code: 'ch28',
    titleFa: 'زایمان بریچ',
    titleEn: 'Singleton Breech Delivery',
    summaryFa: 'طبقه‌بندی، انتخاب مسیر زایمان، تکنیک زایمان واژینال، و چرخش سفالیک خارجی — بر پایه‌ی فصل ۲۸ ویلیامز ۲۶.',
    readingMinutes: 20,
  },
  {
    id: 'prenatal-care',
    order: 7,
    code: 'ch10',
    titleFa: 'مراقبت‌های پرناتال',
    titleEn: 'Prenatal Care',
    summaryFa: 'تشخیص بارداری، ویزیت‌های دوران بارداری، غربالگری‌های روتین، تغذیه و ایمن‌سازی — بر پایه‌ی فصل ۱۰ ویلیامز ۲۶.',
    readingMinutes: 24,
  },
  {
    id: 'puerperium',
    order: 8,
    code: 'ch36',
    titleFa: 'دوره‌ی نفاس',
    titleEn: 'The Puerperium',
    summaryFa: 'بازگشت دستگاه تناسلی، شیردهی، مراقبت بیمارستانی/منزل، و عوارض نفاس — بر پایه‌ی فصل ۳۶ ویلیامز ۲۶.',
    readingMinutes: 22,
  },
  {
    id: 'gi-disorders',
    order: 9,
    code: 'ch55',
    titleFa: 'اختلالات گوارشی',
    titleEn: 'Gastrointestinal Disorders',
    summaryFa: 'هایپرمزیس، ریفلاکس و زخم پپتیک، بیماری التهابی روده، انسداد روده، و آپاندیسیت در بارداری — بر پایه‌ی فصل ۵۵ ویلیامز ۲۶.',
    readingMinutes: 18,
  },
  {
    id: 'amniotic-fluid-volume',
    order: 10,
    code: 'ch14',
    titleFa: 'اختلالات حجم مایع آمنیوتیک',
    titleEn: 'Amnionic Fluid Volume Disorders',
    summaryFa: 'فیزیولوژی حجم مایع آمنیوتیک، هیدرآمنیوس، و الیگوهیدرآمنیوس — بر پایه‌ی فصل ۱۴ ویلیامز ۲۶ (تصویربرداری مامایی).',
    readingMinutes: 14,
  },
];

export const CHAPTER_LOADERS: Record<string, () => Promise<{ chapter: ChapterData }>> = {
  'physiology-of-labor': () => import('./physiology-of-labor.data'),
  'normal-labor': () => import('./normal-labor.data'),
  'abnormal-labor': () => import('./abnormal-labor.data'),
  'intrapartum-assessment': () => import('./intrapartum-assessment.data'),
  'vaginal-delivery': () => import('./vaginal-delivery.data'),
  'breech-delivery': () => import('./breech-delivery.data'),
  'prenatal-care': () => import('./prenatal-care.data'),
  'puerperium': () => import('./puerperium.data'),
  'gi-disorders': () => import('./gi-disorders.data'),
  'amniotic-fluid-volume': () => import('./amniotic-fluid-volume.data'),
};
