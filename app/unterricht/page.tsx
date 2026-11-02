import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/structured-data';
import { pageMetadata } from '@/lib/metadata';
import CourseCard from '@/components/CourseCard';

export const metadata = pageMetadata({
  title: 'Unterricht | Salon77 - Würzburger Künstlerinitiative',
  description:
    'Entdecke unsere umfangreiche Auswahl an Kursen und Unterricht in Tanz, Musik, Fotografie und mehr.',
  path: '/unterricht',
});

const COURSES = [
  {
    title: 'Kindertanz & -Ballett',
    description:
      'Kreativer Kindertanz (4-5 Jahre) mit Pre-Ballett-Übungen. Modernes Kinderballett (ab 5 Jahre) mit Grundlagen des Balletts. Fördert Koordination, Beweglichkeit, Kreativität und Sozialkompetenz.',
    schedule: 'Montags, Donnerstags und Freitags ab 15 Uhr',
    instructor: 'Hsiu-Yun Lu',
  },
  {
    title: 'Ballett für Erwachsene',
    description:
      'Klassisches Ballett mit strengen Formen der Disziplin und Körperbeherrschung. Verbessert Körperhaltung, Konzentration und Koordination. Fördert Körperbewusstsein, Selbstvertrauen und reduziert Stress.',
    schedule: 'Montags und Freitags ab 18:00 Uhr',
    instructor: 'Asami Krisan',
  },
  {
    title: 'Flamenco',
    description:
      'Flamenco als Kunstform mit Fokus auf Verständnis und Flexibilität. Ausdruck von Emotionen durch Tanz, Gesang und Gitarre.',
    schedule: 'Dienstags und Freitags ab 18:00 Uhr',
    instructor: 'Mercedes Sebald',
  },
  {
    title: 'Gitarre',
    description:
      'Gitarrenunterricht für Kinder, Teenager und Erwachsene. Stilrichtungen: Rock, Pop, Liedbegleitung, Klassik und Flamenco. Einzel- und Gruppenunterricht. Kostenlose Probestunde.',
    schedule: 'Nach Vereinbarung',
    instructor: 'Robert Collomb',
  },
  {
    title: 'Bass',
    description:
      'Bassunterricht für alle Levels. Einzelunterricht mit professioneller Anleitung. Flexibles Lernen an der Bassgitarre.',
    schedule: 'Montags und Freitags ab 14 Uhr',
    instructor: 'Simon Ort',
  },
  {
    title: 'Akkordeon',
    description:
      'Akkordeonunterricht in Kleingruppen. Erlernen Sie die drei Säulen der Musik: Melodie, Harmonie und Rhythmus. Stilrichtungen: Klassik, Pop, Musette, Swing. Fördert Gedächtnis, Konzentration und logisches Denken.',
    schedule: 'Nach Absprache',
    instructor: 'Stefanie Koch',
  },
  {
    title: 'DJing & Musikproduktion',
    description:
      'Lerne professionelles DJing und Musikproduktion. Von den Basics bis zum Profi Level. Praktische Workshops mit modernen Techniken und Equipment.',
    schedule: 'Nach Absprache',
    instructor: 'Sebastian Kandert, Fabio Cassarino',
  },
  {
    title: 'Fotografie',
    description:
      'Fotografie und Bildgestaltung. Erlernen Sie die Grundlagen und Techniken der professionellen Fotografie mit praktischen Workshops.',
    schedule: 'Workshops nach Vereinbarung',
    instructor: 'Norbert Schmelz',
  },
  {
    title: 'Modern Tanz: Zeitgenössischer Tanz',
    description:
      'Künstlerischer Tanz für Erwachsene. Erkunden Sie Ihr Bewegungspotential durch Atemübungen, Yin-Yang-Prinzipien und Tanzkomposition. Mit Pilates kombiniert. Für alle Altersstufen.',
    schedule: 'Donnerstags ab 18:00 Uhr',
    instructor: 'Hsiu-Yun Lu',
  },
  {
    title: 'Taiji',
    description:
      'Meditation in Bewegung. Sanfte, fließende Bewegungen für Körper und Seele. Fokus auf Atmung, Körperenergie und inneres Wohlbefinden. Daoyin-Übungen für erweiterte Körperräume.',
    schedule: 'Freitags um 10:30 Uhr',
    instructor: 'Hsiu-Yun Lu',
  },
];

export default function Unterricht() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={breadcrumbJsonLd('/unterricht')} />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <h1 className="page-title" style={{ color: 'var(--color-text)' }}>
            Unterricht & Kurse
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {COURSES.map((course) => (
              <CourseCard
                key={course.title}
                title={course.title}
                description={course.description}
                schedule={course.schedule}
                instructor={course.instructor}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
