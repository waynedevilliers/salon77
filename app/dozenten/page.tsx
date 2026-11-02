import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/structured-data';
import { pageMetadata } from '@/lib/metadata';
import InstructorCard from '@/components/InstructorCard';
import { instructors } from '@/content/instructors';

export const metadata = pageMetadata({
  title: 'Dozenten | Salon77 - Würzburger Künstlerinitiative',
  description: 'Unsere Dozenten und Künstler bei Salon77',
  path: '/dozenten',
});

export default function Dozenten() {
  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbJsonLd('/dozenten')} />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1 className="page-title" style={{ color: 'var(--color-text)' }}>
            Unsere Dozenten
          </h1>
          <p
            className="text-lg text-center mb-12"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Erfahrene Künstler und Pädagogen, die ihre Leidenschaft weitergeben
          </p>

          {/* Instructors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor) => (
              <InstructorCard key={instructor.name} instructor={instructor} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
