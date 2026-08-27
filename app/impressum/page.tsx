import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Impressum – DevOS Web',
  description: 'Impressum und Anbieterkennzeichnung gemäß § 5 TMG für DevOS Web, Oscar Silva, Leipzig.',
}

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20 px-4" style={{ background: 'var(--bg)' }}>
        <div className="max-w-2xl mx-auto">

          <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>
            Rechtliches
          </p>
          <h1
            className="text-3xl font-extrabold mb-10"
            style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
          >
            Impressum
          </h1>

          <div className="flex flex-col gap-8 text-sm" style={{ color: 'var(--fg)', lineHeight: '1.8' }}>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>Angaben gemäß § 5 TMG</h2>
              <p>
                Oscar Silva<br />
                DevOS Solutions<br />
                GutsMuthsstraße 8<br />
                04177 Leipzig<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>Kontakt</h2>
              <p>
                E-Mail:{' '}
                <a
                  href="mailto:info@devos-web.de"
                  style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                >
                  info@devos-web.de
                </a>
                <br />
                Website: devos-web.de
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>Umsatzsteuer</h2>
              <p>
                Gemäß § 19 UStG wird keine Umsatzsteuer berechnet
                (Kleinunternehmerregelung). Eine Umsatzsteuer-Identifikationsnummer
                liegt daher nicht vor.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                Freiberuflicher Webentwickler und Softwareentwickler.
                Kein kammerpflichtiger Beruf. Es gilt kein spezifisches Berufsrecht.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>Redaktionell Verantwortlicher</h2>
              <p>Oscar Silva, Leipzig</p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
                diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
                10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung,
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder
                nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
                nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
                Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
                Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>Affiliate-Hinweis</h2>
              <p>
                Diese Website enthält Affiliate-Links zu Produkten und Dienstleistungen
                Dritter. Wenn Sie über diese Links kaufen, erhalten wir eine kleine
                Provision — ohne Mehrkosten für Sie. Dies hat keinen Einfluss auf unsere
                Empfehlungen oder redaktionellen Inhalte.
              </p>
            </section>

            <p className="text-xs" style={{ color: 'var(--muted)' }}>
              Letzte Aktualisierung: August 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
