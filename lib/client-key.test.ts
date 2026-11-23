import { clientKey } from './client-key';

describe('clientKey', () => {
  it('uses the last forwarded address, the one the proxy added', () => {
    expect(
      clientKey(new Headers({ 'x-forwarded-for': '203.0.113.5, 10.0.0.1' }))
    ).toBe('10.0.0.1');
  });

  it('ignores addresses the visitor put in front', () => {
    expect(
      clientKey(
        new Headers({ 'x-forwarded-for': '1.2.3.4, 5.6.7.8, 10.0.0.1' })
      )
    ).toBe('10.0.0.1');
  });

  it('falls back to the real IP header', () => {
    expect(clientKey(new Headers({ 'x-real-ip': '198.51.100.7' }))).toBe(
      '198.51.100.7'
    );
  });

  it('uses one shared key when no address is known', () => {
    expect(clientKey(new Headers())).toBe('unknown');
  });
});
