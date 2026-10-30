export interface Download {
  file: string;
  command?: string;
}

/** Version shown when the GitHub API can't be reached (offline visitor, rate limit): bump it with each release. */
export const FALLBACK_VERSION = '1.0.3';

export const RELEASES_URL = 'https://github.com/nnoah29/MIRA/releases/';

/** Online demo of the app (fictional data), served by GitHub Pages from the `web` branch. */
export const DEMO_URL = 'https://nnoah29.github.io/MIRA/';

/** Files published with a MIRA release, in the order of the download tabs (Debian, Fedora, AppImage, Arch, Android). */
export function miraDownloads(version: string): Download[] {
  return [
    { file: `mira-mail_${version}_amd64.deb`, command: `sudo apt install ./mira-mail_${version}_amd64.deb` },
    { file: `mira-mail-${version}-1.x86_64.rpm`, command: `sudo dnf install ./mira-mail-${version}-1.x86_64.rpm` },
    { file: `MIRA-${version}-x86_64.AppImage`, command: `chmod +x MIRA-${version}-x86_64.AppImage && ./MIRA-${version}-x86_64.AppImage` },
    { file: `mira-mail-${version}-x86_64.tar.gz`, command: `tar xzf mira-mail-${version}-x86_64.tar.gz` },
    { file: `mira-mail-${version}-android-arm64-v8a.apk` }
  ];
}

/** Download address of a file of the given version. */
export function miraFileUrl(version: string, file: string): string {
  return `${RELEASES_URL}download/v${version}/${file}`;
}

/** Version number out of a release tag (`v1.0.3` → `1.0.3`); `null` if the tag isn't a plain x.y.z version. */
export function versionOfTag(tag: unknown): string | null {
  const match = typeof tag === 'string' ? /^v?(\d+\.\d+\.\d+)$/.exec(tag) : null;
  return match ? match[1] : null;
}
