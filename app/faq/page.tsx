import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FAQSection from '@/components/sections/FAQSection'

export const metadata = {
  title: 'FAQ — DevOS Web',
  description: 'Häufige Fragen zu Ablauf, Preisen, Technik und Support. Alles klar und transparent.',
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>
        {/* Header */}
        <section
          className="pt-32 pb-10"
          style={{ background: 'var(--bg-elevated)' }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--accent)' }}
            >
              FAQ
            </p>
            <h1
              className="text-4xl sm:text-5xl font-extrabold mb-4"
              style={{ color: 'var(--fg)' }}
            >
              Häufige Fragen
            </h1>
            <p className="text-lg" style={{ color: 'var(--muted)' }}>
              Alles, was Sie wissen müssen — klar und ohne Umwege.
            </p>
          </div>
        </section>

        {/* FAQ accordion — reuses existing component */}
        <FAQSection />

        {/* CTA */}
        <section
          className="py-20 text-center border-t"
          style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4" style={{ color: 'var(--fg)' }}>
              Noch eine Frage?
            </h2>
            <p className="text-base mb-8" style={{ color: 'var(--muted)' }}>
              Schreiben Sie mir direkt — ich antworte innerhalb von 24–48 Stunden.
            </p>
            <a
              href="/#kontakt"
              className="inline-flex items-center justify-center px-8 py-3 font-semibold rounded text-sm transition-opacity duration-150 hover:opacity-90"
              style={{ background: 'var(--accent)', color: '#000' }}
            >
              Nachricht schicken →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
