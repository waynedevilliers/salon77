'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';

interface NavDropdownProps {
  label: string;
  href: string;
  isActive: boolean;
  items: { label: string; href: string }[];
  pathname: string;
}

/**
 * A menu item with sub-items. The link goes to the main page; the button next
 * to it opens the sub-items. Works by click or tap and by keyboard. Closes on
 * Escape, on a tap outside, and after a sub-item is chosen.
 */
export default function NavDropdown({
  label,
  href,
  isActive,
  items,
  pathname,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative flex items-center">
      <NavLink href={href} label={label} isActive={isActive} />
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`Unterseiten von ${label} ${open ? 'schließen' : 'öffnen'}`}
        onClick={() => setOpen((value) => !value)}
        className="ml-1 flex h-11 w-11 items-center justify-center rounded-md"
        style={{ color: 'var(--color-sage-text)' }}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          id={panelId}
          className="absolute left-0 top-full z-50 mt-1 min-w-[12rem] rounded-md border border-gray-200 bg-white py-2 shadow-md"
          onClick={() => setOpen(false)}
        >
          {items.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                aria-current={pathname === child.href ? 'page' : undefined}
                className="flex min-h-11 items-center px-4 hover:opacity-75"
                style={{
                  color:
                    pathname === child.href
                      ? 'var(--color-accent-text)'
                      : 'var(--color-sage-text)',
                }}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
