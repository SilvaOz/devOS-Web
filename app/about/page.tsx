import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ABOUT_PAGE } from '@/lib/constants'

export const metadata = {
  title: 'About — DevOS Web',
  description: 'Oscar — Webentwickler aus Leipzig. WordPress und Full-Stack-Entwicklung für Unternehmen.',
}

export default function AboutPage() {
  const p = ABOUT_PAGE

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>
        {/* Hero with photo placeholder */}
        <section
          className="pt-32 pb-20 sm:pb-28"
          style={{ background: 'var(--bg-elevated)' }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Photo placeholder — Ersetze mit <Image src="..." /> */}
              <div className="flex-shrink-0">
                <div
                  className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, var(--bg-elevated) 0%, #1e1e2e 50%, var(--card) 100%)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {/* Silhouette SVG placeholder */}
                  <svg
                    viewBox="0 0 100 120"
                    width="120"
                    height="140"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="50" cy="35" r="22" fill="var(--border)" />
                    <path
                      d="M10 110c0-22 18-40 40-40s40 18 40 40"
                      fill="var(--border)"
                    />
                  </svg>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-4">
                <div>
                  <p
                    className="text-xs font-mono font-semibold uppercase tracking-widest mb-2"
                    style={{ color: 'var(--accent)' }}
                  >
                    ABOUT
                  </p>
                  <h1
                    className="text-4xl sm:text-5xl font-extrabold mb-1"
                    style={{ color: 'var(--fg)' }}
                  >
                    {p.hero.name}
                  </h1>
                  <p
                    className="text-lg font-mono"
                    style={{ color: 'var(--muted)' }}
                  >
                    {p.hero.tagline}
                  </p>
                </div>
                <p
                  className="text-base leading-relaxed max-w-xl"
                  style={{ color: 'var(--muted)' }}
                >
                  {p.hero.paragraph}
                </p>
                <div className="flex gap-6 text-sm font-mono" style={{ color: 'var(--muted)' }}>
                  <span>● {p.languages}</span>
                </div>
                <div className="flex gap-6 text-sm font-mono" style={{ color: 'var(--muted)' }}>
                  <span>● {p.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-6"
              style={{ color: 'var(--accent)' }}
            >
              {p.stack.label}
            </p>
            <div className="flex flex-wrap gap-3">
              {p.stack.items.map((tech) => (
                <span
                  key={tech}
                  className="text-sm font-mono px-4 py-2 rounded-lg border"
                  style={{
                    background: 'var(--card)',
                    color: 'var(--fg)',
                    borderColor: 'var(--border)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 sm:py-28" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--accent)' }}
            >
              {p.values.label}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-10"
              style={{ color: 'var(--fg)' }}
            >
              Wie ich arbeite
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {p.values.items.map((item) => (
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
