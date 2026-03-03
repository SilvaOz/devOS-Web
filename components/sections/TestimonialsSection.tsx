import { TESTIMONIALS } from '@/lib/constants'

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 von 5 Sternen">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7 1l1.545 3.13 3.455.502-2.5 2.436.59 3.44L7 8.885l-3.09 1.623.59-3.44L2 4.632l3.455-.502L7 1z"
            fill="var(--accent)"
          />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section
      id="stimmen"
      className="py-20 sm:py-28"
      style={{ background: 'var(--bg-light-alt)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent)' }}
          >
            KUNDENSTIMMEN
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-3"
            style={{ color: 'var(--fg-light)' }}
          >
            Was meine Kunden sagen
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'var(--muted-light)' }}>
            Echte Ergebnisse für Therapeuten, Kreative und kleine Unternehmen.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="rounded-xl p-6 border flex flex-col gap-5 card-hover"
              style={{
                background: 'var(--bg-light)',
                borderColor: 'var(--border-light)',
              }}
            >
              {/* Stars */}
              <Stars />

              {/* Quote */}
              <p
                className="text-sm leading-relaxed flex-1 italic"
                style={{ color: 'var(--fg-light)' }}
              >
                "{t.quote}"
              </p>

              {/* Divider */}
              <div
                className="h-px"
                style={{ background: 'var(--border-light)' }}
                aria-hidden="true"
              />

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar circle */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                  style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                  aria-hidden="true"
                >
                  {t.initial}
                </div>

                <div className="flex flex-col gap-0.5">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: 'var(--fg-light)' }}
                  >
                    {t.author}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--muted-light)' }}>
                    {t.role} · {t.location}
                  </span>
                </div>
              </div>

              {/* Result metric */}
              <div
                className="rounded-lg px-3 py-2 text-xs font-mono font-semibold"
                style={{
                  background: 'var(--accent-dim)',
                  color: 'var(--accent)',
                  borderLeft: '2px solid var(--accent)',
                }}
              >
                ✓ {t.metric}
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="mt-10 text-xs text-center" style={{ color: 'var(--muted-light)' }}>
          Namen abgekürzt zum Schutz der Privatsphäre.{' '}
          <a href="/#kontakt" className="link-hover-accent font-semibold">
            Fragen Sie mich nach Referenzen →
          </a>
        </p>
      </div>
    </section>
  )
}
