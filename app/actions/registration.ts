'use server';

import { headers } from 'next/headers';
import nodemailer from 'nodemailer';
import { registration } from '@/content/registration';
import { clientKey } from '@/lib/client-key';
import { isRateLimited } from '@/lib/rate-limit';
import {
  isBot,
  parseRegistration,
  registrationEmail,
  type FieldErrors,
} from '@/lib/registration';
import { createRequestCode } from '@/lib/request-code';

const UNKNOWN_VISITOR_LIMIT = 30;

export type SubmitResult =
  | { status: 'success' }
  | { status: 'invalid'; fieldErrors: FieldErrors }
  | { status: 'rate-limited' }
  | { status: 'closed' }
  | { status: 'failed'; code: string };

interface MailConfig {
  host: string;
  port: number;
  secure: boolean;
  user?: string;
  pass?: string;
  from: string;
  to: string;
}

// Reads the SMTP settings. Returns null when a required one is missing, so a
// misconfigured host fails clearly instead of sending to nobody.
function mailConfig(): MailConfig | null {
  const {
    EMAIL_HOST,
    EMAIL_PORT,
    EMAIL_SECURE,
    EMAIL_USER,
    EMAIL_PASS,
    EMAIL_FROM,
    REGISTRATION_EMAIL,
  } = process.env;
  if (!EMAIL_HOST || !EMAIL_FROM || !REGISTRATION_EMAIL) return null;
  const port = Number(EMAIL_PORT || '587');
  if (!Number.isInteger(port)) return null;
  return {
    host: EMAIL_HOST,
    port,
    secure: EMAIL_SECURE === 'true',
    user: EMAIL_USER || undefined,
    pass: EMAIL_PASS || undefined,
    from: EMAIL_FROM,
    to: REGISTRATION_EMAIL,
  };
}

// Error type only: never the message, which can contain addresses.
function errorKind(error: unknown): string {
  if (error instanceof Error) {
    const code = (error as { code?: unknown }).code;
    return typeof code === 'string' ? `${error.name} ${code}` : error.name;
  }
  return 'unknown';
}

export async function submitRegistration(
  input: unknown
): Promise<SubmitResult> {
  if (!registration.enabled) return { status: 'closed' };

  // Bots get the same answer as people, so they do not learn about the trap.
  if (isBot(input)) return { status: 'success' };

  // Visitors without a known address share one bucket with a higher limit,
  // so one of them cannot block everybody else.
  const visitor = clientKey(await headers());
  const limited = visitor
    ? isRateLimited(`registration:${visitor}`)
    : isRateLimited('registration:unknown', Date.now(), UNKNOWN_VISITOR_LIMIT);
  if (limited) return { status: 'rate-limited' };

  const parsed = parseRegistration(input);
  if (!parsed.success) {
    return { status: 'invalid', fieldErrors: parsed.fieldErrors };
  }

  const code = createRequestCode();
  const config = mailConfig();
  if (!config) {
    console.error(`[registration ${code}] mail settings missing`);
    return { status: 'failed', code };
  }

  const email = registrationEmail(parsed.data);
  try {
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: config.user ? { user: config.user, pass: config.pass } : undefined,
    });
    await transporter.sendMail({
      from: config.from,
      to: config.to,
      replyTo: parsed.data.email,
      subject: email.subject,
      text: email.text,
      html: email.html,
    });
    return { status: 'success' };
  } catch (error) {
    console.error(`[registration ${code}] send failed: ${errorKind(error)}`);
    return { status: 'failed', code };
  }
}
