import { courses } from '@/content/courses';
import { findInstructorByName } from '@/lib/instructors';

type Course = (typeof courses)[number];

/** Every course the teacher gives, in the order of content/courses.ts. */
export function coursesOf(teacherName: string): Course[] {
  return courses.filter((course) =>
    course.instructor
      .split(',')
      .map((name) => findInstructorByName(name.trim())?.name)
      .includes(teacherName)
  );
}

const weekdays = [
  ['Montag', 'Mo'],
  ['Dienstag', 'Di'],
  ['Mittwoch', 'Mi'],
  ['Donnerstag', 'Do'],
  ['Freitag', 'Fr'],
  ['Samstag', 'Sa'],
  ['Sonntag', 'So'],
] as const;

/**
 * Short days of a course schedule, in week order, for example "Mo, Do, Fr".
 * A schedule without a weekday ("Nach Vereinbarung") is returned as written.
 */
export function courseDays(schedule: string[]): string {
  const text = schedule.join(' ');
  const days = weekdays
    .filter(([day]) => text.includes(day))
    .map(([, short]) => short);
  return days.length > 0 ? days.join(', ') : schedule.join(', ');
}
