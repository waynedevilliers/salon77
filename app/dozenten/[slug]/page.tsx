import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import InstructorPhoto from '@/components/InstructorPhoto';
import BackButton from '@/components/BackButton';
import { instructors } from '@/content/instructors';
import { findInstructor, instructorSlug } from '@/lib/instructors';
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
  if (!instructor) notFound();

  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbJsonLd(`/dozenten/${slug}`, instructor.name)} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col items-center text-center mb-10">
            <InstructorPhoto
              name={instructor.name}
              className="w-56 h-56 mb-6"
            />
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3"
              style={{ color: 'var(--color-text)' }}
            >
              {instructor.name}
            </h1>
            <p
              className="text-lg font-semibold"
              style={{ color: 'var(--color-primary)' }}
            >
              {instructor.specialty}
            </p>
          </div>

          {instructor.bio && (
            <section className="space-y-4 mb-10">
              {instructor.bio.split('\n\n').map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {paragraph}
                </p>
              ))}
            </section>
          )}

          {instructor.website && (
            <p className="mb-10 text-center">
              <a
                href={instructor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-75"
                style={{ color: 'var(--color-primary)' }}
              >
                Website von {instructor.name}
              </a>
            </p>
          )}

          <div className="flex flex-col items-center gap-4 pt-8 border-t border-gray-200">
            <Link
              href="/dozenten"
              className="underline hover:opacity-75"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Alle Dozenten
            </Link>
            <BackButton />
          </div>
        </div>
      </main>
    </div>
  );
}
