import { Component } from '@angular/core';
import { CusorComponent } from "../cusor/cusor.component";
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { BlogComponent } from "../blog/blog.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";
import { CompanyComponent } from "./company/company.component";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-home',
  imports: [CusorComponent,
    HeaderComponent,
    HeroComponent, AboutComponent, ServicesComponent, PortfolioComponent, TestimonialsComponent, BlogComponent, ContactComponent, FooterComponent, CompanyComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

//
// import { Component, HostListener } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CusorComponent } from "../cusor/cusor.component";
// import { HeaderComponent } from "../header/header.component";
// import { HeroComponent } from "./hero/hero.component";
// import { AboutComponent } from "./about/about.component";
// import { ServicesComponent } from "./services/services.component";
// import { PortfolioComponent } from "./portfolio/portfolio.component";
// import { TestimonialsComponent } from "./testimonials/testimonials.component";
// import { BlogComponent } from "../blog/blog.component";
// import { ContactComponent } from "../contact/contact.component";
// import { FooterComponent } from "../footer/footer.component";
// import { CompanyComponent } from "./company/company.component";
//
// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [
//     CommonModule,
//     CusorComponent,
//     HeaderComponent,
//     HeroComponent,
//     AboutComponent,
//     ServicesComponent,
//     PortfolioComponent,
//     TestimonialsComponent,
//     BlogComponent,
//     ContactComponent,
//     FooterComponent,
//     CompanyComponent
//   ],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent {
//
//   // Liste de tes sections avec leurs IDs pour le tracker
//   // On ajoute "name" pour chaque section
//   sections = [
//     { id: 'home', num: '01', name: 'Home' },
//     { id: 'about', num: '02', name: 'About' },
//     { id: 'services', num: '03', name: 'Services' },
//     { id: 'portfolio', num: '04', name: 'Portfolio' },
//     { id: 'testimonials', num: '05', name: 'Reviews' },
//     { id: 'blog', num: '06', name: 'Blog' },
//     { id: 'contact', num: '07', name: 'Contact' },
//   ];
//
//   activeSection = 'home';
//
//   // Écoute le scroll pour détecter la section au centre de l'écran
//   @HostListener('window:scroll', ['$event'])
//   onScroll() {
//     const scrollPosition = window.scrollY + window.innerHeight / 2;
//
//     for (const section of this.sections) {
//       const element = document.getElementById(section.id);
//       if (element) {
//         const rect = element.getBoundingClientRect();
//         const top = rect.top + window.scrollY;
//         const bottom = top + rect.height;
//
//         if (scrollPosition >= top && scrollPosition <= bottom) {
//           this.activeSection = section.id;
//         }
//       }
//     }
//   }
//
//   // Fonction pour scroller au clic
//   scrollTo(sectionId: string) {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//   }
//}