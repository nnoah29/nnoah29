import { Component, DestroyRef, computed, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { MiraIconComponent } from '../mira-icon/mira-icon.component';
import { MiraI18n } from '../mira-i18n';

/** Header, footer and palette shared by every MIRA page; takes over the page background, language and description while shown. */
@Component({
  selector: 'app-mira-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MiraIconComponent],
  templateUrl: './mira-shell.component.html',
  styleUrl: './mira-shell.component.css'
})
export class MiraShellComponent {
  readonly i18n = inject(MiraI18n);
  private readonly router = inject(Router);
  private readonly url = toSignal(
    this.router.events.pipe(filter(event => event instanceof NavigationEnd), map(() => this.router.url)),
    { initialValue: this.router.url }
  );

  /** Same page in the other language, as a plain URL so that the link also works without scripts. */
  readonly otherLangUrl = computed(() => this.url().replace(/^\/(en|fr)(?=\/)/, this.i18n.lang() === 'fr' ? '/en' : '/fr'));

  constructor() {
    const document = inject(DOCUMENT);
    const meta = inject(Meta);
    const html = document.documentElement;
    const previousLang = html.lang;
    const previousBackground = document.body.style.backgroundColor;
    const previousDescription = meta.getTag('name="description"')?.content;

    document.body.style.backgroundColor = '#1b1b1b';
    effect(() => {
      html.lang = this.i18n.lang();
      meta.updateTag({ name: 'description', content: this.i18n.content().meta.description });
    });

    inject(DestroyRef).onDestroy(() => {
      html.lang = previousLang;
      document.body.style.backgroundColor = previousBackground;
      if (previousDescription === undefined) {
        meta.removeTag('name="description"');
      } else {
        meta.updateTag({ name: 'description', content: previousDescription });
      }
    });
  }

  switchLanguage(event: Event): void {
    event.preventDefault();
    this.router.navigateByUrl(this.otherLangUrl());
  }
}
