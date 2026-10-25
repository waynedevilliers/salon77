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
          {/* Logo */}
          <div className="text-2xl font-bold">Salon77</div>

          {/* Legal Links */}
          <nav className="flex gap-6 text-xs sm:text-sm">
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
          <div className="text-xs sm:text-sm text-gray-100">
            © {year} Salon77 - Würzburger Künstlerinitiative e.V.
          </div>
        </div>
      </div>
    </footer>
  );
}
