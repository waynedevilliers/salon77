/// <reference types="vitest" />
import { fireEvent, render, screen } from '@testing-library/react';
import TeacherCourseCard from './TeacherCourseCard';
import { courseCardsByTeacher } from '@/lib/course-cards';

const hsiuYun = courseCardsByTeacher().find(
  (group) => group[0].instructor === 'Hsiu-Yun Lu'
)!;

// Hidden courses are aria-hidden, so this is the course the visitor sees.
const shownTitle = () => screen.getByRole('heading', { level: 3 }).textContent;

describe('TeacherCourseCard', () => {
  it('shows her first course with its description and times', () => {
    render(<TeacherCourseCard courses={hsiuYun} />);
    expect(shownTitle()).toBe('Kindertanz & -Ballett');
    expect(screen.getByText(hsiuYun[0].description)).toBeVisible();
    expect(
      screen.getByRole('button', {
        name: 'Kurs 1 von 3: Kindertanz & -Ballett',
      })
    ).toHaveAttribute('aria-current', 'true');
  });

  it('flips to the next course and back to the first', () => {
    render(<TeacherCourseCard courses={hsiuYun} />);
    for (const title of [
      'Moderner Tanz: Zeitgenössischer Tanz',
      'Taiji',
      'Kindertanz & -Ballett',
    ]) {
      fireEvent.click(screen.getByRole('button', { name: /Nächster Kurs/ }));
      expect(shownTitle()).toBe(title);
    }
  });

  it('goes back with the previous arrow and jumps with a dot', () => {
    render(<TeacherCourseCard courses={hsiuYun} />);
    fireEvent.click(screen.getByRole('button', { name: 'Vorheriger Kurs' }));
    expect(shownTitle()).toBe('Taiji');
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Kurs 2 von 3: Moderner Tanz: Zeitgenössischer Tanz',
      })
    );
    expect(shownTitle()).toBe('Moderner Tanz: Zeitgenössischer Tanz');
  });

  it('shows her photo once to screen readers', () => {
    render(<TeacherCourseCard courses={hsiuYun} />);
    expect(screen.getAllByRole('img', { name: 'Hsiu-Yun Lu' })).toHaveLength(1);
  });
});
