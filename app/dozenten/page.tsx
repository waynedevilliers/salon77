import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/structured-data';
import { pageMetadata } from '@/lib/metadata';
import InstructorCard from '@/components/InstructorCard';

export const metadata = pageMetadata({
  title: 'Dozenten | Salon77 - Würzburger Künstlerinitiative',
  description: 'Unsere Dozenten und Künstler bei Salon77',
  path: '/dozenten',
});

const INSTRUCTORS = [
  { name: 'André Mabiala', specialty: 'Afrikanisches Trommeln' },
  { name: 'Andrea Kneis', specialty: 'Gesang' },
  { name: 'Asami Krisan', specialty: 'Ballett' },
  { name: 'Hsiu-Yun Lu', specialty: 'Zeitgenössischer Tanz, Taiji, Kindertanz' },
  { name: 'Mercedes Sebald Arguisuelas', specialty: 'Flamenco' },
  { name: 'Michael Röthlein', specialty: 'Taiko' },
  { name: 'Norbert Schmelz', specialty: 'Fotografie' },
  { name: 'Robert Collomb', specialty: 'Gitarrenunterricht' },
  { name: 'Simon Ort', specialty: 'Bass' },
  { name: 'Stefanie Koch', specialty: 'Akkordeon' },
];

export default function Dozenten() {
  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbJsonLd('/dozenten')} />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center"
            style={{ color: '#2c2c2c' }}
          >
            Unsere Dozenten
          </h1>
          <p
            className="text-lg text-center mb-12"
            style={{ color: '#666666' }}
          >
            Erfahrene Künstler und Pädagogen, die ihre Leidenschaft weitergeben
          </p>

          {/* Instructors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {INSTRUCTORS.map((instructor, index) => (
              <InstructorCard key={index} instructor={instructor} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
