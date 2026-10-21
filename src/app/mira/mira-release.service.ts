import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { FALLBACK_VERSION, versionOfTag } from './mira-release';

const LATEST_URL = 'https://api.github.com/repos/nnoah29/MIRA/releases/latest';
const CACHE_KEY = 'mira_latest_version';
const CACHE_TTL_MS = 60 * 60 * 1000;

/** Latest published MIRA version, read from the GitHub API (no token: 60 requests/hour per visitor, hence the cache). */
@Injectable({ providedIn: 'root' })
export class MiraReleaseService {
  private readonly http = inject(HttpClient);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /** Starts on the fallback version, then switches to the latest one once known. */
  readonly version = signal(FALLBACK_VERSION);

  constructor() {
    if (!this.isBrowser) return;
    const cached = this.readCache();
    if (cached) {
      this.version.set(cached);
      return;
    }
    this.http.get<{ tag_name?: unknown }>(LATEST_URL).subscribe({
      next: release => this.adopt(versionOfTag(release.tag_name)),
      error: () => undefined
    });
  }

  private adopt(version: string | null): void {
    if (!version) return;
    this.version.set(version);
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), version }));
    } catch {
      // storage full or unavailable: the page works without the cache
    }
  }

  private readCache(): string | null {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const { at, version } = JSON.parse(raw) as { at: number; version: string };
      return Date.now() - at < CACHE_TTL_MS ? versionOfTag(version) : null;
    } catch {
      return null;
    }
  }
}
