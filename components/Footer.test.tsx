/// <reference types="vitest" />
import { render, screen, within } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />);
    expect(screen.getByText('Salon77')).toBeInTheDocument();
  });

  it('renders Impressum link', () => {
    render(<Footer />);
    const impressumLink = screen.getByRole('link', { name: 'Impressum' });
    expect(impressumLink).toHaveAttribute('href', '/impressum');
  });

  it('renders Datenschutz link', () => {
    render(<Footer />);
    const datenschutzLink = screen.getByRole('link', { name: 'Datenschutz' });
    expect(datenschutzLink).toHaveAttribute('href', '/datenschutz');
  });

  it('renders copyright year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(currentYear.toString()))
    ).toBeInTheDocument();
  });

  it('renders organization name in the footer', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(
      within(footer).getByText(/Würzburger Künstlerinitiative/, {
        selector: 'p',
      })
    ).toBeInTheDocument();
  });
});
