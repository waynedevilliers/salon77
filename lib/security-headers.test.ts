/// <reference types="vitest" />
import { securityHeaders } from './security-headers';

const headerValue = (key: string) =>
  securityHeaders.find((header) => header.key === key)?.value ?? '';

describe('securityHeaders', () => {
  it('sets every header required for the site', () => {
    const keys = securityHeaders.map((header) => header.key);
    expect(keys).toEqual(
      expect.arrayContaining([
        'Content-Security-Policy',
        'Strict-Transport-Security',
        'X-Content-Type-Options',
        'Referrer-Policy',
        'Permissions-Policy',
      ])
    );
  });

  it('only allows same-origin content except the consented map frame', () => {
    const csp = headerValue('Content-Security-Policy');
    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain('frame-src https://www.google.com');
    expect(csp).toContain("object-src 'none'");
    expect(csp).toContain("frame-ancestors 'none'");
  });

  it('enables HSTS with a two year max-age', () => {
    expect(headerValue('Strict-Transport-Security')).toBe(
      'max-age=63072000; includeSubDomains; preload'
    );
  });

  it('disables camera and geolocation in Permissions-Policy', () => {
    const policy = headerValue('Permissions-Policy');
    expect(policy).toContain('camera=()');
    expect(policy).toContain('geolocation=()');
  });
});
