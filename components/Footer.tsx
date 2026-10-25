'use client';

import Link from 'next/link';

export default function Footer() {
  const year =
    typeof window !== 'undefined' ? new Date().getFullYear() : 2026;

  const legalLinks = [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ];

  return (
    <footer className="mt-auto bg-[#b9bcb5] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Organization Info */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Salon77</h3>
            <p className="text-sm mb-4">Würzburger Künstlerinitiative e.V.</p>
          </div>

          {/* Address & Contact */}
          <div className="text-center text-sm space-y-1">
            <p>Richard-Wagner-Str. 60</p>
            <p>97074 Würzburg</p>
            <div className="pt-2 space-y-1">
              <p>
                <a
                  href="tel:+491717990218"
                  className="hover:opacity-80 transition-opacity"
                >
                  Telefon: +49 (0)171/7990218
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@salon77.de"
                  className="hover:opacity-80 transition-opacity"
                >
                  E-Mail: info@salon77.de
                </a>
              </p>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xs sm:text-sm italic text-gray-100">
            Kunst, Tanz und Musik Förderung seit 1977.
          </p>

          {/* Legal Links */}
          <nav className="flex gap-6 text-xs sm:text-sm pt-4 border-t border-gray-300">
            {legalLinks.map((link, index) => (
              <div key={link.href} className="flex items-center gap-6">
                <Link
                  href={link.href}
                  className="hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="text-gray-200">/</span>
                )}
              </div>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-xs text-gray-100">
            © {year} Salon77 - Würzburger Künstlerinitiative e.V.
          </div>
        </div>
      </div>
    </footer>
  );
}
