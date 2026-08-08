import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeToggle } from '@studyhub/shared-theme';
import { HIGH_YIELD_FACTS, KEY_NUMBERS } from '../../content/key-numbers.data';

@Component({
  selector: 'app-reference-key-numbers',
  standalone: true,
  imports: [ThemeToggle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reference-key-numbers.html',
  styleUrl: '../reference-glossary/reference-page.scss',
})
export class ReferenceKeyNumbers {
  readonly numbers = KEY_NUMBERS;
  readonly facts = HIGH_YIELD_FACTS;
}
