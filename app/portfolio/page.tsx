import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { PORTFOLIO_CASES } from '@/lib/constants'
import PortfolioGrid from '@/components/sections/PortfolioGrid'

export const metadata: Metadata = {
  title: 'Portfolio | DevOS — Projekte für Therapeuten & Coaches',
  description:
    'Echte Kundenprojekte und eigene Produkte von Oscar Silva — WordPress, Next.js Apps, KI-Automatisierungen im DACH-Raum.',
}

const clientCases = PORTFOLIO_CASES.filter((c) => c.kind === 'client')
const ownCases = PORTFOLIO_CASES.filter((c) => c.kind === 'own')

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>

        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: 'var(--muted)' }}>
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
            <p className="text-lg max-w-2xl" style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
              Echte Kunden, echte Probleme, echte Ergebnisse —
              und Produkte, die ich selbst gebaut habe.
            </p>
          </div>
        </section>

        {/* Bloque 1 — Kundenprojekte */}
        <section className="py-20 px-4 sm:px-6" style={{ background: 'var(--bg)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
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
            <PortfolioGrid cases={clientCases} />
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
              <p className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
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
            <PortfolioGrid cases={ownCases} />
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
