import { courses } from '@/content/courses';

type Course = (typeof courses)[number];

/**
 * Courses grouped per teacher for /unterricht: one group, and so one card, per
 * teacher, at the place of the teacher's first course. Order otherwise as in
 * content/courses.ts.
 */
export function courseCardsByTeacher(): Course[][] {
  const groups = new Map<string, Course[]>();
  for (const course of courses) {
    groups.set(course.instructor, [
      ...(groups.get(course.instructor) ?? []),
      course,
    ]);
  }
  return [...groups.values()];
}
