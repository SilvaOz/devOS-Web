import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { LEISTUNGEN_PAGE } from '@/lib/constants'

export const metadata = {
  title: 'Leistungen — DevOS Web',
  description: 'WordPress, Full-Stack, E-Commerce und Automatisierungen. Professionelle Webentwicklung in Leipzig.',
}

export default function LeistungenPage() {
  const p = LEISTUNGEN_PAGE

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>
        {/* Hero */}
        <section
          className="pt-32 pb-20 sm:pb-28"
          style={{ background: 'var(--bg-elevated)' }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--accent)' }}
            >
              {p.hero.label}
            </p>
            <h1
              className="text-4xl sm:text-5xl font-extrabold mb-4"
              style={{ color: 'var(--fg)' }}
            >
              {p.hero.h1}
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: 'var(--muted)' }}>
              {p.hero.subtitle}
            </p>
          </div>
        </section>

        {/* WordPress */}
        <section className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--accent-wp)' }}
            >
              {p.wordpress.label}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: 'var(--fg)' }}
            >
              {p.wordpress.h2}
            </h2>
            <p className="text-base mb-10 max-w-2xl" style={{ color: 'var(--muted)' }}>
              {p.wordpress.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {p.wordpress.plans.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-xl p-6 border flex flex-col gap-4"
                  style={{
                    background: 'var(--card)',
                    borderColor: 'featured' in plan && plan.featured ? 'var(--accent-wp)' : 'var(--border)',
                  }}
                >
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--fg)' }}>
                      {plan.name}
                    </h3>
                    <p className="text-xl font-extrabold font-mono" style={{ color: 'var(--accent)' }}>
                      {plan.price}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--fg)' }}>
                        <span style={{ color: 'var(--accent-wp)' }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#kontakt"
                    className="mt-auto inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded border transition-colors duration-150 pricing-btn-ghost"
                    style={{ background: 'transparent', color: 'var(--fg)', borderColor: 'var(--border)' }}
                  >
                    Anfragen
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full-Stack */}
        <section className="py-20 sm:py-28" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--accent)' }}
            >
              {p.fullstack.label}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: 'var(--fg)' }}
            >
              {p.fullstack.h2}
            </h2>
            <p className="text-base mb-10 max-w-2xl" style={{ color: 'var(--muted)' }}>
              {p.fullstack.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {p.fullstack.features.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-6 border card-hover flex flex-col gap-3"
                  style={{ background: 'var(--card)' }}
                >
                  <span
                    className="text-xl w-10 h-10 flex items-center justify-center rounded-lg"
                    style={{ background: 'var(--accent-dim)' }}
                  >
                    {item.icon}
                  </span>
                  <h3 className="text-base font-bold" style={{ color: 'var(--fg)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* E-Commerce */}
        <section className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--accent-wp)' }}
            >
              {p.ecommerce.label}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: 'var(--fg)' }}
            >
              {p.ecommerce.h2}
            </h2>
            <p className="text-base mb-8 max-w-2xl" style={{ color: 'var(--muted)' }}>
              {p.ecommerce.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {p.ecommerce.features.map((f) => (
                <span
                  key={f}
                  className="text-sm font-mono px-3 py-1.5 rounded border"
                  style={{
                    background: 'var(--card)',
                    color: 'var(--fg)',
                    borderColor: 'var(--border)',
                  }}
                >
                  ✓ {f}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Automatisierungen */}
        <section className="py-20 sm:py-28" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--accent)' }}
            >
              {p.automatisierungen.label}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: 'var(--fg)' }}
            >
              {p.automatisierungen.h2}
            </h2>
            <p className="text-base mb-10 max-w-2xl" style={{ color: 'var(--muted)' }}>
              {p.automatisierungen.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {p.automatisierungen.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-6 border card-hover flex gap-4"
                  style={{ background: 'var(--card)' }}
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-base font-bold mb-1" style={{ color: 'var(--fg)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance & SEO */}
        <section className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--accent)' }}
            >
              {p.performance.label}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: 'var(--fg)' }}
            >
              {p.performance.h2}
            </h2>
            <p className="text-base mb-8 max-w-2xl" style={{ color: 'var(--muted)' }}>
              {p.performance.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {p.performance.metrics.map((m) => (
                <div
                  key={m}
                  className="px-4 py-3 rounded-lg border text-sm font-mono font-semibold"
                  style={{
                    background: 'var(--accent-dim)',
                    borderColor: 'rgba(255,215,0,0.25)',
                    color: 'var(--accent)',
                  }}
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support & Wartung */}
        <section className="py-20 sm:py-28" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--accent)' }}
            >
              {p.support.label}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-2"
              style={{ color: 'var(--fg)' }}
            >
              {p.support.h2}
            </h2>
            <p
              className="text-2xl font-extrabold font-mono mb-4"
              style={{ color: 'var(--accent)' }}
            >
              {p.support.price}
            </p>
            <p className="text-base mb-8 max-w-2xl" style={{ color: 'var(--muted)' }}>
              {p.support.description}
            </p>
            <ul className="flex flex-col gap-2 max-w-sm">
              {p.support.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--fg)' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 sm:py-28 text-center"
          style={{ background: 'var(--bg)' }}
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: 'var(--fg)' }}>
              {p.cta.h2}
            </h2>
            <p className="text-base mb-8" style={{ color: 'var(--muted)' }}>
              {p.cta.text}
            </p>
            <a
              href="/#kontakt"
              className="inline-flex items-center justify-center px-8 py-3 font-semibold rounded text-sm transition-opacity duration-150 hover:opacity-90"
              style={{ background: 'var(--accent)', color: '#000' }}
            >
              {p.cta.button}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
