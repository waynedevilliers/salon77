import Link from 'next/link';
import InstructorPhoto from '@/components/InstructorPhoto';
import { instructorSlug } from '@/lib/instructors';
import type { Instructor } from '@/content/instructors';

/**
 * Teacher card. Photo, name and subject are one link to the profile page.
 */
export default function InstructorCard({
  instructor,
}: {
  instructor: Instructor;
}) {
  return (
    <Link
      href={`/dozenten/${instructorSlug(instructor.name)}`}
      className="group flex flex-col items-center rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-text)]"
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
    </Link>
  );
}
