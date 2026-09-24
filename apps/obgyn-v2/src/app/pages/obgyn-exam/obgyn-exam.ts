import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Callout } from '@studyhub/shared-ui';
import { ThemeToggle } from '@studyhub/shared-theme';
import { EXAM_QUESTIONS } from '../../content/exam-questions.data';

@Component({
  selector: 'app-obgyn-exam',
  standalone: true,
  imports: [Callout, ThemeToggle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './obgyn-exam.html',
  styleUrl: '../chapter-page/chapter-page.scss',
})
export class ObgynExam {
  readonly questions = EXAM_QUESTIONS;
}
