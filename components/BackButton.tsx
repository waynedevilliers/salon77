'use client';

import Link from 'next/link';

export default function BackButton() {
  return (
    <Link
      href="/"
      className="inline-block px-6 py-2 rounded-md font-semibold text-white transition-all"
      style={{ backgroundColor: '#B9BCB5' }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
    >
      Zurück zur Startseite
    </Link>
  );
}
