/// <reference types="vitest" />
import { formatGermanDate, nextUpcomingDate } from './dates';

describe('formatGermanDate', () => {
  it('formats an ISO date as day.month.year', () => {
    expect(formatGermanDate('2027-05-08')).toBe('08.05.2027');
  });
});

describe('nextUpcomingDate', () => {
  it('returns the first date that is today or later', () => {
    const today = new Date('2027-01-15T12:00:00Z');
    expect(nextUpcomingDate(['2027-10-02', '2027-05-08'], today)).toBe(
      '2027-05-08'
    );
  });

  it('returns undefined when every date has passed', () => {
    const today = new Date('2028-01-15T12:00:00Z');
    expect(
      nextUpcomingDate(['2027-10-02', '2027-05-08'], today)
    ).toBeUndefined();
  });
});
