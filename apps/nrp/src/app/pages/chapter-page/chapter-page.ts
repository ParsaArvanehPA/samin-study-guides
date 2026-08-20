import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ChapterData } from '@studyhub/shared-models';
import { Callout, ChapterNav, Figure, QuizEngine } from '@studyhub/shared-ui';
import { ThemeToggle } from '@studyhub/shared-theme';
import { CHAPTER_META } from '../../content/content-index';

@Component({
  selector: 'app-chapter-page',
  standalone: true,
  imports: [Callout, ChapterNav, Figure, QuizEngine, ThemeToggle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chapter-page.html',
  styleUrl: './chapter-page.scss',
})
export class ChapterPage {
  readonly chapter = input.required<ChapterData>();

  readonly navItems = CHAPTER_META.map((m) => ({
    id: m.id,
    titleFa: m.titleFa,
    href: `chapters/${m.id}`,
  }));
  readonly courseHomeHref = '.';

  readonly hasQuiz = computed(() => this.chapter().quiz.length > 0);
}
