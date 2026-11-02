/// <reference types="vitest" />
import { fireEvent, render, screen, within } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

const mockUsePathname = vi.mocked(usePathname);

const expectedLinks = [
  { name: 'Unterricht', href: '/unterricht' },
  { name: 'Veranstaltungen', href: '/veranstaltungen' },
  { name: 'Räumlichkeiten', href: '/raeumlichkeiten' },
  { name: 'Kontakt', href: '/kontakt' },
];

describe('Navbar', () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue('/');
  });

  it('shows exactly four menu links with the correct hrefs', () => {
    render(<Navbar />);
    const menu = screen.getByRole('navigation', { name: 'Hauptmenü' });
    const links = within(menu).getAllByRole('link');

    expect(links).toHaveLength(4);
    expectedLinks.forEach((link, index) => {
      expect(links[index]).toHaveTextContent(link.name);
      expect(links[index]).toHaveAttribute('href', link.href);
    });
  });

  it('does not list Home in the menu and links the logo to the start page', () => {
    render(<Navbar />);
    const menu = screen.getByRole('navigation', { name: 'Hauptmenü' });
    expect(within(menu).queryByRole('link', { name: 'Home' })).toBeNull();
    expect(
      screen.getByRole('link', { name: 'Salon77 - Zur Startseite' })
    ).toHaveAttribute('href', '/');
  });

  it('marks the active page with aria-current', () => {
    mockUsePathname.mockReturnValue('/kontakt');
    render(<Navbar />);
    const menu = screen.getByRole('navigation', { name: 'Hauptmenü' });
    expect(within(menu).getByRole('link', { name: 'Kontakt' })).toHaveAttribute(
      'aria-current',
      'page'
    );
  });

  it('opens and closes the mobile menu with the toggle button', () => {
    render(<Navbar />);
    const toggle = screen.getByRole('button', { name: 'Menü öffnen' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggle);
    expect(
      screen.getByRole('button', { name: 'Menü schließen' })
    ).toHaveAttribute('aria-expanded', 'true');
    expect(
      screen.getAllByRole('navigation', { name: 'Hauptmenü' })
    ).toHaveLength(2);

    fireEvent.click(screen.getByRole('button', { name: 'Menü schließen' }));
    expect(
      screen.getAllByRole('navigation', { name: 'Hauptmenü' })
    ).toHaveLength(1);
  });

  it('closes the mobile menu when Escape is pressed', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByRole('button', { name: 'Menü öffnen' }));
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.getByRole('button', { name: 'Menü öffnen' })).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });
});
