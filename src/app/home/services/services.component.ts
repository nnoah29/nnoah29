import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  QueryList,
  ViewChildren,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ParallaxService } from '../../shared/services/parallax.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sectionTitle', { static: false }) sectionTitle!: ElementRef<HTMLElement>;
  @ViewChildren('serviceItem') serviceItems!: QueryList<ElementRef<HTMLElement>>;

  private sub!: Subscription;

  constructor(private parallax: ParallaxService, private zone: NgZone) { }

  ngAfterViewInit(): void {
    this.sub = this.parallax.getScroll$().subscribe((scrollY) => {
      this.zone.runOutsideAngular(() => this.applyParallax(scrollY));
    });
  }

  private applyParallax(scrollY: number): void {
    this.applyTranslate(this.sectionTitle, scrollY, 0.20);
    // Staggered speeds per service item for depth
    const speeds = [0.16, 0.24, 0.20, 0.28];
    this.serviceItems.forEach((item, i) => {
      this.applyTranslate(item, scrollY, speeds[i] ?? 0.18);
    });
  }

  private applyTranslate(
    ref: ElementRef<HTMLElement> | undefined,
    scrollY: number,
    speed: number
  ): void {
    if (!ref?.nativeElement) return;
    const el = ref.nativeElement;
    if (window.innerWidth <= 768) {
      el.style.transform = 'none';
      return;
    }
    const top = el.getBoundingClientRect().top + scrollY - window.innerHeight / 2;
    const offset = this.parallax.calcOffset(scrollY, top, speed);
    el.style.transform = `translateY(${-offset}px)`;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
