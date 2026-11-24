import { instructors } from '@/content/instructors';
import { orderedInstructors, weeklyLessonCount } from './teacher-order';

const names = orderedInstructors.map((teacher) => teacher.name);

describe('teacher order', () => {
  it('counts weekly lessons from the Wochenkurse timetable', () => {
    expect(weeklyLessonCount('Hsiu-Yun Lu')).toBe(8);
    expect(weeklyLessonCount('Mercedes Sebald Arguisuelas')).toBe(3);
    expect(weeklyLessonCount('André Mabiala')).toBe(1);
    expect(weeklyLessonCount('Andrea Kneis')).toBe(0);
  });

  it('follows the number of weekly lessons in the real course data', () => {
    const counted = names
      .filter((name) => !['Robert Collomb', 'Andrea Kneis'].includes(name))
      .map(weeklyLessonCount);
    expect(counted).toEqual([...counted].sort((a, b) => b - a));
  });

  it('puts teachers without weekly lessons after those with lessons', () => {
    const firstWithout = names.findIndex(
      (name) => name !== 'Robert Collomb' && weeklyLessonCount(name) === 0
    );
    expect(
      names.slice(firstWithout).every((name) => weeklyLessonCount(name) === 0)
    ).toBe(true);
  });

  it("places Robert Collomb 5th and Andrea Kneis last (owner's choice)", () => {
    expect(names[4]).toBe('Robert Collomb');
    expect(names.at(-1)).toBe('Andrea Kneis');
  });

  it('keeps every teacher, each once', () => {
    expect(names).toHaveLength(instructors.length);
    expect(new Set(names)).toEqual(new Set(instructors.map((t) => t.name)));
  });

  it('gives the full order', () => {
    expect(names).toEqual([
      'Hsiu-Yun Lu',
      'Mercedes Sebald Arguisuelas',
      'Stefanie Koch',
      'Asami Krisan',
      'Robert Collomb',
      'André Mabiala',
      'Simon Ort',
      'Norbert Schmelz',
      'Michael Röthlein',
      'Andrea Kneis',
    ]);
  });
});
