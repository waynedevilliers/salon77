import Link from 'next/link';
import { site } from '@/content/site';

interface FooterProps {
  year: number;
}

const iconClass = 'h-5 w-5 flex-shrink-0';

function MapPinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export default function Footer({ year }: FooterProps) {
  const legalLinks = [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ];

  return (
    <footer
      className="mt-auto bg-[var(--color-primary)] text-[18px]"
      style={{ color: 'var(--color-text)' }}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8 grid grid-cols-1 items-center gap-8 text-center md:grid-cols-3">
          {/* Column 1: Organization */}
          <div>
            <h3 className="mb-2 text-xl font-bold sm:text-2xl">Salon77</h3>
            <p className="mb-4">Würzburger Künstlerinitiative e.V.</p>
            <p className="italic">Kunst, Tanz und Musik Förderung seit 1977.</p>
          </div>

          {/* Column 2: Address & Contact */}
          <div className="space-y-3">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 underline hover:opacity-75"
            >
              <MapPinIcon />
              <span>{`Salon 77, ${site.address.street}, ${site.address.postalCode} ${site.address.city}`}</span>
            </a>
            <div className="space-y-2 border-t border-[var(--color-text)]/30 pt-3">
              <p>
                <a href={site.phoneHref} className="underline hover:opacity-75">
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@salon77.de"
                  className="inline-flex items-center justify-center gap-2 underline hover:opacity-75"
                >
                  <MailIcon />
                  <span>info@salon77.de</span>
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Legal Links */}
          <div>
            <h4 className="mb-3 font-bold">Information</h4>
            <nav className="space-y-2">
              {legalLinks.map((link) => (
                <div key={link.href}>
                  <Link href={link.href} className="underline hover:opacity-75">
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--color-text)]/30 pt-6 text-center">
          <div>© {year} Salon77 - Würzburger Künstlerinitiative e.V.</div>
        </div>
      </div>
    </footer>
  );
}
