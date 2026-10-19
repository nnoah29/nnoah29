import { Injectable, computed, signal } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { inject } from '@angular/core';
import { MIRA_EN, MIRA_FR, MIRA_LANGS, MiraContent, MiraLang } from './mira-content';

/** Current language of the MIRA site, its texts and the links that keep the language prefix. */
@Injectable({ providedIn: 'root' })
export class MiraI18n {
  readonly lang = signal<MiraLang>('en');
  readonly content = computed<MiraContent>(() => (this.lang() === 'fr' ? MIRA_FR : MIRA_EN));
  readonly home = computed(() => ['/', this.lang(), 'mira']);
  readonly privacy = computed(() => [...this.home(), 'privacy']);
  readonly terms = computed(() => [...this.home(), 'terms']);
}

/** Language remembered by the portfolio (same key as its own guard), English by default. */
export function savedMiraLang(): MiraLang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'fr' || saved === 'en') {
      return saved;
    }
  } catch {
    return 'en';
  }
  return 'en';
}

/** Accepts /en/mira and /fr/mira, applies the language, and sends any other prefix to English. */
export const miraLangGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const lang = route.paramMap.get('lang');
  if (lang && (MIRA_LANGS as readonly string[]).includes(lang)) {
    inject(MiraI18n).lang.set(lang as MiraLang);
    try {
      localStorage.setItem('lang', lang);
    } catch {
      return true;
    }
    return true;
  }
  return inject(Router).parseUrl('/en/mira');
};
