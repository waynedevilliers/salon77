/// <reference types="vitest" />
import { fireEvent, render, screen } from '@testing-library/react';
import TeacherCourseCard from './TeacherCourseCard';
import { courseGroups, coursesOf } from '@/lib/teacher-courses';

const hsiuYun = coursesOf('Hsiu-Yun Lu');

// The title of the course the visitor sees (hidden courses are aria-hidden).
const shownTitle = () => screen.getByRole('heading', { level: 3 }).textContent;

describe('TeacherCourseCard', () => {
  it('shows one course card per teacher on /unterricht', () => {
    const teachers = courseGroups().map((group) => group[0].instructor);
    expect(new Set(teachers).size).toBe(teachers.length);
    expect(
      courseGroups().filter((group) => group[0].instructor === 'Hsiu-Yun Lu')
    ).toHaveLength(1);
  });

  it("puts all of Hsiu-Yun Lu's courses on her one card", () => {
    const group = courseGroups().find(
      (courses) => courses[0].instructor === 'Hsiu-Yun Lu'
    );
    expect(group?.map((course) => course.title)).toEqual(
      hsiuYun.map((course) => course.title)
    );
    expect(group).toHaveLength(4);
  });

  it('shows the first course and flips to the next one, wrapping around', () => {
    render(<TeacherCourseCard courses={hsiuYun} />);
    expect(shownTitle()).toBe(hsiuYun[0].title);
    expect(screen.getByText('Kurs 1 von 4')).toBeInTheDocument();

    for (const course of [...hsiuYun.slice(1), hsiuYun[0]]) {
      fireEvent.click(screen.getByRole('button', { name: /Nächster Kurs/ }));
      expect(shownTitle()).toBe(course.title);
    }
  });

  it('shows her photo and name once to screen readers', () => {
    render(<TeacherCourseCard courses={hsiuYun} />);
    expect(screen.getAllByRole('img', { name: 'Hsiu-Yun Lu' })).toHaveLength(1);
  });

  it('has no button for a teacher with one course', () => {
    render(<TeacherCourseCard courses={coursesOf('Asami Krisan')} />);
    expect(
      screen.queryByRole('button', { name: /Nächster Kurs/ })
    ).not.toBeInTheDocument();
  });
});
