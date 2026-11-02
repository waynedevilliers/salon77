'use client';

import { useEffect, useId, useState } from 'react';
import NavLink from '@/components/NavLink';
import type { NavItem } from '@/content/navigation';

interface MobileMenuProps {
  items: NavItem[];
  pathname: string;
}

/**
 * Toggle button and full-width panel for small screens. The panel closes on
 * Escape, on a link click and on a tap outside it. The page behind does not
 * scroll while the panel is open.
 */
export default function MobileMenu({ items, pathname }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        onClick={() => setOpen((value) => !value)}
        className="flex h-11 w-11 items-center justify-center rounded-md"
        style={{ color: 'var(--color-sage-text)' }}
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
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <>
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default bg-black/10"
          />
          <nav
            id={panelId}
            onClick={(event) => {
              if ((event.target as HTMLElement).closest('a')) setOpen(false);
            }}
            aria-label="Hauptmenü"
            className="absolute left-0 right-0 top-full z-50 bg-white border-b border-[var(--color-border-light)] shadow-md"
            style={{
              paddingLeft: 'max(1rem, env(safe-area-inset-left))',
              paddingRight: 'max(1rem, env(safe-area-inset-right))',
            }}
          >
            <ul>
              {items.map((item) => (
                <li
                  key={item.href}
                  className="border-b border-[var(--color-border-light)] last:border-b-0"
                >
                  <NavLink
                    href={item.href}
                    label={item.label}
                    isActive={pathname === item.href}
                    className="flex min-h-12 items-center text-lg"
                  />
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
