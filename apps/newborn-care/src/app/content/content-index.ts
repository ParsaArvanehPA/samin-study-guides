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
    id: "ch02-resuscitation",
    order: 1,
    code: "ch02",
    titleFa: "احیا",
    titleEn: "Resuscitation",
    summaryFa: "بانک سؤال تعاملی فصل احیای نوزاد: سکانس احیا، تهویه، فشردن قفسه‌ی سینه، اپی‌نفرین، و تجهیزات — بر پایه‌ی برنامه‌ی ACoRN.",
    readingMinutes: 61,
  },
  {
    id: "ch03-respiratory",
    order: 2,
    code: "ch03",
    titleFa: "تنفس",
    titleEn: "Respiratory",
    summaryFa: "بانک سؤال تعاملی فصل مشکلات تنفسی نوزاد: دیسترس تنفسی، علل و اداره‌ی آن‌ها — بر پایه‌ی برنامه‌ی ACoRN.",
    readingMinutes: 58,
  },
  {
    id: "ch04-cardiovascular",
    order: 3,
    code: "ch04",
    titleFa: "قلبی عروقی",
    titleEn: "Cardiovascular",
    summaryFa: "بانک سؤال تعاملی فصل مشکلات قلبی‌عروقی نوزاد: بی‌ثباتی قلبی‌عروقی، شوک، و آریتمی — بر پایه‌ی برنامه‌ی ACoRN.",
    readingMinutes: 57,
  },
  {
    id: "ch05-neurological",
    order: 4,
    code: "ch05",
    titleFa: "اعصاب",
    titleEn: "Neurological",
    summaryFa: "بانک سؤال تعاملی فصل مشکلات عصبی نوزاد: تشنج، آنسفالوپاتی، و ارزیابی عصبی — بر پایه‌ی برنامه‌ی ACoRN.",
    readingMinutes: 62,
  },
  {
    id: "ch06-surgical",
    order: 5,
    code: "ch06",
    titleFa: "موارد نیازمند جراحی",
    titleEn: "Surgical Conditions",
    summaryFa: "بانک سؤال تعاملی فصل موارد نیازمند جراحی نوزاد: ناهنجاری‌های مادرزادی جراحی و اداره‌ی اولیه‌ی آن‌ها — بر پایه‌ی برنامه‌ی ACoRN.",
    readingMinutes: 74,
  },
  {
    id: "ch07-fluid-glucose",
    order: 6,
    code: "ch07",
    titleFa: "درمان مایع و گلوکز",
    titleEn: "Fluid & Glucose Therapy",
    summaryFa: "بانک سؤال تعاملی فصل درمان مایع و گلوکز نوزاد: هیپوگلیسمی، مایع‌درمانی، و الکترولیت‌ها — بر پایه‌ی برنامه‌ی ACoRN.",
    readingMinutes: 59,
  },
  {
    id: "ch08-thermoregulation",
    order: 7,
    code: "ch08",
    titleFa: "تنظیم دما",
    titleEn: "Thermoregulation",
    summaryFa: "بانک سؤال تعاملی فصل تنظیم دمای نوزاد: هیپوترمی، هیپرترمی، و محیط حرارتی خنثی — بر پایه‌ی برنامه‌ی ACoRN.",
    readingMinutes: 55,
  },
  {
    id: "ch09-infection",
    order: 8,
    code: "ch09",
    titleFa: "عفونت",
    titleEn: "Infection",
    summaryFa: "بانک سؤال تعاملی فصل عفونت نوزادی: عوامل خطر، ارزیابی، و اداره‌ی سپسیس نوزادی — بر پایه‌ی برنامه‌ی ACoRN.",
    readingMinutes: 55,
  },
];

export const CHAPTER_LOADERS: Record<string, () => Promise<{ chapter: ChapterData }>> = {
  "ch02-resuscitation": () => import('./ch02-resuscitation.data'),
  "ch03-respiratory": () => import('./ch03-respiratory.data'),
  "ch04-cardiovascular": () => import('./ch04-cardiovascular.data'),
  "ch05-neurological": () => import('./ch05-neurological.data'),
  "ch06-surgical": () => import('./ch06-surgical.data'),
  "ch07-fluid-glucose": () => import('./ch07-fluid-glucose.data'),
  "ch08-thermoregulation": () => import('./ch08-thermoregulation.data'),
  "ch09-infection": () => import('./ch09-infection.data'),
};
