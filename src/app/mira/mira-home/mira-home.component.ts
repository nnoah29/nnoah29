import { Component, DestroyRef, computed, effect, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { MiraIconComponent } from '../mira-icon/mira-icon.component';
import { MiraI18n } from '../mira-i18n';

interface Download {
  file: string;
  command?: string;
}

const RELEASE = 'https://github.com/nnoah29/MIRA/releases/download/v1.0.1/';
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
export class MiraHomeComponent {
  readonly i18n = inject(MiraI18n);

  readonly accounts = computed(() =>
    this.i18n.content().accounts.map((account, index) => ({ ...account, ...ACCOUNT_LOOK[index] }))
  );

  private readonly files: Download[] = [
    { file: 'mira-mail_1.0.1_amd64.deb', command: 'sudo apt install ./mira-mail_1.0.1_amd64.deb' },
    { file: 'mira-mail-1.0.1-1.x86_64.rpm', command: 'sudo dnf install ./mira-mail-1.0.1-1.x86_64.rpm' },
    { file: 'MIRA-1.0.1-x86_64.AppImage', command: 'chmod +x MIRA-1.0.1-x86_64.AppImage && ./MIRA-1.0.1-x86_64.AppImage' },
    { file: 'mira-mail-1.0.1-x86_64.tar.gz', command: 'tar xzf mira-mail-1.0.1-x86_64.tar.gz' },
    { file: 'mira-mail-1.0.1-android-arm64-v8a.apk' }
  ];

  readonly installCommand = 'curl -fsSL https://github.com/nnoah29/MIRA/releases/latest/download/install.sh | bash';
  readonly selected = signal(0);
  readonly tabs = computed(() => this.i18n.content().systems.map(system => system.tab));
  readonly system = computed(() => this.i18n.content().systems[this.selected()].system);
  readonly download = computed(() => this.files[this.selected()]);
  readonly fileUrl = computed(() => RELEASE + this.download().file);
  readonly copied = signal<string | null>(null);

  private copyTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    const title = inject(Title);
    effect(() => title.setTitle(this.i18n.content().meta.home));
    inject(DestroyRef).onDestroy(() => clearTimeout(this.copyTimer));
  }

  select(index: number): void {
    this.selected.set(index);
  }

  selectNext(step: number, event: Event): void {
    const count = this.files.length;
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
