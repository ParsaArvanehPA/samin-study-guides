import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CourseCard } from '@studyhub/shared-ui';
import { ThemeToggle } from '@studyhub/shared-theme';
import { COURSES } from '../../content/courses';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseCard, ThemeToggle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly courses = COURSES;
}
