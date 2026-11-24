import Link from 'next/link';
import InstructorPhoto from '@/components/InstructorPhoto';
import { instructorSlug } from '@/lib/instructors';
import { courseDays, coursesOf } from '@/lib/teacher-courses';
import type { Instructor } from '@/content/instructors';

/**
 * Teacher card. Photo, name, subject and the teacher's courses (name and days)
 * are one link to the profile page, which has the full times.
 */
export default function InstructorCard({
  instructor,
}: {
  instructor: Instructor;
}) {
  const teacherCourses = coursesOf(instructor.name);

  return (
    <Link
      href={`/dozenten/${instructorSlug(instructor.name)}`}
      className="group flex h-full flex-col items-center rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-text)]"
    >
      <InstructorPhoto name={instructor.name} className="mb-4 h-40 w-40" />

      <h3
        className="text-center text-lg font-bold underline-offset-4 group-hover:underline sm:text-xl"
        style={{ color: 'var(--color-text)' }}
      >
        {instructor.name}
      </h3>
      <p
        className="text-center text-base"
        style={{ color: 'var(--color-sage-text)' }}
      >
        {instructor.specialty}
      </p>

      {teacherCourses.length > 0 && (
        <ul
          className="mt-3 space-y-1 text-center text-base"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {teacherCourses.map((course) => (
            <li key={course.title}>
              <span style={{ color: 'var(--color-text)' }}>{course.title}</span>{' '}
              · {courseDays(course.schedule)}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}
