'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { indexableRoutes } from '@/content/routes';
import { findInstructor } from '@/lib/instructors';

/** Label for one path segment: the route label, an instructor name, or the segment itself. */
function labelFor(
  path: string,
  segment: string,
  index: number,
  segments: string[]
): string {
  const route = indexableRoutes.find((r) => r.path === path);
  if (route) return route.label;
  if (index === 1 && segments[0] === 'dozenten') {
    const instructor = findInstructor(segment);
    if (instructor) return instructor.name;
  }
  return segment.charAt(0).toUpperCase() + segment.slice(1);
}

/**
 * Trail from the home page to the current page, for example
 * "Startseite › Unterricht › Dozenten". Not shown on the home page.
 */
export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  // Teacher profile: Startseite › Unterricht › Dozenten › Name
  const isProfile = segments.length === 2 && segments[0] === 'dozenten';
  const items = isProfile
    ? [
        { label: 'Startseite', href: '/' },
        { label: 'Unterricht', href: '/unterricht' },
        { label: 'Dozenten', href: '/unterricht#dozenten' },
        { label: labelFor(pathname, segments[1], 1, segments), href: pathname },
      ]
    : [
        { label: 'Startseite', href: '/' },
        ...segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join('/')}`;
          return { label: labelFor(href, segment, index, segments), href };
        }),
      ];

  return (
    <nav
      aria-label="Brotkrumen"
      className="mx-auto w-full max-w-7xl px-4 pb-6 pt-6 sm:px-6 lg:px-8"
    >
      <ol
        className="flex flex-wrap items-center gap-2 text-base"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="text-[var(--color-text-faint)]"
                >
                  ›
                </span>
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  style={{ color: 'var(--color-text)' }}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="underline underline-offset-4 hover:opacity-75"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
