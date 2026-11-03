import Link from 'next/link';
import { instructorSlug } from '@/lib/instructors';
import type { Instructor } from '@/content/instructors';

interface InstructorPagerProps {
  previous: Instructor;
  next: Instructor;
}

/**
 * Previous and next teacher as small text links with arrows.
 */
export default function InstructorPager({
  previous,
  next,
}: InstructorPagerProps) {
  const linkClass =
    'text-base font-bold underline underline-offset-4 hover:opacity-75';
  const linkStyle = { color: 'var(--color-accent-text)' };

  return (
    <nav
      aria-label="Weitere Dozenten"
      className="flex items-center justify-between gap-4"
    >
      <Link
        href={`/dozenten/${instructorSlug(previous.name)}`}
        className={linkClass}
        style={linkStyle}
      >
        <span aria-hidden="true">←</span> {previous.name}
      </Link>
      <Link
        href={`/dozenten/${instructorSlug(next.name)}`}
        className={linkClass}
        style={linkStyle}
      >
        {next.name} <span aria-hidden="true">→</span>
      </Link>
    </nav>
  );
}
