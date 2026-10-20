import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Project } from './portfolio.service';

interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  fork: boolean;
  pushed_at: string;
}

export interface PublicProject extends Project {
  pushedAt: string;
}

/** GitHub accounts whose public repos are listed on the projects page. */
const ACCOUNTS = ['nnoah29', 'Arch-Noah'];
const CACHE_KEY = 'github_repos_cache';
const CACHE_TTL_MS = 60 * 60 * 1000;

/** Public repositories straight from the GitHub REST API (no token: 60 requests/hour per visitor, hence the cache). */
@Injectable({ providedIn: 'root' })
export class GithubReposService {
  private readonly http = inject(HttpClient);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  getPublicRepos(): Observable<PublicProject[]> {
    const cached = this.readCache();
    if (cached) {
      return of(cached);
    }
    return forkJoin(ACCOUNTS.map(account => this.fetchAccount(account))).pipe(
      map(lists => lists.flat().sort((a, b) => b.pushedAt.localeCompare(a.pushedAt))),
      tap(repos => this.writeCache(repos))
    );
  }

  private fetchAccount(account: string): Observable<PublicProject[]> {
    const url = `https://api.github.com/users/${account}/repos?per_page=100&sort=pushed&type=owner`;
    return this.http.get<GithubRepo[]>(url).pipe(
      map(repos => repos
        // The profile README repo (nnoah29/nnoah29) and forks are not projects.
        .filter(r => !r.fork && r.name.toLowerCase() !== account.toLowerCase())
        .map(r => this.toProject(r))),
      catchError(() => of([]))
    );
  }

  private toProject(r: GithubRepo): PublicProject {
    const technologies = [r.language, ...(r.topics ?? [])].filter((t): t is string => !!t);
    return {
      name: r.name,
      description: r.description,
      url: r.html_url,
      homepage: r.homepage || null,
      image_url: null,
      image_base64: null,
      technologies: [...new Set(technologies)],
      stars: r.stargazers_count,
      category: null,
      pushedAt: r.pushed_at
    };
  }

  private readCache(): PublicProject[] | null {
    if (!this.isBrowser) return null;
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const { at, repos } = JSON.parse(raw) as { at: number; repos: PublicProject[] };
      return Date.now() - at < CACHE_TTL_MS ? repos : null;
    } catch {
      return null;
    }
  }

  private writeCache(repos: PublicProject[]): void {
    if (!this.isBrowser || repos.length === 0) return;
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), repos }));
    } catch {
      // storage full or unavailable: the page works without the cache
    }
  }
}
