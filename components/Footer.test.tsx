/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />);
    expect(screen.getByText('Salon77')).toBeInTheDocument();
  });

  it('renders Impressum link', () => {
    render(<Footer />);
    const impressumLink = screen.getByTitle('Impressum');
    expect(impressumLink).toHaveAttribute('href', '/impressum');
    expect(impressumLink).toHaveTextContent('Impressum');
  });

  it('renders Datenschutz link', () => {
    render(<Footer />);
    const datenschutzLink = screen.getByTitle('Datenschutz');
    expect(datenschutzLink).toHaveAttribute('href', '/datenschutz');
    expect(datenschutzLink).toHaveTextContent('Datenschutz');
  });

  it('renders copyright year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  it('renders organization name', () => {
    render(<Footer />);
    expect(
      screen.getByText(/Würzburger Künstlerinitiative/)
    ).toBeInTheDocument();
  });
});
