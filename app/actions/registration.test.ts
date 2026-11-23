// @vitest-environment node
import { resetRateLimit } from '@/lib/rate-limit';
import { registrationText } from '@/content/registration';

const sendMail = vi.fn();
const createTransport = vi.fn((options: unknown) => {
  void options;
  return { sendMail };
});
let requestHeaders = new Headers({ 'x-forwarded-for': '203.0.113.5' });

vi.mock('nodemailer', () => ({
  default: { createTransport: (options: unknown) => createTransport(options) },
}));
vi.mock('next/headers', () => ({
  headers: async () => requestHeaders,
}));

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

const { submitRegistration } = await import('./registration');

const valid = {
  name: 'Anna',
  surname: 'Müller',
  address: 'Hauptstraße 1, 97070 Würzburg',
  email: 'anna@example.com',
  phone: '+49 171 1234567',
  squareMeters: '3',
  description: 'Keramik',
  website: '',
};

const env = {
  EMAIL_HOST: 'smtp.example.com',
  EMAIL_PORT: '587',
  EMAIL_SECURE: 'false',
  EMAIL_USER: 'user',
  EMAIL_PASS: 'pass',
  EMAIL_FROM: 'Salon77 <info@salon77.de>',
  REGISTRATION_EMAIL: 'kmm@salon77.de',
};

beforeEach(() => {
  resetRateLimit();
  sendMail.mockReset().mockResolvedValue({});
  createTransport.mockClear();
  content.enabled = true;
  requestHeaders = new Headers({ 'x-forwarded-for': '203.0.113.5' });
  for (const [key, value] of Object.entries(env)) vi.stubEnv(key, value);
  vi.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe('submitRegistration', () => {
  it('sends one email with the escaped registration and replies to the visitor', async () => {
    const result = await submitRegistration({
      ...valid,
      description: '<b>Keramik</b>',
    });
    expect(result).toEqual({ status: 'success' });
    expect(createTransport).toHaveBeenCalledWith({
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: { user: 'user', pass: 'pass' },
    });
    expect(sendMail).toHaveBeenCalledTimes(1);
    const mail = sendMail.mock.calls[0][0];
    expect(mail).toMatchObject({
      from: 'Salon77 <info@salon77.de>',
      to: 'kmm@salon77.de',
      replyTo: 'anna@example.com',
      subject: 'Neue Klein-Montmartre Anmeldung',
    });
    expect(mail.html).toContain('&lt;b&gt;Keramik&lt;/b&gt;');
    expect(mail.text).toContain('<b>Keramik</b>');
  });

  it('returns field errors and sends nothing for invalid input', async () => {
    const result = await submitRegistration({ ...valid, email: 'nope' });
    expect(result).toEqual({
      status: 'invalid',
      fieldErrors: { email: registrationText.fieldErrors.email },
    });
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('answers a filled honeypot like a success but sends nothing', async () => {
    const result = await submitRegistration({
      ...valid,
      website: 'https://spam.example',
    });
    expect(result).toEqual({ status: 'success' });
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('blocks the sixth attempt from one visitor within 15 minutes', async () => {
    for (let i = 0; i < 5; i++) {
      expect(await submitRegistration(valid)).toEqual({ status: 'success' });
    }
    expect(await submitRegistration(valid)).toEqual({
      status: 'rate-limited',
    });
    expect(sendMail).toHaveBeenCalledTimes(5);

    requestHeaders = new Headers({ 'x-forwarded-for': '198.51.100.9' });
    expect(await submitRegistration(valid)).toEqual({ status: 'success' });
  });

  it('gives visitors without a known address a shared, larger limit', async () => {
    requestHeaders = new Headers();
    for (let i = 0; i < 30; i++) {
      expect(await submitRegistration(valid)).toEqual({ status: 'success' });
    }
    expect(await submitRegistration(valid)).toEqual({
      status: 'rate-limited',
    });

    requestHeaders = new Headers({ 'x-forwarded-for': '203.0.113.5' });
    expect(await submitRegistration(valid)).toEqual({ status: 'success' });
  });

  it('refuses submissions while the form is switched off', async () => {
    content.enabled = false;
    expect(await submitRegistration(valid)).toEqual({ status: 'closed' });
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('fails with a request code when mail settings are missing', async () => {
    vi.stubEnv('REGISTRATION_EMAIL', '');
    const result = await submitRegistration(valid);
    expect(result).toEqual({
      status: 'failed',
      code: expect.stringMatching(/^[0-9a-f]{8}$/),
    });
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('sends without login when no SMTP user is set', async () => {
    vi.stubEnv('EMAIL_USER', '');
    await submitRegistration(valid);
    expect(createTransport).toHaveBeenCalledWith(
      expect.objectContaining({ auth: undefined })
    );
  });

  it('logs only the code and error type when sending fails', async () => {
    const error = Object.assign(new Error('550 rejected anna@example.com'), {
      code: 'EENVELOPE',
    });
    sendMail.mockRejectedValue(error);
    const result = await submitRegistration(valid);
    expect(result).toMatchObject({ status: 'failed' });
    const logged = vi.mocked(console.error).mock.calls.flat().join(' ');
    expect(logged).toContain('Error EENVELOPE');
    expect(logged).not.toContain('anna@example.com');
  });
});
