import { cacheLife } from 'next/cache';

/**
 * Current year for the copyright line. It is cached for a day, so the
 * prerendered pages can include it without reading the clock on each build.
 */
export async function getCurrentYear(): Promise<number> {
  'use cache';
  cacheLife('days');
  return new Date().getFullYear();
}
