import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/structured-data';
import { pageMetadata } from '@/lib/metadata';
import BackButton from '@/components/BackButton';
import EmailLink from '@/components/EmailLink';
import { site } from '@/content/site';

export const metadata = pageMetadata({
  title: 'Datenschutz | Salon77 - Würzburger Künstlerinitiative',
  description: 'Datenschutzerklärung von Salon77',
  path: '/datenschutz',
});

export default function Datenschutz() {
  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbJsonLd('/datenschutz')} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <h1 className="page-title" style={{ color: 'var(--color-text)' }}>
            Datenschutz
          </h1>

          <div
            className="space-y-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                Verantwortliche Stelle
              </h2>
              <p className="mb-2">
                Verantwortliche Stelle im Sinne der Datenschutzgesetze,
                insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
              </p>
              <p className="mb-2 font-semibold">
                Salon77 | Würzburger Künstlerinitiative e.V.
              </p>
              <p className="mb-2">
                {site.address.street} | {site.address.postalCode}{' '}
                {site.address.city}
              </p>
              <p className="mb-2">
                Amtsgericht Würzburg - Registergericht - VR 755
              </p>
              <p className="mb-2">Tel: {site.phone} (Vorstand)</p>
              <p className="mb-6">
                E-Mail: <EmailLink address={site.email} />
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                Ihre Betroffenenrechte
              </h2>
              <p className="mb-4">
                Unter den angegebenen Kontaktdaten unseres
                Datenschutzbeauftragten können Sie jederzeit folgende Rechte
                ausüben:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>
                  Auskunft über Ihre bei uns gespeicherten Daten und deren
                  Verarbeitung
                </li>
                <li>Berichtigung unrichtiger personenbezogener Daten</li>
                <li>Löschung Ihrer bei uns gespeicherten Daten</li>
                <li>
                  Einschränkung der Datenverarbeitung, sofern wir Ihre Daten
                  aufgrund gesetzlicher Pflichten noch nicht löschen dürfen
                </li>
                <li>
                  Widerspruch gegen die Verarbeitung Ihrer Daten bei uns und
                </li>
                <li>
                  Datenübertragbarkeit, sofern Sie in die Datenverarbeitung
                  eingewilligt haben oder einen Vertrag mit uns abgeschlossen
                  haben
                </li>
              </ul>
              <p className="mb-6">
                Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese
                jederzeit mit Wirkung für die Zukunft widerrufen.
              </p>
              <p className="mb-6">
                Sie können sich jederzeit mit einer Beschwerde an die für Sie
                zuständige Aufsichtsbehörde wenden. Ihre zuständige
                Aufsichtsbehörde richtet sich nach dem Bundesland Ihres
                Wohnsitzes, Ihrer Arbeit oder der mutmaßlichen Verletzung. Eine
                Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich)
                mit Anschrift finden Sie unter:{' '}
                <a
                  href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75"
                  style={{ color: 'var(--color-primary)' }}
                >
                  https://www.bfdi.bund.de
                </a>
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                Zwecke der Datenverarbeitung
              </h2>
              <p className="mb-4">
                Wir verarbeiten Ihre personenbezogenen Daten nur zu den in
                dieser Datenschutzerklärung genannten Zwecken. Eine Übermittlung
                Ihrer persönlichen Daten an Dritte zu anderen als den genannten
                Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten
                nur an Dritte weiter, wenn:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben</li>
                <li>
                  die Verarbeitung zur Abwicklung eines Vertrags mit Ihnen
                  erforderlich ist
                </li>
                <li>
                  die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung
                  erforderlich ist
                </li>
                <li>
                  die Verarbeitung zur Wahrung berechtigter Interessen
                  erforderlich ist und kein Grund zur Annahme besteht, dass Sie
                  ein überwiegendes schutzwürdiges Interesse an der
                  Nichtweitergabe Ihrer Daten haben
                </li>
              </ul>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                Löschung bzw. Sperrung der Daten
              </h2>
              <p className="mb-6">
                Wir halten uns an die Grundsätze der Datenvermeidung und
                Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten
                daher nur so lange, wie dies zur Erreichung der hier genannten
                Zwecke erforderlich ist oder wie es die vom Gesetzgeber
                vorgesehenen vielfältigen Speicherfristen vorsehen. Nach
                Fortfall des jeweiligen Zweckes bzw. Ablauf dieser Fristen
                werden die entsprechenden Daten routinemäßig und entsprechend
                den gesetzlichen Vorschriften gesperrt oder gelöscht.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                Erfassung allgemeiner Informationen beim Besuch unserer Website
              </h2>
              <p className="mb-4">
                Wenn Sie auf unsere Website zugreifen, werden automatisch
                mittels eines Cookies Informationen allgemeiner Natur erfasst.
                Diese Informationen (Server-Logfiles) beinhalten etwa die Art
                des Webbrowsers, das verwendete Betriebssystem, den Domainnamen
                Ihres Internet-Service-Providers und ähnliches. Hierbei handelt
                es sich ausschließlich um Informationen, welche keine
                Rückschlüsse auf Ihre Person zulassen.
              </p>
              <p className="mb-4">
                Diese Informationen sind technisch notwendig, um von Ihnen
                angeforderte Inhalte von Webseiten korrekt auszuliefern und
                fallen bei Nutzung des Internets zwingend an. Sie werden
                insbesondere zu folgenden Zwecken verarbeitet:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>
                  Sicherstellung eines problemlosen Verbindungsaufbaus der
                  Website
                </li>
                <li>
                  Sicherstellung einer reibungslosen Nutzung unserer Website
                </li>
                <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                <li>zu weiteren administrativen Zwecken</li>
              </ul>
              <p className="mb-4">
                Die Verarbeitung Ihrer personenbezogenen Daten basiert auf
                unserem berechtigten Interesse aus den vorgenannten Zwecken zur
                Datenerhebung. Wir verwenden Ihre Daten nicht, um Rückschlüsse
                auf Ihre Person zu ziehen. Empfänger der Daten sind nur die
                verantwortliche Stelle und ggf. Auftragsverarbeiter.
              </p>
              <p className="mb-6">
                Anonyme Informationen dieser Art werden von uns ggfs.
                statistisch ausgewertet, um unseren Internetauftritt und die
                dahinterstehende Technik zu optimieren.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                Cookies
              </h2>
              <p className="mb-4">
                Wie viele andere Webseiten verwenden wir auch so genannte
                „Cookies“. Cookies sind kleine Textdateien, die von einem
                Websiteserver auf Ihre Festplatte übertragen werden. Hierdurch
                erhalten wir automatisch bestimmte Daten wie z. B. IP-Adresse,
                verwendeter Browser, Betriebssystem und Ihre Verbindung zum
                Internet.
              </p>
              <p className="mb-4">
                Cookies können nicht verwendet werden, um Programme zu starten
                oder Viren auf einen Computer zu übertragen. Anhand der in
                Cookies enthaltenen Informationen können wir Ihnen die
                Navigation erleichtern und die korrekte Anzeige unserer
                Webseiten ermöglichen.
              </p>
              <p className="mb-4">
                In keinem Fall werden die von uns erfassten Daten an Dritte
                weitergegeben oder ohne Ihre Einwilligung eine Verknüpfung mit
                personenbezogenen Daten hergestellt.
              </p>
              <p className="mb-4">
                Natürlich können Sie unsere Website grundsätzlich auch ohne
                Cookies betrachten. Internet-Browser sind regelmäßig so
                eingestellt, dass sie Cookies akzeptieren. Im Allgemeinen können
                Sie die Verwendung von Cookies jederzeit über die Einstellungen
                Ihres Browsers deaktivieren. Bitte verwenden Sie die
                Hilfefunktionen Ihres Internetbrowsers, um zu erfahren, wie Sie
                diese Einstellungen ändern können. Bitte beachten Sie, dass
                einzelne Funktionen unserer Website möglicherweise nicht
                funktionieren, wenn Sie die Verwendung von Cookies deaktiviert
                haben.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                SSL-Verschlüsselung
              </h2>
              <p className="mb-6">
                Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen,
                verwenden wir dem aktuellen Stand der Technik entsprechende
                Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                Änderung unserer Datenschutzbestimmungen
              </h2>
              <p className="mb-6">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                damit sie stets den aktuellen rechtlichen Anforderungen
                entspricht oder um Änderungen unserer Leistungen in der
                Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer
                Services. Für Ihren erneuten Besuch gilt dann die neue
                Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                Fragen zum Datenschutz
              </h2>
              <p className="mb-6">
                Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte
                eine E-Mail oder wenden Sie sich direkt an die für den
                Datenschutz verantwortliche Person in unserer Organisation:
              </p>
              <p className="mb-6">
                <EmailLink address="datenschutz@salon77.de" />
              </p>
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
