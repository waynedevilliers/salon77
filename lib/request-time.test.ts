/// <reference types="vitest" />
import { connection } from 'next/server';
import { cacheLife } from 'next/cache';
import { getTodayIso } from './dates';
import { getCurrentYear } from './current-year';

vi.mock('next/server', () => ({ connection: vi.fn(async () => {}) }));
vi.mock('next/cache', () => ({ cacheLife: vi.fn() }));

describe('functions that read the clock', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2027-05-08T10:00:00Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('getTodayIso waits for the request and returns the ISO date', async () => {
    await expect(getTodayIso()).resolves.toBe('2027-05-08');
    expect(connection).toHaveBeenCalled();
  });

  it('getCurrentYear returns the year and is cached for days', async () => {
    await expect(getCurrentYear()).resolves.toBe(2027);
    expect(cacheLife).toHaveBeenCalledWith('days');
  });
});
