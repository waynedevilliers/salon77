'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

const mainItems = [
  { label: 'Home', href: '/' },
  { label: 'Unterricht', href: '/unterricht' },
  { label: 'Wochenkurse', href: '/wochenkurse' },
  { label: 'Veranstaltungen', href: '/veranstaltungen' },
  { label: 'Räumlichkeiten', href: '/raeumlichkeiten' },
  { label: 'Kontakt', href: '/kontakt' },
];

/**
 * Unterricht stays marked on its own page and on every teacher profile page.
 */
function isActiveItem(href: string, pathname: string): boolean {
  if (href === '/unterricht') {
    return (
      pathname.startsWith('/unterricht') || pathname.startsWith('/dozenten')
    );
  }
  return pathname === href;
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();

  return (
    <>
      {/* One logo for every screen size. It always links home. It scrolls away. */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl justify-center px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
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
        </div>
      </div>

      {/* The menu bar sticks to the top of the window while the page scrolls. */}
      <header className="sticky top-0 z-50 border-b-2 border-gray-300 bg-white">
        <div className="relative mx-auto flex min-h-16 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* Phones and tablets: hamburger button */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls={panelId}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-md lg:hidden"
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
                      isActive={isActiveItem(item.href, pathname)}
                      className="flex min-h-12 items-center px-6 text-lg"
                    />
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Large screens: horizontal menu */}
          <nav
            aria-label="Hauptmenü"
            className="hidden flex-wrap items-center justify-center gap-6 text-base lg:flex sm:gap-8"
          >
            <NavLink href="/" label="Home" isActive={pathname === '/'} />
            <span
              aria-hidden="true"
              style={{ color: 'var(--color-text-faint)' }}
            >
              |
            </span>
            <NavLink
              href="/unterricht"
              label="Unterricht"
              isActive={isActiveItem('/unterricht', pathname)}
            />
            <span
              aria-hidden="true"
              style={{ color: 'var(--color-text-faint)' }}
            >
              |
            </span>
            <NavLink
              href="/wochenkurse"
              label="Wochenkurse"
              isActive={pathname === '/wochenkurse'}
            />
            <span
              aria-hidden="true"
              style={{ color: 'var(--color-text-faint)' }}
            >
              |
            </span>
            <NavLink
              href="/veranstaltungen"
              label="Veranstaltungen"
              isActive={pathname === '/veranstaltungen'}
            />
            <span
              aria-hidden="true"
              style={{ color: 'var(--color-text-faint)' }}
            >
              |
            </span>
            <NavLink
              href="/raeumlichkeiten"
              label="Räumlichkeiten"
              isActive={pathname === '/raeumlichkeiten'}
            />
            <span
              aria-hidden="true"
              style={{ color: 'var(--color-text-faint)' }}
            >
              |
            </span>
            <NavLink
              href="/kontakt"
              label="Kontakt"
              isActive={pathname === '/kontakt'}
            />
          </nav>
        </div>
      </header>
    </>
  );
}
