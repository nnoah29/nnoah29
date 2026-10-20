import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { langGuard } from './core/guards/lang.guard';
import { miraLangGuard, savedMiraLang } from './mira/mira-i18n';

/** Sends /mira/<page> to the same page in the visitor's saved language. */
const miraInSavedLang = (page: string) => () => `/${savedMiraLang()}/mira${page}`;

export const routes: Routes = [
  { path: '', redirectTo: '/en', pathMatch: 'full' },
  { path: 'mira', pathMatch: 'full', redirectTo: miraInSavedLang('') },
  { path: 'mira/privacy', pathMatch: 'full', redirectTo: miraInSavedLang('/privacy') },
  { path: 'mira/terms', pathMatch: 'full', redirectTo: miraInSavedLang('/terms') },
  {
    path: ':lang/mira',
    canActivate: [miraLangGuard],
    loadChildren: () => import('./mira/mira.routes').then(m => m.MIRA_ROUTES)
  },
  {
    path: ':lang/projects',
    canActivate: [langGuard],
    loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent)
  },
  { path: ':lang', component: HomeComponent, canActivate: [langGuard] }
];
