import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  items: string[] = [
    "Digital Strategy",
    "Design System",
    "Brand Strategy",
    "Website Design",
    "SEO Optimization",
    "Content Strategy"
  ];
}
