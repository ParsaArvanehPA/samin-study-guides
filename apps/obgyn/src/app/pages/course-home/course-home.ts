import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CourseCard } from '@studyhub/shared-ui';
import { ThemeToggle } from '@studyhub/shared-theme';
import { CHAPTER_META } from '../../content/content-index';

@Component({
  selector: 'app-course-home',
  standalone: true,
  imports: [CourseCard, ThemeToggle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-home.html',
  styleUrl: './course-home.scss',
})
export class CourseHome {
  readonly chapters = CHAPTER_META;
}
