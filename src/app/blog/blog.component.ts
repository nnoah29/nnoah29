import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

export interface LinkedInPost {
  id: string;
  url: string;
  text: string;
  created_at: string;
  created_relative: string;
  image_url: string;
}

@Component({
  selector: 'app-blog',
  imports: [CommonModule, TranslateModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  posts: LinkedInPost[] = [];
  loading = true;
  error = false;
  private http = inject(HttpClient);
  private translate = inject(TranslateService);

  ngOnInit(): void {
    this.http.get<{ posts: LinkedInPost[], total: number, cached: boolean }>('https://nnoah29-backend.vercel.app/api/linkedin/posts')
      .subscribe({
        next: (data) => {
          this.posts = data.posts;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching LinkedIn posts', err);
          this.error = true;
          this.loading = false;
        }
      });
  }

  formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    if (isNaN(date.getTime())) {
      return '';
    }
    const lang = this.translate.currentLang || this.translate.defaultLang || 'fr';
    return date.toLocaleDateString(lang, { month: 'long', year: 'numeric' });
  }
}
