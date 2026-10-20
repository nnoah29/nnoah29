import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Project } from '../../services/portfolio.service';
import { PROJECT_ICONS } from './project-icons';

/** One brutalist project card, shared by the home section and the projects page. */
@Component({
  selector: 'app-project-card',
  imports: [RouterLink, TranslateModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
  readonly index = input(0);

  readonly translate = inject(TranslateService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly icon = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(PROJECT_ICONS[this.index() % PROJECT_ICONS.length])
  );
}
