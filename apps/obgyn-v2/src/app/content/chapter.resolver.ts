import { ResolveFn } from '@angular/router';
import { ChapterData } from '@studyhub/shared-models';
import { CHAPTER_LOADERS } from './content-index';

/**
 * Resolvers are awaited by the Router before a route activates, which is what
 * makes them safe for prerendering (Angular's SSG waits on the navigation to
 * settle) — unlike a bare dynamic import() inside ngOnInit, which isn't
 * reliably tracked as pending work during static rendering.
 */
export const chapterResolver: ResolveFn<ChapterData> = async (route) => {
  const id = route.data['chapterId'] as string;
  const loader = CHAPTER_LOADERS[id];
  if (!loader) {
    throw new Error(`No chapter data registered for id "${id}"`);
  }
  const mod = await loader();
  return mod.chapter;
};
