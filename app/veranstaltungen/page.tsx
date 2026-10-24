import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veranstaltungen | Salon77 - Würzburger Künstlerinitiative',
  description:
    'Veranstaltungen und Events bei Salon77 in Würzburg.',
  openGraph: {
    title: 'Veranstaltungen | Salon77',
    description:
      'Veranstaltungen und Events bei Salon77 in Würzburg.',
  },
};

export default function VeranstaltungenPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Veranstaltungen
        </h1>
        <div className="prose prose-sm sm:prose max-w-none text-gray-600">
          <p>
            Hier findest du alle kommenden Veranstaltungen bei Salon77.
          </p>
          <p>Diese Seite wird in Kürze mit Inhalten gefüllt.</p>
        </div>
      </div>
    </div>
  );
}
