import { Metadata } from 'next';
import RegistrationForm from '@/components/RegistrationForm';

export const metadata: Metadata = {
  title: 'Anmeldung Klein-Montmartre | Salon77',
  description: 'Melde dich als Aussteller beim Klein-Montmartre Kunsthandwerkermarkt an.',
};

export default function AnmeldenPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mb-12">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: '#2c2c2c' }}
            >
              Aussteller Anmeldung
            </h1>
            <p
              className="text-lg sm:text-xl"
              style={{ color: '#666666' }}
            >
              Melde dich als Aussteller beim Klein-Montmartre Kunsthandwerkermarkt an.
            </p>
          </div>

          <RegistrationForm />
        </div>
      </main>
    </div>
  );
}
