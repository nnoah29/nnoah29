import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PortfolioService, Project } from '../../services/portfolio.service';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { SITE_PROJECTS, isSiteProject } from '../../shared/models/site-projects';

/** The home section shows at most this many cards. */
const MAX_CARDS = 6;

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink, ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(
    public translate: TranslateService,
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  /** Projects hosted on this site come first, then the pinned repos from the backend; the rest lives on the projects page. */
  private withSiteProjects(projects: Project[]): Project[] {
    return [...SITE_PROJECTS, ...projects.filter(p => !isSiteProject(p.name))].slice(0, MAX_CARDS);
  }

  // ── Data loading ────────────────────────────────────────────
  loadProjects(): void {
    this.loading = !this.projects.length; // Only show loader if we have no data yet
    this.error = null;

    this.portfolioService.getProjects().subscribe({
      next: (response) => {
        this.projects = this.withSiteProjects(response.projects);
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      },
    });
  }
}
