/**
 * A short code for one registration attempt. It is shown to the visitor when
 * sending fails and logged on the server, so the failure can be found without
 * logging any personal data.
 */
export function createRequestCode(): string {
  return globalThis.crypto.randomUUID().slice(0, 8);
}
