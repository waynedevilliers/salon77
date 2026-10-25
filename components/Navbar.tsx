'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-10 space-y-6">
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

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 sm:gap-8 justify-center text-sm sm:text-base">
            <NavLink href="/" label="Home" isActive={pathname === '/'} />
            <span className="text-gray-300">|</span>
            <NavLink href="/unterricht" label="Unterricht" isActive={pathname === '/unterricht'} />
            <span className="text-gray-300">|</span>
            <NavLink href="/dozenten" label="Dozenten" isActive={pathname === '/dozenten'} />
            <span className="text-gray-300">|</span>
            <NavLink href="/veranstaltungen" label="Veranstaltungen" isActive={pathname === '/veranstaltungen'} />
            <span className="text-gray-300">|</span>
            <NavLink href="/wochenkurse" label="Wochenkurse" isActive={pathname === '/wochenkurse'} />
            <span className="text-gray-300">|</span>
            <NavLink href="/raeumlichkeiten" label="Räumlichkeiten" isActive={pathname === '/raeumlichkeiten'} />
            <span className="text-gray-300">|</span>
            <NavLink href="/verein" label="Verein" isActive={pathname === '/verein'} />
            <span className="text-gray-300">|</span>
            <NavLink href="/kontakt" label="Kontakt" isActive={pathname === '/kontakt'} />
          </nav>
        </div>
      </nav>
    </header>
  );
}
