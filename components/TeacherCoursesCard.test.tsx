/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { TeacherCoursesCard } from './CourseCard';
import { courseCardsByTeacher } from '@/lib/course-cards';

const hsiuYun = courseCardsByTeacher().find(
  (group) => group[0].instructor === 'Hsiu-Yun Lu'
)!;

describe('TeacherCoursesCard', () => {
  it('lists every course with its times', () => {
    render(<TeacherCoursesCard courses={hsiuYun} />);
    expect(
      screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    ).toEqual(hsiuYun.map((course) => course.title));
    for (const slot of hsiuYun.flatMap((course) => course.schedule)) {
      expect(screen.getByText(slot)).toBeInTheDocument();
    }
  });

  it('shows the teacher and the button once', () => {
    render(<TeacherCoursesCard courses={hsiuYun} />);
    expect(screen.getAllByRole('img', { name: 'Hsiu-Yun Lu' })).toHaveLength(1);
    expect(screen.getAllByRole('link', { name: 'Mehr erfahren' })).toHaveLength(
      1
    );
  });
});
