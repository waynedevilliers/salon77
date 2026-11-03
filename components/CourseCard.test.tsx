/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import CourseCard from './CourseCard';

describe('CourseCard teacher links', () => {
  it('links the photo and name to the teacher profile', () => {
    render(
      <CourseCard
        title="Kindertanz"
        description="Tanz für Kinder"
        schedule="Montags 15 Uhr"
        instructor="Hsiu-Yun Lu"
      />
    );
    const link = screen.getByRole('link', { name: /Hsiu-Yun Lu/ });
    expect(link).toHaveAttribute('href', '/dozenten/hsiu-yun-lu');
    expect(link.querySelector('img')).not.toBeNull();
  });

  it('links a shortened name to the full profile', () => {
    render(
      <CourseCard
        title="Flamenco"
        description="Flamenco"
        schedule="Dienstags"
        instructor="Mercedes Sebald Arguisuelas"
      />
    );
    expect(
      screen.getByRole('link', { name: /Mercedes Sebald Arguisuelas/ })
    ).toHaveAttribute('href', '/dozenten/mercedes-sebald-arguisuelas');
  });

  it('does not link a teacher without a profile', () => {
    render(
      <CourseCard
        title="DJing"
        description="DJing"
        schedule="Nach Vereinbarung"
        instructor="Sebastian Kandert"
      />
    );
    expect(
      screen.queryByRole('link', { name: /Sebastian Kandert/ })
    ).toBeNull();
    expect(screen.getByText('Sebastian Kandert')).toBeInTheDocument();
  });

  it('links Probestunde to the contact page for this course', () => {
    render(
      <CourseCard
        title="Kindertanz & -Ballett"
        description="Kinder"
        schedule="Montags"
        instructor="Hsiu-Yun Lu"
      />
    );
    expect(
      screen.getByRole('link', { name: 'Probestunde anfragen' })
    ).toHaveAttribute('href', '/kontakt?kurs=kindertanz-ballett');
  });
});
