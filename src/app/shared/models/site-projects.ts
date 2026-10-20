import { Project } from '../../services/portfolio.service';

/**
 * Projects hosted on this very site. They are not fetched: MIRA is a private repo, so the backend never lists it,
 * and its card links to an internal route instead of GitHub.
 */
export const SITE_PROJECTS: readonly Project[] = [
  {
    name: 'MIRA',
    description: null,
    descriptionKey: 'portfolio.miraDescription',
    url: '',
    homepage: null,
    image_url: null,
    image_base64: null,
    technologies: ['Linux', 'Android', 'MIT'],
    stars: 0,
    category: null,
    route: 'mira'
  }
];

export const isSiteProject = (name: string): boolean =>
  SITE_PROJECTS.some(p => p.name.toLowerCase() === name.toLowerCase());
