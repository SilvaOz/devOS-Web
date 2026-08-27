import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Datenschutzerklärung – DevOS Web',
  description: 'Datenschutzerklärung gemäß DSGVO für devos-web.de — Oscar Silva, Leipzig.',
}

export default function DatenschutzPage() {
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
            Datenschutzerklärung
          </h1>

          <div className="flex flex-col gap-8 text-sm" style={{ color: 'var(--fg)', lineHeight: '1.8' }}>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>1. Datenschutz auf einen Blick</h2>
              <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--fg)' }}>Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
                werden können.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>2. Verantwortlicher</h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website:<br /><br />
                Oscar Silva<br />
                DevOS Solutions<br />
                Leipzig, Deutschland<br />
                E-Mail:{' '}
                <a
                  href="mailto:info@devos-web.de"
                  style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                >
                  info@devos-web.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>3. Datenerfassung auf dieser Website</h2>

              <h3 className="text-sm font-semibold mb-1 mt-4" style={{ color: 'var(--fg)' }}>Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
                zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung
                von Anfragen).
              </p>

              <h3 className="text-sm font-semibold mb-1 mt-4" style={{ color: 'var(--fg)' }}>Newsletter</h3>
              <p>
                Wenn Sie den Newsletter abonnieren, verwenden wir Ihre E-Mail-Adresse
                ausschließlich zur Zusendung des Newsletters und projektbezogener Informationen.
                Ihre Einwilligung können Sie jederzeit widerrufen. Eine Abmelde-Möglichkeit
                befindet sich in jedem Newsletter.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                E-Mails werden über <strong>Resend</strong> (Resend Inc., USA) versandt.
                Resend ist EU-DSGVO-konform (Standard Contractual Clauses).
                Weitere Informationen: resend.com/privacy.
              </p>

              <h3 className="text-sm font-semibold mb-1 mt-4" style={{ color: 'var(--fg)' }}>Server-Log-Dateien</h3>
              <p>
                Diese Website wird über <strong>Vercel Inc.</strong> (USA) gehostet.
                Beim Besuch unserer Website erfasst Vercel automatisch Server-Log-Dateien.
                Diese enthalten: Browsertyp, Betriebssystem, Referrer-URL, Hostname,
                Uhrzeit der Serveranfrage und IP-Adresse.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Weitere Informationen: vercel.com/legal/privacy-policy.
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>4. Zahlungsabwicklung</h2>
              <p>
                Die Zahlung erfolgt ausschließlich per <strong>Banküberweisung</strong> nach schriftlichem Angebot.
                Es werden keine Zahlungsdaten (Kreditkarten, IBAN) über diese Website verarbeitet.
                Sie erhalten eine Rechnung per E-Mail mit den vollständigen Bankdaten.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>5. Affiliate-Links</h2>
              <p>
                Diese Website enthält Affiliate-Links zu Drittanbietern (u.a. Elegant Themes,
                Amelia Booking, IONOS, All-Inkl, Make.com). Wenn Sie auf einen solchen Link klicken,
                kann der jeweilige Anbieter Cookies setzen und Ihre Aktivität nachverfolgen.
                Wir haben keinen Einfluss auf die Datenverarbeitung durch diese Anbieter.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Bitte lesen Sie die Datenschutzhinweise des jeweiligen Anbieters, bevor Sie
                einen Kauf tätigen.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>6. Keine Tracking-Tools oder Werbung</h2>
              <p>
                Diese Website verwendet keine Tracking-Tools, Analytics-Dienste oder Werbeanzeigen.
                Es werden keine Cookies zu Analyse- oder Marketingzwecken gesetzt.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>7. Ihre Rechte</h2>
              <p>Sie haben das Recht:</p>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
                <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
                <li>Unrichtige Daten berichtigen zu lassen (Art. 16 DSGVO)</li>
                <li>Die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
                <li>Die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
                <li>Der Datenverarbeitung zu widersprechen (Art. 21 DSGVO)</li>
                <li>Ihre Daten in einem übertragbaren Format zu erhalten (Art. 20 DSGVO)</li>
                <li>Ihre Einwilligung jederzeit zu widerrufen (Art. 7 Abs. 3 DSGVO)</li>
              </ul>
              <p style={{ marginTop: '0.75rem' }}>
                Um Ihre Rechte geltend zu machen, wenden Sie sich bitte an:{' '}
                <a
                  href="mailto:info@devos-web.de"
                  style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                >
                  info@devos-web.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold mb-2" style={{ color: 'var(--fg)' }}>8. Beschwerderecht bei der Aufsichtsbehörde</h2>
              <p>
                Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde
                zu beschweren. In Sachsen ist dies:
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Sächsischer Datenschutzbeauftragter<br />
                Devrientstraße 5<br />
                01067 Dresden<br />
                Web: saechsdsb.de
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
