import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ParallaxService implements OnDestroy {
    private scrollY$ = new Subject<number>();
    private readonly scroll$: Observable<number>;
    private isMobile = false;

    /** Reduction factor applied on small screens (≤768 px). */
    private readonly MOBILE_FACTOR = 0.75;

    constructor(private zone: NgZone) {
        this.isMobile = window.matchMedia('(max-width: 768px)').matches;
        this.scroll$ = this.scrollY$.pipe(share());

        // Run outside Angular zone to avoid unnecessary change detection
        this.zone.runOutsideAngular(() => {
            window.addEventListener('scroll', this.onScroll, { passive: true });
            window.addEventListener('resize', this.onResize, { passive: true });
        });

        // Emit initial scroll position
        this.scrollY$.next(window.scrollY);
    }

    private onScroll = (): void => {
        this.scrollY$.next(window.scrollY);
    };

    /** Keep isMobile in sync when the user rotates the device or resizes. */
    private onResize = (): void => {
        this.isMobile = window.matchMedia('(max-width: 768px)').matches;
    };

    getScroll$(): Observable<number> {
        return this.scroll$;
    }

    /**
     * Calculate the parallax offset.
     * On mobile the effect is kept but reduced by MOBILE_FACTOR for comfort.
     * @param scrollY    current scroll position
     * @param elementTop top position of the element relative to the document
     * @param speed      positive = moves up when scrolling, negative = moves down
     */
    calcOffset(scrollY: number, elementTop: number, speed: number): number {
        const factor = this.isMobile ? this.MOBILE_FACTOR : 1;
        return (scrollY - elementTop) * speed * factor;
    }

    ngOnDestroy(): void {
        window.removeEventListener('scroll', this.onScroll);
        window.removeEventListener('resize', this.onResize);
        this.scrollY$.complete();
    }
}
