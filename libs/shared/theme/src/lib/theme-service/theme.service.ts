import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'studyhub-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly mode = signal<ThemeMode>(this.readInitialMode());

  constructor() {
    if (this.isBrowser) {
      this.apply(this.mode());
    }
  }

  toggle(): void {
    this.set(this.mode() === 'dark' ? 'light' : 'dark');
  }

  set(mode: ThemeMode): void {
    this.mode.set(mode);
    this.apply(mode);
    if (this.isBrowser) {
      try {
        window.localStorage.setItem(STORAGE_KEY, mode);
      } catch {
        /* storage unavailable (private mode) — non-fatal */
      }
    }
  }

  private apply(mode: ThemeMode): void {
    this.document.documentElement.setAttribute('data-theme', mode);
  }

  private readInitialMode(): ThemeMode {
    if (!this.isBrowser) return 'dark';
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {
      /* storage unavailable — fall through to system preference */
    }
    const prefersLight =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  }
}
