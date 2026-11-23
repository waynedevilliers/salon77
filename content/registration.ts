/**
 * Klein-Montmartre exhibitor registration.
 *
 * Set `enabled` to false to switch the online form off. The registration page
 * then returns 404, the "Jetzt anmelden" button on the Klein-Montmartre page is
 * hidden, and the server refuses submissions. The email link stays.
 */
export const registration = {
  enabled: true,
  path: '/veranstaltungen/klein-montmartre/anmelden',
  /** Address for exhibitor questions, shown next to the form button. */
  contactEmail: 'kmm@salon77.de',
};

export type RegistrationField =
  | 'name'
  | 'surname'
  | 'address'
  | 'email'
  | 'phone'
  | 'squareMeters'
  | 'description';

/** Upper limits, shared by the browser (maxLength) and the server check. */
export const registrationLimits = {
  name: 100,
  surname: 100,
  address: 200,
  email: 254,
  phone: 40,
  description: 2000,
  squareMetersMin: 1,
  squareMetersMax: 100,
};

export const registrationText = {
  title: 'Anmeldung Klein-Montmartre',
  labels: {
    name: 'Vorname',
    surname: 'Nachname',
    address: 'Adresse',
    email: 'Email',
    phone: 'Handy / Telefon',
    squareMeters: 'Benötigte Fläche (Quadratmeter)',
    description: 'Was möchtest du präsentieren oder verkaufen?',
  } satisfies Record<RegistrationField, string>,
  fieldErrors: {
    name: 'Bitte gib deinen Vornamen an.',
    surname: 'Bitte gib deinen Nachnamen an.',
    address: 'Bitte gib deine Adresse an.',
    email: 'Bitte gib eine gültige E-Mail-Adresse an.',
    phone: 'Bitte gib eine gültige Telefonnummer an.',
    squareMeters: `Bitte gib eine Fläche zwischen ${registrationLimits.squareMetersMin} und ${registrationLimits.squareMetersMax} m² an.`,
    description: 'Bitte beschreibe kurz, was du präsentieren möchtest.',
  } satisfies Record<RegistrationField, string>,
  submit: 'Anmeldung absenden',
  submitting: 'Wird versendet...',
  privacyBefore:
    'Wir verwenden deine Angaben nur für die Bearbeitung deiner Anmeldung. Mehr dazu in der ',
  privacyLink: 'Datenschutzerklärung',
  privacyAfter: '.',
  successTitle: 'Anmeldung erhalten!',
  successText:
    'Vielen Dank für deine Anmeldung. Wir werden dich in Kürze kontaktieren.',
  errors: {
    invalid: 'Bitte prüfe die markierten Felder.',
    rateLimited:
      'Zu viele Anmeldungen in kurzer Zeit. Bitte versuche es in 15 Minuten erneut.',
    closed: 'Die Online-Anmeldung ist zurzeit geschlossen.',
    failed: `Die Anmeldung konnte nicht versendet werden. Bitte versuche es später erneut oder schreib uns an ${registration.contactEmail}.`,
    network: 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.',
  },
  /** Shown after the error message, so a failed attempt can be found in the logs. */
  codeLabel: 'Code',
};
