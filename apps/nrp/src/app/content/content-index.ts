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
  {
    id: 'ch02-anticipation-preparation',
    order: 2,
    code: 'L2',
    titleFa: 'پیش‌بینی و آمادگی برای احیا',
    titleEn: 'Anticipation and Preparation for Resuscitation',
    summaryFa: 'عوامل خطر پیرامون تولد، ۴ پرسش کلیدی پیش از تولد، تعیین نیروی انسانی، نشست پیش از احیا، بررسی تجهیزات، ویژگی‌های رهبر مؤثر، ارتباط حلقه‌بسته، و اهمیت مستندسازی — بر پایه‌ی درس ۲ برنامه‌ی احیای نوزاد (NRP)، ویراست هشتم.',
    readingMinutes: 20,
  },
  {
    id: 'ch03-initial-steps',
    order: 3,
    code: 'L3',
    titleFa: 'گام‌های نخستین مراقبت از نوزاد',
    titleEn: 'Initial Steps of Newborn Care',
    summaryFa: 'زمان‌بندی گیره زدن بند ناف، ارزیابی سریع نوزاد، ۵ گام نخستین مراقبت، ارزیابی پاسخ (تنفس و ضربان قلب)، سیانوز و پالس‌اکسی‌متری، تجویز اکسیژن آزاد، CPAP، و رویکرد به مایع آمنیونی مکونیومی — بر پایه‌ی درس ۳ برنامه‌ی احیای نوزاد (NRP)، ویراست هشتم.',
    readingMinutes: 26,
  },
  {
    id: 'ch04-ppv',
    order: 4,
    code: 'L4',
    titleFa: 'تهویه با فشار مثبت',
    titleEn: 'Positive-Pressure Ventilation',
    summaryFa: 'دستگاه‌های تهویه (بگ خودگشا، بگ وابسته به جریان، تی‌پیس احیا)، موارد و روش آغاز PPV، تکنیک ماسک، غلظت اکسیژن/سرعت/فشار، ارزیابی پاسخ، گام‌های اصلاحی تهویه (MR. SOPA)، ماسک حنجره‌ای، CPAP، و لوله دهانی معدی — بر پایه‌ی درس ۴ برنامه‌ی احیای نوزاد (NRP)، ویراست هشتم.',
    readingMinutes: 32,
  },
];

export const CHAPTER_LOADERS: Record<string, () => Promise<{ chapter: ChapterData }>> = {
  'ch01-fundamentals': () => import('./ch01-fundamentals.data'),
  'ch02-anticipation-preparation': () => import('./ch02-anticipation-preparation.data'),
  'ch03-initial-steps': () => import('./ch03-initial-steps.data'),
  'ch04-ppv': () => import('./ch04-ppv.data'),
};
