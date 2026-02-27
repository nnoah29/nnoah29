import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ParallaxService } from '../../shared/services/parallax.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('testiTitle', { static: false }) testiTitle!: ElementRef<HTMLElement>;
  @ViewChildren('testiItem') testiItems!: QueryList<ElementRef<HTMLElement>>;

  private sub!: Subscription;

  constructor(private parallax: ParallaxService, private zone: NgZone) { }

  ngAfterViewInit(): void {
    this.sub = this.parallax.getScroll$().subscribe((scrollY) => {
      this.zone.runOutsideAngular(() => this.applyParallax(scrollY));
    });
  }

  private applyParallax(scrollY: number): void {
    this.applyTranslate(this.testiTitle, scrollY, 0.1);
    // Alternating up/down for visual depth between cards
    const speeds = [0.07, 0.11, 0.06, 0.12, 0.08];
    this.testiItems.forEach((item, i) => {
      this.applyTranslate(item, scrollY, speeds[i] ?? 0.08);
    });
  }

  private applyTranslate(
    ref: ElementRef<HTMLElement> | undefined,
    scrollY: number,
    speed: number
  ): void {
    if (!ref?.nativeElement) return;
    const el = ref.nativeElement;
    const top = el.getBoundingClientRect().top + scrollY - window.innerHeight / 2;
    const offset = this.parallax.calcOffset(scrollY, top, speed);
    el.style.transform = `translateY(${-offset}px)`;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
