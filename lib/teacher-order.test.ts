import { instructors } from '@/content/instructors';
import { orderedInstructors, weeklyLessonCount } from './teacher-order';

const names = orderedInstructors.map((teacher) => teacher.name);

describe('teacher order', () => {
  it('counts weekly lessons in the Wochenkurse timetable', () => {
    expect(weeklyLessonCount('Hsiu-Yun Lu')).toBe(8);
    expect(weeklyLessonCount('Mercedes Sebald Arguisuelas')).toBe(3);
    expect(weeklyLessonCount('André Mabiala')).toBe(1);
    expect(weeklyLessonCount('Andrea Kneis')).toBe(0);
  });

  it('puts the teachers with the most weekly lessons first', () => {
    const counts = names.slice(0, -1).map(weeklyLessonCount);
    expect(counts).toEqual([...counts].sort((a, b) => b - a));
  });

  it('puts Andrea Kneis last', () => {
    expect(names.at(-1)).toBe('Andrea Kneis');
  });

  it('keeps every teacher, each once', () => {
    expect(new Set(names)).toEqual(new Set(instructors.map((t) => t.name)));
    expect(names).toHaveLength(instructors.length);
  });

  it('gives this order with the current timetable', () => {
    expect(names).toEqual([
      'Hsiu-Yun Lu',
      'Mercedes Sebald Arguisuelas',
      'Stefanie Koch',
      'Asami Krisan',
      'André Mabiala',
      'Robert Collomb',
      'Simon Ort',
      'Michael Röthlein',
      'Norbert Schmelz',
      'Andrea Kneis',
    ]);
  });
});
