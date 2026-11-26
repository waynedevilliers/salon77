import { instructors, type Instructor } from '@/content/instructors';
import { weeklyCourses } from '@/content/weekly-courses';

// Andrea Kneis has no weekly courses and is always listed last (owner's
// choice, see docs/DECISIONS.md "Teacher order by weekly courses").
const ALWAYS_LAST = 'Andrea Kneis';

/** Weekly lessons of a teacher in the Wochenkurse timetable. */
export function weeklyLessonCount(name: string): number {
  return Object.values(weeklyCourses)
    .flat()
    .filter((slot) => slot.teacher === name).length;
}

const lastName = (name: string) => name.split(' ').at(-1) ?? name;

/**
 * Teachers with the most weekly lessons first; the same number by last name;
 * Andrea Kneis last. Calculated from the timetable, so it follows changes.
 */
export const orderedInstructors: Instructor[] = [...instructors].sort(
  (a, b) =>
    Number(a.name === ALWAYS_LAST) - Number(b.name === ALWAYS_LAST) ||
    weeklyLessonCount(b.name) - weeklyLessonCount(a.name) ||
    lastName(a.name).localeCompare(lastName(b.name), 'de')
);
