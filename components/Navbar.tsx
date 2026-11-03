'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';
import NavDropdown from './NavDropdown';

const subItems = [
  { label: 'Dozenten', href: '/dozenten' },
  { label: 'Wochenkurse', href: '/wochenkurse' },
];

const mainItems = [
  { label: 'Home', href: '/' },
  { label: 'Unterricht', href: '/unterricht' },
  { label: 'Veranstaltungen', href: '/veranstaltungen' },
  { label: 'Räumlichkeiten', href: '/raeumlichkeiten' },
  { label: 'Verein', href: '/verein' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-gray-300 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-6 lg:space-y-6 lg:py-10">
          {/* One logo for every screen size. It always links home. */}
          <Link
            href="/"
            aria-label="Salon77 - Zur Startseite"
            className="shrink-0"
          >
            <Image
              src="/salon77/Salon77_logo_big.png"
              alt="Salon77 Logo"
              width={280}
              height={140}
              className="h-auto w-44 sm:w-52 lg:w-[280px]"
              priority
            />
          </Link>

          {/* Phones and tablets: hamburger button at the right of the logo */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls={panelId}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            onClick={() => setMenuOpen((open) => !open)}
            className="mt-3 flex h-11 w-11 items-center justify-center rounded-md lg:hidden"
            style={{ color: 'var(--color-text)' }}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>

          {/* Phones and tablets: full-width menu panel. Closes on a link click. */}
          {menuOpen && (
            <nav
              id={panelId}
              aria-label="Hauptmenü"
              className="absolute left-0 right-0 top-full z-50 border-b border-gray-200 bg-white shadow-md lg:hidden"
              onClick={(event) => {
                if ((event.target as HTMLElement).closest('a'))
                  setMenuOpen(false);
              }}
            >
              <ul>
                {mainItems.map((item) => (
                  <li key={item.href} className="border-t border-gray-100">
                    <NavLink
                      href={item.href}
                      label={item.label}
                      isActive={pathname === item.href}
                      className="flex min-h-12 items-center px-6 text-lg"
                    />
                    {item.href === '/unterricht' &&
                      subItems.map((sub) => (
                        <NavLink
                          key={sub.href}
                          href={sub.href}
                          label={sub.label}
                          isActive={pathname === sub.href}
                          className="flex min-h-12 items-center pl-12 pr-6 text-base"
                        />
                      ))}
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Large screens: horizontal menu under the logo */}
          <nav
            aria-label="Hauptmenü"
            className="hidden flex-wrap items-center justify-center gap-6 text-base lg:flex sm:gap-8"
          >
            <NavLink href="/" label="Home" isActive={pathname === '/'} />
            <span className="text-gray-500">|</span>
            <NavDropdown
              label="Unterricht"
              href="/unterricht"
              isActive={pathname.startsWith('/unterricht')}
              pathname={pathname}
              items={subItems}
            />
            <span className="text-gray-500">|</span>
            <NavLink
              href="/veranstaltungen"
              label="Veranstaltungen"
              isActive={pathname === '/veranstaltungen'}
            />
            <span className="text-gray-500">|</span>
            <NavLink
              href="/raeumlichkeiten"
              label="Räumlichkeiten"
              isActive={pathname === '/raeumlichkeiten'}
            />
            <span className="text-gray-500">|</span>
            <NavLink
              href="/verein"
              label="Verein"
              isActive={pathname === '/verein'}
            />
            <span className="text-gray-500">|</span>
            <NavLink
              href="/kontakt"
              label="Kontakt"
              isActive={pathname === '/kontakt'}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
