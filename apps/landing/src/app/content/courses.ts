import { CourseMeta } from '@studyhub/shared-models';

export const COURSES: CourseMeta[] = [
  {
    id: 'obgyn',
    titleFa: 'مامایی و زنان',
    titleEn: 'OBGYN',
    descriptionFa:
      '۱۲ فصل، خلاصه‌شده و همراه با خودآزمایی، بر پایه‌ی متن کامل ویلیامز و جزوه‌ی دوره.',
    href: 'obgyn/',
    status: 'live',
    icon: '🩺',
    chapterCount: 12,
  },
  {
    id: 'obgyn-v2',
    titleFa: 'مامایی و زنان (ویلیامز ۲۶)',
    titleEn: 'OBGYN (Williams 26e)',
    descriptionFa:
      '۱۰ فصل، نوشته‌شده مستقیماً از متن کامل ویلیامز ۲۰۲۲ (ویرایش ۲۶)، همراه با خودآزمایی.',
    href: 'obgyn-v2/',
    status: 'live',
    icon: '📘',
    chapterCount: 10,
  },
  {
    id: 'pharmacology',
    titleFa: 'فارماکولوژی',
    titleEn: 'Pharmacology',
    descriptionFa: 'به‌زودی — در دست آماده‌سازی.',
    href: '',
    status: 'coming-soon',
    icon: '💊',
  },
  {
    id: 'anatomy',
    titleFa: 'آناتومی',
    titleEn: 'Anatomy',
    descriptionFa: 'به‌زودی — در دست آماده‌سازی.',
    href: '',
    status: 'coming-soon',
    icon: '🧬',
  },
];
