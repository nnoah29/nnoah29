import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ParallaxService } from '../../shared/services/parallax.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('aboutTitle', { static: false }) aboutTitle!: ElementRef<HTMLElement>;
  @ViewChild('aboutSub', { static: false }) aboutSub!: ElementRef<HTMLElement>;
  @ViewChild('aboutStory', { static: false }) aboutStory!: ElementRef<HTMLElement>;

  private sub!: Subscription;

  constructor(private parallax: ParallaxService, private zone: NgZone) { }

  ngAfterViewInit(): void {
    this.sub = this.parallax.getScroll$().subscribe((scrollY) => {
      this.zone.runOutsideAngular(() => this.applyParallax(scrollY));
    });
  }

  private applyParallax(scrollY: number): void {
    this.applyTranslate(this.aboutTitle, scrollY, 0.15);
    this.applyTranslate(this.aboutSub, scrollY, 0.10);
    this.applyTranslate(this.aboutStory, scrollY, 0.08);
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
