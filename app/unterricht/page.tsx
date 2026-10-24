import { Metadata } from 'next';
import CourseCard from '@/components/CourseCard';

export const metadata: Metadata = {
  title: 'Unterricht | Salon77 - Würzburger Künstlerinitiative',
  description:
    'Entdecke unsere umfangreiche Auswahl an Kursen und Unterricht in Tanz, Musik, Fotografie und mehr.',
};

const COURSES = [
  {
    title: 'Kindertanz',
    description:
      'Spielerischer Einstieg in die Welt des Tanzens für Kinder. Entwicklung von Körperbewusstsein und Rhythmusgefühl.',
  },
  {
    title: 'Balai Chalet',
    description:
      'Traditioneller Tanzstil mit modernen Elementen. Perfekt für Tänzer aller Niveaus.',
  },
  {
    title: 'Flamenco',
    description:
      'Leidenschaftliche spanische Tanzkunst mit authentischen Techniken und Rhythmen.',
  },
  {
    title: 'Gitarre',
    description:
      'Grundlagen und fortgeschrittene Techniken auf der Gitarre. Für Anfänger bis Fortgeschrittene.',
  },
  {
    title: 'Bass',
    description:
      'Erlernen Sie die Bassgitarre und entwickeln Sie ein starkes Rhythmusgefühl.',
  },
  {
    title: 'Akkordeon',
    description:
      'Klassisches Instrument mit vielseitigen Einsatzmöglichkeiten in verschiedenen Musikgenres.',
  },
  {
    title: 'DJ',
    description:
      'Grundlagen des DJing und elektronischen Musikmischen. Moderne Ausrüstung und Techniken.',
  },
  {
    title: 'Musik Production',
    description:
      'Produktion eigener Musik von der Komposition bis zur Finalisierung im Studio.',
  },
  {
    title: 'Fotografie',
    description:
      'Lerne die Kunst der Fotografie. Von Grundlagen bis zur professionellen Nachbearbeitung.',
  },
  {
    title: 'Modern Tanz',
    description:
      'Zeitgenössischer Tanzstil mit Fokus auf Ausdruck, Bewegungsfluss und Kreativität.',
  },
  {
    title: 'Tai Chi',
    description:
      'Traditionelle chinesische Bewegungskunst für Gesundheit, Balance und innere Ruhe.',
  },
];

export default function Unterricht() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12"
            style={{ color: '#2c2c2c' }}
          >
            Unterricht & Kurse
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {COURSES.map((course) => (
              <CourseCard
                key={course.title}
                title={course.title}
                description={course.description}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
