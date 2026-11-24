/// <reference types="vitest" />
import { render, screen, within } from '@testing-library/react';
import TeacherSection from './TeacherSection';
import { instructors } from '@/content/instructors';
import { instructorSlug } from '@/lib/instructors';
import { coursesOf } from '@/lib/teacher-courses';

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

  it('renders every teacher exactly once in the list', () => {
    render(<TeacherSection />);
    const names = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent);
    expect(names).toHaveLength(instructors.length);
    expect(new Set(names).size).toBe(instructors.length);
  });

  it("lists all of Hsiu-Yun Lu's courses on her one card", () => {
    render(<TeacherSection />);
    const card = screen.getByRole('link', { name: /Hsiu-Yun Lu/ });
    const list = within(card).getByRole('list');
    const items = within(list).getAllByRole('listitem');
    const titles = coursesOf('Hsiu-Yun Lu').map((course) => course.title);
    expect(titles).toHaveLength(4);
    expect(items).toHaveLength(titles.length);
    titles.forEach((title, index) =>
      expect(items[index]).toHaveTextContent(title)
    );
    expect(items[0]).toHaveTextContent('Kindertanz & -Ballett · Mo, Do, Fr');
  });

  it('includes the courses in the name screen readers announce for the card', () => {
    render(<TeacherSection />);
    expect(
      screen.getByRole('link', { name: /Hsiu-Yun Lu/ }).textContent
    ).toContain('Pilates · Mo, Do');
    expect(
      screen.getByRole('link', { name: /Pilates · Mo, Do/ })
    ).toHaveAttribute('href', '/dozenten/hsiu-yun-lu');
  });

  it('shows no course list for a teacher without courses', () => {
    render(<TeacherSection />);
    const card = screen.getByRole('link', { name: /Andrea Kneis/ });
    expect(within(card).queryByRole('list')).not.toBeInTheDocument();
  });

  it('does not show "Profil ansehen" on the cards', () => {
    render(<TeacherSection />);
    expect(screen.queryByText('Profil ansehen')).toBeNull();
  });
});
