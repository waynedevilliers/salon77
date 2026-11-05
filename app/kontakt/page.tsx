import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/structured-data';
import { pageMetadata } from '@/lib/metadata';
import Image from 'next/image';
import BackButton from '@/components/BackButton';
import MapConsent from '@/components/MapConsent';
import { site } from '@/content/site';

export const metadata = pageMetadata({
  title: 'Kontakt | Salon77 - Würzburger Künstlerinitiative',
  description: 'Kontaktinformationen für Salon77 in Würzburg',
  path: '/kontakt',
});

// TODO: read the ?kurs=<course-slug> query (set by the course card's Probestunde
// button) and pre-select that course in the contact form.
export default function Kontakt() {
  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbJsonLd('/kontakt')} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <h1 className="page-title" style={{ color: 'var(--color-text)' }}>
            Kontakt
          </h1>

          <div className="space-y-8">
            {/* Row 1: Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
              <Image
                src="/kontakt_images/kontakt.png"
                alt="Salon77 Kontakt"
                fill
                className="w-full h-full object-cover"
              />
            </div>

            {/* Row 2: Contact Details */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h2
                className="text-3xl font-bold mb-8"
                style={{ color: 'var(--color-accent-text)' }}
              >
                Salon77
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Organization & Address */}
                <div className="space-y-6">
                  <div>
                    <h3
                      className="text-sm font-semibold mb-2 uppercase tracking-wide"
                      style={{ color: 'var(--color-sage-text)' }}
                    >
                      Organisation
                    </h3>
                    <p
                      style={{ color: 'var(--color-text)' }}
                      className="font-semibold"
                    >
                      Würzburger Künstlerinitiative e.V.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="text-sm font-semibold mb-2 uppercase tracking-wide"
                      style={{ color: 'var(--color-sage-text)' }}
                    >
                      Adresse
                    </h3>
                    <p
                      style={{ color: 'var(--color-text)' }}
                      className="font-semibold"
                    >
                      {site.address.street}
                    </p>
                    <p style={{ color: 'var(--color-text-muted)' }}>
                      {site.address.postalCode} {site.address.city}
                    </p>
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="space-y-6">
                  <div>
                    <h3
                      className="text-sm font-semibold mb-2 uppercase tracking-wide"
                      style={{ color: 'var(--color-sage-text)' }}
                    >
                      Telefon
                    </h3>
                    <a
                      href="tel:017179990218"
                      className="hover:underline font-semibold"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {site.phone}
                    </a>
                    <p
                      style={{ color: 'var(--color-text-muted)' }}
                      className="text-sm mt-1"
                    >
                      2. Vorsitzende Mercedes Sebald Arguisuelas
                    </p>
                  </div>

                  <div>
                    <h3
                      className="text-sm font-semibold mb-2 uppercase tracking-wide"
                      style={{ color: 'var(--color-sage-text)' }}
                    >
                      Email
                    </h3>
                    <a
                      href="mailto:info@salon77.de"
                      className="hover:underline font-semibold"
                      style={{ color: 'var(--color-text)' }}
                    >
                      info@salon77.de
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <BackButton />
              </div>
            </div>

            {/* Row 3: Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <MapConsent
                embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.8947632845367!2d9.9582214!3d49.7930186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a28fd3a4bebb61%3A0x7e831419e9b92b3e!2sSalon77!5e0!3m2!1sde!2sde!4v1692547620584"
                openHref="https://www.google.com/maps/place/Salon+77/.7930186,9.9582214,17z"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
