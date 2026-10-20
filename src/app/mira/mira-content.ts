export type MiraLang = 'en' | 'fr';

export const MIRA_LANGS: readonly MiraLang[] = ['en', 'fr'];

export interface MiraStrength {
  label: string;
  title: string;
  text: string;
}

export interface MiraAccountText {
  name: string;
  how: string;
}

export interface MiraDownloadText {
  tab: string;
  system: string;
}

/** Every visible string of the MIRA site, in one language. */
export interface MiraContent {
  meta: { home: string; privacy: string; terms: string; description: string };
  skip: string;
  nav: { privacy: string; download: string; switchTo: string; switchLabel: string };
  footer: { credit: string; privacy: string; terms: string; source: string; contact: string };
  hero: { title1: string; title2: string; lede: string; download: string; source: string; tags: string };
  shotAlt: string;
  featuresTitle: string;
  strengths: MiraStrength[];
  accountsTitle: string;
  accounts: MiraAccountText[];
  downloadTitle: string;
  systems: MiraDownloadText[];
  download: { get: string; thenTerminal: string; copy: string; copied: string; installLabel: string; installNote: string; systemLabel: string };
  requirements: { before: string; link: string; after: string };
  docs: { tabsLabel: string; privacy: string; terms: string };
}

export const MIRA_FR: MiraContent = {
  meta: {
    home: 'MIRA — un client mail pour Linux et Android',
    privacy: 'Confidentialité — MIRA',
    terms: "Conditions d'utilisation — MIRA",
    description: 'MIRA est un client mail pour Linux et Android, libre et gratuit. Un client mail comme un autre, en plus joli et plus amusant à utiliser.'
  },
  skip: 'Aller au contenu',
  nav: { privacy: 'Confidentialité', download: 'Télécharger', switchTo: 'EN', switchLabel: 'View this page in English' },
  footer: { credit: 'MIRA · Noah Toffa · Licence MIT', privacy: 'Confidentialité', terms: 'Conditions', source: 'Code source', contact: 'Contact' },
  hero: {
    title1: 'Juste un client mail,',
    title2: 'en plus joli',
    lede: "MIRA lit et envoie vos mails, sur Linux et sur Android. Je l'ai faite parce que les clients mail que j'ai trouvés sous Linux ne me plaisaient pas : trop austères, payants, ou coincés dans un navigateur.",
    download: 'Télécharger MIRA',
    source: 'Code source',
    tags: 'Linux · Android · Gratuit · Licence MIT'
  },
  shotAlt: "La fenêtre de MIRA : dossiers à gauche, boîte de réception au centre, lettre d'information ouverte à droite.",
  featuresTitle: "Ce qu'il y a dedans",
  strengths: [
    { label: 'Look', title: 'Un peu de caractère', text: 'Grands titres, angles droits, une seule couleur vive. Thème sombre ou clair, en français ou en anglais.' },
    { label: 'Couleurs', title: 'La vôtre, pas la mienne', text: "Choisissez la couleur d'accent, ou laissez MIRA prendre celles de votre fond d'écran." },
    { label: 'Comptes', title: 'Tous au même endroit', text: "Gmail, Outlook, Yahoo ou n'importe quel serveur IMAP, avec une réception unifiée si vous le voulez." },
    { label: 'Hors ligne', title: 'Ça marche sans réseau', text: 'Vos mails sont copiés sur votre appareil. Lisez et répondez dans le train : tout part au retour du réseau.' },
    { label: 'Au quotidien', title: 'Les petits plus', text: 'Recherche dans tout le texte, reporter un mail à plus tard, annuler un envoi, programmer un message, raccourcis clavier.' },
    { label: 'Vie privée', title: 'Rien ne passe par chez moi', text: 'Aucun serveur MIRA. Les images distantes et les traceurs sont bloqués tant que vous ne les autorisez pas.' }
  ],
  accountsTitle: 'Vos comptes',
  accounts: [
    { name: 'Gmail', how: 'Connexion Google' },
    { name: 'Outlook, Microsoft 365', how: 'Connexion Microsoft' },
    { name: 'Yahoo', how: "Mot de passe d'application" },
    { name: 'Tout compte IMAP', how: 'Serveur et mot de passe' }
  ],
  downloadTitle: 'Télécharger',
  systems: [
    { tab: 'Debian, Ubuntu', system: 'Debian, Ubuntu, Mint, Pop!_OS' },
    { tab: 'Fedora', system: 'Fedora, RHEL, Rocky, Alma, openSUSE' },
    { tab: 'AppImage', system: 'Toute distribution Linux' },
    { tab: 'Arch', system: 'Arch, Manjaro, EndeavourOS' },
    { tab: 'Android', system: 'Téléphones Android 7 et suivants' }
  ],
  download: {
    get: 'Télécharger',
    thenTerminal: 'Puis, dans un terminal',
    copy: 'Copier',
    copied: 'Copié',
    installLabel: 'Installer et mettre à jour · Linux, sans sudo',
    installNote: 'Relancez la même commande pour passer à la dernière version.',
    systemLabel: 'Système'
  },
  requirements: {
    before: 'Linux : glibc 2.34 ou plus récente (Ubuntu 22.04, Debian 12, Fedora 35 et suivantes) et GTK 3. Pour ranger les mots de passe, un trousseau comme GNOME Keyring ou KWallet. Sommes de contrôle publiées avec chaque ',
    link: 'version',
    after: '.'
  },
  docs: { tabsLabel: 'Documents', privacy: 'Confidentialité', terms: "Conditions d'utilisation" }
};

export const MIRA_EN: MiraContent = {
  meta: {
    home: 'MIRA — a mail client for Linux and Android',
    privacy: 'Privacy — MIRA',
    terms: 'Terms of use — MIRA',
    description: 'MIRA is a free, open-source mail client for Linux and Android. A mail client like any other, just prettier and more fun to use.'
  },
  skip: 'Skip to content',
  nav: { privacy: 'Privacy', download: 'Download', switchTo: 'FR', switchLabel: 'Voir cette page en français' },
  footer: { credit: 'MIRA · Noah Toffa · MIT licence', privacy: 'Privacy', terms: 'Terms', source: 'Source code', contact: 'Contact' },
  hero: {
    title1: 'Just a mail client,',
    title2: 'but prettier',
    lede: "MIRA reads and sends your mail, on Linux and on Android. I made it because the mail clients I found on Linux didn't appeal to me: too austere, paid, or stuck in a browser.",
    download: 'Download MIRA',
    source: 'Source code',
    tags: 'Linux · Android · Free · MIT licence'
  },
  shotAlt: 'The MIRA window: folders on the left, inbox in the middle, a newsletter open on the right.',
  featuresTitle: "What's inside",
  strengths: [
    { label: 'Look', title: 'A bit of character', text: 'Big headlines, square corners, one bright colour. Dark or light theme, in English or French.' },
    { label: 'Colours', title: 'Yours, not mine', text: 'Pick the accent colour, or let MIRA take the colours of your wallpaper.' },
    { label: 'Accounts', title: 'All in one place', text: 'Gmail, Outlook, Yahoo or any IMAP server, with a unified inbox if you want one.' },
    { label: 'Offline', title: 'Works without a network', text: 'Your mail is copied to your device. Read and reply on the train: everything goes out when the network returns.' },
    { label: 'Day to day', title: 'Small extras', text: 'Full-text search, snooze a message, undo send, schedule a message, keyboard shortcuts.' },
    { label: 'Privacy', title: 'Nothing goes through me', text: 'No MIRA server. Remote images and trackers stay blocked until you allow them.' }
  ],
  accountsTitle: 'Your accounts',
  accounts: [
    { name: 'Gmail', how: 'Google sign-in' },
    { name: 'Outlook, Microsoft 365', how: 'Microsoft sign-in' },
    { name: 'Yahoo', how: 'App password' },
    { name: 'Any IMAP account', how: 'Server and password' }
  ],
  downloadTitle: 'Download',
  systems: [
    { tab: 'Debian, Ubuntu', system: 'Debian, Ubuntu, Mint, Pop!_OS' },
    { tab: 'Fedora', system: 'Fedora, RHEL, Rocky, Alma, openSUSE' },
    { tab: 'AppImage', system: 'Any Linux distribution' },
    { tab: 'Arch', system: 'Arch, Manjaro, EndeavourOS' },
    { tab: 'Android', system: 'Phones running Android 7 and later' }
  ],
  download: {
    get: 'Download',
    thenTerminal: 'Then, in a terminal',
    copy: 'Copy',
    copied: 'Copied',
    installLabel: 'Install and update · Linux, no sudo',
    installNote: 'Run the same command again to get the latest version.',
    systemLabel: 'System'
  },
  requirements: {
    before: 'Linux: glibc 2.34 or newer (Ubuntu 22.04, Debian 12, Fedora 35 and later) and GTK 3. To store passwords, a keyring such as GNOME Keyring or KWallet. Checksums are published with each ',
    link: 'release',
    after: '.'
  },
  docs: { tabsLabel: 'Documents', privacy: 'Privacy', terms: 'Terms of use' }
};
