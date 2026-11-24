/**
 * Identifies the visitor for rate limiting.
 *
 * Assumes the site runs on Vercel, which overwrites x-forwarded-for with the
 * visitor's address. The last entry is used, because earlier entries could be
 * sent by the visitor. Behind another proxy or CDN the last entry would be the
 * proxy, so revisit this before moving host (see docs/DECISIONS.md).
 *
 * x-real-ip is not used: without a proxy that overwrites it, a visitor could
 * send a new value on every request and avoid the limit.
 *
 * Returns null when no address is known, so the caller uses the shared bucket.
 */
export function clientKey(headers: Headers): string | null {
  const entries =
    headers
      .get('x-forwarded-for')
      ?.split(',')
      .map((entry) => entry.trim())
      .filter(Boolean) ?? [];
  return entries.at(-1) ?? null;
}
