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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Map (spans 2 on large screens) */}
            <div className="lg:col-span-2 space-y-6">
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

              {/* Contact Image */}
              <div className="relative rounded-lg overflow-hidden shadow-lg h-80">
                <Image
                  src="/salon77/kleinmomatra/kontakt.png"
                  alt="Salon77 Kontakt"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Contact Information */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 rounded-lg shadow-lg overflow-hidden" style={{ backgroundColor: '#B9BCB5' }}>
                <div className="bg-gradient-to-r from-[#B9BCB5] to-[#a8aba3] px-8 py-6">
                  <h2 className="text-3xl font-bold text-white">Kontakt</h2>
                </div>

                <div className="bg-white p-8 space-y-6">
                  {/* Organization */}
                  <div className="pb-4 border-b border-gray-100">
                    <p style={{ color: '#B9BCB5' }} className="text-sm font-semibold uppercase tracking-wide mb-1">
                      Organisation
                    </p>
                    <p className="text-lg font-bold" style={{ color: '#2c2c2c' }}>
                      Salon77
                    </p>
                    <p style={{ color: '#666666' }} className="text-sm">
                      Würzburger Künstlerinitiative e.V.
                    </p>
                  </div>

                  {/* Address */}
                  <div className="pb-4 border-b border-gray-100">
                    <p style={{ color: '#B9BCB5' }} className="text-sm font-semibold uppercase tracking-wide mb-2">
                      📍 Adresse
                    </p>
                    <p style={{ color: '#2c2c2c' }} className="font-semibold">
                      Richard-Wagner-Str. 60
                    </p>
                    <p style={{ color: '#666666' }}>
                      97074 Würzburg
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="pb-4 border-b border-gray-100">
                    <p style={{ color: '#B9BCB5' }} className="text-sm font-semibold uppercase tracking-wide mb-2">
                      Telefon
                    </p>
                    <a
                      href="tel:017179990218"
                      className="hover:underline font-semibold"
                      style={{ color: '#2c2c2c' }}
                    >
                      0171 - 7990218
                    </a>
                    <p style={{ color: '#666666' }} className="text-xs mt-1">
                      2. Vorsitzende Mercedes Sebald
                    </p>
                  </div>

                  {/* Email */}
                  <div className="pb-4 border-b border-gray-100">
                    <p style={{ color: '#B9BCB5' }} className="text-sm font-semibold uppercase tracking-wide mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:info@salon77.de"
                      className="hover:underline font-semibold"
                      style={{ color: '#2c2c2c' }}
                    >
                      info@salon77.de
                    </a>
                  </div>

                  {/* Back Button */}
                  <div className="pt-2">
                    <BackButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
