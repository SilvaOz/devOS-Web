import { SERVICES } from '@/lib/constants'
import { Icon } from '@/components/ui/Icon'
import type { IconName } from '@/components/ui/Icon'

export default function ServicesSection() {
  const [featured, ...rest] = SERVICES

  return (
    <section
      id="leistungen"
      className="py-20 sm:py-28"
      style={{ background: 'var(--bg-light)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent)' }}
          >
            LEISTUNGEN
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold"
            style={{ color: 'var(--fg-light)' }}
          >
            Was ich mache
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Featured card — spans 2 cols */}
          <div
            className="md:col-span-2 rounded-xl p-6 sm:p-8 border flex flex-col gap-5 card-hover-wp"
            style={{ background: 'var(--card-light)', borderColor: 'var(--border-light)' }}
          >
            <div className="flex items-start gap-4">
              <span
                className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0"
                style={{ background: 'rgba(33,117,155,0.15)' }}
              >
                <Icon name={featured.icon as IconName} size={20} style={{ color: 'var(--accent-wp)' }} />
              </span>
              <div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: 'var(--fg-light)' }}
                >
                  {featured.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--muted-light)' }}>
                  {featured.description}
                </p>
              </div>
            </div>

            {featured.features.length > 0 && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {featured.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: 'var(--fg-light)' }}
                  >
                    <span style={{ color: 'var(--accent-wp)' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            )}

            {featured.cta && (
              <a
                href="#preise"
                className="mt-auto self-start text-sm font-semibold transition-opacity duration-150 hover:opacity-75"
                style={{ color: 'var(--accent-wp)' }}
              >
                {featured.cta}
              </a>
            )}
          </div>

          {/* Rest of cards */}
          {rest.map((card) => (
            <div
              key={card.title}
              className="rounded-xl p-6 border flex flex-col gap-3 card-hover"
              style={{ background: 'var(--card-light)', borderColor: 'var(--border-light)' }}
            >
              <span
                className="w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0"
                style={{ background: 'var(--accent-dim)' }}
              >
                <Icon name={card.icon as IconName} size={18} style={{ color: 'var(--accent)' }} />
              </span>
              <h3
                className="text-base font-bold"
                style={{ color: 'var(--fg-light)' }}
              >
                {card.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--muted-light)' }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Link to full leistungen page */}
        <div className="mt-10 text-center">
          <a
            href="/leistungen"
            className="inline-flex items-center gap-2 text-sm font-semibold link-hover-accent"
          >
            Alle Leistungen ansehen →
          </a>
        </div>
      </div>
    </section>
  )
}
