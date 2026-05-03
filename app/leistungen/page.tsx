import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { PRICING_PLANS, SUPPORT_PLANS, EXPRESS_SERVICE } from '@/lib/constants'
import { Icon } from '@/components/ui/Icon'
import type { IconName } from '@/components/ui/Icon'
import { WorkflowDemo } from '@/components/ui/WorkflowDemo'

export const metadata = {
  title: 'Leistungen — DevOS Web · Digitale Systeme mit KI',
  description:
    'Websites, KI-Automatisierungen, Apps und Content-Systeme für Therapeuten, Coaches und Kreative im DACH-Raum.',
}

function FeatureList({
  items,
  accent = 'var(--accent)',
}: {
  items: readonly string[]
  accent?: string
}) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'var(--fg)' }}>
          <span className="mt-0.5 flex-shrink-0" style={{ color: accent }}>✓</span>
          {f}
        </li>
      ))}
    </ul>
  )
}

// ─── 4 Schichten ──────────────────────────────────────────────────────────────

const LAYERS = [
  {
    num: '01',
    icon: 'Globe' as IconName,
    title: 'Web Strategy & Build',
    subtitle: 'Ihre professionelle Online-Präsenz',
    desc: 'WordPress/Divi oder Next.js — je nach Bedarf. Mit Online-Buchung (Amelia), Google Calendar, SEO und DSGVO-Grundlage. Hosting-Setup auf IONOS oder All-Inkl.',
    tags: ['WordPress', 'Divi', 'Amelia', 'SEO', 'DSGVO'],
    anchor: '#web',
  },
  {
    num: '02',
    icon: 'Bot' as IconName,
    title: 'KI-Automatisierungen',
    subtitle: 'Workflows, die für Sie arbeiten',
    desc: 'Automatisierte Pipelines mit Make.com, Python und der Claude API. YouTube-Automatisierungen, Google Sheets/Drive-Integrationen und maßgeschneiderte KI-Agenten.',
    tags: ['Make.com', 'Claude API', 'Python', 'YouTube API'],
    anchor: '#ki',
  },
  {
    num: '03',
    icon: 'Smartphone' as IconName,
    title: 'Apps & Plattformen',
    subtitle: 'iOS, Android und Web-Apps',
    desc: 'React Native / Expo für mobile Apps. Next.js für interaktive Web-Plattformen. Von der Idee zum funktionalen MVP in 4–6 Wochen.',
    tags: ['React Native', 'Expo', 'Next.js', 'MVP'],
    anchor: '#apps',
  },
  {
    num: '04',
    icon: 'Rss' as IconName,
    title: 'Content-Systeme mit KI',
    subtitle: 'Automatisierter Content-Motor',
    desc: 'YouTube-Kanal-Aufbau mit KI-gestützter Content-Pipeline. Blog + Pinterest-Integration. Mehrsprachige Strategie für den DACH-Raum.',
    tags: ['YouTube', 'Pinterest', 'Blog', 'Mehrsprachig'],
    anchor: '#content',
  },
]

// ─── Neue Pakete (Festpreis-orientiert, kein Stripe) ─────────────────────────

const NEW_PACKAGES = [
  {
    id: 'praxis-digital',
    icon: 'Stethoscope' as IconName,
    name: 'Praxis Digital',
    target: 'Therapeuten & Coaches',
    price: 'auf Anfrage',
    desc: 'Vollständige Website für Ihre Praxis — mit Online-Buchung, Google-Kalender-Sync, SEO und Hosting-Setup.',
    features: [
      'WordPress + Divi oder Next.js',
      'Amelia Online-Buchungssystem',
      'Google Calendar Sync',
      'SEO-Grundlage + Yoast',
      'DSGVO-konform',
      'IONOS / All-Inkl Hosting',
    ],
    href: '/anfragen?paket=praxis-digital',
  },
  {
    id: 'ki-automation',
    icon: 'Zap' as IconName,
    name: 'KI-Automatisierung',
    target: 'Selbstständige & Teams',
    price: 'Setup + Retainer',
    desc: 'Automatisierter Workflow nach Maß — Make.com, Python-Pipelines oder Claude-API-Agent. Einmalig einrichten, dauerhaft sparen.',
    features: [
      'Anforderungsanalyse inklusive',
      'Make.com oder Python-Pipeline',
      'Claude API / OpenAI Integration',
      'Google Sheets / Drive Anbindung',
      'Dokumentation + Übergabe',
      'Optionaler monatlicher Support',
    ],
    href: '/anfragen?paket=ki-automation',
  },
  {
    id: 'app-mvp',
    icon: 'Smartphone' as IconName,
    name: 'App MVP',
    target: 'Gründer & Kreative',
    price: '4–6 Wochen',
    desc: 'Funktionaler Prototyp für iOS, Android oder Web. Kein langer Entwicklungszyklus — in wenigen Wochen einsatzbereit.',
    features: [
      'React Native (iOS + Android)',
      'Oder Next.js Web-App',
      'Design + Entwicklung',
      'Authentifizierung + Datenbank',
      'Deploy auf App Store / Vercel',
      'Festpreis nach Scope',
    ],
    href: '/anfragen?paket=app-mvp',
  },
  {
    id: 'content-system',
    icon: 'Rss' as IconName,
    name: 'Content-System',
    target: 'Creator & Coaches',
    price: 'einmalig',
    desc: 'YouTube-Kanal-Setup mit KI-Pipeline, Pinterest-Integration und Blog — alles automatisiert, sodass Sie sich aufs Erstellen konzentrieren.',
    features: [
      'YouTube-Kanal-Strategie + SEO',
      'KI-Content-Pipeline (Python)',
      'Pinterest Business Setup',
      'Blog auf Next.js',
      'Mehrsprachige Strategie',
      'Make.com Automatisierung',
    ],
    href: '/anfragen?paket=content-system',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LeistungenPage() {
  const featuredSupport = SUPPORT_PLANS.find((p) => p.featured)!

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
              Leipzig · DACH-Raum
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: 'var(--fg)',
                marginBottom: '1.25rem',
                maxWidth: '720px',
              }}
            >
              Ich baue digitale Systeme mit KI.
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: 'var(--muted)', lineHeight: '1.75' }}>
              Websites, Automatisierungen, Apps und Content-Systeme — persönlich, klar und auf den Punkt.
              Für Therapeuten, Coaches und Kreative im DACH-Raum.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#pakete"
                className="btn-primary inline-flex items-center px-6 py-3 font-semibold text-sm"
                style={{ background: 'var(--accent)', color: '#fff', borderRadius: '6px' }}
              >
                Pakete ansehen →
              </a>
              <a
                href="/anfragen"
                className="inline-flex items-center px-6 py-3 font-semibold text-sm border rounded-md transition-opacity hover:opacity-70"
                style={{ color: 'var(--fg)', borderColor: 'var(--border)', borderRadius: '6px' }}
              >
                Projekt anfragen
              </a>
            </div>
          </div>
        </section>

        {/* ── 4 Schichten Übersicht ─────────────────────────────────────── */}
        <section className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--muted)' }}
            >
              Die 4 Bereiche
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-10 max-w-2xl"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
              data-animate
            >
              Was ich für Sie entwickeln kann.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {LAYERS.map((layer, i) => (
                <a
                  key={layer.num}
                  href={layer.anchor}
                  className="card-hover rounded-xl p-7 border flex flex-col gap-4 group"
                  style={{ background: 'var(--card)' }}
                  data-animate
                  data-animate-delay={String(i + 1) as '1' | '2' | '3' | '4'}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="w-11 h-11 flex items-center justify-center rounded-lg"
                      style={{ background: 'var(--accent-dim)' }}
                    >
                      <Icon name={layer.icon} size={22} style={{ color: 'var(--accent)' }} />
                    </span>
                    <span
                      className="text-3xl font-black font-mono"
                      style={{ color: 'var(--border)', lineHeight: 1 }}
                    >
                      {layer.num}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-1 transition-colors duration-200 group-hover:text-[color:var(--accent)]"
                      style={{ color: 'var(--fg)' }}
                    >
                      {layer.title}
                    </h3>
                    <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
                      {layer.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                      {layer.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {layer.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 rounded"
                        style={{ background: 'var(--bg-elevated)', color: 'var(--muted)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pakete Übersicht ─────────────────────────────────────────── */}
        <section id="pakete" className="py-20 sm:py-28 relative overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
          <div className="pricing-grid-bg absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--muted)' }}
            >
              Pakete & Preise
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-3"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
              data-animate
            >
              Was kostet was?
            </h2>
            <p className="text-base mb-10 max-w-2xl" style={{ color: 'var(--muted)' }} data-animate data-animate-delay="1">
              Festpreise nach Scope — kein Stundensatz-Roulette.
              Jedes Paket beginnt mit einem kostenlosen Gespräch.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" data-animate data-animate-delay="2">
              {NEW_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="rounded-xl p-7 border flex flex-col gap-5 card-hover"
                  style={{ background: 'var(--card)' }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0"
                      style={{ background: 'var(--accent-dim)' }}
                    >
                      <Icon name={pkg.icon} size={20} style={{ color: 'var(--accent)' }} />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: 'var(--fg)' }}>
                        {pkg.name}
                      </h3>
                      <p className="text-xs font-mono" style={{ color: 'var(--muted)' }}>
                        {pkg.target}
                      </p>
                    </div>
                    <span
                      className="ml-auto text-xs font-mono font-bold px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{ background: 'var(--bg-elevated)', color: 'var(--accent)' }}
                    >
                      {pkg.price}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                    {pkg.desc}
                  </p>

                  <FeatureList items={pkg.features} />

                  <a
                    href={pkg.href}
                    className="mt-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded border transition-colors duration-150 pricing-btn-ghost"
                    style={{ background: 'transparent', color: 'var(--fg)', borderColor: 'var(--border)', borderRadius: '6px' }}
                  >
                    Kostenlos anfragen →
                  </a>
                </div>
              ))}
            </div>

            <p className="text-xs text-center mt-6" style={{ color: 'var(--muted)' }}>
              Gem. §19 UStG wird keine Umsatzsteuer berechnet. · Zahlung per Banküberweisung nach Angebot.
            </p>
          </div>
        </section>

        {/* ── Express 24h ──────────────────────────────────────────────── */}
        <section id="express" className="py-20 sm:py-28 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <span
            aria-hidden="true"
            className="absolute -right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none"
            style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontSize: 'clamp(10rem, 22vw, 20rem)',
              fontWeight: 900,
              color: 'var(--border)',
              opacity: 0.35,
              letterSpacing: '-0.04em',
            }}
          >
            24h
          </span>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div data-animate>
                <span
                  className="inline-block text-xs font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                  style={{ background: 'var(--accent)', color: '#fff' }}
                >
                  ⚡ {EXPRESS_SERVICE.badge}
                </span>
                <h2
                  className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight"
                  style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
                >
                  {EXPRESS_SERVICE.h2}
                </h2>
                <p className="text-base mb-8 max-w-md" style={{ color: 'var(--muted)', lineHeight: '1.75' }}>
                  {EXPRESS_SERVICE.subtitle}
                </p>
                <FeatureList items={EXPRESS_SERVICE.features} />
                <div className="flex items-baseline gap-3 mt-8 mb-8">
                  <span className="text-3xl font-extrabold font-mono" style={{ color: 'var(--accent)' }}>
                    {EXPRESS_SERVICE.price}
                  </span>
                  <span className="text-sm" style={{ color: 'var(--muted)' }}>
                    {EXPRESS_SERVICE.priceNote}
                  </span>
                </div>
                <a
                  href={EXPRESS_SERVICE.ctaHref}
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
                  style={{ background: 'var(--accent)', color: '#fff', borderRadius: '6px' }}
                >
                  {EXPRESS_SERVICE.cta}
                </a>
              </div>
              <div data-animate data-animate-delay="1">
                <div className="rounded-2xl p-6 sm:p-8 border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
                  <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-6" style={{ color: 'var(--muted)' }}>
                    ABLAUF — TAG 1 & 2
                  </p>
                  <ol className="flex flex-col gap-0">
                    {EXPRESS_SERVICE.timeline.map((step, i) => (
                      <li key={step.label} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1" style={{ background: 'var(--accent)' }} />
                          {i < EXPRESS_SERVICE.timeline.length - 1 && (
                            <span className="w-px flex-1 my-1.5" style={{ background: 'var(--border)' }} />
                          )}
                        </div>
                        <div className="pb-6">
                          <p className="text-xs font-mono mb-0.5" style={{ color: 'var(--accent)' }}>{step.time}</p>
                          <p className="text-sm font-bold mb-0.5" style={{ color: 'var(--fg)' }}>{step.label}</p>
                          <p className="text-sm" style={{ color: 'var(--muted)' }}>{step.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <div className="rounded-lg px-4 py-3 flex items-center gap-2 mt-2" style={{ background: 'var(--accent-dim)', border: '1px solid rgba(46,125,122,0.18)' }}>
                    <span className="text-sm" style={{ color: 'var(--accent)' }}>⚡</span>
                    <p className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>{EXPRESS_SERVICE.urgency}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── KI-Automatisierungen Detail ───────────────────────────────── */}
        <section id="ki" className="py-20 sm:py-28" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--muted)' }}>
              Schicht 02
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-3 max-w-2xl"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
              data-animate
            >
              KI-Automatisierungen — Ihre Kunden buchen. Sie schlafen.
            </h2>
            <p className="text-base mb-10 max-w-2xl" style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
              Mit Amelia, Google Calendar, Zoom und Stripe läuft Ihre Terminverwaltung automatisch.
              Kein Hin-und-Her per E-Mail, keine manuellen Bestätigungen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {([
                { icon: 'CalendarCheck' as IconName, title: 'Amelia Buchungssystem', text: 'Kunden buchen 24/7 selbst. Automatische Bestätigung per E-Mail.' },
                { icon: 'CalendarDays' as IconName, title: 'Google Calendar Sync', text: 'Alle Termine landen direkt in Ihrem persönlichen Kalender.' },
                { icon: 'Video' as IconName, title: 'Zoom-Links automatisch', text: 'Bei Online-Terminen wird der Zoom-Link automatisch generiert und verschickt.' },
                { icon: 'Bot' as IconName, title: 'Make.com & Claude API', text: 'Komplexe Workflows automatisieren — von Content-Pipelines bis zu KI-Agenten.' },
              ]).map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-6 border card-hover flex gap-4"
                  style={{ background: 'var(--card)' }}
                >
                  <span
                    className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0 mt-0.5"
                    style={{ background: 'var(--accent-dim)' }}
                  >
                    <Icon name={item.icon} size={20} style={{ color: 'var(--accent)' }} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold mb-1" style={{ color: 'var(--fg)' }}>{item.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--muted)', lineHeight: '1.6' }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Workflow Demo */}
            <div className="mt-14">
              <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--muted)' }}>
                Live Demo
              </p>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--fg)' }}>Interaktive Plattformen — ausprobieren.</h3>
              <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
                Nodes verschieben, neue hinzufügen. So sehen die Oberflächen aus, die ich für Sie baue.
              </p>
              <WorkflowDemo />
            </div>
          </div>
        </section>

        {/* ── Apps MVP ─────────────────────────────────────────────────── */}
        <section id="apps" className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--muted)' }}>
                  Schicht 03
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-extrabold mb-4"
                  style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
                  data-animate
                >
                  Apps & Plattformen — wenn WordPress nicht reicht.
                </h2>
                <p className="text-base mb-6" style={{ color: 'var(--muted)', lineHeight: '1.75' }}>
                  Login-Bereiche, Dashboards, mobile Apps, Mitgliederportale und interne Tools.
                  Maßgeschneidert — in 4–6 Wochen zum funktionalen MVP.
                </p>
                <p className="text-2xl font-extrabold font-mono mb-6" style={{ color: 'var(--accent)' }}>
                  Festpreis nach Scope
                </p>
                <a
                  href="/anfragen?paket=app-mvp"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
                  style={{ background: 'var(--accent)', color: '#fff', borderRadius: '6px' }}
                >
                  Unverbindlich anfragen →
                </a>
              </div>
              <div className="flex flex-col gap-3">
                {([
                  { icon: 'Smartphone' as IconName, t: 'iOS & Android (React Native)', d: 'Eine Codebase, zwei Plattformen. TypeScript, Expo.' },
                  { icon: 'Code2' as IconName, t: 'Web Apps (Next.js)', d: 'Schnell, modern, SEO-optimiert.' },
                  { icon: 'Database' as IconName, t: 'Backend + Datenbank', d: 'Node.js, PostgreSQL, sichere Authentifizierung.' },
                  { icon: 'Rocket' as IconName, t: 'Deploy & Hosting', d: 'Vercel, App Store — wartbar und stabil.' },
                ]).map((item) => (
                  <div
                    key={item.t}
                    className="rounded-lg p-4 border flex gap-3 card-hover"
                    style={{ background: 'var(--card)' }}
                  >
                    <span
                      className="w-8 h-8 flex items-center justify-center rounded-md flex-shrink-0"
                      style={{ background: 'var(--accent-dim)' }}
                    >
                      <Icon name={item.icon} size={16} style={{ color: 'var(--accent)' }} />
                    </span>
                    <div>
                      <p className="text-sm font-bold" style={{ color: 'var(--fg)' }}>{item.t}</p>
                      <p className="text-xs" style={{ color: 'var(--muted)' }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Content-Systeme ───────────────────────────────────────────── */}
        <section id="content" className="py-20 sm:py-28" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--muted)' }}>
              Schicht 04
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-3 max-w-2xl"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
              data-animate
            >
              Content-Systeme — Ihr automatisierter Content-Motor.
            </h2>
            <p className="text-base mb-10 max-w-2xl" style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
              YouTube-Kanal mit KI-Pipeline, Blog mit SEO und Pinterest-Amplifier — alles verzahnt,
              sodass Ihr Content für Sie arbeitet, während Sie schlafen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {([
                { icon: 'Youtube' as IconName, title: 'YouTube-Kanal', text: 'Strategie, SEO-Optimierung und automatisierter Upload-Workflow.' },
                { icon: 'Bot' as IconName, title: 'KI-Pipeline', text: 'Python + FFmpeg + Claude API — Content auf Knopfdruck.' },
                { icon: 'Pin' as IconName, title: 'Pinterest', text: 'Rich Pins, automatische Pin-Erstellung aus Blog-Artikeln.' },
                { icon: 'Globe' as IconName, title: 'Blog + SEO', text: 'Next.js Blog mit AdSense, Affiliate-Links und mehrsprachiger Strategie.' },
              ]).map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-6 border card-hover flex flex-col gap-3"
                  style={{ background: 'var(--card)' }}
                >
                  <span
                    className="w-10 h-10 flex items-center justify-center rounded-lg"
                    style={{ background: 'var(--accent-dim)' }}
                  >
                    <Icon name={item.icon} size={20} style={{ color: 'var(--accent)' }} />
                  </span>
                  <h3 className="text-base font-bold" style={{ color: 'var(--fg)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--muted)', lineHeight: '1.6' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Website-Pakete (bestehend) ────────────────────────────────── */}
        <section id="web" className="py-20 sm:py-28 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div className="pricing-grid-bg absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent-wp)' }}>
              Website-Pakete
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-3"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
              data-animate
            >
              Ihr Start im Internet
            </h2>
            <p className="text-base mb-10 max-w-2xl" style={{ color: 'var(--muted)' }} data-animate data-animate-delay="1">
              Einmalige Investition. Ich liefere eine fertige, professionelle Website —
              ohne dass Sie sich um Technik kümmern müssen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-animate data-animate-delay="2">
              {PRICING_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className="rounded-xl p-6 sm:p-8 border flex flex-col gap-5"
                  style={{
                    background: 'var(--card)',
                    borderColor: plan.featured ? 'var(--accent-wp)' : 'var(--border)',
                    boxShadow: plan.featured
                      ? '0 0 0 1px var(--accent-wp), 0 4px 24px rgba(33,117,155,0.12)'
                      : 'none',
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold" style={{ color: 'var(--fg)' }}>{plan.name}</h3>
                        {plan.featured && (
                          <span className="text-xs font-mono px-2 py-0.5 rounded-full" style={{ background: 'var(--accent-wp)', color: '#fff' }}>
                            Beliebt
                          </span>
                        )}
                      </div>
                      <p className="text-xs" style={{ color: 'var(--muted)' }}>{plan.target}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xl font-extrabold font-mono" style={{ color: 'var(--accent)' }}>
                        {plan.price}
                      </span>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>einmalig</p>
                    </div>
                  </div>

                  {plan.features.length > 0 && <FeatureList items={plan.features} accent="var(--accent-wp)" />}

                  {plan.excluded.length > 0 && (
                    <ul className="flex flex-col gap-2">
                      {plan.excluded.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                          <span>✗</span>{f}
                        </li>
                      ))}
                    </ul>
                  )}

                  <a
                    href={`/anfragen?package=${plan.id}`}
                    className="mt-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded border transition-colors duration-150 pricing-btn-ghost"
                    style={{ background: 'transparent', color: 'var(--fg)', borderColor: 'var(--border)', borderRadius: '6px' }}
                  >
                    Anfragen
                  </a>
                </div>
              ))}
            </div>
            <p className="text-xs text-center mt-6" style={{ color: 'var(--muted)' }}>
              Gem. §19 UStG wird keine Umsatzsteuer berechnet. · Zahlung per Banküberweisung nach Angebot.
            </p>
          </div>
        </section>

        {/* ── Support & Pflege ─────────────────────────────────────────── */}
        <section id="support" className="py-20 sm:py-28 relative overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
          <div className="pricing-grid-bg absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--muted)' }}>
              Support & Pflege
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-3"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
              data-animate
            >
              Was kommt nach dem Launch?
            </h2>
            <p className="text-base max-w-2xl mb-6" style={{ color: 'var(--muted)', lineHeight: '1.7' }} data-animate data-animate-delay="1">
              Eine Website braucht regelmäßige Pflege — Updates, Sicherheit, Backups.
              Ohne Pflege wird sie langsam, unsicher und irgendwann kaputt.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12" data-animate data-animate-delay="2">
              <div className="rounded-xl p-5 border flex gap-4" style={{ background: 'rgba(239,68,68,0.06)', borderColor: 'rgba(239,68,68,0.2)' }}>
                <span className="flex-shrink-0 mt-0.5">
                  <Icon name="AlertTriangle" size={22} color="#f87171" />
                </span>
                <div>
                  <p className="text-sm font-bold mb-1" style={{ color: '#f87171' }}>Ohne Pflege-Paket</p>
                  <p className="text-sm" style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                    Plugin-Updates werden ignoriert, Sicherheitslücken entstehen, Notfall-Reparatur{' '}
                    <strong style={{ color: 'var(--fg)' }}>75 EUR/Std.</strong>
                  </p>
                </div>
              </div>
              <div className="rounded-xl p-5 border flex gap-4" style={{ background: 'var(--accent-dim)', borderColor: 'rgba(46,125,122,0.18)' }}>
                <span className="flex-shrink-0 mt-0.5">
                  <Icon name="CheckCircle2" size={22} style={{ color: '#22c55e' }} />
                </span>
                <div>
                  <p className="text-sm font-bold mb-1" style={{ color: '#22c55e' }}>Mit Pflege-Paket</p>
                  <p className="text-sm" style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                    Ihre Website bleibt aktuell, sicher und schnell — ohne dass Sie einen Finger rühren müssen.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {SUPPORT_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className="rounded-xl p-6 border flex flex-col gap-4 relative"
                  style={{
                    background: 'var(--card)',
                    borderColor: plan.featured ? 'var(--accent)' : 'var(--border)',
                    boxShadow: plan.featured ? '0 0 0 1px var(--accent), 0 4px 32px var(--glow)' : 'none',
                  }}
                >
                  {plan.featured && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-mono font-bold px-3 py-1 rounded-full whitespace-nowrap"
                      style={{ background: 'var(--accent)', color: '#fff' }}
                    >
                      ★ Empfohlen
                    </div>
                  )}
                  <div>
                    <h3 className="text-base font-bold mb-0.5" style={{ color: 'var(--fg)' }}>{plan.name}</h3>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{plan.tagline}</p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold font-mono" style={{ color: 'var(--accent)' }}>{plan.perMonth}</span>
                      <span className="text-sm" style={{ color: 'var(--muted)' }}>EUR/Monat</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs" style={{ color: 'var(--muted)' }}>
                        {plan.totalPrice} EUR / {plan.duration}
                      </span>
                      {plan.savings !== undefined && (
                        <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded" style={{ background: 'rgba(34,197,94,0.12)', color: '#4ade80' }}>
                          −{plan.savings}%
                        </span>
                      )}
                    </div>
                  </div>
                  <FeatureList items={plan.features} />
                  <a
                    href={`/anfragen?paket=${plan.id}`}
                    className="block text-center py-2.5 px-4 text-sm font-semibold rounded-lg transition-opacity hover:opacity-85"
                    style={
                      plan.featured
                        ? { background: 'var(--accent)', color: '#fff' }
                        : { background: 'var(--bg)', color: 'var(--fg)', border: '1px solid var(--border)' }
                    }
                  >
                    {plan.featured ? 'Jetzt anfragen →' : 'Anfragen'}
                  </a>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-5 border flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
              <div className="flex-1">
                <p className="text-sm font-bold mb-1 flex items-center gap-2" style={{ color: 'var(--fg)' }}>
                  <Icon name="Lightbulb" size={16} style={{ color: 'var(--muted)' }} />
                  Warum ein Paket sinnvoll ist
                </p>
                <p className="text-sm" style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                  Eine einzelne Stunde außerhalb eines Pakets kostet <strong style={{ color: 'var(--fg)' }}>75 EUR/Std.</strong> —
                  das {featuredSupport.name}-Paket deckt deutlich mehr ab.
                </p>
              </div>
              <div className="flex-shrink-0 text-center px-6 py-3 rounded-lg" style={{ background: 'var(--accent-dim)' }}>
                <p className="text-2xl font-extrabold font-mono" style={{ color: '#22c55e' }}>{featuredSupport.perMonth} EUR</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>pro Monat im {featuredSupport.name}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Performance & SEO ─────────────────────────────────────────── */}
        <section className="py-16" style={{ background: 'var(--bg)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
              <div className="flex-1">
                <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>
                  Performance & SEO
                </p>
                <h2 className="text-2xl font-extrabold mb-2" style={{ color: 'var(--fg)' }}>
                  Schnell geladen. Bei Google gefunden.
                </h2>
                <p className="text-sm" style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                  Optimierung für Core Web Vitals, Caching, Bildkomprimierung und technisches SEO —
                  damit Ihre Kunden Sie finden, bevor die Konkurrenz sie findet.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {['LCP < 2.5s', 'CLS < 0.1', 'PageSpeed > 90', 'Mobile-First'].map((m) => (
                  <div
                    key={m}
                    className="px-4 py-2.5 rounded-lg border text-sm font-mono font-semibold"
                    style={{ background: 'rgba(34,197,94,0.10)', borderColor: 'rgba(34,197,94,0.25)', color: '#22c55e' }}
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA final ────────────────────────────────────────────────── */}
        <section className="py-24 text-center" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
              data-animate
            >
              Bereit anzufangen?
            </h2>
            <p className="text-base mb-3" style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
              Schreiben Sie mir — ich antworte innerhalb von 24–48 Stunden.
              Kein Angebot ohne Gespräch, kein Gespräch ohne Mehrwert.
            </p>
            <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>
              Unverbindlich. Kostenlos. Auf Deutsch oder Spanisch.
            </p>
            <a
              href="/anfragen"
              className="btn-primary inline-flex items-center justify-center px-8 py-3.5 font-semibold text-sm"
              style={{ background: 'var(--accent)', color: '#fff', borderRadius: '6px' }}
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
