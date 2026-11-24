/// <reference types="vitest" />
import { render, screen, within } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Breadcrumbs from './Breadcrumbs';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

const mockUsePathname = vi.mocked(usePathname);

function trail() {
  const nav = screen.getByRole('navigation', { name: 'Brotkrumen' });
  return within(nav)
    .getAllByRole('listitem')
    .map((item) => item.textContent?.replace('›', '').trim());
}

describe('Breadcrumbs', () => {
  it('is not shown on the home page', () => {
    mockUsePathname.mockReturnValue('/');
    const { container } = render(<Breadcrumbs />);
    expect(container).toBeEmptyDOMElement();
  });

  it('uses the route labels for nested pages', () => {
    mockUsePathname.mockReturnValue('/veranstaltungen/klein-montmartre');
    render(<Breadcrumbs />);
    expect(trail()).toEqual([
      'Startseite',
      'Veranstaltungen',
      'Klein-Montmartre',
    ]);
  });

  it('links every step except the current page', () => {
    mockUsePathname.mockReturnValue('/veranstaltungen/klein-montmartre');
    render(<Breadcrumbs />);
    expect(screen.getByRole('link', { name: 'Startseite' })).toHaveAttribute(
      'href',
      '/'
    );
    expect(
      screen.getByRole('link', { name: 'Veranstaltungen' })
    ).toHaveAttribute('href', '/veranstaltungen');
    expect(screen.getByText('Klein-Montmartre')).toHaveAttribute(
      'aria-current',
      'page'
    );
    expect(
      screen.queryByRole('link', { name: 'Klein-Montmartre' })
    ).not.toBeInTheDocument();
  });

  it('shows a teacher profile under Unterricht with the teacher name', () => {
    mockUsePathname.mockReturnValue('/dozenten/andre-mabiala');
    render(<Breadcrumbs />);
    expect(trail()).toEqual([
      'Startseite',
      'Unterricht',
      'Dozenten',
      'André Mabiala',
    ]);
    expect(screen.getByRole('link', { name: 'Dozenten' })).toHaveAttribute(
      'href',
      '/unterricht#dozenten'
    );
  });

  it('capitalises a segment that has no route label', () => {
    mockUsePathname.mockReturnValue(
      '/veranstaltungen/klein-montmartre/anmelden'
    );
    render(<Breadcrumbs />);
    expect(trail()?.at(-1)).toBe('Anmelden');
  });
});
