import { ABOUT } from '@/lib/constants'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <div>
              <p
                className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--accent)' }}
              >
                {ABOUT.label}
              </p>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-4"
                style={{ color: 'var(--fg)' }}
              >
                {ABOUT.h2}
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--muted)' }}
              >
                {ABOUT.paragraph}
              </p>
            </div>

            <a
              href="#kontakt"
              className="self-start inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded transition-opacity duration-150 hover:opacity-90"
              style={{ background: 'var(--accent)', color: '#000' }}
            >
              {ABOUT.cta}
            </a>
          </div>

          {/* Right column — points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOUT.points.map((point) => (
              <div
                key={point.title}
                className="rounded-xl p-5 border flex flex-col gap-2"
                style={{
                  background: 'var(--card)',
                  borderColor: 'var(--border)',
                }}
              >
                <span className="text-2xl">{point.icon}</span>
                <h3
                  className="text-sm font-bold"
                  style={{ color: 'var(--fg)' }}
                >
                  {point.title}
                </h3>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
