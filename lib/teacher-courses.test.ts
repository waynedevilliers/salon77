import { courseDays, coursesOf } from './teacher-courses';

describe('coursesOf', () => {
  it('finds every course of Hsiu-Yun Lu in the course data', () => {
    expect(coursesOf('Hsiu-Yun Lu').map((course) => course.title)).toEqual([
      'Kindertanz & -Ballett',
      'Moderner Tanz: Zeitgenössischer Tanz',
      'Pilates',
      'Taiji',
    ]);
  });

  it('is empty for a teacher without courses', () => {
    expect(coursesOf('Andrea Kneis')).toEqual([]);
  });
});

describe('courseDays', () => {
  it('lists the days once each, in week order', () => {
    expect(
      courseDays([
        'Freitags 15:00 - 16:20 Uhr',
        'Montags 15:50 - 17:00 Uhr',
        'Donnerstags 16:30 - 17:20 Uhr',
        'Montags 18:10 - 19:20 Uhr',
      ])
    ).toBe('Mo, Do, Fr');
  });

  it('reads two days in one line', () => {
    expect(courseDays(['Montags und Freitags ab 14:00 Uhr'])).toBe('Mo, Fr');
  });

  it('keeps a schedule without a weekday as written', () => {
    expect(courseDays(['Nach Vereinbarung'])).toBe('Nach Vereinbarung');
  });
});
