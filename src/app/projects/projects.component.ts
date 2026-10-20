import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CursorComponent } from '../cursor/cursor.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectCardComponent } from '../shared/project-card/project-card.component';
import { SITE_PROJECTS, isSiteProject } from '../shared/models/site-projects';
import { PortfolioService, Project } from '../services/portfolio.service';
import { GithubReposService } from '../services/github-repos.service';

/** All public projects: hosted on this site first, then the pinned ones, then every other public repository. */
@Component({
  selector: 'app-projects',
  imports: [RouterLink, TranslateModule, CursorComponent, HeaderComponent, FooterComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly translate = inject(TranslateService);
  private readonly portfolio = inject(PortfolioService);
  private readonly github = inject(GithubReposService);

  readonly hosted: readonly Project[] = SITE_PROJECTS;
  private readonly pinnedRaw = signal<Project[]>([]);
  private readonly reposRaw = signal<Project[]>([]);
  readonly loading = signal(true);
  readonly failed = signal(false);

  readonly pinned = computed(() => this.pinnedRaw().filter(p => !isSiteProject(p.name)));

  /** Every other public repo, newest push first (the service already sorts them). */
  readonly others = computed(() => {
    const taken = new Set(this.pinned().map(p => p.name.toLowerCase()));
    return this.reposRaw().filter(p => !taken.has(p.name.toLowerCase()) && !isSiteProject(p.name));
  });

  readonly total = computed(() => this.hosted.length + this.pinned().length + this.others().length);

  constructor() {
    const title = inject(Title);
    const previousTitle = title.getTitle();
    title.setTitle(`${this.translate.instant('projects.title')} — Noah TOFFA`);
    inject(DestroyRef).onDestroy(() => title.setTitle(previousTitle));

    let pending = 2;
    const done = () => { if (--pending === 0) this.loading.set(false); };

    this.portfolio.getProjects().pipe(takeUntilDestroyed()).subscribe({
      next: res => this.pinnedRaw.set(res.projects),
      error: () => { this.failed.set(true); done(); },
      complete: done
    });
    this.github.getPublicRepos().pipe(takeUntilDestroyed()).subscribe({
      next: repos => this.reposRaw.set(repos),
      error: () => { this.failed.set(true); done(); },
      complete: done
    });
  }
}
