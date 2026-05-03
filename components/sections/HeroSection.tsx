import Image from 'next/image'
import { HERO } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-elevated)' }}
    >
      {/* Calm floating blobs */}
      <div aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 md:py-44 w-full">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-center">

          {/* Left — editorial text */}
          <div>
            <p
              className="text-xs font-mono tracking-widest uppercase mb-10"
              style={{ color: 'var(--muted)' }}
            >
              {HERO.badge}
            </p>

            <h1
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--fg)',
                marginBottom: '2rem',
              }}
            >
              {HERO.h1Line1}
              <br />
              <span className="text-gradient-warm">{HERO.h1Line2}</span>
            </h1>

            <div
              className="w-10 mb-8"
              aria-hidden="true"
              style={{ height: '2px', background: 'var(--accent)', opacity: 0.6 }}
            />

            <p
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: 'var(--muted)', lineHeight: '1.75' }}
            >
              {HERO.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#kontakt"
                className="btn-primary inline-flex items-center justify-center px-7 py-3.5 font-semibold text-sm"
                style={{
                  background: 'var(--accent)',
                  color: '#fff',
                  borderRadius: '6px',
                }}
              >
                {HERO.ctaPrimary}
              </a>
              <a
                href="/leistungen"
                className="inline-flex items-center gap-1.5 px-2 py-3.5 font-semibold text-sm transition-opacity duration-200 hover:opacity-60"
                style={{ color: 'var(--fg)' }}
              >
                {HERO.ctaGhost} <span aria-hidden="true">→</span>
              </a>
            </div>

            <div
              className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono"
              style={{ color: 'var(--muted)' }}
            >
              {HERO.micros.map((m, i) => (
                <span key={m} className="inline-flex items-center gap-x-6">
                  {i > 0 && (
                    <span style={{ color: 'var(--border)' }} aria-hidden="true">·</span>
                  )}
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Right — personal card (desktop only) */}
          <div className="hidden lg:flex justify-center">
            <div
              className="relative rounded-2xl overflow-hidden w-72"
              style={{
                border: '1px solid var(--border)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04), 0 24px 64px rgba(0,0,0,0.09)',
                background: 'var(--card)',
              }}
            >
              {/* Photo */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/oscar.png"
                  alt="Oscar Silva — DevOS Web"
                  fill
                  className="object-cover object-top"
                  sizes="288px"
                  priority
                />
                {/* Subtle bottom gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent 55%, rgba(28,25,23,0.45) 100%)',
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-4">
                <div>
                  <p
                    className="font-bold text-lg leading-tight"
                    style={{ color: 'var(--fg)' }}
                  >
                    Oscar Silva
                  </p>
                  <p
                    className="text-sm font-mono mt-0.5"
                    style={{ color: 'var(--accent)' }}
                  >
                    Webentwickler · KI-Spezialist
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
                    Leipzig, Deutschland
                  </p>
                </div>

                <div
                  className="border-t pt-4 flex flex-col gap-2"
                  style={{ borderColor: 'var(--border)' }}
                >
                  {[
                    'Persönliche Betreuung',
                    'Antwort in 24–48h',
                    'DACH-Raum & international',
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <span style={{ color: 'var(--accent)', fontSize: '0.7rem' }}>✓</span>
                      <span className="text-xs" style={{ color: 'var(--muted)' }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
