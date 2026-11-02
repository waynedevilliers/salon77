/** Formats an ISO date (2027-05-08) as German (08.05.2027). */
export function formatGermanDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-');
  return `${day}.${month}.${year}`;
}

/** The first ISO date that is today or later, or undefined if all have passed. */
export function nextUpcomingDate(
  isoDates: string[],
  today: Date = new Date()
): string | undefined {
  const todayIso = today.toISOString().slice(0, 10);
  return [...isoDates].sort().find((date) => date >= todayIso);
}
