// Fixed-window rate limiter kept in memory. It is per server instance, so it
// is a basic guard against bursts and spam, not a hard global limit.
const WINDOW_MS = 15 * 60 * 1000;
const DEFAULT_MAX_REQUESTS = 5;
// Upper bound on remembered visitors, so the map cannot grow without limit.
const MAX_KEYS = 10_000;

const hits = new Map<string, number[]>();

function prune(now: number): void {
  for (const [key, times] of hits) {
    if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(key);
  }
  // Still too many: drop the oldest entries (Map keeps insertion order).
  for (const key of hits.keys()) {
    if (hits.size < MAX_KEYS) break;
    hits.delete(key);
  }
}

/** Returns true when the key has used up its requests in the window. */
export function isRateLimited(
  key: string,
  now: number = Date.now(),
  max: number = DEFAULT_MAX_REQUESTS
): boolean {
  if (hits.size >= MAX_KEYS) prune(now);
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= max) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}

export function resetRateLimit(): void {
  hits.clear();
}

export function rateLimitSize(): number {
  return hits.size;
}

export const RATE_LIMIT_MAX_KEYS = MAX_KEYS;
