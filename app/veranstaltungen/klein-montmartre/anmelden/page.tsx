import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/structured-data';
import { pageMetadata } from '@/lib/metadata';
import RegistrationForm from '@/components/RegistrationForm';
import { registration } from '@/content/registration';

export const metadata = pageMetadata({
  title: 'Anmeldung Klein-Montmartre | Salon77',
  description:
    'Melde dich als Aussteller beim Klein-Montmartre Kunsthandwerkermarkt an.',
  path: registration.path,
  noIndex: true,
});

export default function AnmeldenPage() {
  // The form is switched off in content/registration.ts.
  if (!registration.enabled) notFound();

  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbJsonLd(registration.path)} />
      <div className="flex-1">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <div className="mb-12">
            <h1 className="page-title" style={{ color: 'var(--color-text)' }}>
              Aussteller Anmeldung
            </h1>
            <p
              className="text-lg sm:text-xl"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Melde dich als Aussteller beim Klein-Montmartre
              Kunsthandwerkermarkt an.
            </p>
          </div>

          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
