import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FigureRef } from '@studyhub/shared-models';

@Component({
  selector: 'lib-figure',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './figure.html',
  styleUrl: './figure.scss',
})
export class Figure {
  readonly fig = input.required<FigureRef>();
}
