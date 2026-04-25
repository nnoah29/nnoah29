import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ParallaxService } from '../../shared/services/parallax.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit, OnDestroy {

  /** Infinite grid: cursor position for the radial-mask reveal */
  mouseX = -9999;
  mouseY = -9999;
  get radialMask(): string {
    return `radial-gradient(300px circle at ${this.mouseX}px ${this.mouseY}px, black, transparent)`;
  }

  @ViewChild('heroSection', { static: false }) heroSection!: ElementRef<HTMLElement>;
  @ViewChild('heroTitle', { static: false }) heroTitle!: ElementRef<HTMLElement>;
  @ViewChild('heroLeft', { static: false }) heroLeft!: ElementRef<HTMLElement>;
  @ViewChild('heroRight', { static: false }) heroRight!: ElementRef<HTMLElement>;
  @ViewChild('heroImg', { static: false }) heroImg!: ElementRef<HTMLElement>;

  private sub!: Subscription;

  constructor(private parallax: ParallaxService, private zone: NgZone) { }

  onMouseMove(event: MouseEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;
  }

  ngAfterViewInit(): void {
    this.sub = this.parallax.getScroll$().subscribe((scrollY) => {
      this.zone.runOutsideAngular(() => this.applyParallax(scrollY));
    });
  }

  private applyParallax(scrollY: number): void {
    this.applyTranslate(this.heroTitle, scrollY, 0.12);
    this.applyTranslate(this.heroLeft, scrollY, 0.07);
    this.applyTranslate(this.heroRight, scrollY, 0.09);
    this.applyTranslate(this.heroImg, scrollY, 0.18);
  }

  private applyTranslate(
    ref: ElementRef<HTMLElement> | undefined,
    scrollY: number,
    speed: number
  ): void {
    if (!ref?.nativeElement) return;
    const el = ref.nativeElement;
    
    // For hero section elements, they are at the top of the page.
    // By providing 0 as their baseline top, calcOffset evaluates to (scrollY - 0) * speed.
    // This perfectly centers them to translateY(0px) unconditionally when scroll is at the very top.
    const offset = this.parallax.calcOffset(scrollY, 0, speed);
    el.style.transform = `translateY(${-offset}px)`;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
