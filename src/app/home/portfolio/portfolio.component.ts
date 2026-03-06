import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { PortfolioService, Project } from '../../services/portfolio.service';
import { ParallaxService } from '../../shared/services/parallax.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit, AfterViewInit, OnDestroy {
  projects: Project[] = [];
  loading: boolean = true;
  error: string | null = null;

  @ViewChild('customIcon', { static: false }) customIcon!: ElementRef<HTMLElement>;
  @ViewChild('portfolioGrid', { static: false }) portfolioGrid!: ElementRef<HTMLElement>;

  private sub!: Subscription;

  constructor(
    private portfolioService: PortfolioService,
    private parallax: ParallaxService,
    private zone: NgZone
  ) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  ngAfterViewInit(): void {
    this.sub = this.parallax.getScroll$().subscribe((scrollY) => {
      this.zone.runOutsideAngular(() => this.applyParallax(scrollY));
    });
  }

  private applyParallax(scrollY: number): void {
    this.applyTranslate(this.customIcon, scrollY, 0.18);
    this.applyTranslate(this.portfolioGrid, scrollY, 0.08);
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

  loadProjects(): void {
    this.loading = true;
    this.error = null;

    this.portfolioService.getProjects().subscribe({
      next: (response) => {
        this.projects = response.projects;
        this.loading = false;
        console.log(`Loaded ${response.total} projects (cached: ${response.cached})`);
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
        console.error('Failed to load projects:', err);
      },
    });
  }

  refreshProjects(): void {
    this.loading = true;
    this.error = null;

    this.portfolioService.refreshProjects().subscribe({
      next: (response) => {
        this.projects = response.projects;
        this.loading = false;
        console.log(`Refreshed ${response.total} projects`);
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
        console.error('Failed to refresh projects:', err);
      },
    });
  }

  getImageSrc(project: Project): string {
    return project.image_base64 || project.image_url || 'assets/images/projects/default.jpg';
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
