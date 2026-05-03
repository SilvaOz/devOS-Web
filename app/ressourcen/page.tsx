import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Ressourcen & Tools — DevOS Web',
  description:
    'Die besten Tools für Therapeuten, Coaches und Selbstständige im DACH-Raum — kuratiert und persönlich getestet.',
}

type Tool = {
  name: string
  category: string
  desc: string
  why: string
  cta: string
  href: string
  affiliate: boolean
  tag?: string
}

const TOOLS: Tool[] = [
  {
    name: 'Elegant Themes (Divi)',
    category: 'WordPress',
    desc: 'Das beliebteste WordPress-Theme für professionelle Websites — mit visuellem Page Builder, 2.000+ Layouts und lebenslanger Lizenz.',
    why: 'Ich setze Divi bei fast allen WordPress-Projekten ein. Die Lifetime-Lizenz ist unschlagbar im Preis-Leistungs-Verhältnis.',
    cta: 'Zu Elegant Themes →',
    href: 'https://www.elegantthemes.com/affiliates/',
    affiliate: true,
    tag: 'Empfohlen',
  },
  {
    name: 'Amelia Booking',
    category: 'Online-Buchung',
    desc: 'Das beste WordPress-Plugin für Online-Terminbuchungen. Kunden buchen selbst, Google Calendar wird automatisch synchronisiert.',
    why: 'Für Therapeuten und Coaches das wichtigste Tool neben der Website selbst. Einmalige Kosten, keine monatlichen Gebühren.',
    cta: 'Zu Amelia →',
    href: 'https://wpamelia.com',
    affiliate: true,
    tag: 'Beliebt bei Therapeuten',
  },
  {
    name: 'IONOS',
    category: 'Hosting',
    desc: 'Deutsches Hosting mit DSGVO-konformen Servern in Deutschland. Gut für WordPress-Websites, günstige Einsteigerpakete.',
    why: 'Für Kunden, die Wert auf deutschen Server-Standort legen. Einfache Verwaltung, guter Support.',
    cta: 'Zu IONOS →',
    href: 'https://www.ionos.de/affiliate',
    affiliate: true,
  },
  {
    name: 'All-Inkl',
    category: 'Hosting',
    desc: 'Zuverlässiges deutsches Webhosting — besonders bekannt für sehr guten Support und stabilen Betrieb.',
    why: 'Meine Empfehlung für Kunden, die maximale Stabilität und persönlichen Support brauchen.',
    cta: 'Zu All-Inkl →',
    href: 'https://all-inkl.com/partner/',
    affiliate: true,
  },
  {
    name: 'Make.com',
    category: 'Automatisierung',
    desc: 'Visueller Workflow-Builder ohne Code. Verbindet hunderte von Apps automatisch — E-Mail, CRM, Kalender, Social Media.',
    why: 'Das Tool, das ich für die meisten Automatisierungen meiner Kunden verwende. Sehr mächtig, auch für Nicht-Entwickler verständlich.',
    cta: 'Zu Make.com →',
    href: 'https://make.com/en/affiliate',
    affiliate: true,
    tag: 'KI-Automatisierung',
  },
  {
    name: 'Namecheap',
    category: 'Domains',
    desc: 'Günstige Domains mit guter Verwaltungsoberfläche. Ideal für .de, .com und internationale Domains.',
    why: 'Für Kunden die ihre Domain separat vom Hosting kaufen möchten. Günstig und zuverlässig.',
    cta: 'Zu Namecheap →',
    href: 'https://www.namecheap.com',
    affiliate: true,
  },
  {
    name: 'Resend',
    category: 'E-Mail API',
    desc: 'Moderner E-Mail-Versand für Entwickler. Transaktionale E-Mails für Kontaktformulare, Buchungsbestätigungen und Newsletter.',
    why: 'Das Tool, das ich auf dieser Website selbst verwende. Sehr einfache API, gute Zustellbarkeit.',
    cta: 'Zu Resend →',
    href: 'https://resend.com',
    affiliate: false,
    tag: 'Kostenloser Einstieg',
  },
  {
    name: 'Vercel',
    category: 'Hosting (Next.js)',
    desc: 'Der beste Hosting-Anbieter für Next.js-Websites. Automatisches Deployment, globales CDN, kostenloses SSL.',
    why: 'Ich hoste alle meine Next.js-Projekte auf Vercel — diese Website inklusive. Schnell, zuverlässig, einfach.',
    cta: 'Zu Vercel →',
    href: 'https://vercel.com',
    affiliate: false,
    tag: 'Kostenloser Einstieg',
  },
]

const CATEGORIES = Array.from(new Set(TOOLS.map((t) => t.category)))

export default function RessourcenPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>

        {/* Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: 'var(--muted)' }}>
              Ressourcen · DevOS Web
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: 'var(--fg)',
                marginBottom: '1rem',
              }}
            >
              Tools, die ich wirklich nutze.
            </h1>
            <p
              className="text-lg max-w-2xl"
              style={{ color: 'var(--muted)', lineHeight: '1.75' }}
            >
              Keine gesponserten Listen. Nur Tools, die ich selbst einsetze oder
              meinen Kunden persönlich empfehle.
            </p>
            <p
              className="text-xs mt-4 px-3 py-2 rounded-lg inline-block"
              style={{
                background: 'var(--accent-dim)',
                color: 'var(--muted)',
                border: '1px solid rgba(46,125,122,0.15)',
              }}
            >
              ✦ Einige Links sind Affiliate-Links. Ich erhalte eine kleine Provision,
              wenn Sie kaufen — ohne Mehrkosten für Sie.
            </p>
          </div>
        </section>

        {/* Tools by category */}
        <section className="py-16 px-4 sm:px-6" style={{ background: 'var(--bg)' }}>
          <div className="max-w-5xl mx-auto flex flex-col gap-16">
            {CATEGORIES.map((cat) => {
              const catTools = TOOLS.filter((t) => t.category === cat)
              return (
                <div key={cat}>
                  <h2
                    className="text-xs font-mono font-semibold uppercase tracking-widest mb-6"
                    style={{ color: 'var(--muted)' }}
                  >
                    {cat}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {catTools.map((tool) => (
                      <div
                        key={tool.name}
                        className="card-hover rounded-xl p-6 border flex flex-col gap-4"
                        style={{ background: 'var(--card)' }}
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3
                              className="text-lg font-bold"
                              style={{ color: 'var(--fg)' }}
                            >
                              {tool.name}
                            </h3>
                            {tool.tag && (
                              <span
                                className="text-xs font-mono px-2 py-0.5 rounded-full mt-1 inline-block"
                                style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                              >
                                {tool.tag}
                              </span>
                            )}
                          </div>
                          {tool.affiliate && (
                            <span
                              className="text-xs font-mono px-2 py-1 rounded flex-shrink-0"
                              style={{ background: 'var(--bg-elevated)', color: 'var(--muted)' }}
                            >
                              Affiliate
                            </span>
                          )}
                        </div>

                        {/* Description */}
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: 'var(--muted)', lineHeight: '1.7' }}
                        >
                          {tool.desc}
                        </p>

                        {/* Why I use it */}
                        <div
                          className="rounded-lg px-4 py-3 text-sm"
                          style={{
                            background: 'var(--bg-elevated)',
                            borderLeft: '3px solid var(--accent)',
                            color: 'var(--muted)',
                            lineHeight: '1.6',
                          }}
                        >
                          <strong style={{ color: 'var(--fg)', fontWeight: 600 }}>
                            Warum ich es nutze:{' '}
                          </strong>
                          {tool.why}
                        </div>

                        {/* CTA */}
                        <a
                          href={tool.href}
                          target="_blank"
                          rel={tool.affiliate ? 'nofollow sponsored noopener noreferrer' : 'noopener noreferrer'}
                          className="mt-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-md border transition-colors duration-150 pricing-btn-ghost"
                          style={{
                            background: 'transparent',
                            color: 'var(--fg)',
                            borderColor: 'var(--border)',
                            borderRadius: '6px',
                          }}
                        >
                          {tool.cta}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Affiliate disclosure */}
        <section className="py-10 px-4 sm:px-6" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs" style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
              <strong style={{ color: 'var(--fg)' }}>Affiliate-Hinweis:</strong>{' '}
              Diese Seite enthält mit ✦ gekennzeichnete Affiliate-Links. Wenn Sie über
              diese Links kaufen, erhalten wir eine kleine Provision — ohne Mehrkosten
              für Sie und ohne Einfluss auf unsere Empfehlungen. Alle Tools wurden
              persönlich getestet und für sinnvoll befunden.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 text-center" style={{ background: 'var(--bg)' }}>
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
            >
              Nicht sicher, welches Tool zu Ihnen passt?
            </h2>
            <p className="mb-6" style={{ color: 'var(--muted)' }}>
              Ich berate Sie kostenlos — und empfehle nur, was wirklich zu Ihrer Situation passt.
            </p>
            <a
              href="/kontakt"
              className="btn-primary inline-flex items-center justify-center px-6 py-3 font-semibold text-sm"
              style={{ background: 'var(--accent)', color: '#fff', borderRadius: '6px' }}
            >
              Kostenlos anfragen →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
