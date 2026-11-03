import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/structured-data';
import { pageMetadata } from '@/lib/metadata';
import BackButton from '@/components/BackButton';
import EmailLink from '@/components/EmailLink';
import { site } from '@/content/site';

export const metadata = pageMetadata({
  title: 'Impressum | Salon77 - Würzburger Künstlerinitiative',
  description: 'Impressum und rechtliche Informationen von Salon77',
  path: '/impressum',
});

export default function Impressum() {
  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbJsonLd('/impressum')} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <h1 className="page-title" style={{ color: 'var(--color-text)' }}>
            Impressum
          </h1>

          <div
            className="space-y-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-accent-text)' }}
              >
                Salon 77 Würzburger Künstlerinitiative e.V.
              </h2>
              <p className="mb-2">{site.address.street}</p>
              <p className="mb-6">
                {site.address.postalCode} {site.address.city}
              </p>

              <p className="mb-2">
                <strong>Telefon:</strong> {site.phone}
              </p>
              <p className="mb-8">
                <strong>E-Mail:</strong> <EmailLink address={site.email} />
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-accent-text)' }}
              >
                Gemeinschaftlich vertretungsberechtigt
              </h2>
              <p className="mb-4">
                <strong>1. Vorsitzender:</strong>
                <br />
                Mercedes Sebald Arguisuelas
              </p>
              <p className="mb-8">
                <strong>2. Vorsitzender:</strong>
                <br />
                Simon Orth
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-accent-text)' }}
              >
                Registrierung
              </h2>
              <p className="mb-2">
                <strong>Registergericht:</strong> Amtsgericht Würzburg
              </p>
              <p className="mb-8">
                <strong>Registernummer:</strong> VR 755
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-accent-text)' }}
              >
                Verantwortlich für redaktionelle Inhalte
              </h2>
              <p className="mb-4">V.i.S.d § 55 Abs. 2 RStV:</p>
              <p>Mercedes Sebald Arguisuelas</p>
            </section>

            <section className="pt-8 border-t border-gray-200 mt-12">
              <BackButton />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
