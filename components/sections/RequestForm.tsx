'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { PRICING_PLANS, SUPPORT_PLANS, EXPRESS_SERVICE, PRAXIS_DESIGN_ADDON_PRICES } from '@/lib/constants'

// ─── Package lookup ───────────────────────────────────────────────────────────

const ALL_PACKAGES = [
  {
    id: 'express-24h',
    name: EXPRESS_SERVICE.h2.replace('.', ''),
    price: EXPRESS_SERVICE.price,
    features: EXPRESS_SERVICE.features,
  },
  ...PRICING_PLANS.map(p => ({ id: p.id, name: p.name, price: p.price, features: p.features })),
  // Neue Pakete (Festpreis + variable)
  { id: 'praxis-digital',        name: 'Praxis Digital',                  price: '1.500 EUR',    features: ['WordPress + Divi oder Next.js', 'Amelia Buchungssystem', 'Google Calendar Sync', 'SEO-Grundlage + Yoast', 'Zoom-Integration', 'DSGVO-konform', 'IONOS / All-Inkl Hosting'] as readonly string[] },
  { id: 'praxis-digital-design', name: 'Praxis Digital — Nur Design',     price: '900 EUR',      features: ['Individuelles Design nach Ihrem Stil', 'Bis 5 Seiten', 'Mobile-optimiert', 'DSGVO-Grundlage', 'IONOS / All-Inkl Hosting'] as readonly string[] },
  { id: 'ki-automation',         name: 'KI-Automatisierung',              price: 'ab 500 EUR',   features: ['Anforderungsanalyse inklusive', 'Make.com oder Python-Pipeline', 'Claude API / OpenAI Integration', 'Google Sheets / Drive Anbindung', 'Dokumentation + Übergabe'] as readonly string[] },
  { id: 'app-mvp',               name: 'App MVP',                         price: 'ab 2.500 EUR', features: ['React Native (iOS + Android) oder Next.js', 'Design + Entwicklung', 'Authentifizierung + Datenbank', 'Deploy auf App Store / Vercel', 'Festpreis nach Scope-Gespräch'] as readonly string[] },
  { id: 'content-system',        name: 'Content-System',                  price: 'ab 1.200 EUR', features: ['YouTube-Kanal-Strategie + SEO', 'KI-Content-Pipeline (Python)', 'Pinterest Business Setup', 'Blog auf Next.js', 'Make.com Automatisierung'] as readonly string[] },
  // Pflege / Support
  ...SUPPORT_PLANS.map(p => ({
    id: p.id,
    name: p.name,
    price: `${p.totalPrice} EUR`,
    features: p.features,
  })),
]

const TIMING_OPTIONS = [
  'So schnell wie möglich',
  'In 2–4 Wochen',
  'In 1–2 Monaten',
  'Noch nicht sicher',
]

const WEBSITE_PACKAGES = ['express-24h', 'landing-page', 'wp-premium', 'wp-pro', 'web-app', 'praxis-digital', 'praxis-digital-design']

const LANDING_SECTIONS = [
  'Hero / Startbereich',
  'Über mich',
  'Leistungen / Angebote',
  'Preise',
  'Kundenstimmen',
  'FAQ',
  'Kontaktformular',
  'Instagram Feed',
]

const LANDING_FEATURES: { label: string; price: number }[] = [
  { label: 'Buchungslink einrichten (Calendly)',  price: 49  },
  { label: 'Newsletter-Anmeldung (Mailchimp)',    price: 79  },
  { label: 'Google Maps',                         price: 0   },
  { label: 'Social Media Links',                  price: 0   },
  { label: 'WhatsApp-Button',                     price: 0   },
]

const LANDING_PRO_FEATURES = new Set([
  'Terminbuchung (Kalender)',
  'Google Calendar Sync',
  'Zoom Integration',
  'Online-Shop (WooCommerce)',
  'Stripe-Zahlungen',
])

const PAGES_OPTIONS = ['1–3 Seiten', '4–7 Seiten', '8+ Seiten', 'Noch nicht sicher']

// WP Design add-ons — shown with individual prices
const WP_DESIGN_ADDONS: { label: string; price: number }[] = [
  { label: 'Amelia Buchungssystem',  price: 199 },
  { label: 'Google Calendar Sync',   price: 99  },
  { label: 'Zoom Integration',       price: 79  },
  { label: 'Newsletter / Mailchimp', price: 99  },
  { label: 'Freebie / E-Book',       price: 79  },
  { label: 'Google Ads Tracking',    price: 99  },
  { label: 'Mehrsprachig',           price: 149 },
]

// Threshold: if add-ons >= this, recommend WP Pro instead
const WP_PRO_RECOMMENDATION_THRESHOLD = 300

// Praxis Design add-ons — selectable, increase price toward 1.500€ full package
const PRAXIS_DESIGN_ADDONS: { label: string; price: number }[] = Object.entries(PRAXIS_DESIGN_ADDON_PRICES).map(
  ([label, price]) => ({ label, price })
)
const PRAXIS_DESIGN_RECOMMENDATION_THRESHOLD = 300

const CONTENT_OPTIONS = [
  'Alles bereit (Texte & Bilder)',
  'Teilweise vorhanden',
  'Brauche Unterstützung',
]

// ─── Features that require WP Pro minimum ─────────────────────────────────────

const PRO_FEATURES = new Set([
  'Terminbuchung (Kalender)',
  'Google Calendar Sync',
  'Zoom Integration',
  'Newsletter / Mailchimp',
  'Freebie / E-Book',
  'Online-Shop (WooCommerce)',
  'Google Ads Tracking',
])

type PackageTier = 'wp-base' | 'wp-premium' | 'wp-pro' | 'web-app' | 'express-24h' | string

const PACKAGE_PRICES: Record<string, { name: string; price: number; label: string }> = {
  'landing-page': { name: 'Landing Page', price: 599,  label: 'ab 599 EUR'   },
  'wp-premium':   { name: 'WP Design',   price: 900,  label: 'ab 900 EUR'   },
  'wp-pro':     { name: 'WP Pro',      price: 1500, label: 'ab 1.500 EUR' },
  'web-app':    { name: 'Web App',     price: 3500, label: 'ab 3.500 EUR' },
  'express-24h':{ name: 'Express 24h', price: 1499, label: 'ab 1.499 EUR' },
}

function getRecommendedPackage(pkgId: PackageTier, selectedFeatures: string[]): PackageTier {
  if (pkgId === 'web-app' || pkgId === 'express-24h' || pkgId === 'wp-pro') return pkgId
  // Landing page: hard upgrade for technical integrations
  if (pkgId === 'landing-page') {
    const needsPro = selectedFeatures.some(f => LANDING_PRO_FEATURES.has(f))
    return needsPro ? 'wp-pro' : pkgId
  }
  return pkgId
}

// ─── Step indicator ───────────────────────────────────────────────────────────

function Steps({ current }: { current: number }) {
  const steps = ['Ihr Paket', 'Kontakt', 'Absenden']
  return (
    <div className="flex items-center gap-0 mb-10">
      {steps.map((label, i) => {
        const n = i + 1
        const done = n < current
        const active = n === current
        return (
          <div key={n} className="flex items-center gap-0 flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                style={{
                  background: done ? 'var(--accent)' : active ? 'var(--fg)' : 'var(--border)',
                  color: done || active ? '#fff' : 'var(--muted)',
                }}
              >
                {done ? '✓' : n}
              </div>
              <span
                className="text-xs font-medium hidden sm:block"
                style={{ color: active ? 'var(--fg)' : 'var(--muted)' }}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className="flex-1 h-px mx-2 mb-5 transition-all duration-500"
                style={{ background: done ? 'var(--accent)' : 'var(--border)' }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─── Main form ────────────────────────────────────────────────────────────────

export default function RequestForm() {
  const params = useSearchParams()
  const packageId = params.get('package') ?? 'wp-premium'
  const pkg = ALL_PACKAGES.find(p => p.id === packageId) ?? ALL_PACKAGES[1]

  const isWebsite   = WEBSITE_PACKAGES.includes(pkg.id)
  const isLanding   = pkg.id === 'landing-page'

  const [step, setStep] = useState(1)
  const [description, setDescription] = useState('')
  const [timing, setTiming] = useState(TIMING_OPTIONS[0])
  const [pages, setPages] = useState('')
  const [features, setFeatures] = useState<string[]>([])
  const [sections, setSections] = useState<string[]>([])
  const [contentReady, setContentReady] = useState('')
  const [currentWebsite, setCurrentWebsite] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [street, setStreet] = useState('')
  const [zip, setZip] = useState('')
  const [city, setCity] = useState('')
  const [privacy, setPrivacy] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  // Errors per step
  const [errors, setErrors] = useState<Record<string, string>>({})

  function toggleFeature(f: string) {
    setFeatures(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f])
  }

  function toggleSection(s: string) {
    setSections(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])
  }

  const recommendedId = isWebsite ? getRecommendedPackage(pkg.id, features) : pkg.id
  const recommended   = PACKAGE_PRICES[recommendedId]
  const original      = PACKAGE_PRICES[pkg.id]
  const isUpgrade     = recommended && original && recommended.price > original.price
  const proFeaturesPicked = features.filter(f => PRO_FEATURES.has(f))

  // WP Design add-on total
  const isWpDesign = pkg.id === 'wp-premium'
  const wpDesignAddonsTotal = isWpDesign
    ? features.reduce((sum, f) => {
        const addon = WP_DESIGN_ADDONS.find(x => x.label === f)
        return sum + (addon?.price ?? 0)
      }, 0)
    : 0
  const wpDesignTotal     = isWpDesign ? 900 + wpDesignAddonsTotal : 0
  const wpDesignAddonsPicked = isWpDesign
    ? WP_DESIGN_ADDONS.filter(x => features.includes(x.label))
    : []
  const wpDesignRecommendPro = isWpDesign && wpDesignAddonsTotal >= WP_PRO_RECOMMENDATION_THRESHOLD
  const wpDesignSaving       = wpDesignRecommendPro ? wpDesignTotal - 1500 : 0

  // Praxis Digital Design add-on total
  const isPraxisDesign = pkg.id === 'praxis-digital-design'
  const praxisDesignAddonsTotal = isPraxisDesign
    ? features.reduce((sum, f) => {
        const addon = PRAXIS_DESIGN_ADDONS.find(x => x.label === f)
        return sum + (addon?.price ?? 0)
      }, 0)
    : 0
  const praxisDesignTotal      = isPraxisDesign ? 900 + praxisDesignAddonsTotal : 0
  const praxisDesignAddonsPicked = isPraxisDesign
    ? PRAXIS_DESIGN_ADDONS.filter(x => features.includes(x.label))
    : []
  const praxisDesignRecommendFull = isPraxisDesign && praxisDesignAddonsTotal >= PRAXIS_DESIGN_RECOMMENDATION_THRESHOLD
  const praxisDesignSaving        = praxisDesignRecommendFull ? praxisDesignTotal - 1500 : 0

  // Landing page add-on total
  const landingAddonsTotal = isLanding
    ? features.reduce((sum, f) => {
        const addon = LANDING_FEATURES.find(x => x.label === f)
        return sum + (addon?.price ?? 0)
      }, 0)
    : 0
  const landingTotal = isLanding ? 599 + landingAddonsTotal : 0
  const landingAddonsPicked = isLanding
    ? LANDING_FEATURES.filter(x => x.price > 0 && features.includes(x.label))
    : []

  const validate1 = () => {
    if (!isWebsite && description.trim().length < 10) {
      setErrors({ description: 'Bitte beschreiben Sie kurz Ihr Projekt (min. 10 Zeichen).' })
      return false
    }
    setErrors({})
    return true
  }

  const validate2 = () => {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = 'Name ist erforderlich.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Bitte geben Sie eine gültige E-Mail ein.'
    if (isWebsite) {
      if (!street.trim()) e.street = 'Straße ist erforderlich.'
      if (!zip.trim()) e.zip = 'PLZ ist erforderlich.'
      if (!city.trim()) e.city = 'Stadt ist erforderlich.'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleNext = () => {
    if (step === 1 && validate1()) setStep(2)
    if (step === 2 && validate2()) setStep(3)
  }

  const handleSubmit = async () => {
    if (!privacy) {
      setErrors({ privacy: 'Bitte akzeptieren Sie die Datenschutzerklärung.' })
      return
    }
    setErrors({})
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          package: pkg.id,
          message: description || undefined,
          timing,
          privacy: true,
          ...(isWebsite && {
            pages: pages || undefined,
            features: features.length ? features : undefined,
            sections: sections.length ? sections : undefined,
            contentReady: contentReady || undefined,
            currentWebsite: currentWebsite || undefined,
            companyName: companyName || undefined,
            street: street || undefined,
            zip: zip || undefined,
            city: city || undefined,
            recommendedPackage: isUpgrade ? recommendedId : undefined,
          }),
        }),
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
    } catch {
      setError('Fehler beim Senden. Bitte schreiben Sie direkt an info@devos-web.de')
    } finally {
      setLoading(false)
    }
  }

  // ── Success screen ──────────────────────────────────────────────────────────
  if (success) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-6"
            style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
          >
            ✓
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ color: 'var(--fg)' }}>
            Anfrage erhalten!
          </h1>
          <p className="text-base mb-2" style={{ color: 'var(--muted)' }}>
            Ich habe Ihre Anfrage für <strong style={{ color: 'var(--fg)' }}>{pkg.name}</strong> erhalten.
          </p>
          <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>
            Sie erhalten gleich eine Bestätigungs-E-Mail. Ich melde mich innerhalb von <strong style={{ color: 'var(--fg)' }}>24–48 Stunden</strong> mit einem offiziellen Angebot.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-2.5 rounded text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Zurück zur Startseite
          </a>
        </div>
      </div>
    )
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--card)',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    padding: '10px 14px',
    fontSize: '15px',
    color: 'var(--fg)',
    outline: 'none',
  }
  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 600,
    marginBottom: '6px',
    color: 'var(--fg)',
  } as const
  const errorStyle = { fontSize: '12px', color: '#dc2626', marginTop: '4px' }

  return (
    <section className="py-16 sm:py-24 min-h-[80vh]" style={{ background: 'var(--bg)' }}>
      <div className="max-w-xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-10">
          <p
            className="text-xs font-mono font-semibold uppercase tracking-widest mb-2"
            style={{ color: 'var(--accent)' }}
          >
            PROJEKTANFRAGE
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--fg)' }}>
            Lassen Sie uns starten.
          </h1>
          <p className="mt-2 text-base" style={{ color: 'var(--muted)' }}>
            3 kurze Schritte — dann erhalten Sie Ihr Angebot in 24–48h.
          </p>
        </div>

        <Steps current={step} />

        {/* ── Step 1 ── */}
        {step === 1 && (
          <div>
            {/* Package card */}
            <div
              className="rounded-xl p-5 mb-7 border"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: 'var(--muted)' }}>
                    Gewähltes Paket
                  </p>
                  <p className="text-lg font-extrabold" style={{ color: 'var(--fg)' }}>{pkg.name}</p>
                </div>
                <span
                  className="text-base font-bold whitespace-nowrap"
                  style={{ color: 'var(--accent)' }}
                >
                  {pkg.price}
                </span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {pkg.features.slice(0, 5).map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/leistungen"
                className="inline-block mt-4 text-xs font-semibold link-hover-accent"
              >
                Paket wechseln →
              </a>
            </div>

            {/* ── Landing Page specific questions ── */}
            {isLanding && (
              <>
                {/* Sections */}
                <div className="mb-6">
                  <label style={labelStyle}>Welche Abschnitte soll die Seite haben?</label>
                  <div className="flex flex-wrap gap-2">
                    {LANDING_SECTIONS.map(s => {
                      const active = sections.includes(s)
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleSection(s)}
                          className="text-sm px-3 py-1.5 rounded-full border transition-all duration-150"
                          style={{
                            background: active ? 'var(--accent)' : 'var(--card)',
                            color: active ? '#fff' : 'var(--muted)',
                            borderColor: active ? 'var(--accent)' : 'var(--border)',
                          }}
                        >
                          {active ? '✓ ' : ''}{s}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Landing features */}
                <div className="mb-6">
                  <label style={labelStyle}>Extras gewünscht?</label>
                  <div className="flex flex-wrap gap-2">
                    {LANDING_FEATURES.map(({ label, price }) => {
                      const active = features.includes(label)
                      return (
                        <button
                          key={label}
                          type="button"
                          onClick={() => toggleFeature(label)}
                          className="text-sm px-3 py-1.5 rounded-full border transition-all duration-150 flex items-center gap-1.5"
                          style={{
                            background: active ? 'var(--accent)' : 'var(--card)',
                            color: active ? '#fff' : 'var(--muted)',
                            borderColor: active ? 'var(--accent)' : 'var(--border)',
                          }}
                        >
                          {active ? '✓ ' : ''}{label}
                          {price > 0 && (
                            <span className="text-xs font-bold opacity-80">+{price}€</span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <label style={labelStyle}>Haben Sie Texte und Bilder bereits?</label>
                  <div className="flex flex-col gap-2">
                    {CONTENT_OPTIONS.map(c => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setContentReady(c)}
                        className="text-sm px-3 py-2 rounded border text-left transition-all duration-150"
                        style={{
                          background: contentReady === c ? 'var(--accent)' : 'var(--card)',
                          color: contentReady === c ? '#fff' : 'var(--muted)',
                          borderColor: contentReady === c ? 'var(--accent)' : 'var(--border)',
                        }}
                      >
                        {contentReady === c ? '✓ ' : ''}{c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reference site */}
                <div className="mb-6">
                  <label style={labelStyle}>Gibt es eine Website, die Ihnen gefällt? (optional)</label>
                  <input
                    type="url"
                    value={currentWebsite}
                    onChange={e => setCurrentWebsite(e.target.value)}
                    placeholder="https://beispiel.de"
                    style={inputStyle}
                  />
                  <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
                    Als Referenz für Stil und Aufbau.
                  </p>
                </div>
              </>
            )}

            {/* ── Qualifying fields (multi-page website packages only) ── */}
            {isWebsite && !isLanding && (
              <>
                {/* Pages */}
                <div className="mb-6">
                  <label style={labelStyle}>Wie viele Seiten brauchen Sie?</label>
                  <div className="flex flex-wrap gap-2">
                    {PAGES_OPTIONS.map(p => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPages(p)}
                        className="text-sm px-3 py-1.5 rounded-full border transition-all duration-150"
                        style={{
                          background: pages === p ? 'var(--accent)' : 'var(--card)',
                          color: pages === p ? '#fff' : 'var(--muted)',
                          borderColor: pages === p ? 'var(--accent)' : 'var(--border)',
                        }}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Features — WP Design: add-ons with price / WP Pro: included info */}
                <div className="mb-6">
                  {pkg.id === 'wp-premium' ? (
                    <>
                      <label style={labelStyle}>Technische Funktionen als Add-on</label>
                      <p className="text-xs mb-3" style={{ color: 'var(--muted)' }}>
                        Im WP Design nicht enthalten — können einzeln dazugebucht werden.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {WP_DESIGN_ADDONS.map(({ label, price }) => {
                          const active = features.includes(label)
                          return (
                            <button
                              key={label}
                              type="button"
                              onClick={() => toggleFeature(label)}
                              className="text-sm px-3 py-1.5 rounded-full border transition-all duration-150 flex items-center gap-1.5"
                              style={{
                                background: active ? 'var(--accent)' : 'var(--card)',
                                color: active ? '#fff' : 'var(--muted)',
                                borderColor: active ? 'var(--accent)' : 'var(--border)',
                              }}
                            >
                              {active ? '✓ ' : ''}{label}
                              <span className="text-xs font-bold opacity-80">+{price}€</span>
                            </button>
                          )
                        })}
                      </div>
                    </>
                  ) : isPraxisDesign ? (
                    <>
                      <label style={labelStyle}>Technische Funktionen hinzufügen (optional)</label>
                      <p className="text-xs mb-3" style={{ color: 'var(--muted)' }}>
                        Im Nur-Design-Paket nicht enthalten — einzeln dazubuchbar.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {PRAXIS_DESIGN_ADDONS.map(({ label, price }) => {
                          const active = features.includes(label)
                          return (
                            <button
                              key={label}
                              type="button"
                              onClick={() => toggleFeature(label)}
                              className="text-sm px-3 py-1.5 rounded-full border transition-all duration-150 flex items-center gap-1.5"
                              style={{
                                background: active ? 'var(--accent)' : 'var(--card)',
                                color: active ? '#fff' : 'var(--muted)',
                                borderColor: active ? 'var(--accent)' : 'var(--border)',
                              }}
                            >
                              {active ? '✓ ' : ''}{label}
                              <span className="text-xs font-bold opacity-80">+{price}€</span>
                            </button>
                          )
                        })}
                      </div>
                    </>
                  ) : (
                    <>
                      <label style={labelStyle}>Inklusive Leistungen</label>
                      <div className="flex flex-wrap gap-2">
                        {pkg.features.slice(0, 6).map(f => (
                          <span
                            key={f}
                            className="text-sm px-3 py-1.5 rounded-full border"
                            style={{ background: 'var(--card)', color: 'var(--muted)', borderColor: 'var(--border)' }}
                          >
                            ✓ {f}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Content readiness */}
                <div className="mb-6">
                  <label style={labelStyle}>Haben Sie Texte und Bilder bereits?</label>
                  <div className="flex flex-col gap-2">
                    {CONTENT_OPTIONS.map(c => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setContentReady(c)}
                        className="text-sm px-3 py-2 rounded border text-left transition-all duration-150"
                        style={{
                          background: contentReady === c ? 'var(--accent)' : 'var(--card)',
                          color: contentReady === c ? '#fff' : 'var(--muted)',
                          borderColor: contentReady === c ? 'var(--accent)' : 'var(--border)',
                        }}
                      >
                        {contentReady === c ? '✓ ' : ''}{c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Current website */}
                <div className="mb-6">
                  <label style={labelStyle}>Aktuelle Website (optional)</label>
                  <input
                    type="url"
                    value={currentWebsite}
                    onChange={e => setCurrentWebsite(e.target.value)}
                    placeholder="https://ihre-aktuelle-seite.de"
                    style={inputStyle}
                  />
                  <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
                    Hilft mir, den Stil und die Struktur zu verstehen.
                  </p>
                </div>
              </>
            )}

            {/* Description */}
            <div className="mb-5">
              <label style={labelStyle}>
                {isWebsite ? 'Noch etwas zu ergänzen? (optional)' : 'Was soll die Website können? *'}
              </label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder={isWebsite
                  ? 'Z.B.: Besondere Wünsche, Referenzen, spezifische Anforderungen...'
                  : 'Z.B.: Ich brauche eine Website für meine Praxis mit Online-Terminbuchung...'}
                rows={isWebsite ? 3 : 4}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
              {errors.description && <p style={errorStyle}>{errors.description}</p>}
            </div>

            {/* Timing */}
            <div className="mb-7">
              <label style={labelStyle}>Wann möchten Sie starten?</label>
              <div className="flex flex-wrap gap-2">
                {TIMING_OPTIONS.map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTiming(t)}
                    className="text-sm px-3 py-1.5 rounded-full border transition-all duration-150"
                    style={{
                      background: timing === t ? 'var(--accent)' : 'var(--card)',
                      color: timing === t ? '#fff' : 'var(--muted)',
                      borderColor: timing === t ? 'var(--accent)' : 'var(--border)',
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Price estimate ── */}
            {isWebsite && (features.length > 0 || sections.length > 0) && (
              <div
                className="rounded-xl border p-4 mb-5"
                style={{
                  background: (isUpgrade || wpDesignRecommendPro || praxisDesignRecommendFull) ? 'rgba(234,179,8,0.08)' : 'var(--card)',
                  borderColor: (isUpgrade || wpDesignRecommendPro || praxisDesignRecommendFull) ? '#ca8a04' : 'var(--border)',
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-1"
                      style={{ color: (isUpgrade || wpDesignRecommendPro || praxisDesignRecommendFull) ? '#ca8a04' : 'var(--muted)' }}>
                      {(isUpgrade || wpDesignRecommendPro || praxisDesignRecommendFull) ? '⚠ Paket-Empfehlung' : '✓ Geschätzte Kosten'}
                    </p>
                    <p className="text-base font-bold" style={{ color: 'var(--fg)' }}>
                      {isLanding ? 'Landing Page' : pkg.name}
                    </p>
                  </div>
                  <span className="text-lg font-bold whitespace-nowrap" style={{ color: 'var(--accent)' }}>
                    {isLanding
                      ? `ab ${landingTotal.toLocaleString('de-DE')} EUR`
                      : isWpDesign
                        ? `ab ${wpDesignTotal.toLocaleString('de-DE')} EUR`
                        : isPraxisDesign
                          ? `ab ${praxisDesignTotal.toLocaleString('de-DE')} EUR`
                          : (recommended?.label ?? pkg.price)
                    }
                  </span>
                </div>

                {/* WP Design add-ons breakdown */}
                {isWpDesign && wpDesignAddonsPicked.length > 0 && (
                  <div className="mt-2 flex flex-col gap-1">
                    <div className="flex justify-between text-sm" style={{ color: 'var(--muted)' }}>
                      <span>WP Design</span>
                      <span>900 EUR</span>
                    </div>
                    {wpDesignAddonsPicked.map(a => (
                      <div key={a.label} className="flex justify-between text-sm" style={{ color: 'var(--muted)' }}>
                        <span>+ {a.label}</span>
                        <span>+{a.price} EUR</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-sm font-bold mt-1 pt-1"
                      style={{ color: 'var(--fg)', borderTop: '1px solid var(--border)' }}>
                      <span>Gesamt</span>
                      <span style={{ color: 'var(--accent)' }}>ab {wpDesignTotal.toLocaleString('de-DE')} EUR</span>
                    </div>
                    {wpDesignRecommendPro && (
                      <p className="text-xs mt-2 p-2 rounded" style={{ background: 'rgba(234,179,8,0.1)', color: '#92400e' }}>
                        Bei diesem Umfang lohnt sich <strong>WP Pro (ab 1.500 EUR)</strong> mehr
                        {wpDesignSaving > 0 ? ` — Sie sparen ${wpDesignSaving} EUR` : ' und Sie erhalten alle Integrationen inklusive'}.
                      </p>
                    )}
                  </div>
                )}

                {/* Praxis Design add-ons breakdown */}
                {isPraxisDesign && praxisDesignAddonsPicked.length > 0 && (
                  <div className="mt-2 flex flex-col gap-1">
                    <div className="flex justify-between text-sm" style={{ color: 'var(--muted)' }}>
                      <span>Praxis Digital — Nur Design</span>
                      <span>900 EUR</span>
                    </div>
                    {praxisDesignAddonsPicked.map(a => (
                      <div key={a.label} className="flex justify-between text-sm" style={{ color: 'var(--muted)' }}>
                        <span>+ {a.label}</span>
                        <span>+{a.price} EUR</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-sm font-bold mt-1 pt-1"
                      style={{ color: 'var(--fg)', borderTop: '1px solid var(--border)' }}>
                      <span>Gesamt</span>
                      <span style={{ color: 'var(--accent)' }}>ab {praxisDesignTotal.toLocaleString('de-DE')} EUR</span>
                    </div>
                    {praxisDesignRecommendFull && (
                      <p className="text-xs mt-2 p-2 rounded" style={{ background: 'rgba(234,179,8,0.1)', color: '#92400e' }}>
                        Bei diesem Umfang lohnt sich <strong>Praxis Digital mit Funktionen (1.500 EUR)</strong> mehr
                        {praxisDesignSaving > 0 ? ` — Sie sparen ${praxisDesignSaving} EUR` : ' und erhalten alle Integrationen inklusive'}.
                      </p>
                    )}
                  </div>
                )}

                {/* Landing add-ons breakdown */}
                {isLanding && landingAddonsPicked.length > 0 && (
                  <div className="mt-2 flex flex-col gap-1">
                    <div className="flex justify-between text-sm" style={{ color: 'var(--muted)' }}>
                      <span>Landing Page</span>
                      <span>599 EUR</span>
                    </div>
                    {landingAddonsPicked.map(a => (
                      <div key={a.label} className="flex justify-between text-sm" style={{ color: 'var(--muted)' }}>
                        <span>+ {a.label}</span>
                        <span>+{a.price} EUR</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-sm font-bold mt-1 pt-1"
                      style={{ color: 'var(--fg)', borderTop: '1px solid var(--border)' }}>
                      <span>Gesamt</span>
                      <span style={{ color: 'var(--accent)' }}>ab {landingTotal.toLocaleString('de-DE')} EUR</span>
                    </div>
                  </div>
                )}

                {/* Package upgrade warning (Landing → Pro) */}
                {isUpgrade && (
                  <div className="text-sm mt-2" style={{ color: 'var(--muted)' }}>
                    <ul className="flex flex-col gap-1">
                      {proFeaturesPicked.map(f => (
                        <li key={f} className="flex items-center gap-1.5">
                          <span style={{ color: '#ca8a04' }}>→</span>
                          <span><strong style={{ color: 'var(--fg)' }}>{f}</strong> ist nur in <strong style={{ color: 'var(--fg)' }}>WP Pro</strong> enthalten</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <button
              onClick={handleNext}
              className="w-full py-3 rounded font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Weiter →
            </button>
          </div>
        )}

        {/* ── Step 2 ── */}
        {step === 2 && (
          <div>
            <div className="mb-5">
              <label style={labelStyle}>Ihr Name *</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Klaus Müller"
                style={inputStyle}
              />
              {errors.name && <p style={errorStyle}>{errors.name}</p>}
            </div>

            {isWebsite && (
              <div className="mb-5">
                <label style={labelStyle}>Firma (optional)</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={e => setCompanyName(e.target.value)}
                  placeholder="Müller GmbH"
                  style={inputStyle}
                />
              </div>
            )}

            <div className="mb-5">
              <label style={labelStyle}>Ihre E-Mail-Adresse *</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="ihre@email.de"
                style={inputStyle}
              />
              {errors.email && <p style={errorStyle}>{errors.email}</p>}
              <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
                Dorthin senden wir Ihre Anfragsbestätigung und das Angebot.
              </p>
            </div>

            {isWebsite && (
              <>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--muted)' }}>
                  Rechnungsadresse
                </p>
                <div className="mb-5">
                  <label style={labelStyle}>Straße und Hausnummer *</label>
                  <input
                    type="text"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                    placeholder="Musterstraße 12"
                    style={inputStyle}
                  />
                  {errors.street && <p style={errorStyle}>{errors.street}</p>}
                </div>
                <div className="flex gap-3 mb-5">
                  <div style={{ flex: '0 0 120px' }}>
                    <label style={labelStyle}>PLZ *</label>
                    <input
                      type="text"
                      value={zip}
                      onChange={e => setZip(e.target.value)}
                      placeholder="04109"
                      style={inputStyle}
                    />
                    {errors.zip && <p style={errorStyle}>{errors.zip}</p>}
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle}>Stadt *</label>
                    <input
                      type="text"
                      value={city}
                      onChange={e => setCity(e.target.value)}
                      placeholder="Leipzig"
                      style={inputStyle}
                    />
                    {errors.city && <p style={errorStyle}>{errors.city}</p>}
                  </div>
                </div>
              </>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-3 rounded font-semibold text-sm border transition-colors"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)', background: 'transparent' }}
              >
                ← Zurück
              </button>
              <button
                onClick={handleNext}
                className="flex-1 py-3 rounded font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                Weiter →
              </button>
            </div>
          </div>
        )}

        {/* ── Step 3 ── */}
        {step === 3 && (
          <div>
            {/* Summary */}
            <div
              className="rounded-xl border p-5 mb-6 flex flex-col gap-3"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <p className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
                Zusammenfassung
              </p>
              <div className="flex justify-between text-sm">
                <span style={{ color: 'var(--muted)' }}>Paket</span>
                <span className="font-semibold" style={{ color: 'var(--fg)' }}>{pkg.name} · {pkg.price}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span style={{ color: 'var(--muted)' }}>Start</span>
                <span className="font-semibold" style={{ color: 'var(--fg)' }}>{timing}</span>
              </div>
              {pages && (
                <div className="flex justify-between text-sm">
                  <span style={{ color: 'var(--muted)' }}>Seiten</span>
                  <span className="font-semibold" style={{ color: 'var(--fg)' }}>{pages}</span>
                </div>
              )}
              {contentReady && (
                <div className="flex justify-between text-sm">
                  <span style={{ color: 'var(--muted)' }}>Inhalte</span>
                  <span className="font-semibold" style={{ color: 'var(--fg)' }}>{contentReady}</span>
                </div>
              )}
              {features.length > 0 && (
                <div className="flex flex-col gap-1 text-sm">
                  <span style={{ color: 'var(--muted)' }}>Funktionen</span>
                  <div className="flex flex-wrap gap-1.5">
                    {features.map(f => (
                      <span
                        key={f}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: 'var(--accent)', color: '#fff' }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span style={{ color: 'var(--muted)' }}>Name</span>
                <span className="font-semibold" style={{ color: 'var(--fg)' }}>{name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span style={{ color: 'var(--muted)' }}>E-Mail</span>
                <span className="font-semibold" style={{ color: 'var(--fg)' }}>{email}</span>
              </div>
              {description && (
                <>
                  <div style={{ height: 1, background: 'var(--border)' }} />
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    <span className="font-semibold" style={{ color: 'var(--fg)' }}>Notiz: </span>
                    {description}
                  </p>
                </>
              )}
            </div>

            {/* Datenschutz */}
            <label className="flex items-start gap-3 cursor-pointer mb-6">
              <input
                type="checkbox"
                checked={privacy}
                onChange={e => setPrivacy(e.target.checked)}
                className="mt-0.5 flex-shrink-0"
                style={{ accentColor: 'var(--accent)', width: 16, height: 16 }}
              />
              <span className="text-sm" style={{ color: 'var(--muted)' }}>
                Ich habe die{' '}
                <a href="/datenschutz" className="link-hover-accent font-semibold" target="_blank">
                  Datenschutzerklärung
                </a>{' '}
                gelesen und stimme zu.
              </span>
            </label>
            {errors.privacy && <p style={{ ...errorStyle, marginTop: -16, marginBottom: 16 }}>{errors.privacy}</p>}

            {error && (
              <p className="text-sm mb-4 p-3 rounded" style={{ background: '#fef2f2', color: '#dc2626' }}>
                {error}
              </p>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 py-3 rounded font-semibold text-sm border transition-colors"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)', background: 'transparent' }}
              >
                ← Zurück
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 py-3 rounded font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                {loading ? 'Wird gesendet…' : 'Angebot anfordern →'}
              </button>
            </div>

            <p className="text-xs text-center mt-4" style={{ color: 'var(--muted)' }}>
              Kein Spam. Kein Vertrag. Nur Ihr Angebot in 24–48h.
            </p>
          </div>
        )}

      </div>
    </section>
  )
}
