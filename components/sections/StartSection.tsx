'use client'

import { useState } from 'react'

const OPTIONS = [
  {
    id: 'fertig',
    emoji: '🟡',
    label: 'Ich habe sie fertig — aber nie veröffentlicht.',
    sub: 'Die Website ist da, liegt aber noch im Entwurfsmodus.',
  },
  {
    id: 'halbfertig',
    emoji: '🔴',
    label: 'Ich habe angefangen, aber nicht fertig gemacht.',
    sub: 'Es fehlt noch einiges — Zeit, Wissen oder einfach der letzte Schritt.',
  },
  {
    id: 'anfang',
    emoji: '⚪',
    label: 'Ich habe noch gar nicht begonnen.',
    sub: 'Die Idee ist da — aber der erste Schritt liegt noch vor mir.',
  },
]

const STARTKLAR_FEATURES = [
  'Vollständige Überprüfung der bestehenden Website',
  'Fehlerbehebung + technische Korrekturen',
  'Domain + Hosting verbinden und testen',
  'Veröffentlichung der Website',
  'Amelia Buchungssystem einrichten + testen',
  'SEO-Grundlage (Yoast) + Google Search Console',
]

export default function StartSection() {
  const [selected, setSelected] = useState<string | null>(null)

  const showStartklar = selected === 'fertig' || selected === 'halbfertig'
  const showPraxis    = selected === 'anfang'
  const showAll       = selected === null

  return (
    <>
      {/* ── Hero + Auswahl ────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16" style={{ background: 'var(--bg-elevated)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p
            className="text-xs font-mono font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--muted)' }}
          >
            Für Teilnehmer des Praxis Erfolg Kurses
          </p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold mb-5"
            style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              color: 'var(--fg)',
              lineHeight: 1.15,
            }}
          >
            In welchem Stadium ist Ihre Website gerade?
          </h1>
          <p className="text-lg mb-10" style={{ color: 'var(--muted)', lineHeight: '1.75', maxWidth: 520 }}>
            Keine richtige oder falsche Antwort — nur ein ehrlicher Ausgangspunkt.
            Wählen Sie, was am besten passt.
          </p>

          <div className="flex flex-col gap-3">
            {OPTIONS.map(opt => (
              <button
                key={opt.id}
                onClick={() => setSelected(selected === opt.id ? null : opt.id)}
                className="w-full text-left rounded-xl p-5 border transition-all duration-150 card-hover"
                style={{
                  background:  selected === opt.id ? 'var(--accent-dim)' : 'var(--card)',
                  borderColor: selected === opt.id ? 'var(--accent)'     : 'var(--border)',
                  boxShadow:   selected === opt.id ? '0 0 0 1px var(--accent)' : 'none',
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{opt.emoji}</span>
                  <div>
                    <p className="text-base font-semibold" style={{ color: 'var(--fg)' }}>{opt.label}</p>
                    <p className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>{opt.sub}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Startklar-Paket (für Fertig + Halbfertig) ───────────────────── */}
      {(showStartklar || showAll) && (
        <section
          className="py-16"
          style={{
            background: 'var(--bg)',
            borderTop: showAll ? '1px solid var(--border)' : undefined,
          }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {showAll && (
              <p
                className="text-xs font-mono font-semibold uppercase tracking-widest mb-2"
                style={{ color: 'var(--muted)' }}
              >
                Fertig oder halbfertig
              </p>
            )}
            <h2
              className="text-2xl sm:text-3xl font-extrabold mb-3"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
            >
              Fast am Ziel — ich bringe Sie über die Ziellinie.
            </h2>
            <p className="text-base mb-8" style={{ color: 'var(--muted)', lineHeight: '1.75', maxWidth: 540 }}>
              Sie haben bereits Zeit und Energie in den Kurs investiert — das verdient Respekt.
              Ich übernehme den Rest: Überprüfung, Korrekturen, Veröffentlichung.
              Klar, schnell, ohne Umwege.
            </p>

            <div
              className="rounded-xl border p-6 sm:p-8"
              style={{
                background:  'var(--card)',
                borderColor: 'var(--accent)',
                boxShadow:   '0 0 0 1px var(--accent), 0 4px 32px var(--glow)',
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--fg)' }}>Startklar-Paket</h3>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    Einmalig — für Websites, die nur noch gestartet werden müssen.
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-3xl font-extrabold font-mono" style={{ color: 'var(--accent)' }}>450 EUR</span>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>einmalig</p>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 mb-6">
                {STARTKLAR_FEATURES.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'var(--fg)' }}>
                    <span className="mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="/anfragen?package=startklar"
                className="inline-flex items-center justify-center w-full py-3 px-5 text-sm font-semibold rounded-lg transition-opacity hover:opacity-85"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                Jetzt starten → Rechnung erhalten
              </a>
            </div>

            <div
              className="mt-5 rounded-xl border p-4 text-sm"
              style={{
                background:  'var(--bg-elevated)',
                borderColor: 'var(--border)',
                color:        'var(--muted)',
                lineHeight:   '1.7',
              }}
            >
              <strong style={{ color: 'var(--fg)' }}>Nächster Schritt nach dem Launch: </strong>
              Website-Pflege ab 99 EUR/Monat — damit Ihre Website dauerhaft sicher, aktuell und schnell bleibt.{' '}
              <a href="/pflege" className="hover:underline" style={{ color: 'var(--accent)' }}>
                Pflege-Pakete ansehen →
              </a>
            </div>

            <p className="text-xs mt-4" style={{ color: 'var(--muted)' }}>
              Gem. §19 UStG wird keine Umsatzsteuer berechnet. · Zahlung per Banküberweisung nach Angebot.
            </p>
          </div>
        </section>
      )}

      {/* ── Praxis Digital (für Noch nicht begonnen) ────────────────────── */}
      {(showPraxis || showAll) && (
        <section
          className="py-16"
          style={{
            background: 'var(--bg-elevated)',
            borderTop:  showAll ? '1px solid var(--border)' : undefined,
          }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {showAll && (
              <p
                className="text-xs font-mono font-semibold uppercase tracking-widest mb-2"
                style={{ color: 'var(--muted)' }}
              >
                Noch nicht begonnen
              </p>
            )}
            <h2
              className="text-2xl sm:text-3xl font-extrabold mb-3"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
            >
              Kein Problem — wir starten von Grund auf.
            </h2>
            <p className="text-base mb-8" style={{ color: 'var(--muted)', lineHeight: '1.75', maxWidth: 540 }}>
              Eine professionelle Website von Anfang bis Ende — ohne dass Sie sich mit Technik
              beschäftigen müssen. Ich baue alles: Design, Online-Buchung, SEO und Hosting.
            </p>

            <div
              className="rounded-xl border p-6"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--fg)' }}>Praxis Digital</h3>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    Vollständige Website für Ihre Praxis — inkl. Buchungssystem, SEO, Hosting
                    und 2 Monate kostenloser Pflege nach dem Launch.
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-3xl font-extrabold font-mono" style={{ color: 'var(--accent)' }}>1.990 EUR</span>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>einmalig</p>
                </div>
              </div>
              <a
                href="/leistungen#pakete"
                className="inline-flex items-center justify-center w-full py-2.5 px-5 text-sm font-semibold rounded-lg border transition-colors hover:opacity-80"
                style={{ background: 'transparent', color: 'var(--fg)', borderColor: 'var(--border)' }}
              >
                Praxis Digital im Detail ansehen →
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
