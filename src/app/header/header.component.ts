import { Component, HostListener, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled = false;
  translate = inject(TranslateService);
  router = inject(Router);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const tenPercentHeight = window.innerHeight * 0.01;
    this.isScrolled = window.scrollY > tenPercentHeight;
  }

  switchLanguage(lang: string) {
    this.router.navigate(['/', lang]);
  }
}

