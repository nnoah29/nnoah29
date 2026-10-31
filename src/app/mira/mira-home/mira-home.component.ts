import { AfterViewInit, Component, DestroyRef, ElementRef, computed, effect, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { MiraIconComponent } from '../mira-icon/mira-icon.component';
import { MiraI18n } from '../mira-i18n';
import { DEMO_URL, miraDownloads, miraFileUrl } from '../mira-release';
import { MiraReleaseService } from '../mira-release.service';

const ACCOUNT_LOOK = [
  { initials: 'GM', colour: '#66a1cf' },
  { initials: 'OU', colour: '#83bb85' },
  { initials: 'YA', colour: '#cbaa66' },
  { initials: 'IM', colour: '#d1839f' }
];

/** MIRA landing page: the app window, features, supported accounts and downloads per system. */
@Component({
  selector: 'app-mira-home',
  imports: [RouterLink, MiraIconComponent],
  templateUrl: './mira-home.component.html',
  styleUrl: './mira-home.component.css'
})
export class MiraHomeComponent implements AfterViewInit {
  readonly i18n = inject(MiraI18n);
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly accounts = computed(() =>
    this.i18n.content().accounts.map((account, index) => ({ ...account, ...ACCOUNT_LOOK[index] }))
  );

  private readonly release = inject(MiraReleaseService);
  private readonly files = computed(() => miraDownloads(this.release.version()));

  readonly demoUrl = DEMO_URL;
  readonly installCommand = 'curl -fsSL https://github.com/nnoah29/MIRA/releases/latest/download/install.sh | bash';
  readonly selected = signal(0);
  readonly tabs = computed(() => this.i18n.content().systems.map(system => system.tab));
  readonly system = computed(() => this.i18n.content().systems[this.selected()].system);
  readonly download = computed(() => this.files()[this.selected()]);
  readonly fileUrl = computed(() => miraFileUrl(this.release.version(), this.download().file));
  readonly copied = signal<string | null>(null);

  private copyTimer?: ReturnType<typeof setTimeout>;
  private revealObserver?: IntersectionObserver;

  constructor() {
    const title = inject(Title);
    effect(() => title.setTitle(this.i18n.content().meta.home));
    inject(DestroyRef).onDestroy(() => {
      clearTimeout(this.copyTimer);
      this.revealObserver?.disconnect();
    });
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const root = this.host.nativeElement as HTMLElement;
    const targets = root.querySelectorAll<HTMLElement>('[data-reveal]');
    if (targets.length === 0) return;

    root.classList.add('motion-ready');
    this.revealObserver = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

    targets.forEach((target, index) => {
      target.style.setProperty('--reveal-delay', `${(index % 4) * 90}ms`);
      this.revealObserver?.observe(target);
    });
  }

  select(index: number): void {
    this.selected.set(index);
  }

  selectNext(step: number, event: Event): void {
    const count = this.files().length;
    this.selected.update(index => (index + step + count) % count);
    const tabs = (event.currentTarget as HTMLElement).parentElement?.children;
    (tabs?.item(this.selected()) as HTMLElement | null)?.focus();
  }

  copy(text: string): void {
    navigator.clipboard?.writeText(text).then(() => {
      this.copied.set(text);
      clearTimeout(this.copyTimer);
      this.copyTimer = setTimeout(() => this.copied.set(null), 1600);
    }).catch(() => this.copied.set(null));
  }
}
