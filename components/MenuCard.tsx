import Link from 'next/link';
import Image from 'next/image';
import type { HomeCard } from '@/content/home';

/**
 * Home page card. The whole card is one link, so there are no nested links and
 * the accessible name is the card title.
 */
export default function MenuCard({
  title,
  description,
  href,
  image,
}: HomeCard) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-[transform,box-shadow] duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-text)] motion-safe:hover:-translate-y-1"
    >
      <div className="relative h-64 overflow-hidden bg-gray-200 sm:h-72">
        <Image
          src={image.src}
          alt={image.alt}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3
          className="text-xl font-semibold sm:text-2xl"
          style={{ color: 'var(--color-accent-text)' }}
        >
          {title}
        </h3>
        <p
          className="text-base leading-[var(--line-body)]"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {description}
        </p>
        <span className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[var(--color-accent)] px-6 py-3 text-base font-bold text-[var(--color-button-text)] transition-colors duration-200">
          Mehr erfahren
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
