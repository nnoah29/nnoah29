import { miraDownloads, miraFileUrl, versionOfTag } from './mira-release';

describe('mira-release', () => {
  it('names the files of a release after its version', () => {
    const files = miraDownloads('1.0.3').map(download => download.file);
    expect(files).toEqual([
      'mira-mail_1.0.3_amd64.deb',
      'mira-mail-1.0.3-1.x86_64.rpm',
      'MIRA-1.0.3-x86_64.AppImage',
      'mira-mail-1.0.3-x86_64.tar.gz',
      'mira-mail-1.0.3-android-arm64-v8a.apk'
    ]);
  });

  it('puts the version in every install command', () => {
    const commands = miraDownloads('2.1.0').map(download => download.command ?? '');
    expect(commands.filter(Boolean).every(command => command.includes('2.1.0'))).toBeTrue();
  });

  it('points a file at the release of its version', () => {
    expect(miraFileUrl('1.0.3', 'MIRA-1.0.3-x86_64.AppImage')).toBe(
      'https://github.com/nnoah29/MIRA/releases/download/v1.0.3/MIRA-1.0.3-x86_64.AppImage'
    );
  });

  it('reads the version out of a release tag', () => {
    expect(versionOfTag('v1.0.3')).toBe('1.0.3');
    expect(versionOfTag('1.2.10')).toBe('1.2.10');
    expect(versionOfTag('v1.0.3-beta')).toBeNull();
    expect(versionOfTag(undefined)).toBeNull();
  });
});
