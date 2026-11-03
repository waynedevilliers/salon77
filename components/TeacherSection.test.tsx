/// <reference types="vitest" />
import { render, screen, within } from '@testing-library/react';
import TeacherSection from './TeacherSection';
import { instructors } from '@/content/instructors';
import { instructorSlug } from '@/lib/instructors';

describe('TeacherSection', () => {
  it('shows each teacher once', () => {
    render(<TeacherSection />);
    const section = document.getElementById('dozenten');
    expect(section).not.toBeNull();
    for (const instructor of instructors) {
      expect(
        within(section!).getAllByRole('link', {
          name: new RegExp(instructor.name),
        })
      ).toHaveLength(1);
    }
  });

  it('links each teacher to the right profile page', () => {
    render(<TeacherSection />);
    for (const instructor of instructors) {
      const link = screen.getByRole('link', {
        name: new RegExp(instructor.name),
      });
      expect(link).toHaveAttribute(
        'href',
        `/dozenten/${instructorSlug(instructor.name)}`
      );
    }
  });

  it('does not show "Profil ansehen" on the cards', () => {
    render(<TeacherSection />);
    expect(screen.queryByText('Profil ansehen')).toBeNull();
  });
});
