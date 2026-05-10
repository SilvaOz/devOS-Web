import { EXPRESS_SERVICE, PAYPAL_LINKS } from '@/lib/constants'

export default function ExpressSection() {
  const { badge, h2, subtitle, price, priceNote, urgency, features, timeline, cta, ctaHref } =
    EXPRESS_SERVICE

  return (
    <section
      id="express"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ background: 'var(--bg-elevated)' }}
    >
      {/* Decorative background number */}
      <span
        aria-hidden="true"
        className="absolute -right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none"
        style={{
          fontFamily: 'var(--font-fraunces), Georgia, serif',
          fontSize: 'clamp(12rem, 25vw, 22rem)',
          fontWeight: 900,
          color: 'var(--border)',
          opacity: 0.45,
          letterSpacing: '-0.04em',
        }}
      >
        24h
      </span>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div data-animate>
            {/* Badge */}
            <span
              className="inline-block text-xs font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              ⚡ {badge}
            </span>

            <h2
              className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight"
              style={{ color: 'var(--fg)' }}
            >
              {h2}
            </h2>
            <p className="text-base mb-8 max-w-md" style={{ color: 'var(--muted)' }}>
              {subtitle}
            </p>

            {/* Features */}
            <ul className="flex flex-col gap-2.5 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--fg)' }}>
                  <span className="flex-shrink-0" style={{ color: 'var(--accent)' }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span
                className="text-3xl font-extrabold font-mono"
                style={{ color: 'var(--accent)' }}
              >
                {price}
              </span>
              <span className="text-sm" style={{ color: 'var(--muted)' }}>
                {priceNote}
              </span>
            </div>

            <a
              href={PAYPAL_LINKS['express-24h']}
              target="_blank"
              rel="noopener noreferrer"
              className="paypal-btn paypal-btn-primary"
            >
              {cta}
              <span className="paypal-badge">via PayPal</span>
            </a>
          </div>

          {/* Right — timeline card */}
          <div data-animate data-animate-delay="1">
            <div
              className="rounded-2xl p-6 sm:p-8 border"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              <p
                className="text-xs font-mono font-semibold uppercase tracking-widest mb-6"
                style={{ color: 'var(--muted)' }}
              >
                ABLAUF — TAG 1 & 2
              </p>

              <ol className="flex flex-col gap-0">
                {timeline.map((step, i) => (
                  <li key={step.label} className="flex gap-4">
                    {/* Connector */}
                    <div className="flex flex-col items-center">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1"
                        style={{ background: 'var(--accent)' }}
                      />
                      {i < timeline.length - 1 && (
                        <span
                          className="w-px flex-1 my-1.5"
                          style={{ background: 'var(--border)' }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-6">
                      <p
                        className="text-xs font-mono mb-0.5"
                        style={{ color: 'var(--accent)' }}
                      >
                        {step.time}
                      </p>
                      <p className="text-sm font-bold mb-0.5" style={{ color: 'var(--fg)' }}>
                        {step.label}
                      </p>
                      <p className="text-sm" style={{ color: 'var(--muted)' }}>
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Urgency badge */}
              <div
                className="rounded-lg px-4 py-3 flex items-center gap-2 mt-2"
                style={{
                  background: 'var(--accent-dim)',
                  border: '1px solid rgba(194,65,12,0.2)',
                }}
              >
                <span className="text-sm" style={{ color: 'var(--accent)' }}>⚡</span>
                <p className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>
                  {urgency}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
