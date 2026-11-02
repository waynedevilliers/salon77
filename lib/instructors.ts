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
