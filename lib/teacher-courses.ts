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

/**
 * Courses grouped per teacher for the course grid on /unterricht: one group,
 * and so one card, per teacher, at the place of the teacher's first course.
 */
export function courseGroups(): Course[][] {
  const groups = new Map<string, Course[]>();
  for (const course of courses) {
    const group = groups.get(course.instructor) ?? [];
    group.push(course);
    groups.set(course.instructor, group);
  }
  return [...groups.values()];
}
