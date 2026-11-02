/// <reference types="vitest" />
import sitemap from './sitemap';
import { indexableRoutes } from '@/content/routes';

describe('sitemap', () => {
  it('lists every indexable route with an absolute URL', () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).toHaveLength(indexableRoutes.length);
    expect(urls).toContain('https://salon77.de/');
    expect(urls).toContain('https://salon77.de/kontakt');
  });

  it('leaves out the registration form', () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls.some((url) => url.endsWith('/anmelden'))).toBe(false);
  });
});
