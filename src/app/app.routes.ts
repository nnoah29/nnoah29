import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { langGuard } from './core/guards/lang.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/en', pathMatch: 'full' },
  { path: ':lang', component: HomeComponent, canActivate: [langGuard] }
];
