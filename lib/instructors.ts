import { instructors, type Instructor } from '@/content/instructors';

/**
 * URL slug and photo file name for an instructor, for example
 * "Hsiu-Yun Lu" -> "hsiu-yun-lu". Umlauts become ae, oe, ue, ss, as the
 * site standard requires for German URLs. Photos use the same name.
 */
export function instructorSlug(name: string): string {
  return name
    .normalize('NFC')
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/\s+/g, '-');
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

/**
 * The instructor profile for a name as written on course cards. Course cards
 * sometimes use a shorter name ("Mercedes Sebald"), so a prefix match is used.
 * Returns undefined when there is no profile page.
 */
export function findInstructorByName(name: string): Instructor | undefined {
  return instructors.find(
    (instructor) =>
      instructor.name === name || instructor.name.startsWith(`${name} `)
  );
}
