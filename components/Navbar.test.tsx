/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const mockUsePathname = vi.mocked(usePathname);

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

describe('Navbar', () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue('/');
  });

  it('renders the logo', () => {
    render(<Navbar />);
    expect(screen.getByText('Salon77')).toBeInTheDocument();
  });

  it('renders exactly 3 menu links', () => {
    render(<Navbar />);
    const links = screen.getAllByRole('link');
    const navLinks = links.filter((link) =>
      ['Übersicht', 'Veranstaltungen', 'Räumlichkeiten'].includes(
        link.textContent || ''
      )
    );
    expect(navLinks).toHaveLength(3);
  });

  it('renders menu items with correct hrefs', () => {
    render(<Navbar />);
    expect(screen.getByText('Übersicht')).toHaveAttribute('href', '/uebersicht');
    expect(screen.getByText('Veranstaltungen')).toHaveAttribute(
      'href',
      '/veranstaltungen'
    );
    expect(screen.getByText('Räumlichkeiten')).toHaveAttribute(
      'href',
      '/raeumlichkeiten'
    );
  });

  it('marks the active page', () => {
    mockUsePathname.mockReturnValue('/uebersicht');
    render(<Navbar />);
    const activeLink = screen.getByText('Übersicht');
    expect(activeLink).toHaveClass('border-b-2');
  });

  it('has mobile menu button', () => {
    render(<Navbar />);
    expect(screen.getByRole('button', { name: /Navigation öffnen/i })).toBeInTheDocument();
  });
});
