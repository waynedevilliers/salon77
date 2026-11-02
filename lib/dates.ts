import { cacheLife } from 'next/cache';

/** Formats an ISO date (2027-05-08) as German (08.05.2027). */
export function formatGermanDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-');
  return `${day}.${month}.${year}`;
}

/**
 * Today's date as an ISO string. Cached for a day, so pages can be prerendered
 * without reading the clock on every build.
 */
export async function getTodayIso(): Promise<string> {
  'use cache';
  cacheLife('days');
  return new Date().toISOString().slice(0, 10);
}

/** The first ISO date that is today or later, or undefined if all have passed. */
export function nextUpcomingDate(
  isoDates: string[],
  todayIso: string
): string | undefined {
  return [...isoDates].sort().find((date) => date >= todayIso);
}
