/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import EmailLink from './EmailLink';

describe('EmailLink', () => {
  it('shows the address and links to it with mailto', () => {
    render(<EmailLink address="info@salon77.de" />);
    const link = screen.getByRole('link', { name: 'info@salon77.de' });
    expect(link).toHaveAttribute('href', 'mailto:info@salon77.de');
  });
});
