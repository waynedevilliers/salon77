import { createRequestCode } from './request-code';

describe('createRequestCode', () => {
  it('creates an 8-character lowercase hex code', () => {
    expect(createRequestCode()).toMatch(/^[0-9a-f]{8}$/);
  });

  it('creates a different code each time', () => {
    expect(createRequestCode()).not.toBe(createRequestCode());
  });
});
