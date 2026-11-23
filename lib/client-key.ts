/**
 * Identifies the visitor for rate limiting. The last address in
 * x-forwarded-for is the one the host's proxy added; earlier entries are sent
 * by the visitor and can be anything, so they are not used.
 */
export function clientKey(headers: Headers): string {
  const entries =
    headers
      .get('x-forwarded-for')
      ?.split(',')
      .map((entry) => entry.trim())
      .filter(Boolean) ?? [];
  return entries.at(-1) || headers.get('x-real-ip') || 'unknown';
}
