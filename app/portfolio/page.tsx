import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PortfolioSection from '@/components/sections/PortfolioSection'

export const metadata = {
  title: 'Portfolio — DevOS Web',
  description: 'Echte Projekte: WordPress, WooCommerce, React Web Apps und mehr.',
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>
        {/* Hero */}
        <section
          className="pt-32 pb-10"
          style={{ background: 'var(--bg-elevated)' }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--accent)' }}
            >
              PORTFOLIO
            </p>
            <h1
              className="text-4xl sm:text-5xl font-extrabold mb-4"
              style={{ color: 'var(--fg)' }}
            >
              Echte Projekte
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: 'var(--muted)' }}>
              Ergebnisse, die sprechen. Jedes Projekt wurde von Anfang bis Ende umgesetzt.
            </p>
          </div>
        </section>

        {/* All portfolio cases */}
        <PortfolioSection />

        {/* CTA */}
        <section
          className="py-20 text-center border-t"
          style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4" style={{ color: 'var(--fg)' }}>
              Ihr Projekt als Nächstes?
            </h2>
            <p className="text-base mb-8" style={{ color: 'var(--muted)' }}>
              Schreiben Sie mir — ich antworte innerhalb von 24–48 Stunden.
            </p>
            <a
              href="/#kontakt"
              className="inline-flex items-center justify-center px-8 py-3 font-semibold rounded text-sm transition-opacity duration-150 hover:opacity-90"
              style={{ background: 'var(--accent)', color: '#000' }}
            >
              Projekt anfragen →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
