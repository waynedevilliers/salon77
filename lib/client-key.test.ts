import { clientKey } from './client-key';

describe('clientKey', () => {
  it('uses the address Vercel puts in x-forwarded-for', () => {
    expect(clientKey(new Headers({ 'x-forwarded-for': '203.0.113.5' }))).toBe(
      '203.0.113.5'
    );
  });

  it('ignores addresses the visitor put in front', () => {
    expect(
      clientKey(
        new Headers({ 'x-forwarded-for': '1.2.3.4, 5.6.7.8, 203.0.113.5' })
      )
    ).toBe('203.0.113.5');
  });

  it('does not trust x-real-ip, which the visitor can set', () => {
    expect(clientKey(new Headers({ 'x-real-ip': '198.51.100.7' }))).toBeNull();
  });

  it('returns null when no address is known', () => {
    expect(clientKey(new Headers())).toBeNull();
  });
});
