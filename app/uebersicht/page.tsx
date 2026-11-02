import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/structured-data';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Übersicht | Salon77 - Würzburger Künstlerinitiative',
  description: 'Übersicht der Kurse und Programme bei Salon77 in Würzburg.',
  path: '/uebersicht',
});

export default function UebersichtPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={breadcrumbJsonLd('/uebersicht')} />
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="page-title">Übersicht</h1>
        <div className="prose prose-sm sm:prose max-w-none text-gray-600">
          <p>
            Hier findest du eine umfassende Übersicht aller Kurse und Programme
            bei Salon77.
          </p>
          <p>Diese Seite wird in Kürze mit Inhalten gefüllt.</p>
        </div>
      </div>
    </div>
  );
}
