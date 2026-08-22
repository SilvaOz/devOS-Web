'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { SUPPORT_PLANS } from '@/lib/constants'

// ─── Hourly cost comparison ───────────────────────────────────────────────────

const COMPARISONS = [
  {
    hours: 1,
    label: '~1 Std./Monat',
    hourly: 75,
    note: 'Gelegentliche Anfragen',
  },
  {
    hours: 2,
    label: '~2 Std./Monat',
    hourly: 150,
    note: 'Updates + kleine Änderungen',
  },
  {
    hours: 3,
    label: '~3 Std./Monat',
    hourly: 225,
    note: 'Regelmäßiger Support',
  },
]

// ─── Email template Oscar sends to clients ───────────────────────────────────

const EMAIL_TEMPLATE = `Betreff: Ihre Website — dauerhafter Schutz & Support

Hallo [Vorname],

ich hoffe, Ihre Website läuft gut und bringt Ihnen neue Kunden.

Ich möchte Ihnen etwas anbieten, das ich bisher nur ausgewählten Kunden vorschlage:

Ein monatliches Pflege-Paket für Ihre Website.

Konkret bedeutet das:
• WordPress & Plugin-Updates — automatisch, ohne dass Sie daran denken müssen
• Regelmäßige Backups — falls mal etwas schiefgeht, stellen wir alles wieder her
• Sie können mich jederzeit kontaktieren — ohne Stundenabrechnung

Statt €75 pro Stunde zahlen Sie einen festen Betrag pro Monat:

→ Monatspflege: 99 EUR/Monat (monatlich kündbar)
→ Jahrespflege:  699 EUR/Jahr  (= 58 EUR/Monat — Sie sparen 41%)

Details und Buchung: https://devos-web.de/leistungen?ref=bestandskunde

Falls Sie Fragen haben, antworten Sie einfach auf diese E-Mail.

Herzliche Grüße,
Oscar`

// ─── Component ───────────────────────────────────────────────────────────────

export default function PflegeSection() {
  const params      = useSearchParams()
  const isBestand   = params.get('ref') === 'bestandskunde'
  const clientRef   = isBestand ? 'bestandskunde' : undefined

  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL_TEMPLATE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20" style={{ background: 'var(--bg-elevated)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {isBestand && (
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Exklusiv für Bestandskunden
            </div>
          )}
          <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--muted)' }}>
            WEBSITE-PFLEGE
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5" style={{ color: 'var(--fg)' }}>
            Ihre Website läuft.<br />Lassen Sie sie so bleiben.
          </h1>
          <p className="text-lg mb-4" style={{ color: 'var(--muted)', maxWidth: 520 }}>
            {isBestand
              ? 'Sie kennen mich bereits — und ich kenne Ihre Website. Statt Stundenabrechnung ein fester Betrag, alles inklusive.'
              : 'Kein Stundentakt, kein Nachdenken über Kosten. Einfach anschreiben — ich kümmere mich um den Rest.'}
          </p>
          <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--muted)' }}>
            <span>✓ Monatlich kündbar</span>
            <span>✓ Keine versteckten Kosten</span>
            <span>✓ Direkt anfragen — ich antworte in 24–48h</span>
          </div>
        </div>
      </section>

      {/* ── Comparison ───────────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: 'var(--bg)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-2"
            style={{ color: 'var(--muted)' }}>
            STUNDENABRECHNUNG VS. PAKET
          </p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--fg)' }}>
            Was Sie jetzt bezahlen — und was Sie sparen könnten.
          </h2>

          <div className="grid gap-3">
            {COMPARISONS.map(({ label, hourly, note }) => {
              const saving    = hourly - 99
              const savingPct = Math.round((saving / hourly) * 100)
              return (
                <div
                  key={label}
                  className="rounded-xl border p-4 flex items-center justify-between gap-4"
                  style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
                >
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>{label}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{note}</p>
                  </div>
                  <div className="flex items-center gap-6 text-right">
                    <div>
                      <p className="text-xs" style={{ color: 'var(--muted)' }}>Jetzt</p>
                      <p className="text-base font-bold" style={{ color: 'var(--fg)' }}>{hourly} EUR</p>
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: 'var(--muted)' }}>Monatspflege</p>
                      <p className="text-base font-bold" style={{ color: 'var(--accent)' }}>99 EUR</p>
                    </div>
                    {saving > 0 && (
                      <div
                        className="px-2 py-1 rounded text-xs font-bold"
                        style={{ background: 'var(--accent)', color: '#fff' }}
                      >
                        -{savingPct}%
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-xs mt-4" style={{ color: 'var(--muted)' }}>
            * Vergleich basiert auf Monatspflege (99 EUR). Beim Jahrespaket sparen Sie noch mehr.
          </p>
        </div>
      </section>

      {/* ── Plans ────────────────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: 'var(--bg-elevated)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-2"
            style={{ color: 'var(--muted)' }}>
            PAKETE
          </p>
          <h2 className="text-2xl font-bold mb-10" style={{ color: 'var(--fg)' }}>
            Wählen Sie Ihr Paket.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUPPORT_PLANS.map(plan => (
              <div
                key={plan.id}
                className="rounded-xl border flex flex-col p-5"
                style={{
                  background: plan.featured ? 'var(--accent)' : 'var(--card)',
                  borderColor: plan.featured ? 'var(--accent)' : 'var(--border)',
                }}
              >
                {plan.featured && (
                  <span className="text-xs font-bold mb-3 opacity-80" style={{ color: '#fff' }}>
                    BELIEBTESTE WAHL
                  </span>
                )}
                <p className="text-xs font-mono uppercase tracking-widest mb-1"
                  style={{ color: plan.featured ? 'rgba(255,255,255,0.7)' : 'var(--muted)' }}>
                  {plan.duration}
                </p>
                <p className="text-lg font-extrabold mb-0.5"
                  style={{ color: plan.featured ? '#fff' : 'var(--fg)' }}>
                  {plan.name}
                </p>
                <p className="text-xs mb-4"
                  style={{ color: plan.featured ? 'rgba(255,255,255,0.7)' : 'var(--muted)' }}>
                  {plan.tagline}
                </p>

                <div className="mb-4">
                  <span className="text-3xl font-extrabold font-mono"
                    style={{ color: plan.featured ? '#fff' : 'var(--accent)' }}>
                    {plan.perMonth}
                  </span>
                  <span className="text-sm ml-1"
                    style={{ color: plan.featured ? 'rgba(255,255,255,0.7)' : 'var(--muted)' }}>
                    EUR/Monat
                  </span>
                  {plan.savings && (
                    <span
                      className="ml-2 text-xs font-bold px-1.5 py-0.5 rounded"
                      style={{
                        background: plan.featured ? 'rgba(255,255,255,0.2)' : 'var(--accent)',
                        color: '#fff',
                      }}
                    >
                      -{plan.savings}%
                    </span>
                  )}
                  {plan.totalPrice !== plan.perMonth && (
                    <p className="text-xs mt-1"
                      style={{ color: plan.featured ? 'rgba(255,255,255,0.6)' : 'var(--muted)' }}>
                      {plan.totalPrice} EUR gesamt
                    </p>
                  )}
                </div>

                <ul className="flex flex-col gap-1.5 mb-6 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs"
                      style={{ color: plan.featured ? 'rgba(255,255,255,0.85)' : 'var(--muted)' }}>
                      <span className="mt-0.5 flex-shrink-0"
                        style={{ color: plan.featured ? '#fff' : 'var(--accent)' }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`/anfragen?package=${plan.id}`}
                  className="block text-center py-2.5 px-4 text-sm font-semibold rounded-lg transition-opacity hover:opacity-85"
                  style={
                    plan.featured
                      ? { background: '#fff', color: 'var(--accent)' }
                      : { background: 'var(--accent)', color: '#fff' }
                  }
                >
                  Jetzt buchen → Rechnung erhalten
                </a>
              </div>
            ))}
          </div>

          <p className="text-xs text-center mt-6" style={{ color: 'var(--muted)' }}>
            Zahlung per Überweisung · Rechnung per E-Mail · Keine MwSt. gem. §19 UStG
          </p>
        </div>
      </section>

      {/* ── Wachstum ─────────────────────────────────────────────────────── */}
      <section id="wachstum" className="py-16" style={{ background: 'var(--bg)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>
            WACHSTUM
          </p>
          <h2 className="text-3xl font-extrabold mb-3" style={{ color: 'var(--fg)' }}>
            Ihre Website läuft. Jetzt wachsen lassen.
          </h2>
          <p className="text-base mb-10 max-w-2xl" style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
            Für Bestandskunden mit laufender Website — und alle, die mehr aus ihrer Online-Präsenz herausholen möchten.
          </p>

          {/* Einzelleistungen */}
          <div className="rounded-xl border overflow-hidden mb-6" style={{ borderColor: 'var(--border)' }}>
            {([
              { label: 'Google Ads — Kampagnen-Einrichtung',              price: 350 },
              { label: 'SEO-Grundoptimierung (Yoast + Search Console)',   price: 350 },
              { label: 'Google Unternehmensprofil + Maps',                price: 150 },
              { label: 'KI-Sichtbarkeit (Optimierung für ChatGPT & Co.)', price: 200 },
            ] as const).map((item, i, arr) => (
              <div
                key={item.label}
                className="flex items-center justify-between px-5 py-4"
                style={{
                  background: 'var(--card)',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : undefined,
                }}
              >
                <span className="text-sm" style={{ color: 'var(--fg)' }}>{item.label}</span>
                <span className="text-sm font-mono font-semibold" style={{ color: 'var(--muted)' }}>{item.price} EUR</span>
              </div>
            ))}
            <div className="flex items-center justify-between px-5 py-4" style={{ background: 'var(--bg-elevated)' }}>
              <span className="text-sm font-semibold" style={{ color: 'var(--muted)' }}>Gesamt einzeln</span>
              <span className="text-sm font-mono font-bold" style={{ color: 'var(--fg)' }}>1.050 EUR</span>
            </div>
          </div>

          {/* Wachstumspaket */}
          <div
            className="rounded-xl border p-6 mb-6"
            style={{ background: 'var(--card)', borderColor: 'var(--accent)', boxShadow: '0 0 0 1px var(--accent), 0 4px 32px var(--glow)' }}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span
                  className="inline-block text-xs font-mono font-bold uppercase tracking-widest px-2 py-1 rounded-full mb-2"
                  style={{ background: 'var(--accent)', color: '#fff' }}
                >
                  ★ Empfohlen
                </span>
                <h3 className="text-xl font-bold" style={{ color: 'var(--fg)' }}>Wachstumspaket</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>Alle 4 Dienste kombiniert — einmalig eingerichtet.</p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-3xl font-extrabold font-mono" style={{ color: 'var(--accent)' }}>790 EUR</span>
                <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>einmalig</p>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded mt-1 inline-block"
                  style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                >
                  260 EUR gespart
                </span>
              </div>
            </div>
            <ul className="flex flex-col gap-2 mb-5">
              {([
                'Google Ads — Kampagnen-Einrichtung (350 EUR)',
                'SEO-Grundoptimierung (Yoast + Search Console) (350 EUR)',
                'Google Unternehmensprofil + Maps (150 EUR)',
                'KI-Sichtbarkeit — was kaum ein Entwickler noch anbietet.',
              ] as const).map(f => (
                <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'var(--fg)' }}>
                  <span className="mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="/anfragen?package=wachstum"
              className="inline-flex items-center justify-center w-full py-2.5 px-5 text-sm font-semibold rounded-lg transition-opacity hover:opacity-85"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Jetzt anfragen → Rechnung erhalten
            </a>
          </div>

          {/* Ads-Betreuung */}
          <div
            className="rounded-xl border p-5 mb-6 flex flex-col sm:flex-row sm:items-center gap-4"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
          >
            <div className="flex-1">
              <h3 className="text-base font-bold mb-1" style={{ color: 'var(--fg)' }}>Ads-Betreuung</h3>
              <p className="text-sm" style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                Laufende Kampagnen-Optimierung, Conversion-Überprüfung und Budget-Anpassung.
                Das Werbebudget selbst zahlen Sie direkt an Google — transparent und getrennt.
              </p>
            </div>
            <div className="flex-shrink-0 text-right sm:text-left">
              <p className="text-2xl font-extrabold font-mono" style={{ color: 'var(--accent)' }}>ab 150 EUR</p>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>pro Monat, je nach Umfang</p>
            </div>
          </div>

          {/* Combo Praxis Digital + Wachstum */}
          <div
            className="rounded-xl border p-5"
            style={{ background: 'var(--accent-dim)', borderColor: 'rgba(46,125,122,0.25)' }}
          >
            <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--accent)' }}>
              NEU HIER?
            </p>
            <p className="text-sm font-semibold mb-1" style={{ color: 'var(--fg)' }}>
              Praxis Digital (1.990 EUR) + Wachstumspaket (790 EUR) zusammen:{' '}
              <span style={{ color: 'var(--accent)' }}>2.490 EUR</span>
            </p>
            <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
              Sie sparen 290 EUR gegenüber Einzelbuchung — und haben vom ersten Tag an eine vollständige Online-Präsenz.
            </p>
            <a
              href="/leistungen#pakete"
              className="text-sm font-semibold hover:underline transition-opacity hover:opacity-70"
              style={{ color: 'var(--accent)' }}
            >
              Praxis Digital ansehen →
            </a>
          </div>

          <p className="text-xs text-center mt-6" style={{ color: 'var(--muted)' }}>
            Gem. §19 UStG wird keine Umsatzsteuer berechnet. · Zahlung per Banküberweisung nach Angebot.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: 'var(--bg)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--fg)' }}>
            Häufige Fragen
          </h2>
          <div className="flex flex-col gap-6">
            {[
              {
                q: 'Was passiert nach den 2 kostenlosen Pflege-Monaten im Praxis Digital Paket?',
                a: 'Nach dem Launch kümmere ich mich automatisch 2 Monate lang kostenlos um Updates, Backups und Sicherheit. Danach läuft die Pflege ganz natürlich im Monatspflege-Paket weiter (99 EUR/Monat) — kündbar jederzeit zum Monatsende, falls Sie das nicht möchten.',
              },
              {
                q: 'Was passiert, wenn ich mehr als die enthaltenen Stunden brauche?',
                a: 'Jede weitere Stunde wird zu €75/Std. berechnet — ich informiere Sie immer vorher.',
              },
              {
                q: 'Kann ich das Paket jederzeit kündigen?',
                a: 'Die Monatspflege können Sie jederzeit zum Monatsende kündigen. Quartals- und Jahrespakete laufen bis zum Ende der gebuchten Laufzeit.',
              },
              {
                q: 'Was genau zählt als "Inhaltsänderungen"?',
                a: 'Texte anpassen, Bilder tauschen, neue Seite hinzufügen, Formular ändern. Technische Integrationen (neue Plugins, Buchungssysteme) zählen separat.',
              },
              {
                q: 'Wie erreiche ich Sie im Paket?',
                a: 'Per E-Mail an info@devos-web.de — ich antworte je nach Paket in 12–48 Stunden.',
              },
            ].map(({ q, a }) => (
              <div key={q} style={{ borderBottom: '1px solid var(--border)', paddingBottom: 20 }}>
                <p className="font-semibold text-sm mb-2" style={{ color: 'var(--fg)' }}>{q}</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Email template (only visible if bestandskunde) ───────────────── */}
      {isBestand && (
        <section className="py-16" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-2"
              style={{ color: 'var(--muted)' }}>
              NUR FÜR OSCAR
            </p>
            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--fg)' }}>
              E-Mail-Vorlage für bestehende Kunden
            </h2>
            <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
              Kopieren, [Vorname] ersetzen, senden. Fertig.
            </p>
            <div
              className="rounded-xl border p-5 relative"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <pre className="text-xs whitespace-pre-wrap" style={{ color: 'var(--muted)', fontFamily: 'monospace' }}>
                {EMAIL_TEMPLATE}
              </pre>
              <button
                onClick={copyEmail}
                className="mt-4 px-4 py-2 text-xs font-semibold rounded border transition-all"
                style={{
                  background: copied ? 'var(--accent)' : 'transparent',
                  color: copied ? '#fff' : 'var(--muted)',
                  borderColor: copied ? 'var(--accent)' : 'var(--border)',
                }}
              >
                {copied ? '✓ Kopiert!' : 'E-Mail kopieren'}
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
