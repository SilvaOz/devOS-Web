import { FUER_WEN } from '@/lib/constants'

export default function FuerWenSection() {
  return (
    <section
      id="fuer-wen"
      className="py-20 sm:py-28"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent)' }}
          >
            FÜR WEN
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-3"
            style={{ color: 'var(--fg)' }}
          >
            Ich arbeite für Menschen, nicht für Konzerne
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'var(--muted)' }}>
            Egal ob Sie Therapeutin, Künstler oder Inhaber eines kleinen Unternehmens sind — ich bringe Sie professionell online.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FUER_WEN.map((card) => (
            <div
              key={card.title}
              className="rounded-xl p-6 border flex flex-col gap-4 card-hover"
              style={{ background: 'var(--card)' }}
            >
              {/* Icon */}
              <span className="text-3xl">{card.icon}</span>

              {/* Title + description */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-base font-bold"
                  style={{ color: 'var(--fg)' }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {card.description}
                </p>
              </div>

              {/* Examples */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                {card.examples.map((ex) => (
                  <span
                    key={ex}
                    className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{
                      background: 'var(--accent-dim)',
                      color: 'var(--accent)',
                    }}
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sub-note */}
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
