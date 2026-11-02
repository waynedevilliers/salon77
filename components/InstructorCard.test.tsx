/// <reference types="vitest" />
import { fireEvent, render, screen } from '@testing-library/react';
import InstructorCard from './InstructorCard';

const instructor = { name: 'Hsiu-Yun Lu', specialty: 'Taiji' };

describe('InstructorCard', () => {
  it('links the name and photo to the instructor page', () => {
    render(<InstructorCard instructor={instructor} />);
    expect(screen.getByRole('link', { name: /Hsiu-Yun Lu/ })).toHaveAttribute(
      'href',
      '/dozenten/hsiu-yun-lu'
    );
  });

  it('shows the photo, not a placeholder, when the image loads', () => {
    render(<InstructorCard instructor={instructor} />);
    expect(screen.getByRole('img', { name: 'Hsiu-Yun Lu' })).toBeVisible();
    expect(screen.queryByText('Bild folgt')).not.toBeInTheDocument();
  });

  it('shows the placeholder when the photo cannot be loaded', () => {
    render(<InstructorCard instructor={instructor} />);
    fireEvent.error(screen.getByRole('img', { name: 'Hsiu-Yun Lu' }));
    expect(screen.getByText('Bild folgt')).toBeInTheDocument();
  });
});
