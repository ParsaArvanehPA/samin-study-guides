import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../theme-service/theme.service';

@Component({
  selector: 'lib-theme-toggle',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {
  private readonly themeService = inject(ThemeService);
  readonly mode = this.themeService.mode;

  toggle(): void {
    this.themeService.toggle();
  }
}
