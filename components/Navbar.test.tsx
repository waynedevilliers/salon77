/// <reference types="vitest" />
import { fireEvent, render, screen, within } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const mockUsePathname = vi.mocked(usePathname);

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Unterricht', href: '/unterricht' },
  { label: 'Wochenkurse', href: '/wochenkurse' },
  { label: 'Veranstaltungen', href: '/veranstaltungen' },
  { label: 'Räumlichkeiten', href: '/raeumlichkeiten' },
  { label: 'Verein', href: '/verein' },
  { label: 'Kontakt', href: '/kontakt' },
];

describe('Navbar', () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue('/');
  });

  it('renders the logo linking to the start page', () => {
    render(<Navbar />);
    expect(
      screen.getByRole('img', { name: 'Salon77 Logo' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Salon77 - Zur Startseite' })
    ).toHaveAttribute('href', '/');
  });

  it('renders exactly the seven menu links with the correct hrefs', () => {
    render(<Navbar />);
    const links = within(
      screen.getByRole('navigation', { name: 'Hauptmenü' })
    ).getAllByRole('link');
    expect(links).toHaveLength(7);
    for (const item of menuItems) {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute(
        'href',
        item.href
      );
    }
  });

  it('marks the active page', () => {
    mockUsePathname.mockReturnValue('/unterricht');
    render(<Navbar />);
    expect(screen.getByRole('link', { name: 'Unterricht' })).toHaveClass(
      'underline'
    );
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveClass(
      'underline'
    );
  });
});
