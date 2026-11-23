/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';

const content = vi.hoisted(() => ({ enabled: true }));
vi.mock('@/content/registration', async (importOriginal) => {
  const original =
    await importOriginal<typeof import('@/content/registration')>();
  return {
    ...original,
    registration: {
      ...original.registration,
      get enabled() {
        return content.enabled;
      },
    },
  };
});
vi.mock('next/navigation', () => ({
  notFound: () => {
    throw new Error('NEXT_NOT_FOUND');
  },
  usePathname: () => '/veranstaltungen/klein-montmartre',
}));
vi.mock('@/components/RegistrationForm', () => ({
  default: () => <form aria-label="Anmeldung" />,
}));

const { default: AnmeldenPage } = await import('./anmelden/page');
const { default: KleinMontmartrePage } = await import('./page');

afterEach(() => {
  content.enabled = true;
});

describe('registration switch', () => {
  it('shows the form and the sign-up button while it is on', () => {
    render(<AnmeldenPage />);
    expect(screen.getByRole('form', { name: 'Anmeldung' })).toBeInTheDocument();
  });

  it('returns 404 for the form page when switched off', () => {
    content.enabled = false;
    expect(() => AnmeldenPage()).toThrow('NEXT_NOT_FOUND');
  });

  it('hides the sign-up button but keeps the email link when switched off', async () => {
    content.enabled = false;
    render(await KleinMontmartrePage());
    expect(screen.queryByRole('link', { name: 'Jetzt anmelden' })).toBeNull();
    expect(
      screen.getByRole('link', { name: 'E-Mail schreiben' })
    ).toHaveAttribute('href', 'mailto:kmm@salon77.de');
  });

  it('links to the form while it is on', async () => {
    render(await KleinMontmartrePage());
    expect(
      screen.getByRole('link', { name: 'Jetzt anmelden' })
    ).toHaveAttribute('href', '/veranstaltungen/klein-montmartre/anmelden');
  });
});
