import { isBot, parseRegistration, registrationEmail } from './registration';
import { registrationText } from '@/content/registration';

const valid = {
  name: 'Anna',
  surname: 'Müller',
  address: 'Hauptstraße 1, 97070 Würzburg',
  email: 'anna@example.com',
  phone: '+49 171 1234567',
  squareMeters: '2.5',
  description: 'Keramik\nund Schmuck',
};

describe('parseRegistration', () => {
  it('accepts a complete registration and trims the values', () => {
    const result = parseRegistration({ ...valid, name: '  Anna  ' });
    expect(result).toEqual({
      success: true,
      data: { ...valid, name: 'Anna', squareMeters: 2.5 },
    });
  });

  it('reports every empty field with its message', () => {
    const empty = Object.fromEntries(Object.keys(valid).map((k) => [k, '']));
    const result = parseRegistration(empty);
    expect(result).toEqual({
      success: false,
      fieldErrors: registrationText.fieldErrors,
    });
  });

  it('rejects an invalid email address', () => {
    const result = parseRegistration({ ...valid, email: 'anna@' });
    expect(result).toEqual({
      success: false,
      fieldErrors: { email: registrationText.fieldErrors.email },
    });
  });

  it('rejects a phone number with letters', () => {
    const result = parseRegistration({ ...valid, phone: 'call me' });
    expect(result.success).toBe(false);
  });

  it('rejects an area outside the limits', () => {
    expect(parseRegistration({ ...valid, squareMeters: '0' }).success).toBe(
      false
    );
    expect(parseRegistration({ ...valid, squareMeters: '1000' }).success).toBe(
      false
    );
    expect(parseRegistration({ ...valid, squareMeters: 'abc' }).success).toBe(
      false
    );
  });

  it('rejects a description that is too long', () => {
    const result = parseRegistration({
      ...valid,
      description: 'x'.repeat(2001),
    });
    expect(result.success).toBe(false);
  });

  it('rejects input that is not an object', () => {
    expect(parseRegistration(null).success).toBe(false);
  });
});

describe('isBot', () => {
  it('is false when the honeypot is empty or missing', () => {
    expect(isBot(valid)).toBe(false);
    expect(isBot({ ...valid, website: '' })).toBe(false);
  });

  it('is true when the honeypot is filled in', () => {
    expect(isBot({ ...valid, website: 'https://spam.example' })).toBe(true);
  });
});

describe('registrationEmail', () => {
  const data = {
    ...valid,
    squareMeters: 2.5,
    name: '<script>alert(1)</script>',
    description: '<a href="https://evil.example">Klick</a>\nZeile 2',
  };

  it('escapes every visitor value in the HTML', () => {
    const { html } = registrationEmail(data);
    expect(html).not.toContain('<script>');
    expect(html).not.toContain('<a href');
    expect(html).toContain('&lt;script&gt;alert(1)&lt;/script&gt;');
    expect(html).toContain('Klick&lt;/a&gt;<br>Zeile 2');
  });

  it('includes every field in the plain-text version', () => {
    const { text, subject } = registrationEmail({
      ...valid,
      squareMeters: 2.5,
    });
    expect(subject).toBe('Neue Klein-Montmartre Anmeldung');
    expect(text).toContain('Name: Anna Müller');
    expect(text).toContain('Adresse: Hauptstraße 1, 97070 Würzburg');
    expect(text).toContain('Email: anna@example.com');
    expect(text).toContain('Telefon: +49 171 1234567');
    expect(text).toContain('Benötigte Fläche: 2,5 m²');
    expect(text).toContain('Keramik\nund Schmuck');
  });
});
