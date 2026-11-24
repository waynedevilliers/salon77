import { courses } from '@/content/courses';
import { courseCardsByTeacher } from './course-cards';

describe('courseCardsByTeacher', () => {
  const groups = courseCardsByTeacher();

  it('gives every teacher exactly one card', () => {
    const teachers = groups.map((group) => group[0].instructor);
    expect(new Set(teachers).size).toBe(teachers.length);
  });

  it("puts all of Hsiu-Yun Lu's courses on her one card", () => {
    const cards = groups.filter(
      (group) => group[0].instructor === 'Hsiu-Yun Lu'
    );
    expect(cards).toHaveLength(1);
    expect(cards[0].map((course) => course.title)).toEqual([
      'Kindertanz & -Ballett',
      'Moderner Tanz: Zeitgenössischer Tanz',
      'Taiji',
    ]);
  });

  it('keeps every course', () => {
    expect(groups.flat()).toHaveLength(courses.length);
  });
});
