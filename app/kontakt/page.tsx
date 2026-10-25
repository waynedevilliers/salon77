import { Metadata } from 'next';
import Image from 'next/image';
import BackButton from '@/components/BackButton';

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
                    <BackButton />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image and Map */}
            <div className="space-y-6">
              {/* Contact Image */}
              <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
                <Image
                  src="/salon77/kleinmomatra/kontakt.png"
                  alt="Salon77 Kontakt"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden shadow-lg h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.8947632845367!2d9.9582214!3d49.7930186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a28fd3a4bebb61%3A0x7e831419e9b92b3e!2sSalon77!5e0!3m2!1sde!2sde!4v1692547620584"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
