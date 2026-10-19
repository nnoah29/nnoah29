import { Component, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MiraI18n } from '../mira-i18n';

/** MIRA privacy policy, in French and English (also linked from the Google OAuth consent screen). */
@Component({
  selector: 'app-mira-privacy',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mira-privacy.component.html',
  styleUrl: '../mira-doc.css'
})
export class MiraPrivacyComponent {
  readonly i18n = inject(MiraI18n);

  constructor() {
    const title = inject(Title);
    effect(() => title.setTitle(this.i18n.content().meta.privacy));
  }
}
