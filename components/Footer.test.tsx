/// <reference types="vitest" />
import { render, screen, within } from '@testing-library/react';
import Footer from './Footer';

const CURRENT_YEAR = new Date().getFullYear();

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer year={CURRENT_YEAR} />);
    expect(screen.getByText('Salon77')).toBeInTheDocument();
  });

  it('renders Impressum link', () => {
    render(<Footer year={CURRENT_YEAR} />);
    const impressumLink = screen.getByRole('link', { name: 'Impressum' });
    expect(impressumLink).toHaveAttribute('href', '/impressum');
  });

  it('renders Datenschutz link', () => {
    render(<Footer year={CURRENT_YEAR} />);
    const datenschutzLink = screen.getByRole('link', { name: 'Datenschutz' });
    expect(datenschutzLink).toHaveAttribute('href', '/datenschutz');
  });

  it('renders copyright year', () => {
    render(<Footer year={CURRENT_YEAR} />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(currentYear.toString()))
    ).toBeInTheDocument();
  });

  it('renders organization name in the footer', () => {
    render(<Footer year={CURRENT_YEAR} />);
    const footer = screen.getByRole('contentinfo');
    expect(
      within(footer).getByText(/Würzburger Künstlerinitiative/, {
        selector: 'p',
      })
    ).toBeInTheDocument();
  });
});
