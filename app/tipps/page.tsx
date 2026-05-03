import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: '10 Tipps für Ihre Website — DevOS Web',
  description:
    'Was eine gute Website wirklich ausmacht — 10 praktische Tipps für kleine Unternehmen, erklärt ohne Fachjargon.',
}

const TIPS = [
  {
    number: '01',
    title: 'Ladezeit unter 3 Sekunden',
    body: 'Mehr als 53 % der Besucher verlassen eine Seite, wenn sie länger als 3 Sekunden lädt. Bilder komprimieren, Caching aktivieren, unnötige Plugins entfernen. Ein langsame Website kostet direkt Kunden.',
  },
  {
    number: '02',
    title: 'Mobile zuerst denken',
    body: 'Über 60 % Ihrer Besucher kommen von einem Smartphone. Wenn Ihre Website auf dem Handy schlecht aussieht oder schwer zu bedienen ist, verlieren Sie mehr als die Hälfte Ihrer potenziellen Kunden.',
  },
  {
    number: '03',
    title: 'Ein klares Ziel pro Seite',
    body: 'Jede Seite braucht genau eine Handlungsaufforderung (CTA): Termin buchen, Angebot anfragen, Produkt kaufen. Wer zu viele Optionen anbietet, überfordert — und verliert.',
  },
  {
    number: '04',
    title: 'Google My Business einrichten',
    body: 'Für lokale Unternehmen in Leipzig oder jeder anderen Stadt: Ein vollständig ausgefülltes Google-Profil ist oft wichtiger als die Website selbst. Kostenlos, einfach und direkt sichtbar in der Google-Suche.',
  },
  {
    number: '05',
    title: 'HTTPS ist Pflicht',
    body: 'Ohne SSL-Zertifikat zeigt Chrome "Nicht sicher" an — das schreckt Besucher sofort ab. Außerdem bevorzugt Google verschlüsselte Seiten in den Suchergebnissen. Kein Hosting ohne SSL.',
  },
  {
    number: '06',
    title: 'Kontaktdaten auf jeder Seite',
    body: 'Telefonnummer (oder E-Mail), Öffnungszeiten und Standort gehören in die Kopf- oder Fußzeile — nicht nur auf die Kontaktseite. Machen Sie es Ihren Kunden so einfach wie möglich, Sie zu erreichen.',
  },
  {
    number: '07',
    title: 'Weniger Text, mehr Bilder',
    body: 'Menschen lesen im Web nicht — sie scannen. Kurze Absätze, aussagekräftige Überschriften, echte Fotos von Ihnen und Ihren Leistungen. Stockfotos wirken unpersönlich und unglaubwürdig.',
  },
  {
    number: '08',
    title: 'Kundenbewertungen einbinden',
    body: 'Bewertungen und Testimonials sind das stärkste Verkaufswerkzeug auf Ihrer Website. Zeigen Sie echte Zitate mit Name und Beruf. Drei gute Bewertungen überzeigen mehr als drei Seiten Text.',
  },
  {
    number: '09',
    title: 'Regelmäßige Updates machen',
    body: 'WordPress-Seiten ohne Updates werden innerhalb von Monaten gehackt. Plugin-Aktualisierungen, Backups und Sicherheits-Scans sind keine Extras — sie sind Grundpflege. Einmal pro Monat reicht.',
  },
  {
    number: '10',
    title: 'Ihren wichtigsten Satz an erste Stelle',
    body: 'Was Sie anbieten und für wen — das muss innerhalb von 3 Sekunden klar sein, ohne zu scrollen. Kein Slider, kein Video, keine Animation. Nur ein klarer Satz und ein Button. Das ist der wichtigste Teil Ihrer Website.',
  },
]

export default function TippsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>

        {/* Hero */}
        <section className="pt-32 pb-16" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <span
              className="inline-block text-xs font-mono font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
            >
              KOSTENLOS
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: 'var(--fg)' }}>
              10 Tipps für Ihre Website
            </h1>
            <p className="text-lg" style={{ color: 'var(--muted)' }}>
              Was eine gute Website wirklich ausmacht — erklärt ohne Fachjargon.
              Für Therapeuten, Künstler und kleine Unternehmen.
            </p>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <ol className="flex flex-col gap-10">
              {TIPS.map((tip) => (
                <li key={tip.number} className="flex gap-6">
                  {/* Number */}
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 leading-none select-none"
                    style={{
                      fontFamily: 'var(--font-fraunces), Georgia, serif',
                      fontSize: '2.5rem',
                      fontWeight: 900,
                      color: 'var(--border)',
                      lineHeight: 1,
                      marginTop: '0.2rem',
                    }}
                  >
                    {tip.number}
                  </span>
                  {/* Content */}
                  <div
                    className="rounded-xl p-6 border flex-1"
                    style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
                  >
                    <h2
                      className="text-lg font-bold mb-2"
                      style={{ color: 'var(--fg)', fontFamily: 'var(--font-serif)' }}
                    >
                      {tip.title}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {tip.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4" style={{ color: 'var(--fg)' }}>
              Soll ich das für Sie umsetzen?
            </h2>
            <p className="text-base mb-8" style={{ color: 'var(--muted)' }}>
              Diese 10 Punkte sind die Grundlage jeder Website, die ich entwickle.
              Schreiben Sie mir — ich erkläre kostenlos, was bei Ihrer Seite konkret fehlt.
            </p>
            <a
              href="/#kontakt"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded transition-opacity duration-150 hover:opacity-90"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Kostenlose Analyse anfragen →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
