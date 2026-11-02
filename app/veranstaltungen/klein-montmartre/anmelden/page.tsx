import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/structured-data';
import { pageMetadata } from '@/lib/metadata';
import RegistrationForm from '@/components/RegistrationForm';

export const metadata = pageMetadata({
  title: 'Anmeldung Klein-Montmartre | Salon77',
  description:
    'Melde dich als Aussteller beim Klein-Montmartre Kunsthandwerkermarkt an.',
  path: '/veranstaltungen/klein-montmartre/anmelden',
  noIndex: true,
});

export default function AnmeldenPage() {
  return (
    <div className="flex flex-col">
      <JsonLd
        data={breadcrumbJsonLd('/veranstaltungen/klein-montmartre/anmelden')}
      />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
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
      </main>
    </div>
  );
}
