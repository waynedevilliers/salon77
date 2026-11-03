import { connection } from 'next/server';

/** Formats an ISO date (2027-05-08) as German (08.05.2027). */
export function formatGermanDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-');
  return `${day}.${month}.${year}`;
}

/**
 * Today's date as an ISO string, read on every request. The home page depends
 * on it, so it is rendered per request rather than prerendered.
 */
export async function getTodayIso(): Promise<string> {
  // Read per request, so an event is never shown after its date has passed.
  await connection();
  return new Date().toISOString().slice(0, 10);
}

/** The first ISO date that is today or later, or undefined if all have passed. */
export function nextUpcomingDate(
  isoDates: string[],
  todayIso: string
): string | undefined {
  return [...isoDates].sort().find((date) => date >= todayIso);
}
