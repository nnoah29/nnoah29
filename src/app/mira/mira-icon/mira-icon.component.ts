import { Component, computed, input } from '@angular/core';

const PATHS = {
  inbox: 'M3 13h5l2 3h4l2-3h5M5 5h14l2 8v6H3v-6z',
  star: 'M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  send: 'M21 3L10 14M21 3l-7 18-4-7-7-4z',
  file: 'M6 3h8l4 4v14H6zM14 3v4h4',
  archive: 'M3 4h18v4H3zM5 8v12h14V8M10 12h4',
  alert: 'M12 3l10 18H2zM12 10v4M12 17v.5',
  trash: 'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13',
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM21 21l-5-5',
  refresh: 'M20 11a8 8 0 0 0-14.9-3M4 4v4h4M4 13a8 8 0 0 0 14.9 3M20 20v-4h-4',
  pencil: 'M4 20h4L19 9l-4-4L4 16zM14 6l4 4',
  download: 'M12 3v12M7 10l5 5 5-5M4 20h16',
  filter: 'M4 6h16M7 12h10M10 18h4',
  reply: 'M10 8L4 13l6 5M4 13h11a5 5 0 0 1 5 5v1',
  check: 'M5 12l5 5 9-10',
  copy: 'M8 8h12v12H8zM4 16V4h12',
  plus: 'M12 5v14M5 12h14',
  code: 'M8 7l-5 5 5 5M16 7l5 5-5 5',
  play: 'M7 4l13 8-13 8z'
} as const;

export type MiraIconName = keyof typeof PATHS;

/** Line icon in the style of the MIRA app (24px grid, square caps). */
@Component({
  selector: 'app-mira-icon',
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><path [attr.d]="path()" /></svg>`,
  styles: `:host { display: inline-flex; width: 1em; height: 1em; flex: none; } svg { width: 100%; height: 100%; display: block; }`
})
export class MiraIconComponent {
  readonly name = input.required<MiraIconName>();
  readonly path = computed(() => PATHS[this.name()]);
}
