import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/structured-data';
import { pageMetadata } from '@/lib/metadata';
import { findInstructorByName, instructorSlug } from '@/lib/instructors';
import { weeklyCourses as WEEKLY_COURSES } from '@/content/weekly-courses';

export const metadata = pageMetadata({
  title: 'Wochenkurse | Salon77 - Würzburger Künstlerinitiative',
  description: 'Wöchentliche Kurse aus allen Kunstbereichen im Salon77',
  path: '/wochenkurse',
});

/** Teacher name, linked to the profile page when the teacher has one. */
function TeacherName({ name }: { name: string }) {
  if (!findInstructorByName(name)) return <>{name}</>;
  return (
    <Link
      href={`/dozenten/${instructorSlug(name)}`}
      className="underline-offset-4 hover:underline"
      style={{ color: 'var(--color-accent-text)' }}
    >
      {name}
    </Link>
  );
}

export default function Wochenkurse() {
  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbJsonLd('/wochenkurse')} />
      <div className="flex-1">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <h1 className="page-title" style={{ color: 'var(--color-text)' }}>
            Wochenkurse
          </h1>
          <p
            className="text-lg text-center mb-12"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Wöchentliche Kurse aus allen Kunstbereichen im Salon77
          </p>

          {/* Course Schedule */}
          <div className="space-y-12">
            {Object.entries(WEEKLY_COURSES).map(([day, courses], dayIndex) => (
              <div
                key={dayIndex}
                className="border-l-4 pl-6"
                style={{ borderColor: 'var(--color-accent)' }}
              >
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-6"
                  style={{ color: 'var(--color-accent-text)' }}
                >
                  {day}
                </h2>
                <div className="space-y-4">
                  {courses.map((item, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                    >
                      <div
                        className="font-semibold flex-shrink-0 min-w-[140px]"
                        style={{ color: 'var(--color-text)' }}
                      >
                        {item.time}
                      </div>
                      <div style={{ color: 'var(--color-text-muted)' }}>
                        {item.course}
                        {item.teacher && (
                          <>
                            {' mit '}
                            <TeacherName name={item.teacher} />
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-center mt-12 pt-8 border-t-2"
            style={{
              color: 'var(--color-text-muted)',
              borderColor: 'var(--color-border)',
            }}
          >
            Für weitere Informationen oder spezielle Anfragen kontaktieren Sie
            uns bitte direkt.
          </p>
        </div>
      </div>
    </div>
  );
}
