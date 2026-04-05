import { Injectable, inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

export const langGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const translate = inject(TranslateService);

  const lang = route.paramMap.get('lang');
  const supportedLangs = ['en', 'fr'];

  if (lang && supportedLangs.includes(lang)) {
    translate.use(lang);
    localStorage.setItem('lang', lang);
    return true;
  }

  // Fallback to localStorage or default 'en'
  const savedLang = localStorage.getItem('lang') || 'en';
  return router.parseUrl(`/${savedLang}`);
};
