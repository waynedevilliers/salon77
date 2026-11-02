import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import InstructorPhoto from '@/components/InstructorPhoto';
import InstructorPager from '@/components/InstructorPager';
import { instructors } from '@/content/instructors';
import {
  findInstructor,
  getAdjacentInstructors,
  instructorSlug,
} from '@/lib/instructors';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbJsonLd } from '@/lib/structured-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return instructors.map((instructor) => ({
    slug: instructorSlug(instructor.name),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const instructor = findInstructor(slug);
  if (!instructor) return {};

  return pageMetadata({
    title: `${instructor.name} | Dozenten | Salon77 - Würzburger Künstlerinitiative`,
    description:
      instructor.bio?.slice(0, 160) ??
      `${instructor.name} unterrichtet ${instructor.specialty} bei Salon77 in Würzburg.`,
    path: `/dozenten/${slug}`,
  });
}

export default async function InstructorPage({ params }: PageProps) {
  const { slug } = await params;
  const instructor = findInstructor(slug);
  const adjacent = getAdjacentInstructors(slug);
  if (!instructor || !adjacent) notFound();

  const pager = (
    <InstructorPager previous={adjacent.previous} next={adjacent.next} />
  );

  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbJsonLd(`/dozenten/${slug}`, instructor.name)} />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] gap-8 md:gap-12">
            {/* Left column: photo and contact */}
            <aside className="flex flex-col items-center gap-6">
              <InstructorPhoto name={instructor.name} className="w-56 h-56" />

              <ul className="space-y-3 w-full max-w-xs text-center">
                {instructor.phone && (
                  <li className="flex justify-center">
                    <a
                      href={`tel:${instructor.phone.replace(/[^\d+]/g, '')}`}
                      className="inline-flex items-center gap-3 hover:opacity-75 break-all"
                      style={{ color: 'var(--color-text)' }}
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                      </svg>
                      <span>{instructor.phone}</span>
                    </a>
                  </li>
                )}
                {instructor.email && (
                  <li className="flex justify-center">
                    <a
                      href={`mailto:${instructor.email}`}
                      className="inline-flex items-center gap-3 hover:opacity-75 break-all"
                      style={{ color: 'var(--color-text)' }}
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 6-10 7L2 6" />
                      </svg>
                      <span>{instructor.email}</span>
                    </a>
                  </li>
                )}
                {instructor.website && (
                  <li className="flex justify-center">
                    <a
                      href={instructor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 underline hover:opacity-75 break-all"
                      style={{ color: 'var(--color-text)' }}
                    >
                      Website besuchen
                    </a>
                  </li>
                )}
              </ul>
            </aside>

            {/* Right column: name, specialty and biography */}
            <article>
              <h1
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: 'var(--color-text)' }}
              >
                {instructor.name}
              </h1>
              <p
                className="text-lg font-semibold mb-6"
                style={{ color: 'var(--color-primary)' }}
              >
                {instructor.specialty}
              </p>

              {instructor.bio &&
                instructor.bio.split('\n\n').map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-base sm:text-lg leading-relaxed mb-4"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {paragraph}
                  </p>
                ))}
            </article>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-6">
            {pager}
            <p className="text-center">
              <Link
                href="/dozenten"
                className="underline hover:opacity-75"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Alle Dozenten
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
