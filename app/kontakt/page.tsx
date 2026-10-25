import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kontakt | Salon77 - Würzburger Künstlerinitiative',
  description: 'Kontaktinformationen für Salon77 in Würzburg',
};

export default function Kontakt() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12"
            style={{ color: '#2c2c2c' }}
          >
            Kontakt
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: '#C9A961' }}
                >
                  Salon77
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3
                      className="text-sm font-semibold mb-2"
                      style={{ color: '#2c2c2c' }}
                    >
                      Organisition
                    </h3>
                    <p style={{ color: '#666666' }}>
                      Würzburger Künstlerinitiative e.V.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="text-sm font-semibold mb-2"
                      style={{ color: '#2c2c2c' }}
                    >
                      Adresse
                    </h3>
                    <p style={{ color: '#666666' }}>
                      Richard-Wagner-Str. 60<br />
                      97074 Würzburg
                    </p>
                  </div>

                  <div>
                    <h3
                      className="text-sm font-semibold mb-2"
                      style={{ color: '#2c2c2c' }}
                    >
                      Telefon
                    </h3>
                    <p style={{ color: '#666666' }}>
                      <a
                        href="tel:017179990218"
                        className="hover:underline"
                        style={{ color: '#B9BCB5' }}
                      >
                        0171 - 7990218
                      </a>
                      <br />
                      <span className="text-sm">(2. Vorsitzende Mercedes Sebald)</span>
                    </p>
                  </div>

                  <div>
                    <h3
                      className="text-sm font-semibold mb-2"
                      style={{ color: '#2c2c2c' }}
                    >
                      Email
                    </h3>
                    <p style={{ color: '#666666' }}>
                      <a
                        href="mailto:info@salon77.de"
                        className="hover:underline"
                        style={{ color: '#B9BCB5' }}
                      >
                        info@salon77.de
                      </a>
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <Link
                      href="/"
                      className="inline-block px-6 py-2 rounded-md font-semibold text-white transition-all"
                      style={{ backgroundColor: '#B9BCB5' }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                    >
                      Zurück zur Startseite
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Image */}
            <div>
              <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
                <Image
                  src="/salon77/kleinmomatra/kontakt.png"
                  alt="Salon77 Kontakt"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
