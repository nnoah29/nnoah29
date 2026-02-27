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
  selector: 'app-company',
  standalone: true,
  imports: [],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
})
export class CompanyComponent implements AfterViewInit, OnDestroy {
  @ViewChild('companyList', { static: false }) companyList!: ElementRef<HTMLElement>;

  private sub!: Subscription;

  constructor(private parallax: ParallaxService, private zone: NgZone) { }

  ngAfterViewInit(): void {
    this.sub = this.parallax.getScroll$().subscribe((scrollY) => {
      this.zone.runOutsideAngular(() => this.applyParallax(scrollY));
    });
  }

  private applyParallax(scrollY: number): void {
    this.applyTranslate(this.companyList, scrollY, 0.06);
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
