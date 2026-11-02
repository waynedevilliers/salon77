import Link from 'next/link';
import { site } from '@/content/site';

export default function Footer() {
  const year = new Date().getFullYear();

  const legalLinks = [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ];

  return (
    <footer className="mt-auto bg-[#b9bcb5] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center items-center">
          {/* Column 1: Organization */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Salon77</h3>
            <p className="text-base mb-4">Würzburger Künstlerinitiative e.V.</p>
            <p className="text-sm italic text-gray-100">
              Kunst, Tanz und Musik Förderung seit 1977.
            </p>
          </div>

          {/* Column 2: Address & Contact */}
          <div className="text-base space-y-3">
            <div>
              <a
                href="https://www.google.com/maps/place/Salon+77/@49.7930186,9.9582214,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-75 transition-opacity cursor-pointer"
              >
                📍 {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </a>
            </div>
            <div className="space-y-1 pt-2 border-t border-gray-300">
              <p>
                <a
                  href={site.phoneHref}
                  className="underline hover:opacity-75 transition-opacity cursor-pointer"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@salon77.de"
                  className="underline hover:opacity-75 transition-opacity cursor-pointer"
                >
                  ✉️ info@salon77.de
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Legal Links */}
          <div>
            <h4 className="text-base font-semibold mb-3">Information</h4>
            <nav className="space-y-2 text-base">
              {legalLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:opacity-80 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6 text-center">
          <div className="text-sm text-gray-100">
            © {year} Salon77 - Würzburger Künstlerinitiative e.V.
          </div>
        </div>
      </div>
    </footer>
  );
}
