'use client';

import Link from 'next/link';

interface AnmeldenButtonProps {
  href: string;
  text: string;
}

export default function AnmeldenButton({ href, text }: AnmeldenButtonProps) {
  return (
    <Link
      href={href}
      className="inline-block px-8 py-3 rounded-md font-semibold text-white transition-all"
      style={{ backgroundColor: '#B9BCB5' }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
    >
      {text}
    </Link>
  );
}
