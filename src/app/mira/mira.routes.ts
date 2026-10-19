import { Routes } from '@angular/router';
import { MiraShellComponent } from './mira-shell/mira-shell.component';
import { MiraHomeComponent } from './mira-home/mira-home.component';
import { MiraPrivacyComponent } from './mira-privacy/mira-privacy.component';
import { MiraTermsComponent } from './mira-terms/mira-terms.component';

/** Pages of the MIRA site, served under /en/mira and /fr/mira. */
export const MIRA_ROUTES: Routes = [
  {
    path: '',
    component: MiraShellComponent,
    children: [
      { path: '', component: MiraHomeComponent },
      { path: 'privacy', component: MiraPrivacyComponent },
      { path: 'terms', component: MiraTermsComponent }
    ]
  }
];
