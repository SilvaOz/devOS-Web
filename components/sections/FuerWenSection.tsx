import { FUER_WEN } from '@/lib/constants'
import { Icon } from '@/components/ui/Icon'
import type { IconName } from '@/components/ui/Icon'

export default function FuerWenSection() {
  return (
    <section
      id="fuer-wen"
      className="py-20 sm:py-28"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12" data-animate>
          <p
            className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--muted)' }}
          >
            FÜR WEN
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-3"
            style={{ color: 'var(--fg)' }}
          >
            Ich arbeite für Menschen, nicht für Konzerne
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'var(--muted)' }}>
            Egal ob Sie Therapeutin, Künstler oder Inhaber eines kleinen Unternehmens sind — ich bringe Sie professionell online.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-animate data-animate-delay="1">
          {FUER_WEN.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl p-6 border flex flex-col gap-4 card-hover"
              style={{
                background: 'var(--bg)',
                borderColor: 'var(--border)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
              }}
            >
              <span
                className="w-11 h-11 flex items-center justify-center rounded-xl"
                style={{ background: 'rgba(0,0,0,0.05)' }}
              >
                <Icon name={card.icon as IconName} size={22} style={{ color: 'var(--fg)' }} />
              </span>

              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold" style={{ color: 'var(--fg)' }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {card.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                {card.examples.map((ex) => (
                  <span
                    key={ex}
                    className="text-xs font-mono px-2 py-0.5 rounded-lg"
                    style={{ background: 'rgba(0,0,0,0.06)', color: 'var(--muted)' }}
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
