import ActionLink from '@/components/ActionLink';
import { instructorSlug } from '@/lib/instructors';
import type { Instructor } from '@/content/instructors';

interface InstructorPagerProps {
  previous: Instructor;
  next: Instructor;
}

/**
 * Previous and next buttons for moving through the instructors. Large
 * buttons with arrows, one on each side, so they are easy to find.
 */
export default function InstructorPager({
  previous,
  next,
}: InstructorPagerProps) {
  return (
    <nav aria-label="Dozenten durchblättern" className="grid grid-cols-2 gap-4">
      <ActionLink
        href={`/dozenten/${instructorSlug(previous.name)}`}
        className="flex items-center justify-center gap-3 px-4 py-3 text-base sm:text-lg text-center"
      >
        <span aria-hidden="true" className="text-2xl leading-none">
          ←
        </span>
        <span className="min-w-0 truncate">{previous.name}</span>
      </ActionLink>
      <ActionLink
        href={`/dozenten/${instructorSlug(next.name)}`}
        className="flex items-center justify-center gap-3 px-4 py-3 text-base sm:text-lg text-center"
      >
        <span className="min-w-0 truncate">{next.name}</span>
        <span aria-hidden="true" className="text-2xl leading-none">
          →
        </span>
      </ActionLink>
    </nav>
  );
}
