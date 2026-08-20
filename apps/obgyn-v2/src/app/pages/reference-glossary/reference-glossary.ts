import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeToggle } from '@studyhub/shared-theme';
import { GLOSSARY_TERMS } from '../../content/glossary.data';

@Component({
  selector: 'app-reference-glossary',
  standalone: true,
  imports: [ThemeToggle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reference-glossary.html',
  styleUrl: './reference-page.scss',
})
export class ReferenceGlossary {
  readonly terms = GLOSSARY_TERMS;
}
