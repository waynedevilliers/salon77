/**
 * URL slug for a course title, for example "Kindertanz & -Ballett" ->
 * "kindertanz-ballett". Umlauts become ae, oe, ue and ss.
 */
export function courseSlug(title: string): string {
  return title
    .normalize('NFC')
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
