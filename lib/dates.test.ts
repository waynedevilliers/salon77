/// <reference types="vitest" />
import { formatGermanDate, nextUpcomingDate } from './dates';

describe('formatGermanDate', () => {
  it('formats an ISO date as day.month.year', () => {
    expect(formatGermanDate('2027-05-08')).toBe('08.05.2027');
  });
});

describe('nextUpcomingDate', () => {
  it('returns the first date that is today or later', () => {
    expect(nextUpcomingDate(['2027-10-02', '2027-05-08'], '2027-01-15')).toBe(
      '2027-05-08'
    );
  });

  it('returns undefined when every date has passed', () => {
    expect(
      nextUpcomingDate(['2027-10-02', '2027-05-08'], '2028-01-15')
    ).toBeUndefined();
  });
});
