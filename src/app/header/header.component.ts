import { Component, HostListener, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled = false;
  /** True when the section under the header has a dark background (logo and buttons switch to light). */
  onDark = false;
  translate = inject(TranslateService);
  router = inject(Router);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const tenPercentHeight = window.innerHeight * 0.01;
    this.isScrolled = window.scrollY > tenPercentHeight;
    this.onDark = this.isDarkBehindHeader();
  }

  private isDarkBehindHeader(): boolean {
    const probe = document.elementsFromPoint(window.innerWidth * 0.1, 72)
      .filter(el => !el.closest('app-header'));
    for (const el of probe) {
      for (let node: Element | null = el; node; node = node.parentElement) {
        const m = getComputedStyle(node).backgroundColor.match(/[\d.]+/g);
        if (!m || (m.length > 3 && +m[3] < 0.5)) continue;
        const [r, g, b] = m.map(Number);
        return (0.299 * r + 0.587 * g + 0.114 * b) < 128;
      }
    }
    return false;
  }

  switchLanguage(lang: string) {
    this.router.navigate(['/', lang]);
  }
}

