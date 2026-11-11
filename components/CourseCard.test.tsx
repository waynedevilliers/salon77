/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import CourseCard from './CourseCard';

describe('CourseCard teacher links', () => {
  it('links the photo and name to the teacher profile', () => {
    render(
      <CourseCard
        title="Kindertanz"
        description="Tanz für Kinder"
        schedule={['Montags 15 Uhr']}
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
        schedule={['Dienstags']}
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
        schedule={['Nach Vereinbarung']}
        instructor="Sebastian Kandert"
      />
    );
    expect(
      screen.queryByRole('link', { name: /Sebastian Kandert/ })
    ).toBeNull();
    expect(screen.getByText('Sebastian Kandert')).toBeInTheDocument();
  });

  it('links "Mehr erfahren" to the teacher section', () => {
    render(
      <CourseCard
        title="Kindertanz & -Ballett"
        description="Kinder"
        schedule={['Montags']}
        instructor="Hsiu-Yun Lu"
      />
    );
    expect(
      screen.getByRole('link', { name: 'Mehr erfahren' })
    ).toHaveAttribute('href', '/unterricht#dozenten');
  });

  it('shows each time slot on its own line', () => {
    render(
      <CourseCard
        title="Kindertanz & -Ballett"
        description="Kinder"
        schedule={[
          'Montags 15:50 - 17:00 Uhr',
          'Donnerstags 16:30 - 17:20 Uhr',
          'Freitags 15:00 - 16:20 Uhr',
        ]}
        instructor="Hsiu-Yun Lu"
      />
    );
    const items = screen.getAllByRole('listitem');
    expect(items.map((li) => li.textContent)).toEqual([
      'Montags 15:50 - 17:00 Uhr',
      'Donnerstags 16:30 - 17:20 Uhr',
      'Freitags 15:00 - 16:20 Uhr',
    ]);
  });
});
