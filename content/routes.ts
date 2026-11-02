export interface SiteRoute {
  path: string;
  priority: number;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
}

/** Pages that search engines should index. Forms and legal pages noted. */
export const indexableRoutes: SiteRoute[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/uebersicht', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/unterricht', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/wochenkurse', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/dozenten', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/veranstaltungen', priority: 0.8, changeFrequency: 'weekly' },
  {
    path: '/veranstaltungen/klein-montmartre',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  { path: '/raeumlichkeiten', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/verein', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/kontakt', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/impressum', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/datenschutz', priority: 0.3, changeFrequency: 'yearly' },
];
