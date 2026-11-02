import Image from 'next/image';
import Link from 'next/link';
import type { HomeCard } from '@/content/home';

interface MenuCardProps extends HomeCard {
  /** Only the first card above the fold loads with priority. */
  priority?: boolean;
}

/**
 * One link for the whole card. The accessible name is the card title.
 * Hover effects apply only where hover is available, and not when the user
 * prefers reduced motion (motion-safe).
 */
export default function MenuCard({
  title,
  description,
  href,
  image,
  priority = false,
}: MenuCardProps) {
  const titleId = `card-title-${href.replace(/\//g, '')}`;

  return (
    <Link
      href={href}
      aria-labelledby={titleId}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-white transition-[transform,box-shadow] motion-safe:hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-text)] md:flex-row"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200 md:w-2/5 md:shrink-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(max-width: 599px) 100vw, (max-width: 1023px) 40vw, 360px"
          className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
          style={{ objectPosition: image.objectPosition }}
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4 md:p-5 lg:p-6">
        <h2
          id={titleId}
          className="font-bold leading-[1.3] text-xl sm:text-[21px] lg:text-2xl"
          style={{
            color: 'var(--color-heading)',
            fontFamily: 'var(--font-body)',
          }}
        >
          {title}
        </h2>
        <p
          className="text-base leading-[1.6]"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {description}
        </p>
        <span
          className="mt-auto inline-flex items-center gap-2 pt-2 text-[15px] font-bold"
          style={{ color: 'var(--color-accent-text)' }}
        >
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
