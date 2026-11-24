import { coursesOf } from './teacher-courses';

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
