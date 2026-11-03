import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/structured-data';
import { pageMetadata } from '@/lib/metadata';
import CourseCard from '@/components/CourseCard';
import Reveal from '@/components/Reveal';
import TeacherSection from '@/components/TeacherSection';
import { courses as COURSES } from '@/content/courses';

export const metadata = pageMetadata({
  title: 'Unterricht | Salon77 - Würzburger Künstlerinitiative',
  description:
    'Entdecke unsere umfangreiche Auswahl an Kursen und Unterricht in Tanz, Musik, Fotografie und mehr.',
  path: '/unterricht',
});

export default function Unterricht() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={breadcrumbJsonLd('/unterricht')} />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <h1 className="page-title" style={{ color: 'var(--color-text)' }}>
            Unterricht & Kurse
          </h1>

          <nav
            aria-label="Auf dieser Seite"
            className="mb-12 flex flex-wrap justify-center gap-x-8 gap-y-2 text-lg"
          >
            <a
              href="#kurse"
              className="font-bold underline underline-offset-4 hover:opacity-75"
              style={{ color: 'var(--color-accent-text)' }}
            >
              Kurse
            </a>
            <a
              href="#dozenten"
              className="font-bold underline underline-offset-4 hover:opacity-75"
              style={{ color: 'var(--color-accent-text)' }}
            >
              Unsere Dozenten
            </a>
          </nav>

          <section id="kurse" className="scroll-mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {COURSES.map((course) => (
                <Reveal key={course.title} className="h-full">
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    schedule={course.schedule}
                    instructor={course.instructor}
                  />
                </Reveal>
              ))}
            </div>
          </section>

          <TeacherSection />
        </div>
      </main>
    </div>
  );
}
