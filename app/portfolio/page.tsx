import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { PORTFOLIO_CASES } from '@/lib/constants'
import type { PortfolioCase } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Portfolio | DevOS — Projekte für Therapeuten & Coaches',
  description:
    'Echte Kundenprojekte und eigene Produkte von Oscar Silva — WordPress, Next.js Apps, KI-Automatisierungen im DACH-Raum.',
  openGraph: {
    title: 'Portfolio | DevOS Web',
    description:
      'WordPress-Projekte, Apps und KI-Pipelines — gebaut für Therapeuten, Coaches und Kreative.',
  },
}

const clientCases = PORTFOLIO_CASES.filter((c) => c.kind === 'client')
const ownCases = PORTFOLIO_CASES.filter((c) => c.kind === 'own')

// ─── Card Kundenprojekt ───────────────────────────────────────────────────────

function ClientCard({ p }: { p: PortfolioCase }) {
  return (
    <article
      className="rounded-xl overflow-hidden"
      style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
    >
      {/* Gradient header (placeholder until screenshots arrive) */}
      <div
        className={`relative h-36 bg-gradient-to-br ${p.gradient} flex items-end px-6 pb-5`}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.55) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex items-center gap-3 flex-wrap">
          <span
            className="text-xs font-mono px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
          >
            {p.sector}
          </span>
          <span
            className="text-xs font-mono px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.75)' }}
          >
            {p.location}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-5">
        <div>
          <h3
            className="text-xl font-bold mb-1"
            style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
          >
            {p.title}
          </h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            {p.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-1.5"
              style={{ color: 'var(--accent)' }}
            >
              Problem
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              {p.problem}
            </p>
          </div>
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-1.5"
              style={{ color: 'var(--accent)' }}
            >
              Lösung
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              {p.solution}
            </p>
          </div>
          <div
            className="rounded-lg p-4"
            style={{ background: 'var(--accent-dim)', border: '1px solid rgba(46,125,122,0.15)' }}
          >
            <p
              className="text-xs font-mono uppercase tracking-widest mb-1"
              style={{ color: 'var(--accent)' }}
            >
              Ergebnis
            </p>
            <p className="text-sm font-semibold leading-relaxed" style={{ color: 'var(--fg)' }}>
              {p.result}
            </p>
          </div>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {p.stack.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-0.5 rounded border"
              style={{
                background: 'var(--bg)',
                color: 'var(--muted)',
                borderColor: 'var(--border)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

// ─── Card Eigenprodukt ────────────────────────────────────────────────────────

function OwnCard({ p }: { p: PortfolioCase }) {
  return (
    <article
      className="rounded-xl overflow-hidden"
      style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
    >
      {/* Gradient header */}
      <div
        className={`relative h-36 bg-gradient-to-br ${p.gradient} flex items-end px-6 pb-5`}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.55) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex items-center gap-3 flex-wrap">
          <span
            className="text-xs font-mono px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
          >
            {p.sector}
          </span>
          {p.badge && p.liveUrl && (
            <span
              className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              {p.badge}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-5">
        <div>
          <h3
            className="text-xl font-bold mb-1"
            style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
          >
            {p.title}
          </h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            {p.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-1.5"
              style={{ color: 'var(--accent)' }}
            >
              Herausforderung
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              {p.problem}
            </p>
          </div>
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-1.5"
              style={{ color: 'var(--accent)' }}
            >
              Was ich gebaut habe
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              {p.solution}
            </p>
          </div>
          <div
            className="rounded-lg p-4"
            style={{ background: 'var(--accent-dim)', border: '1px solid rgba(46,125,122,0.15)' }}
          >
            <p
              className="text-xs font-mono uppercase tracking-widest mb-1"
              style={{ color: 'var(--accent)' }}
            >
              Ergebnis
            </p>
            <p className="text-sm font-semibold leading-relaxed" style={{ color: 'var(--fg)' }}>
              {p.result}
            </p>
          </div>
        </div>

        {/* Stack + Link */}
        <div className="flex items-end justify-between gap-4 flex-wrap pt-1">
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-0.5 rounded border"
                style={{
                  background: 'var(--bg)',
                  color: 'var(--muted)',
                  borderColor: 'var(--border)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-70"
              style={{ color: 'var(--accent)' }}
            >
              {p.badge ?? 'Ansehen →'}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>

        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-4xl mx-auto">
            <p
              className="text-xs font-mono tracking-widest uppercase mb-4"
              style={{ color: 'var(--muted)' }}
            >
              Portfolio · DevOS Web
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
              Projekte & Referenzen
            </h1>
            <p
              className="text-lg max-w-2xl"
              style={{ color: 'var(--muted)', lineHeight: '1.7' }}
            >
              Echte Kunden, echte Probleme, echte Ergebnisse —
              und Produkte, die ich selbst gebaut habe.
            </p>
          </div>
        </section>

        {/* Bloque 1 — Kundenprojekte */}
        <section className="py-20 px-4 sm:px-6" style={{ background: 'var(--bg)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p
                className="text-xs font-mono tracking-widest uppercase mb-2"
                style={{ color: 'var(--accent)' }}
              >
                01
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
              >
                Kundenprojekte
              </h2>
              <p className="text-base" style={{ color: 'var(--muted)' }}>
                Therapeuten, Coaches und Heilpraktiker, die ich digital aufgestellt habe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientCases.map((p) => (
                <ClientCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div
          className="max-w-5xl mx-auto px-4 sm:px-6"
          style={{ height: '1px', background: 'var(--border)' }}
          aria-hidden="true"
        />

        {/* Bloque 2 — Eigene Produkte */}
        <section className="py-20 px-4 sm:px-6" style={{ background: 'var(--bg)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p
                className="text-xs font-mono tracking-widest uppercase mb-2"
                style={{ color: 'var(--accent)' }}
              >
                02
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
              >
                Eigene Produkte
              </h2>
              <p className="text-base" style={{ color: 'var(--muted)' }}>
                Was ich baue, wenn ich für mich selbst arbeite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ownCases.map((p) => (
                <OwnCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 text-center border-t"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
            >
              Du willst ähnliche Ergebnisse?
            </h2>
            <p className="text-base mb-8" style={{ color: 'var(--muted)' }}>
              Ich antworte innerhalb von 24–48 Stunden.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/anfragen"
                className="btn-primary inline-flex items-center justify-center px-7 py-3 text-sm font-semibold rounded-lg"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                Projekt anfragen →
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold rounded-lg border transition-opacity hover:opacity-70"
                style={{ color: 'var(--fg)', borderColor: 'var(--border)', background: 'var(--card)' }}
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
