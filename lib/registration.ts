import { z } from 'zod';
import {
  registrationLimits as limits,
  registrationText,
  type RegistrationField,
} from '@/content/registration';
import { escapeHtml } from './escape-html';

const multiline = (max: number) => z.string().trim().min(1).max(max);
// Single-line fields: no line breaks, so a value cannot fake extra lines in the email.
const text = (max: number) => multiline(max).regex(/^[^\r\n]*$/);

/** Server-side rules for the Klein-Montmartre registration. */
const registrationSchema = z.object({
  name: text(limits.name),
  surname: text(limits.surname),
  address: text(limits.address),
  email: z.string().trim().max(limits.email).pipe(z.email()),
  phone: z
    .string()
    .trim()
    .min(3)
    .max(limits.phone)
    .regex(/^[0-9+()/. -]+$/),
  squareMeters: z.coerce
    .number()
    .finite()
    .min(limits.squareMetersMin)
    .max(limits.squareMetersMax),
  description: multiline(limits.description),
});

type Registration = z.infer<typeof registrationSchema>;

export type FieldErrors = Partial<Record<RegistrationField, string>>;

type ParseResult =
  | { success: true; data: Registration }
  | { success: false; fieldErrors: FieldErrors };

export function parseRegistration(input: unknown): ParseResult {
  const result = registrationSchema.safeParse(input);
  if (result.success) return { success: true, data: result.data };
  const fieldErrors: FieldErrors = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as RegistrationField;
    if (field in registrationText.fieldErrors) {
      fieldErrors[field] = registrationText.fieldErrors[field];
    }
  }
  return { success: false, fieldErrors };
}

/** True when the hidden honeypot field was filled in. */
export function isBot(input: unknown): boolean {
  if (typeof input !== 'object' || input === null) return false;
  const website = (input as { website?: unknown }).website;
  return typeof website === 'string' && website.trim() !== '';
}

const subject = 'Neue Klein-Montmartre Anmeldung';

function rows(data: Registration): [string, string][] {
  return [
    ['Name', `${data.name} ${data.surname}`],
    ['Adresse', data.address],
    ['Email', data.email],
    ['Telefon', data.phone],
    ['Benötigte Fläche', `${data.squareMeters.toLocaleString('de-DE')} m²`],
  ];
}

/** The email to the club: plain text plus HTML with every value escaped. */
export function registrationEmail(data: Registration) {
  const textBody = [
    subject,
    '',
    ...rows(data).map(([label, value]) => `${label}: ${value}`),
    '',
    'Beschreibung:',
    data.description,
  ].join('\n');

  const html = [
    `<h2>${subject}</h2>`,
    ...rows(data).map(
      ([label, value]) =>
        `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`
    ),
    '<p><strong>Beschreibung:</strong></p>',
    `<p>${escapeHtml(data.description).replace(/\n/g, '<br>')}</p>`,
  ].join('\n');

  return { subject, text: textBody, html };
}
