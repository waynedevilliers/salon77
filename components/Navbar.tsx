'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import NavLink from '@/components/NavLink';
import MobileMenu from '@/components/MobileMenu';
import { mainNavigation } from '@/content/navigation';

/**
 * Header on every page. Not sticky. The logo always links home. Large screens
 * show the menu in a row; smaller screens show a toggle button.
 */
export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="relative z-50 bg-white border-b border-[var(--color-border-light)]">
      <div
        className="mx-auto flex max-w-6xl flex-row items-center justify-between gap-4 px-4 py-4 lg:flex-col lg:py-8 lg:gap-6"
        style={{
          paddingLeft: 'max(1rem, env(safe-area-inset-left))',
          paddingRight: 'max(1rem, env(safe-area-inset-right))',
        }}
      >
        {/* Spacer keeps the logo centred next to the toggle button */}
        <div className="w-11 lg:hidden" aria-hidden="true" />

        <Link
          href="/"
          aria-label="Salon77 - Zur Startseite"
          className="flex-shrink-0"
        >
          <Image
            src="/salon77/Salon77_logo_big.png"
            alt="Salon77 Logo"
            width={365}
            height={245}
            priority
            className="h-24 w-auto md:h-[130px] lg:h-[190px]"
          />
        </Link>

        <nav aria-label="Hauptmenü" className="hidden lg:block">
          <ul className="flex flex-row flex-wrap justify-center gap-x-10 gap-y-2 text-base">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  label={item.label}
                  isActive={pathname === item.href}
                  className="inline-flex min-h-11 items-center"
                />
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu items={mainNavigation} pathname={pathname} />
      </div>
    </header>
  );
}
