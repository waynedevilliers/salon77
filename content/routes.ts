interface SiteRoute {
  path: string;
  label: string;
  priority: number;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  /** False for pages that keep a breadcrumb label but stay out of the sitemap. */
  inSitemap?: false;
}

/**
 * Pages with their breadcrumb labels. All of them are in the sitemap except
 * those marked `inSitemap: false`.
 */
export const indexableRoutes: SiteRoute[] = [
  { path: '/', label: 'Startseite', priority: 1, changeFrequency: 'weekly' },
  {
    path: '/uebersicht',
    label: 'Übersicht',
    priority: 0.8,
    changeFrequency: 'monthly',
    // Placeholder page, not indexed until it has content.
    inSitemap: false,
  },
  {
    path: '/unterricht',
    label: 'Unterricht',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/wochenkurse',
    label: 'Wochenkurse',
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  {
    path: '/dozenten',
    label: 'Dozenten',
    priority: 0.7,
    changeFrequency: 'monthly',
    // Redirects to /unterricht (next.config.ts).
    inSitemap: false,
  },
  {
    path: '/veranstaltungen',
    label: 'Veranstaltungen',
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  {
    path: '/veranstaltungen/klein-montmartre',
    label: 'Klein-Montmartre',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/raeumlichkeiten',
    label: 'Räumlichkeiten',
    priority: 0.7,
    changeFrequency: 'yearly',
  },
  {
    path: '/verein',
    label: 'Verein',
    priority: 0.6,
    changeFrequency: 'yearly',
  },
  {
    path: '/kontakt',
    label: 'Kontakt',
    priority: 0.7,
    changeFrequency: 'yearly',
  },
  {
    path: '/impressum',
    label: 'Impressum',
    priority: 0.3,
    changeFrequency: 'yearly',
  },
  {
    path: '/datenschutz',
    label: 'Datenschutz',
    priority: 0.3,
    changeFrequency: 'yearly',
  },
];
