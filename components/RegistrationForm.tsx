'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  submitRegistration,
  type SubmitResult,
} from '@/app/actions/registration';
import {
  registrationLimits as limits,
  registrationText as t,
  type RegistrationField,
} from '@/content/registration';
import type { FieldErrors } from '@/lib/registration';

const emptyForm: Record<RegistrationField, string> & { website: string } = {
  name: '',
  surname: '',
  address: '',
  email: '',
  phone: '',
  squareMeters: '',
  description: '',
  website: '',
};

const labelClass =
  'block text-base font-semibold mb-2 text-[var(--color-text)]';
const fieldClass =
  'w-full min-h-11 px-4 py-2 border border-[var(--color-border)] rounded-md text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] aria-[invalid=true]:border-[var(--color-error)]';

function errorMessage(result: SubmitResult): string {
  switch (result.status) {
    case 'invalid':
      return t.errors.invalid;
    case 'rate-limited':
      return t.errors.rateLimited;
    case 'closed':
      return t.errors.closed;
    case 'failed':
      return `${t.errors.failed} (${t.codeLabel}: ${result.code})`;
    default:
      return '';
  }
}

interface FieldProps {
  id: RegistrationField;
  value: string;
  error?: string;
  onChange: (id: RegistrationField, value: string) => void;
  children?: never;
  type?: 'text' | 'email' | 'tel' | 'number';
  autoComplete?: string;
  inputMode?: 'decimal';
  multiline?: boolean;
}

function Field({
  id,
  value,
  error,
  onChange,
  type = 'text',
  autoComplete,
  inputMode,
  multiline = false,
}: FieldProps) {
  const errorId = `${id}-error`;
  const shared = {
    id,
    name: id,
    value,
    required: true,
    className: fieldClass,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
  };
  const maxLength = limits[id as keyof typeof limits];

  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {t.labels[id]}
      </label>
      {multiline ? (
        <textarea
          {...shared}
          rows={5}
          maxLength={maxLength}
          onChange={(e) => onChange(id, e.target.value)}
        />
      ) : (
        <input
          {...shared}
          type={type}
          autoComplete={autoComplete}
          inputMode={inputMode}
          maxLength={type === 'number' ? undefined : maxLength}
          min={type === 'number' ? limits.squareMetersMin : undefined}
          max={type === 'number' ? limits.squareMetersMax : undefined}
          step={type === 'number' ? 0.5 : undefined}
          onChange={(e) => onChange(id, e.target.value)}
        />
      )}
      {error && (
        <p id={errorId} className="mt-1 text-base text-[var(--color-error)]">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * Exhibitor registration for Klein-Montmartre. Validated again on the server
 * (app/actions/registration.ts). Switch it off in content/registration.ts.
 */
export default function RegistrationForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (id: RegistrationField, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    setFieldErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await submitRegistration(formData);
      if (result.status === 'success') {
        setSubmitted(true);
        setFormData(emptyForm);
        setFieldErrors({});
        return;
      }
      setFieldErrors(result.status === 'invalid' ? result.fieldErrors : {});
      setError(errorMessage(result));
    } catch {
      setError(t.errors.network);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="bg-[var(--color-surface)] rounded-lg shadow-lg p-8 text-center"
      >
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-accent-text)]">
          {t.successTitle}
        </h2>
        <p className="text-lg text-[var(--color-text-muted)]">
          {t.successText}
        </p>
      </div>
    );
  }

  const field = (id: RegistrationField) => ({
    id,
    value: formData[id],
    error: fieldErrors[id],
    onChange: handleChange,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--color-surface)] rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-8 text-[var(--color-accent-text)]">
        {t.title}
      </h2>

      {error && (
        <div
          role="alert"
          className="mb-6 p-4 border border-[var(--color-error)] bg-[var(--color-surface-alt)] rounded-md"
        >
          <p className="text-[var(--color-error)]">{error}</p>
        </div>
      )}

      <div className="space-y-6">
        <Field {...field('name')} autoComplete="given-name" />
        <Field {...field('surname')} autoComplete="family-name" />
        <Field {...field('address')} autoComplete="street-address" />
        <Field {...field('email')} type="email" autoComplete="email" />
        <Field {...field('phone')} type="tel" autoComplete="tel" />
        <Field {...field('squareMeters')} type="number" inputMode="decimal" />
        <Field {...field('description')} multiline />

        {/* Honeypot: hidden from people and screen readers, bots fill it in. */}
        <div hidden>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, website: e.target.value }))
            }
          />
        </div>

        <p className="text-base text-[var(--color-text-muted)]">
          {t.privacyBefore}
          <Link
            href="/datenschutz"
            className="underline underline-offset-4 text-[var(--color-accent-text)]"
          >
            {t.privacyLink}
          </Link>
          {t.privacyAfter}
        </p>

        <button
          type="submit"
          disabled={loading}
          className="w-full min-h-11 py-3 rounded-md font-semibold text-[var(--color-button-text)] bg-[var(--color-button)] transition-colors hover:enabled:bg-[var(--color-button-hover)] disabled:opacity-50"
        >
          {loading ? t.submitting : t.submit}
        </button>
      </div>
    </form>
  );
}
