import Link from 'next/link';
import InstructorPhoto from '@/components/InstructorPhoto';
import { instructorSlug } from '@/lib/instructors';
import type { Instructor } from '@/content/instructors';

export default function InstructorCard({
  instructor,
}: {
  instructor: Instructor;
}) {
  return (
    <Link
      href={`/dozenten/${instructorSlug(instructor.name)}`}
      className="group flex flex-col items-center transition-opacity hover:opacity-80"
    >
      <InstructorPhoto name={instructor.name} className="w-40 h-40 mb-4" />

      <h3
        className="text-lg sm:text-xl font-bold text-center group-hover:underline"
        style={{ color: 'var(--color-text)' }}
      >
        {instructor.name}
      </h3>
      <p
        className="text-sm text-center"
        style={{ color: 'var(--color-sage-text)' }}
      >
        {instructor.specialty}
      </p>
    </Link>
  );
}
