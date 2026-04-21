import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Testimonial {
  id: number;
  image: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      image: 'https://plus.unsplash.com/premium_photo-1689551671548-79ff30459d2a?w=900&auto=format&fit=crop&q=60',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1649123245135-4db6ead931b5?w=900&auto=format&fit=crop&q=60',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=900&auto=format&fit=crop&q=60',
    },

  ];

  active = signal(0);
  isTransitioning = signal(false);

  current = computed(() => this.testimonials[this.active()]);

  padIndex(n: number): string {
    return String(n).padStart(2, '0');
  }

  handleChange(index: number): void {
    if (index === this.active() || this.isTransitioning()) return;
    this.isTransitioning.set(true);
    setTimeout(() => {
      this.active.set(index);
      setTimeout(() => this.isTransitioning.set(false), 50);
    }, 300);
  }

  handlePrev(): void {
    const newIndex = this.active() === 0 ? this.testimonials.length - 1 : this.active() - 1;
    this.handleChange(newIndex);
  }

  handleNext(): void {
    const newIndex = this.active() === this.testimonials.length - 1 ? 0 : this.active() + 1;
    this.handleChange(newIndex);
  }
}
