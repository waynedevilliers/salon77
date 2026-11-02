import { instructors, type Instructor } from '@/content/instructors';

/**
 * URL slug and photo file name for an instructor, for example
 * "Hsiu-Yun Lu" -> "hsiu-yun-lu". Composed Unicode, so "ö" in the name
 * matches the file name in public/salon77/dozenten.
 */
export function instructorSlug(name: string): string {
  return name.normalize('NFC').toLowerCase().replace(/\s+/g, '-');
}

export function findInstructor(slug: string): Instructor | undefined {
  return instructors.find(
    (instructor) => instructorSlug(instructor.name) === slug
  );
}

/**
 * The instructors before and after the given one in list order, wrapping
 * around at both ends, so the pager can always move in both directions.
 */
export function getAdjacentInstructors(slug: string): {
  previous: Instructor;
  next: Instructor;
} | null {
  const index = instructors.findIndex(
    (instructor) => instructorSlug(instructor.name) === slug
  );
  if (index === -1) return null;

  const count = instructors.length;
  return {
    previous: instructors[(index - 1 + count) % count],
    next: instructors[(index + 1) % count],
  };
}
