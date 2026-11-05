/// <reference types="vitest" />
import {
  formatGermanDate,
  formatGermanWeekdayDate,
  nextUpcomingDate,
  upcomingDates,
} from './dates';

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

describe('formatGermanWeekdayDate', () => {
  it('adds the German weekday', () => {
    expect(formatGermanWeekdayDate('2027-05-08')).toBe('Samstag, 08.05.2027');
  });
});

describe('upcomingDates', () => {
  it('hides a past date and shows a future date', () => {
    expect(upcomingDates(['2027-10-02', '2027-05-08'], '2027-06-01')).toEqual([
      '2027-10-02',
    ]);
  });

  it('keeps today and lists dates earliest first', () => {
    expect(upcomingDates(['2027-10-02', '2027-05-08'], '2027-05-08')).toEqual([
      '2027-05-08',
      '2027-10-02',
    ]);
  });
});
