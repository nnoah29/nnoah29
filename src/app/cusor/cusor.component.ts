import { Component, AfterViewInit, inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-cusor',
  imports: [],
  templateUrl: './cusor.component.html',
  styleUrl: './cusor.component.css'
})
export class CusorComponent implements AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private mouseMoveHandler: any;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initCursor();
    }
  }

  private initCursor() {
    const cursorBall = document.getElementById('ball');
    if (!cursorBall) return;

    this.mouseMoveHandler = (e: MouseEvent) => {
      gsap.to(cursorBall, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        ease: 'power2.out'
      });
    };

    document.addEventListener('mousemove', this.mouseMoveHandler);

    // Hover effect on elements
    const hoverElements = document.querySelectorAll('a');
    hoverElements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        cursorBall.classList.add('hovered');
        gsap.to(cursorBall, {
          duration: 0.3,
          scale: 2,
          opacity: 0,
          ease: 'power2.out'
        });
      });

      element.addEventListener('mouseleave', () => {
        cursorBall.classList.remove('hovered');
        gsap.to(cursorBall, {
          duration: 0.3,
          scale: 1,
          opacity: 1,
          ease: 'power2.out'
        });
      });
    });
  }

  ngOnDestroy(): void {
    if (this.mouseMoveHandler) {
      document.removeEventListener('mousemove', this.mouseMoveHandler);
    }
  }
}
