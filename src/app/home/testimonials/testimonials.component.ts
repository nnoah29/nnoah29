import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

export interface Testimonial {
  id: string;
  quote: string;
  quote_en: string | null;
  author: string;
  role: string;
  company: string;
  image_url: string | null;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent implements OnInit {
  private http = inject(HttpClient);
  private translate = inject(TranslateService);
  testimonials: Testimonial[] = [];

  ngOnInit(): void {
    this.http.get<{ testimonials: Testimonial[] }>('https://nnoah29-backend.vercel.app/api/testimonials')
      .subscribe({
        next: (data) => {
          this.testimonials = data.testimonials;
          this.active.set(0);
        },
        error: () => (this.testimonials = []),
      });
  }

  active = signal(0);
  isTransitioning = signal(false);

  current = computed(() => this.testimonials[this.active()]);

  quoteOf(item: Testimonial): string {
    const lang = this.translate.currentLang || this.translate.defaultLang || 'fr';
    return lang === 'en' && item.quote_en ? item.quote_en : item.quote;
  }

  initials(name: string): string {
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join('');
  }

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
