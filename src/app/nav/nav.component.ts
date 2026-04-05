import { Component, HostListener } from '@angular/core';
import { NgForOf } from "@angular/common";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  imports: [
    NgForOf, TranslateModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  sections = [
    { id: 'home', num: '01', name: 'Home' },
    { id: 'about', num: '02', name: 'About' },
    { id: 'services', num: '03', name: 'Services' },
    { id: 'portfolio', num: '04', name: 'Portfolio' },
    { id: 'testimonials', num: '05', name: 'Reviews' },
    { id: 'blog', num: '06', name: 'Blog' },
    { id: 'contact', num: '07', name: 'Contact' },
  ];

  activeSection = 'home';

  // Écoute le scroll pour détecter la section au centre de l'écran
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;

        if (scrollPosition >= top && scrollPosition <= bottom) {
          this.activeSection = section.id;
        }
      }
    }
  }

  // Fonction pour scroller au clic
  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

}
