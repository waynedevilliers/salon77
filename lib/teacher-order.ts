import { courses } from '@/content/courses';
import { instructors, type Instructor } from '@/content/instructors';
import { weeklyCourses } from '@/content/weekly-courses';

// Owner's placements on top of the calculated order (see docs/DECISIONS.md,
// "Teacher order by weekly lessons"):
// - Robert Collomb arranges every guitar lesson with the student, so the
//   timetable cannot count them. He is placed 5th.
// - Andrea Kneis is always last.
const FIXED_POSITIONS: Record<string, number> = { 'Robert Collomb': 5 };
const ALWAYS_LAST = ['Andrea Kneis'];

/** Weekly lessons of a teacher in the Wochenkurse timetable. */
export function weeklyLessonCount(name: string): number {
  return Object.values(weeklyCourses)
    .flat()
    .filter((slot) =>
      (slot.teacher ?? '')
        .split(',')
        .map((teacher) => teacher.trim())
        .includes(name)
    ).length;
}

const lastName = (name: string) => name.split(' ').at(-1) ?? name;

const hasCourse = (name: string) =>
  courses.some((course) =>
    course.instructor
      .split(',')
      .map((teacher) => teacher.trim())
      .includes(name)
  );

/**
 * Teachers in list order: most weekly lessons first; same count by last name;
 * teachers without weekly lessons after them (those with a course by
 * arrangement first), then the owner's fixed placements.
 */
function orderTeachers(list: Instructor[]): Instructor[] {
  const calculated = list
    .filter(
      (teacher) =>
        !(teacher.name in FIXED_POSITIONS) &&
        !ALWAYS_LAST.includes(teacher.name)
    )
    .sort(
      (a, b) =>
        weeklyLessonCount(b.name) - weeklyLessonCount(a.name) ||
        Number(hasCourse(b.name)) - Number(hasCourse(a.name)) ||
        lastName(a.name).localeCompare(lastName(b.name), 'de')
    );

  for (const [name, position] of Object.entries(FIXED_POSITIONS)) {
    const teacher = list.find((t) => t.name === name);
    if (teacher) calculated.splice(position - 1, 0, teacher);
  }
  const last = ALWAYS_LAST.map((name) =>
    list.find((t) => t.name === name)
  ).filter((teacher): teacher is Instructor => Boolean(teacher));

  return [...calculated, ...last];
}

/** Every teacher, in the order used on every page. */
export const orderedInstructors = orderTeachers(instructors);
