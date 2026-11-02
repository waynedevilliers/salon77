/// <reference types="vitest" />
import { fireEvent, render, screen } from '@testing-library/react';
import InstructorCard from './InstructorCard';

const instructor = { name: 'Hsiu-Yun Lu', specialty: 'Taiji' };

describe('InstructorCard', () => {
  it('shows the photo, not a placeholder, when the image loads', () => {
    render(<InstructorCard instructor={instructor} />);
    const image = screen.getByRole('img', { name: 'Hsiu-Yun Lu' });
    expect(image).toBeVisible();
    expect(screen.queryByText('Bild folgt')).not.toBeInTheDocument();
  });

  it('shows the placeholder when the photo cannot be loaded', () => {
    render(<InstructorCard instructor={instructor} />);
    fireEvent.error(screen.getByRole('img', { name: 'Hsiu-Yun Lu' }));
    expect(screen.getByText('Bild folgt')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
