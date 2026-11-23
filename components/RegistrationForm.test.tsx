/// <reference types="vitest" />
import { fireEvent, render, screen } from '@testing-library/react';
import { registrationText } from '@/content/registration';

const submitRegistration = vi.fn();
// A plain function decides the reply when a test needs a failed request.
let failRequest = false;
vi.mock('@/app/actions/registration', () => ({
  submitRegistration: (input: unknown) => {
    if (failRequest) return Promise.reject(new TypeError('Failed to fetch'));
    return submitRegistration(input);
  },
}));

const { default: RegistrationForm } = await import('./RegistrationForm');

function fillValid() {
  const values: Record<string, string> = {
    Vorname: 'Anna',
    Nachname: 'Müller',
    Adresse: 'Hauptstraße 1',
    Email: 'anna@example.com',
    'Handy / Telefon': '+49 171 1234567',
    'Benötigte Fläche (Quadratmeter)': '3',
    'Was möchtest du präsentieren oder verkaufen?': 'Keramik',
  };
  for (const [label, value] of Object.entries(values)) {
    fireEvent.change(screen.getByLabelText(label), { target: { value } });
  }
}

const submit = () =>
  fireEvent.click(screen.getByRole('button', { name: 'Anmeldung absenden' }));

beforeEach(() => {
  submitRegistration.mockReset();
  failRequest = false;
});

describe('RegistrationForm', () => {
  it('labels every field, marks them required and links the privacy policy', () => {
    render(<RegistrationForm />);
    for (const label of Object.values(registrationText.labels)) {
      expect(screen.getByLabelText(label)).toBeRequired();
    }
    expect(
      screen.getByRole('link', { name: 'Datenschutzerklärung' })
    ).toHaveAttribute('href', '/datenschutz');
  });

  it('hides the honeypot field from people', () => {
    render(<RegistrationForm />);
    expect(screen.queryByRole('textbox', { name: 'Website' })).toBeNull();
  });

  it('sends the entered values and shows the thank-you message', async () => {
    submitRegistration.mockResolvedValue({ status: 'success' });
    render(<RegistrationForm />);
    fillValid();
    submit();
    const heading = await screen.findByRole('heading', {
      name: 'Anmeldung erhalten!',
    });
    expect(heading).toHaveFocus();
    expect(submitRegistration).toHaveBeenCalledWith({
      name: 'Anna',
      surname: 'Müller',
      address: 'Hauptstraße 1',
      email: 'anna@example.com',
      phone: '+49 171 1234567',
      squareMeters: '3',
      description: 'Keramik',
      website: '',
    });
  });

  it('shows server field errors under their fields', async () => {
    submitRegistration.mockResolvedValue({
      status: 'invalid',
      fieldErrors: { email: registrationText.fieldErrors.email },
    });
    render(<RegistrationForm />);
    fillValid();
    submit();
    expect(await screen.findByRole('alert')).toHaveTextContent(
      registrationText.errors.invalid
    );
    const email = screen.getByLabelText('Email');
    expect(email).toHaveAttribute('aria-invalid', 'true');
    expect(email).toHaveAccessibleDescription(
      registrationText.fieldErrors.email
    );

    fireEvent.change(email, { target: { value: 'anna@example.org' } });
    expect(email).not.toHaveAttribute('aria-invalid');
  });

  it('shows the request code when sending fails', async () => {
    submitRegistration.mockResolvedValue({
      status: 'failed',
      code: '1c256519',
    });
    render(<RegistrationForm />);
    fillValid();
    submit();
    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Code: 1c256519'
    );
  });

  it('explains a rate limit', async () => {
    submitRegistration.mockResolvedValue({ status: 'rate-limited' });
    render(<RegistrationForm />);
    fillValid();
    submit();
    expect(await screen.findByRole('alert')).toHaveTextContent(
      registrationText.errors.rateLimited
    );
  });

  it('shows a general error when the request itself fails', async () => {
    failRequest = true;
    render(<RegistrationForm />);
    fillValid();
    submit();
    expect(await screen.findByRole('alert')).toHaveTextContent(
      registrationText.errors.network
    );
  });
});
