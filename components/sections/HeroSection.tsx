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
                <>
                  {i > 0 && (
                    <span key={`dot-${i}`} style={{ color: 'var(--border)' }} aria-hidden="true">·</span>
                  )}
                  <span key={m}>{m}</span>
                </>
              ))}
            </div>
          </div>

          {/* Right — browser mockup (desktop only) */}
          <div className="hidden lg:block">
            <div
              className="rounded-xl overflow-hidden"
              style={{
                border: '1px solid var(--border)',
                boxShadow:
                  '0 4px 12px rgba(0,0,0,0.04), 0 20px 56px rgba(0,0,0,0.08)',
              }}
            >
              {/* Browser title bar */}
              <div
                className="flex items-center gap-2 px-4 py-2.5"
                style={{
                  background: 'var(--bg-elevated)',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
                <div className="flex-1 mx-3">
                  <div
                    className="rounded px-3 py-1 text-xs font-mono text-center"
                    style={{
                      background: 'var(--card)',
                      color: 'var(--muted)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    kunde.devos-web.de
                  </div>
                </div>
              </div>

              {/* Website wireframe */}
              <div
                aria-hidden="true"
                style={{
                  aspectRatio: '4/3',
                  background: 'var(--bg)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {/* Nav row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ height: '10px', width: '56px', borderRadius: '4px', background: 'var(--border)' }} />
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {[36, 44, 36, 56].map((w, i) => (
                      <div key={i} style={{ height: '7px', width: `${w}px`, borderRadius: '3px', background: 'var(--border)', opacity: 0.7 }} />
                    ))}
                  </div>
                </div>
                {/* Hero text block */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginTop: '6px' }}>
                  <div style={{ height: '16px', width: '72%', borderRadius: '4px', background: 'var(--bg-elevated)' }} />
                  <div style={{ height: '16px', width: '52%', borderRadius: '4px', background: 'var(--bg-elevated)' }} />
                  <div style={{ height: '10px', width: '80%', borderRadius: '3px', background: 'var(--border)', opacity: 0.5, marginTop: '2px' }} />
                  <div style={{ height: '10px', width: '60%', borderRadius: '3px', background: 'var(--border)', opacity: 0.5 }} />
                  <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                    <div style={{ height: '26px', width: '88px', borderRadius: '6px', background: 'rgba(46,125,122,0.12)', border: '1px solid rgba(46,125,122,0.20)' }} />
                    <div style={{ height: '26px', width: '64px', borderRadius: '6px', background: 'var(--border)', opacity: 0.45 }} />
                  </div>
                </div>
                {/* Image placeholder */}
                <div style={{
                  flex: 1,
                  borderRadius: '8px',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <p style={{
                    fontSize: '0.6rem',
                    fontFamily: 'var(--font-jetbrains), monospace',
                    color: 'var(--border)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}>
                    Kunden-Projekt
                  </p>
                </div>
                {/* Bottom cards row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px' }}>
                  {[1, 2, 3].map((i) => (
                    <div key={i} style={{ height: '28px', borderRadius: '6px', background: 'var(--bg-elevated)' }} />
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
