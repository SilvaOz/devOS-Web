import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { PRICING_PLANS, SUPPORT_PLANS } from '@/lib/constants'
import { Icon } from '@/components/ui/Icon'
import type { IconName } from '@/components/ui/Icon'

export const metadata = {
  title: 'Leistungen & Support — DevOS Web',
  description:
    'Website-Pakete und Pflege-Abonnements. WordPress, E-Commerce, Buchungen. Support ab 58 EUR/Monat.',
}

// ─── Reusable check/x list ────────────────────────────────────────────────────

function FeatureList({
  items,
  accent = 'var(--accent)',
}: {
  items: string[]
  accent?: string
}) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'var(--fg)' }}>
          <span className="mt-0.5 flex-shrink-0" style={{ color: accent }}>
            ✓
          </span>
          {f}
        </li>
      ))}
    </ul>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LeistungenPage() {
  const featured = SUPPORT_PLANS.find((p) => p.featured)!

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-20" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--muted)' }}
            >
              LEISTUNGEN
            </p>
            <h1
              className="text-4xl sm:text-5xl font-extrabold mb-4 max-w-2xl"
              style={{ color: 'var(--fg)' }}
            >
              Was ich für Sie entwickle — und warum danach weitergeht.
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: 'var(--muted)' }}>
              Einmalige Projekte und monatliche Betreuung. Alles aus einer Hand, persönlich.
            </p>
          </div>
        </section>

        {/* ── Website-Pakete ───────────────────────────────────────────── */}
        <section id="pakete" className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--accent-wp)' }}
            >
              WEBSITE-PAKETE
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: 'var(--fg)' }}>
              Ihr Start ins Internet
            </h2>
            <p className="text-base mb-10 max-w-2xl" style={{ color: 'var(--muted)' }}>
              Einmalige Investition. Ich liefere eine fertige, professionelle Website —
              ohne dass Sie sich um Technik kümmern müssen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PRICING_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className="rounded-xl p-6 sm:p-8 border flex flex-col gap-5"
                  style={{
                    background: 'var(--card)',
                    borderColor: plan.featured ? 'var(--accent-wp)' : 'var(--border)',
                    boxShadow: plan.featured
                      ? '0 0 0 1px var(--accent-wp), 0 4px 24px rgba(33,117,155,0.15)'
                      : 'none',
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold" style={{ color: 'var(--fg)' }}>
                          {plan.name}
                        </h3>
                        {plan.featured && (
                          <span
                            className="text-xs font-mono px-2 py-0.5 rounded-full"
                            style={{ background: 'var(--accent-wp)', color: '#fff' }}
                          >
                            Beliebt
                          </span>
                        )}
                      </div>
                      <p className="text-xs" style={{ color: 'var(--muted)' }}>
                        {plan.target}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span
                        className="text-xl font-extrabold font-mono"
                        style={{ color: 'var(--accent)' }}
                      >
                        {plan.price}
                      </span>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
                        einmalig
                      </p>
                    </div>
                  </div>

                  {plan.features.length > 0 && (
                    <FeatureList items={plan.features} accent="var(--accent-wp)" />
                  )}

                  {plan.excluded.length > 0 && (
                    <ul className="flex flex-col gap-2">
                      {plan.excluded.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm"
                          style={{ color: 'var(--muted)' }}
                        >
                          <span>✗</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  <a
                    href="/#kontakt"
                    className="mt-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded border transition-colors duration-150 pricing-btn-ghost"
                    style={{
                      background: 'transparent',
                      color: 'var(--fg)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    Anfragen
                  </a>
                </div>
              ))}
            </div>

            <p className="text-xs text-center mt-6" style={{ color: 'var(--muted)' }}>
              Alle Preise zzgl. gesetzlicher MwSt. · Zahlung per Banküberweisung nach Angebot.
            </p>
          </div>
        </section>

        {/* ── Support & Pflege ─────────────────────────────────────────── */}
        <section id="support" className="py-20 sm:py-28" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* Header */}
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--muted)' }}
            >
              SUPPORT & PFLEGE
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: 'var(--fg)' }}>
              Was kommt nach dem Launch?
            </h2>
            <p className="text-base max-w-2xl mb-6" style={{ color: 'var(--muted)' }}>
              Eine Website braucht regelmäßige Pflege — Updates, Sicherheit, Backups.
              Ohne Pflege wird sie langsam, unsicher und irgendwann kaputt.
            </p>

            {/* Fear + relief */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div
                className="rounded-xl p-5 border flex gap-4"
                style={{ background: 'rgba(239,68,68,0.06)', borderColor: 'rgba(239,68,68,0.2)' }}
              >
                <span className="flex-shrink-0 mt-0.5">
                  <Icon name="AlertTriangle" size={22} color="#f87171" />
                </span>
                <div>
                  <p className="text-sm font-bold mb-1" style={{ color: '#f87171' }}>
                    Ohne Pflege-Paket
                  </p>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    Plugin-Updates werden ignoriert, Sicherheitslücken entstehen,
                    die Seite lädt langsam, Google straft sie ab —
                    und eine Notfall-Reparatur kostet <strong style={{ color: 'var(--fg)' }}>75 EUR/Std.</strong>
                  </p>
                </div>
              </div>
              <div
                className="rounded-xl p-5 border flex gap-4"
                style={{ background: 'var(--accent-dim)', borderColor: 'rgba(255,215,0,0.2)' }}
              >
                <span className="flex-shrink-0 mt-0.5">
                  <Icon name="CheckCircle2" size={22} style={{ color: '#22c55e' }} />
                </span>
                <div>
                  <p className="text-sm font-bold mb-1" style={{ color: '#22c55e' }}>
                    Mit Pflege-Paket
                  </p>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    Ihre Website bleibt aktuell, sicher und schnell — ohne dass Sie einen
                    Finger rühren müssen. Wenn etwas passiert, bin ich in 24h da.
                  </p>
                </div>
              </div>
            </div>

            {/* Plans */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {SUPPORT_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className="rounded-xl p-6 border flex flex-col gap-4 relative"
                  style={{
                    background: 'var(--card)',
                    borderColor: plan.featured ? 'var(--accent)' : 'var(--border)',
                    boxShadow: plan.featured
                      ? '0 0 0 1px var(--accent), 0 4px 32px var(--glow)'
                      : 'none',
                  }}
                >
                  {/* Empfohlen badge */}
                  {plan.featured && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-mono font-bold px-3 py-1 rounded-full whitespace-nowrap"
                      style={{ background: 'var(--accent)', color: '#000' }}
                    >
                      ★ Empfohlen
                    </div>
                  )}

                  {/* Header */}
                  <div>
                    <h3 className="text-base font-bold mb-0.5" style={{ color: 'var(--fg)' }}>
                      {plan.name}
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-3xl font-extrabold font-mono"
                        style={{ color: 'var(--accent)' }}
                      >
                        {plan.perMonth}
                      </span>
                      <span className="text-sm" style={{ color: 'var(--muted)' }}>
                        EUR/Monat
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs" style={{ color: 'var(--muted)' }}>
                        {plan.totalPrice} EUR / {plan.duration}
                      </span>
                      {plan.savings !== undefined && (
                        <span
                          className="text-xs font-mono font-bold px-1.5 py-0.5 rounded"
                          style={{ background: 'rgba(34,197,94,0.12)', color: '#4ade80' }}
                        >
                          −{plan.savings}%
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <FeatureList items={plan.features} />

                  {/* CTA */}
                  <a
                    href={`/#kontakt`}
                    className="mt-auto inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded border transition-colors duration-150"
                    style={
                      plan.featured
                        ? { background: 'var(--accent)', color: '#000', borderColor: 'var(--accent)' }
                        : { background: 'transparent', color: 'var(--fg)', borderColor: 'var(--border)' }
                    }
                  >
                    {plan.featured ? 'Jetzt wählen' : 'Anfragen'}
                  </a>
                </div>
              ))}
            </div>

            {/* Anchor: hourly rate */}
            <div
              className="rounded-xl p-5 border flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <div className="flex-1">
                <p className="text-sm font-bold mb-1 flex items-center gap-2" style={{ color: 'var(--fg)' }}>
                  <Icon name="Lightbulb" size={16} style={{ color: 'var(--muted)' }} />
                  Warum ein Paket sinnvoll ist
                </p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Eine einzelne Stunde Arbeit außerhalb eines Pakets kostet <strong style={{ color: 'var(--fg)' }}>75 EUR/Std.</strong>{' '}
                  — das {featured.name}-Paket kostet nur <strong style={{ color: 'var(--accent)' }}>{featured.perMonth} EUR/Monat</strong> und
                  deckt deutlich mehr ab.
                </p>
              </div>
              <div
                className="flex-shrink-0 text-center px-6 py-3 rounded-lg"
                style={{ background: 'var(--accent-dim)', borderColor: 'rgba(255,215,0,0.2)' }}
              >
                <p className="text-2xl font-extrabold font-mono" style={{ color: 'var(--accent)' }}>
                  {featured.perMonth} EUR
                </p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>
                  pro Monat im {featured.name}
                </p>
              </div>
            </div>

            {/* What's covered in plain language */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {([
                {
                  icon: 'ShieldCheck' as IconName,
                  title: 'Sicherheit',
                  text: 'Ich halte WordPress und alle Plugins aktuell. Sicherheitslücken werden geschlossen, bevor sie ein Problem werden.',
                },
                {
                  icon: 'Database' as IconName,
                  title: 'Ihre Daten sind sicher',
                  text: 'Tägliche oder wöchentliche Backups. Wenn etwas schiefgeht, stelle ich Ihre Website in Minuten wieder her.',
                },
                {
                  icon: 'PenLine' as IconName,
                  title: 'Änderungen ohne Stress',
                  text: 'Neuer Text, neues Foto, neue Öffnungszeiten — Sie schreiben mir, ich erledige es. Kein technisches Wissen nötig.',
                },
              ]).map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-5 border flex flex-col gap-3 card-hover"
                  style={{ background: 'var(--card)' }}
                >
                  <span
                    className="w-10 h-10 flex items-center justify-center rounded-lg"
                    style={{ background: 'rgba(0,0,0,0.06)' }}
                  >
                    <Icon name={item.icon} size={20} style={{ color: 'var(--fg)' }} />
                  </span>
                  <h3 className="text-sm font-bold" style={{ color: 'var(--fg)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Online-Buchungen ─────────────────────────────────────────── */}
        <section className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--muted)' }}
            >
              AUTOMATISIERUNGEN
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: 'var(--fg)' }}>
              Ihre Kunden buchen — Sie schlafen.
            </h2>
            <p className="text-base mb-10 max-w-2xl" style={{ color: 'var(--muted)' }}>
              Mit Amelia, Google Calendar, Zoom und Stripe läuft Ihre Terminverwaltung automatisch.
              Kein Hin-und-Her per E-Mail, keine manuellen Bestätigungen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {([
                { icon: 'CalendarCheck' as IconName, title: 'Amelia Buchungssystem', text: 'Ihre Kunden buchen selbst — 24/7. Automatische Bestätigung per E-Mail.' },
                { icon: 'CalendarDays' as IconName, title: 'Google Calendar Sync', text: 'Alle Termine landen direkt in Ihrem persönlichen Kalender.' },
                { icon: 'Video' as IconName, title: 'Zoom-Links automatisch', text: 'Bei Online-Terminen wird der Zoom-Link automatisch generiert und verschickt.' },
                { icon: 'CreditCard' as IconName, title: 'Stripe Zahlungen', text: 'Kunden zahlen direkt bei der Buchung. Geld auf Ihrem Konto, bevor der Termin stattfindet.' },
              ]).map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-6 border card-hover flex gap-4"
                  style={{ background: 'var(--card)' }}
                >
                  <span
                    className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(0,0,0,0.06)' }}
                  >
                    <Icon name={item.icon} size={20} style={{ color: 'var(--fg)' }} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold mb-1" style={{ color: 'var(--fg)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── E-Commerce ───────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--accent-wp)' }}
            >
              E-COMMERCE
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: 'var(--fg)' }}>
              Online verkaufen — einfach.
            </h2>
            <p className="text-base mb-8 max-w-2xl" style={{ color: 'var(--muted)' }}>
              WooCommerce-Shops für Produkte, Kurse, Sitzungen oder digitale Inhalte.
              Bezahlung per Stripe oder PayPal, Lagerverwaltung inklusive.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                'WooCommerce Setup',
                'Stripe & PayPal',
                'Lagerverwaltung',
                'Produktkatalog',
                'Digitale Produkte',
                'DSGVO-konform',
              ].map((f) => (
                <span
                  key={f}
                  className="text-sm font-mono px-3 py-1.5 rounded border"
                  style={{ background: 'var(--card)', color: 'var(--fg)', borderColor: 'var(--border)' }}
                >
                  ✓ {f}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Individuelle Plattformen ─────────────────────────────────── */}
        <section className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p
                  className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
                  style={{ color: 'var(--muted)' }}
                >
                  WEB APPS
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: 'var(--fg)' }}>
                  Wenn WordPress nicht reicht.
                </h2>
                <p className="text-base mb-6" style={{ color: 'var(--muted)' }}>
                  Login-Bereiche, Dashboards, interne Tools, Mitgliederportale.
                  Maßgeschneidert mit React und Node.js.
                </p>
                <p
                  className="text-2xl font-extrabold font-mono mb-6"
                  style={{ color: 'var(--accent)' }}
                >
                  ab 3.500 EUR
                </p>
                <a
                  href="/#kontakt"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded border transition-colors duration-150 pricing-btn-ghost"
                  style={{ background: 'transparent', color: 'var(--fg)', borderColor: 'var(--border)' }}
                >
                  Unverbindlich anfragen →
                </a>
              </div>
              <div className="flex flex-col gap-3">
                {([
                  { icon: 'Code2' as IconName, t: 'React / Next.js Frontend', d: 'Schnell, modern, TypeScript.' },
                  { icon: 'Database' as IconName, t: 'Backend + Datenbank', d: 'Node.js, PostgreSQL, sichere Auth.' },
                  { icon: 'Plug' as IconName, t: 'API-Integrationen', d: 'Stripe, CRMs, externe Dienste.' },
                  { icon: 'Rocket' as IconName, t: 'Deploy & Hosting', d: 'Vercel, Docker — wartbar und stabil.' },
                ]).map((item) => (
                  <div
                    key={item.t}
                    className="rounded-lg p-4 border flex gap-3"
                    style={{ background: 'var(--card)' }}
                  >
                    <span
                      className="w-8 h-8 flex items-center justify-center rounded-md flex-shrink-0"
                      style={{ background: 'rgba(0,0,0,0.06)' }}
                    >
                      <Icon name={item.icon} size={16} style={{ color: 'var(--fg)' }} />
                    </span>
                    <div>
                      <p className="text-sm font-bold" style={{ color: 'var(--fg)' }}>
                        {item.t}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--muted)' }}>
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Performance & SEO ─────────────────────────────────────────── */}
        <section className="py-16" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
              <div className="flex-1">
                <p
                  className="text-xs font-mono font-semibold uppercase tracking-widest mb-2"
                  style={{ color: 'var(--muted)' }}
                >
                  PERFORMANCE & SEO
                </p>
                <h2 className="text-2xl font-extrabold mb-2" style={{ color: 'var(--fg)' }}>
                  Schnell geladen. Bei Google gefunden.
                </h2>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Optimierung für Core Web Vitals, Caching, Bildkomprimierung und technisches SEO —
                  damit Ihre Kunden Sie finden, bevor die Konkurrenz sie findet.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {['LCP &lt; 2.5s', 'CLS &lt; 0.1', 'PageSpeed &gt; 90', 'Mobile-First'].map((m) => (
                  <div
                    key={m}
                    className="px-4 py-2.5 rounded-lg border text-sm font-mono font-semibold"
                    style={{
                      background: 'rgba(34,197,94,0.12)',
                      borderColor: 'rgba(34,197,94,0.3)',
                      color: '#22c55e',
                    }}
                    dangerouslySetInnerHTML={{ __html: m }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-24 text-center" style={{ background: 'var(--bg)' }}>
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: 'var(--fg)' }}>
              Bereit anzufangen?
            </h2>
            <p className="text-base mb-3" style={{ color: 'var(--muted)' }}>
              Schreiben Sie mir — ich antworte innerhalb von 24–48 Stunden.
              Kein Angebot ohne Gespräch, kein Gespräch ohne Mehrwert.
            </p>
            <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>
              Unverbindlich. Kostenlos. Auf Deutsch oder Spanisch.
            </p>
            <a
              href="/#kontakt"
              className="inline-flex items-center justify-center px-8 py-3.5 font-semibold rounded text-sm transition-opacity duration-150 hover:opacity-90"
              style={{ background: 'var(--accent)', color: '#000' }}
            >
              Projekt anfragen →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
