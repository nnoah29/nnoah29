import { Component, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MiraI18n } from '../mira-i18n';

/** MIRA terms of use, in French and English. */
@Component({
  selector: 'app-mira-terms',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mira-terms.component.html',
  styleUrl: '../mira-doc.css'
})
export class MiraTermsComponent {
  readonly i18n = inject(MiraI18n);

  constructor() {
    const title = inject(Title);
    effect(() => title.setTitle(this.i18n.content().meta.terms));
  }
}
