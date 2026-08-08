import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export interface ChapterNavItem {
  id: string;
  titleFa: string;
  href: string;
}

@Component({
  selector: 'lib-chapter-nav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chapter-nav.html',
  styleUrl: './chapter-nav.scss',
})
export class ChapterNav {
  readonly chapters = input.required<ChapterNavItem[]>();
  readonly currentId = input.required<string>();
  readonly courseHomeHref = input.required<string>();

  readonly currentIndex = computed(() =>
    this.chapters().findIndex((c) => c.id === this.currentId()),
  );
  readonly prev = computed(() => {
    const i = this.currentIndex();
    return i > 0 ? this.chapters()[i - 1] : null;
  });
  readonly next = computed(() => {
    const i = this.currentIndex();
    const list = this.chapters();
    return i >= 0 && i < list.length - 1 ? list[i + 1] : null;
  });
  readonly positionLabel = computed(() => {
    const i = this.currentIndex();
    return i >= 0 ? `فصل ${i + 1} از ${this.chapters().length}` : '';
  });
}
