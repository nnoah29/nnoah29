import { Component, AfterViewInit, inject, PLATFORM_ID, ElementRef, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
})
export class CompanyComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  @ViewChild('scroller') scrollerRef!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScroller();
    }
  }

  private initScroller() {
    const scroller = this.scrollerRef.nativeElement;
    if (!scroller) return;

    // add data-animated="true" to the scroller
    scroller.setAttribute("data-animated", "true");

    const scrollerInner = scroller.querySelector(".scroller__inner") as HTMLElement;
    if (!scrollerInner) return;

    // Clone items
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  }
}
