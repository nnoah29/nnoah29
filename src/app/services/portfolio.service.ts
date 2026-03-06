import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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
    private apiUrl = 'http://localhost:8001/api/portfolio';

    constructor(private http: HttpClient) { }

    /**
     * Get portfolio projects from backend
     */
    getProjects(): Observable<PortfolioResponse> {
        return this.http.get<PortfolioResponse>(this.apiUrl).pipe(
            retry(2), // Retry failed requests up to 2 times
            catchError(this.handleError)
        );
    }

    /**
     * Force refresh portfolio data (bypass cache)
     */
    refreshProjects(): Observable<PortfolioResponse> {
        return this.http.get<PortfolioResponse>(`${this.apiUrl}/refresh`).pipe(
            catchError(this.handleError)
        );
    }

    /**
     * Handle HTTP errors
     */
    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'An error occurred';

        if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side error
            errorMessage = `Server returned code ${error.status}: ${error.message}`;

            if (error.status === 0) {
                errorMessage = 'Cannot connect to backend. Make sure the backend server is running on http://localhost:8000';
            }
        }

        console.error('Portfolio service error:', errorMessage);
        return throwError(() => new Error(errorMessage));
    }
}
