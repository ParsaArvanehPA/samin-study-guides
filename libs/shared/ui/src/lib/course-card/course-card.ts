import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type CourseCardVariant = 'glass' | 'flat';

@Component({
  selector: 'lib-course-card',
  standalone: true,
  imports: [NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss',
})
export class CourseCard {
  readonly titleFa = input.required<string>();
  readonly titleEn = input<string>('');
  readonly subtitleFa = input<string>('');
  readonly icon = input<string>('📘');
  readonly href = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly variant = input<CourseCardVariant>('flat');
  readonly badge = input<string>('');
  readonly metaFa = input<string>('');
}
