/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import ActionLink from './ActionLink';

describe('ActionLink', () => {
  it('links internal paths without opening a new tab', () => {
    render(<ActionLink href="/kontakt">Kontakt</ActionLink>);
    const link = screen.getByRole('link', { name: 'Kontakt' });
    expect(link).toHaveAttribute('href', '/kontakt');
    expect(link).not.toHaveAttribute('target');
  });

  it('opens external links in a new tab with safe rel attributes', () => {
    render(<ActionLink href="https://fb.me/e/4XfvnFiVE">Facebook</ActionLink>);
    const link = screen.getByRole('link', { name: 'Facebook' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders mailto links as plain anchors', () => {
    render(<ActionLink href="mailto:info@salon77.de">E-Mail</ActionLink>);
    const link = screen.getByRole('link', { name: 'E-Mail' });
    expect(link).toHaveAttribute('href', 'mailto:info@salon77.de');
    expect(link).not.toHaveAttribute('target');
  });

  it('uses the given padding classes', () => {
    render(
      <ActionLink href="/" className="px-8 py-3">
        Start
      </ActionLink>
    );
    expect(screen.getByRole('link', { name: 'Start' })).toHaveClass(
      'px-8',
      'py-3'
    );
  });
});
