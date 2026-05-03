import { FUER_WEN } from '@/lib/constants'

export default function FuerWenSection() {
  return (
    <section
      id="fuer-wen"
      className="py-20 sm:py-28"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header — editorial split */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16" data-animate>
          <div>
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--muted)' }}
            >
              FÜR WEN
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight"
              style={{ color: 'var(--fg)' }}
            >
              Für Menschen,<br />
              nicht für<br />
              <span style={{ color: 'var(--accent)' }}>Konzerne.</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base leading-relaxed max-w-md" style={{ color: 'var(--muted)' }}>
              Egal ob Sie Therapeutin, Künstler oder Inhaber eines kleinen Unternehmens sind —
              ich bringe Sie professionell online. Persönlich, klar und ohne Fachjargon.
            </p>
          </div>
        </div>

        {/* Cards — numbered editorial */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-animate data-animate-delay="1">
          {FUER_WEN.map((card, index) => (
            <div
              key={card.title}
              className="rounded-xl p-6 border flex flex-col gap-4 card-hover"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              {/* Editorial number instead of icon */}
              <span
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-fraunces), Georgia, serif',
                  fontSize: '2.75rem',
                  fontWeight: 900,
                  lineHeight: 1,
                  color: 'var(--border)',
                  userSelect: 'none',
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-base font-bold" style={{ color: 'var(--fg)' }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {card.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                {card.examples.map((ex) => (
                  <span
                    key={ex}
                    className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-center" style={{ color: 'var(--muted)' }}>
          Sie sind sich nicht sicher, ob ich der Richtige bin?{' '}
          <a href="/#kontakt" className="link-hover-accent font-semibold">
            Schreiben Sie mir — kostenlos und unverbindlich.
          </a>
        </p>
      </div>
    </section>
  )
}
