'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

const MENU_ITEMS = [
  { label: 'Unterricht', href: '/unterricht' },
  { label: 'Veranstaltungen', href: '/veranstaltungen' },
  { label: 'Räumlichkeiten', href: '/raeumlichkeiten' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMenuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-10">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0"
            aria-label="Salon77 - Zur Startseite"
          >
            <Image
              src="/salon77/Salon77_logo_big.png"
              alt="Salon77 Logo"
              width={280}
              height={140}
              className="h-auto"
              priority
            />
          </Link>

        </div>
      </nav>
    </header>
  );
}
