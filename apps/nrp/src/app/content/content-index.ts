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
  {
    id: 'ch05-intubation',
    order: 5,
    code: 'L5',
    titleFa: 'لوله‌گذاری نای',
    titleEn: 'Endotracheal Intubation',
    summaryFa: 'موارد لوله‌گذاری، آناتومی راه هوایی، تجهیزات و انتخاب اندازه‌ی لوله، وضعیت دادن نوزاد، روش لارنگوسکوپی و ورود لوله، تأیید جاگذاری با آشکارساز CO2، عمق فرو بردن لوله (NTL)، محکم کردن لوله، ساکشن مستقیم نای، و مخفف DOPE — بر پایه‌ی درس ۵ برنامه‌ی احیای نوزاد (NRP)، ویراست هشتم.',
    readingMinutes: 30,
  },
  {
    id: 'ch06-chest-compressions',
    order: 6,
    code: 'L6',
    titleFa: 'فشردن قفسه سینه',
    titleEn: 'Chest Compressions',
    summaryFa: 'فیزیولوژی و موارد آغاز فشردن قفسه‌ی سینه، محل قرارگیری فرد فشارنده، روش دو‌شست، عمق و سرعت فشردن، هماهنگی ۳ به ۱ با تهویه، غلظت اکسیژن، ارزیابی هر ۶۰ ثانیه، مخفف CARDIO، معیارهای قطع فشردن، و چرایی توالی A-B-C — بر پایه‌ی درس ۶ برنامه‌ی احیای نوزاد (NRP)، ویراست هشتم.',
    readingMinutes: 22,
  },
  {
    id: 'ch07-medications',
    order: 7,
    code: 'L7',
    titleFa: 'داروها',
    titleEn: 'Medications',
    summaryFa: 'اپی‌نفرین (مکانیسم، موارد، غلظت، راه، مقدار و روش تجویز)، حجم‌افزا در شوک هیپوولمیک، جاگذاری فوری کاتتر سیاهرگ نافی و سوزن درون‌استخوانی، پرسش‌های بهبود‌نیافتن ضربان قلب، و ملاحظات توقف احیا — بر پایه‌ی درس ۷ برنامه‌ی احیای نوزاد (NRP)، ویراست هشتم.',
    readingMinutes: 28,
  },
  {
    id: 'ch08-preterm',
    order: 8,
    code: 'L8',
    titleFa: 'احیا و پایدارسازی نوزادان نارس',
    titleEn: 'Resuscitation and Stabilization of Preterm Infants',
    summaryFa: 'چرایی آسیب‌پذیری بیشتر نوزادان نارس، منابع اضافی موردنیاز، راهکارهای حفظ دما (پوشش پلی‌اتیلن، تشک گرمایی)، نکات ویژه‌ی تهویه‌ی کمکی و CPAP زودرس، تجویز سورفاکتانت (LISA/INSURE)، هدف اکسیژن، احتیاط‌های کاهش آسیب عصبی، و پایش پس از پایدارسازی — بر پایه‌ی درس ۸ برنامه‌ی احیای نوزاد (NRP)، ویراست هشتم.',
    readingMinutes: 26,
  },
  {
    id: 'ch09-postresuscitation-care',
    order: 9,
    code: 'L9',
    titleFa: 'مراقبت‌های پس از احیا',
    titleEn: 'Post-resuscitation Care',
    summaryFa: 'مراقبت معمول در برابر مراقبت پس از احیا، اختلالات چند‌دستگاهی پس از احیا (دما، تنفسی، قلبی-عروقی، متابولیک، گوارشی، کلیوی، عصبی، خونی)، پرفشاری خون ریوی، آنسفالوپاتی هیپوکسیک-ایسکمیک، سرمادرمانی، و پرهیز از بی‌کربنات سدیم معمول — بر پایه‌ی درس ۹ برنامه‌ی احیای نوزاد (NRP)، ویراست هشتم.',
    readingMinutes: 24,
  },
  {
    id: 'ch10-special-considerations',
    order: 10,
    code: 'L10',
    titleFa: 'نکات ویژه',
    titleEn: 'Special Considerations',
    summaryFa: 'پنوموتوراکس و افوزیون پلور (شناسایی و توراسنتز)، بسته شدن راه هوایی با ترشحات غلیظ، انسدادهای آناتومیک (توالی رابین، آترزی کوان)، ناهنجاری‌های ریوی جنینی (فتق دیافراگمی، هیپوپلازی ریه)، نوزاد تحت تأثیر مخدر مادر، میلومننگوسل، و نقایص دیواره شکمی (گاستروشزی، امفالوسل) — بر پایه‌ی درس ۱۰ برنامه‌ی احیای نوزاد (NRP)، ویراست هشتم.',
    readingMinutes: 32,
  },
  {
    id: 'ch11-ethics-end-of-life',
    order: 11,
    code: 'L11',
    titleFa: 'اصول اخلاقی و مراقبت در واپسین دم زندگی',
    titleEn: 'Ethics and End-of-Life Care',
    summaryFa: 'اصول اخلاقی احیای نوزاد، نقش والدین در تصمیم‌گیری، ملاحظات آغاز یا عدم‌آغاز احیا در نوزاد بشدت نارس، بیانیه‌ی AMA، رویکرد به پیش‌آگهی نامطمئن، ملاحظات قانونی، خبر دادن مرگ به والدین، مراقبت از نوزاد در حال فوت، ملاقات‌های پیگیرانه، و حمایت از کارکنان — بر پایه‌ی درس ۱۱ برنامه‌ی احیای نوزاد (NRP)، ویراست هشتم.',
    readingMinutes: 26,
  },
  {
    id: 'ch12-team-performance',
    order: 12,
    code: 'L12',
    titleFa: 'بهبود مهارت گروه احیا',
    titleEn: 'Improving Resuscitation Team Performance',
    summaryFa: 'نقش ارگونومی و عوامل انسانی در احیای نوزاد، سه اصل نشست پیش از احیای ساختارمند، اهمیت تعیین نقش و انتظارات، طرح احیا و الگوی جانمایی گروه، جابه‌جایی نقش‌ها در احیای غیرقابل‌پیش‌بینی، و ارزیابی ساختار با شبیه‌سازی — بر پایه‌ی درس پیوست ۱۲ برنامه‌ی احیای نوزاد (NRP)، ویراست هشتم.',
    readingMinutes: 22,
  },
  {
    id: 'ch13-outside-delivery-room',
    order: 13,
    code: 'L13',
    titleFa: 'احیای خارج از اتاق زایمان',
    titleEn: 'Resuscitation Outside the Delivery Room',
    summaryFa: 'اصول یکسان احیا خارج از بیمارستان، مدیریت دما و راه هوایی در تولد منزل، کالپس ناگهانی و پیش‌بینی‌نشده پس از تولد (SUPC) در بخش پس از زایمان، احیا در NICU (علل، DOPE، نسبت فشردن به تهویه)، و تفاوت راهنماهای NRP و PALS — بر پایه‌ی درس پیوست ۱۳ برنامه‌ی احیای نوزاد (NRP)، ویراست هشتم.',
    readingMinutes: 28,
  },
  {
    id: 'ch14-quality-improvement',
    order: 14,
    code: 'L14',
    titleFa: 'بهبود کیفیت در گروه احیا',
    titleEn: 'Quality Improvement in Resuscitation',
    summaryFa: 'نقش بهبود کیفیت در احیای نوزاد، شناسایی و بیان مشکل، تشکیل گروه چندرشته‌ای، تعیین هدف SMART بر پایه‌ی ۶ هدف IOM، داده‌ها و شاخص تعدیل‌کننده، نمودار اجرا و نمودار نظارت (SPC)، چرخه‌ی PDCA، و تفاوت طرح پژوهشی با طرح بهبود کیفیت — بر پایه‌ی درس پیوست ۱۴ برنامه‌ی احیای نوزاد (NRP)، ویراست هشتم.',
    readingMinutes: 26,
  },
];

export const CHAPTER_LOADERS: Record<string, () => Promise<{ chapter: ChapterData }>> = {
  'ch01-fundamentals': () => import('./ch01-fundamentals.data'),
  'ch02-anticipation-preparation': () => import('./ch02-anticipation-preparation.data'),
  'ch03-initial-steps': () => import('./ch03-initial-steps.data'),
  'ch04-ppv': () => import('./ch04-ppv.data'),
  'ch05-intubation': () => import('./ch05-intubation.data'),
  'ch06-chest-compressions': () => import('./ch06-chest-compressions.data'),
  'ch07-medications': () => import('./ch07-medications.data'),
  'ch08-preterm': () => import('./ch08-preterm.data'),
  'ch09-postresuscitation-care': () => import('./ch09-postresuscitation-care.data'),
  'ch10-special-considerations': () => import('./ch10-special-considerations.data'),
  'ch11-ethics-end-of-life': () => import('./ch11-ethics-end-of-life.data'),
  'ch12-team-performance': () => import('./ch12-team-performance.data'),
  'ch13-outside-delivery-room': () => import('./ch13-outside-delivery-room.data'),
  'ch14-quality-improvement': () => import('./ch14-quality-improvement.data'),
};
