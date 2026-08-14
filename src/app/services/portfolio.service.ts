import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable, throwError, of, merge } from 'rxjs';
import { catchError, retry, tap, map, shareReplay } from 'rxjs/operators';

export interface Project {
    name: string;
    description: string | null;
    url: string;
    homepage: string | null;
    image_url: string | null;
    image_base64: string | null;
    technologies: string[];
    stars: number;
    category: string | null;
}

export interface PortfolioResponse {
    projects: Project[];
    total: number;
    cached: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    // Points to our local Vercel API proxy which handles Edge Caching
    private apiUrl = '/api/portfolio';
    private CACHE_KEY = 'portfolio_data_cache';
    private platformId = inject(PLATFORM_ID);

    constructor(private http: HttpClient) { }

    /**
     * Get portfolio projects with Stale-While-Revalidate pattern
     */
    getProjects(): Observable<PortfolioResponse> {
        const fetch$ = this.http.get<PortfolioResponse>(this.apiUrl).pipe(
            retry(2),
            tap(data => this.setLocalCache(data)),
            catchError(this.handleError),
            shareReplay(1)
        );

        if (isPlatformBrowser(this.platformId)) {
            const cachedData = this.getLocalCache();
            if (cachedData) {
                // Return cached data immediately, then merge with fresh data from network
                return merge(
                    of({ ...cachedData, cached: true }),
                    fetch$
                );
            }
        }

        return fetch$;
    }

    /**
     * Force refresh portfolio data (bypass cache)
     */
    refreshProjects(): Observable<PortfolioResponse> {
        return this.http.get<PortfolioResponse>(`${this.apiUrl}?refresh=true`).pipe(
            tap(data => this.setLocalCache(data)),
            catchError(this.handleError)
        );
    }

    private setLocalCache(data: PortfolioResponse): void {
        if (isPlatformBrowser(this.platformId)) {
            try {
                localStorage.setItem(this.CACHE_KEY, JSON.stringify(data));
            } catch (e) {
                console.warn('Failed to save to localStorage:', e);
            }
        }
    }

    private getLocalCache(): PortfolioResponse | null {
        if (isPlatformBrowser(this.platformId)) {
            const cached = localStorage.getItem(this.CACHE_KEY);
            if (cached) {
                try {
                    return JSON.parse(cached);
                } catch (e) {
                    console.error('Error parsing cached data:', e);
                    return null;
                }
            }
        }
        return null;
    }

    /**
     * Handle HTTP errors
     */
    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'An error occurred';

        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        } else {
            errorMessage = `Server returned code ${error.status}: ${error.message}`;
            if (error.status === 0) {
                errorMessage = 'Cannot connect to backend.';
            }
        }

        console.error('Portfolio service error:', errorMessage);
        return throwError(() => new Error(errorMessage));
    }
}
