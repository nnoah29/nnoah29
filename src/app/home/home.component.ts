import { Component } from '@angular/core';
import {CusorComponent} from "../cusor/cusor.component";
import {HeaderComponent} from "../header/header.component";
import {HeroComponent} from "./hero/hero.component";
import {AboutComponent} from "./about/about.component";
import {ServicesComponent} from "./services/services.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {TestimonialsComponent} from "./testimonials/testimonials.component";
import {BlogComponent} from "../blog/blog.component";
import {ContactComponent} from "../contact/contact.component";
import {FooterComponent} from "../footer/footer.component";
import {CompanyComponent} from "./company/company.component";

@Component({
  selector: 'app-home',
  imports: [CusorComponent,
    HeaderComponent,
    HeroComponent, AboutComponent, ServicesComponent, PortfolioComponent, TestimonialsComponent, BlogComponent, ContactComponent, FooterComponent, CompanyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
