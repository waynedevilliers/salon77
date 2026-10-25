'use client';

import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

export default function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`font-medium transition-opacity hover:opacity-75 ${
        isActive ? 'underline' : ''
      }`}
      style={{ color: isActive ? '#C9A961' : '#2c2c2c' }}
    >
      {label}
    </Link>
  );
}
