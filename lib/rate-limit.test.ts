import {
  RATE_LIMIT_MAX_KEYS,
  isRateLimited,
  rateLimitSize,
  resetRateLimit,
} from './rate-limit';

const T0 = 1_000_000;
const FIFTEEN_MINUTES = 15 * 60 * 1000;

beforeEach(() => {
  resetRateLimit();
});

describe('isRateLimited', () => {
  it('allows five requests in a window and blocks the sixth', () => {
    for (let i = 0; i < 5; i++) expect(isRateLimited('a', T0 + i)).toBe(false);
    expect(isRateLimited('a', T0 + 5)).toBe(true);
  });

  it('counts each key separately', () => {
    for (let i = 0; i < 5; i++) isRateLimited('a', T0 + i);
    expect(isRateLimited('b', T0 + 5)).toBe(false);
  });

  it('allows requests again once the window has passed', () => {
    for (let i = 0; i < 5; i++) isRateLimited('a', T0 + i);
    expect(isRateLimited('a', T0 + FIFTEEN_MINUTES + 10)).toBe(false);
  });

  it('uses a higher limit when one is passed', () => {
    for (let i = 0; i < 20; i++)
      expect(isRateLimited('x', T0 + i, 20)).toBe(false);
    expect(isRateLimited('x', T0 + 20, 20)).toBe(true);
  });

  it('never remembers more visitors than the cap', () => {
    for (let i = 0; i < RATE_LIMIT_MAX_KEYS + 50; i++) {
      isRateLimited(`visitor-${i}`, T0 + i);
    }
    expect(rateLimitSize()).toBeLessThanOrEqual(RATE_LIMIT_MAX_KEYS);
  });

  it('forgets visitors whose window has passed', () => {
    for (let i = 0; i < RATE_LIMIT_MAX_KEYS; i++) isRateLimited(`old-${i}`, T0);
    isRateLimited('new', T0 + FIFTEEN_MINUTES + 1);
    expect(rateLimitSize()).toBe(1);
  });
});
