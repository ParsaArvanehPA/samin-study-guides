import { Route } from '@angular/router';
import { CHAPTER_META } from './content/content-index';
import { chapterResolver } from './content/chapter.resolver';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/course-home/course-home').then((m) => m.CourseHome),
  },
  {
    path: 'reference/key-numbers',
    loadComponent: () =>
      import('./pages/reference-key-numbers/reference-key-numbers').then(
        (m) => m.ReferenceKeyNumbers,
      ),
  },
  {
    path: 'reference/glossary',
    loadComponent: () =>
      import('./pages/reference-glossary/reference-glossary').then(
        (m) => m.ReferenceGlossary,
      ),
  },
  ...CHAPTER_META.map(
    (meta): Route => ({
      path: `chapters/${meta.id}`,
      loadComponent: () =>
        import('./pages/chapter-page/chapter-page').then((m) => m.ChapterPage),
      data: { chapterId: meta.id },
      resolve: { chapter: chapterResolver },
    }),
  ),
];
