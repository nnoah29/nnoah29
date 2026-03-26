import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  posts: LinkedInPost[] = [];
  loading = true;
  error = false;
  private http = inject(HttpClient);

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

  cleanDate(dateStr: string): string {
    return dateStr.replace(/•/g, '').trim();
  }
}
