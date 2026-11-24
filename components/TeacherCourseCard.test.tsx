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
      screen.getByRole('button', { name: '1. Kurs: Kindertanz & -Ballett' })
    ).toHaveAttribute('aria-pressed', 'true');
  });

  it('has one segment per course, "1. Kurs" to "3. Kurs"', () => {
    render(<TeacherCourseCard courses={hsiuYun} />);
    expect(
      screen.getAllByRole('button').map((button) => button.textContent)
    ).toEqual(['1. Kurs', '2. Kurs', '3. Kurs']);
  });

  it('shows the course of the segment that is tapped', () => {
    render(<TeacherCourseCard courses={hsiuYun} />);
    fireEvent.click(screen.getByRole('button', { name: /^3\. Kurs/ }));
    expect(shownTitle()).toBe('Taiji');
    expect(screen.getByRole('button', { name: /^3\. Kurs/ })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
    fireEvent.click(screen.getByRole('button', { name: /^2\. Kurs/ }));
    expect(shownTitle()).toBe('Moderner Tanz: Zeitgenössischer Tanz');
  });

  it('shows her photo once to screen readers', () => {
    render(<TeacherCourseCard courses={hsiuYun} />);
    expect(screen.getAllByRole('img', { name: 'Hsiu-Yun Lu' })).toHaveLength(1);
  });
});
