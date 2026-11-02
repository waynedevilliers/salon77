import { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Impressum | Salon77 - Würzburger Künstlerinitiative',
  description: 'Impressum und rechtliche Informationen von Salon77',
};

export default function Impressum() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12"
            style={{ color: '#2c2c2c' }}
          >
            Impressum
          </h1>

          <div className="space-y-8" style={{ color: '#666666' }}>
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#C9A961' }}>
                Salon 77 Würzburger Künstlerinitiative e.V.
              </h2>
              <p className="mb-2">{site.address.street}</p>
              <p className="mb-6">{site.address.postalCode} {site.address.city}</p>

              <p className="mb-2">
                <strong>Telefon:</strong> {site.phone}
              </p>
              <p className="mb-8">
                <strong>E-Mail:</strong>{' '}
                <a
                  href="mailto:info@salon77.de"
                  className="underline hover:opacity-75"
                  style={{ color: '#B9BCB5' }}
                >
                  info@salon77.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#C9A961' }}>
                Gemeinschaftlich vertretungsberechtigt
              </h2>
              <p className="mb-4">
                <strong>1. Vorsitzender:</strong>
                <br />
                Mercedes Sebald
              </p>
              <p className="mb-8">
                <strong>2. Vorsitzender:</strong>
                <br />
                Simon Orth
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#C9A961' }}>
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
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#C9A961' }}>
                Verantwortlich für redaktionelle Inhalte
              </h2>
              <p className="mb-4">V.i.S.d § 55 Abs. 2 RStV:</p>
              <p>Mercedes Sebald</p>
            </section>

            <section className="pt-8 border-t border-gray-200 mt-12">
              <Link
                href="/"
                className="inline-block px-6 py-2 rounded-md font-semibold text-white transition-opacity hover:opacity-75"
                style={{ backgroundColor: '#B9BCB5' }}
              >
                Zurück zur Startseite
              </Link>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
