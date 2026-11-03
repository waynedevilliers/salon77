/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import InstructorPage, {
  generateStaticParams,
} from '@/app/dozenten/[slug]/page';

describe('instructor detail page', () => {
  it('creates a static page for every instructor', () => {
    expect(generateStaticParams()).toContainEqual({ slug: 'andrea-kneis' });
    expect(generateStaticParams().length).toBe(9);
  });

  it('shows name, specialty and biography', async () => {
    const page = await InstructorPage({
      params: Promise.resolve({ slug: 'andrea-kneis' }),
    });
    render(page);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Andrea Kneis' })
    ).toBeInTheDocument();
    expect(screen.getByText('Gesang')).toBeInTheDocument();
    expect(screen.getByText(/unterrichtet Tanz seit 1994/)).toBeInTheDocument();
  });
});
