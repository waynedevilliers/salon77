import InstructorCard from '@/components/InstructorCard';
import { instructors } from '@/content/instructors';

/**
 * The teacher grid, shown on the Unterricht page. Each card is one link to the
 * teacher's profile page.
 */
export default function TeacherSection() {
  return (
    <section id="dozenten" className="scroll-mt-24 pt-16">
      <h2 className="page-title" style={{ color: 'var(--color-text)' }}>
        Unsere Dozenten
      </h2>
      <p
        className="mb-12 text-center text-lg"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Erfahrene Künstler und Pädagogen, die ihre Leidenschaft weitergeben
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.name} instructor={instructor} />
        ))}
      </div>
    </section>
  );
}
