import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CalloutBlock } from '@studyhub/shared-models';

@Component({
  selector: 'lib-callout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './callout.html',
  styleUrl: './callout.scss',
})
export class Callout {
  readonly block = input.required<CalloutBlock>();
}
