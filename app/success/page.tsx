import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function SuccessPage() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen flex items-center justify-center px-4"
        style={{ background: 'var(--bg)' }}
      >
        <div className="text-center max-w-md">
          <div
            className="text-5xl mb-6"
            role="img"
            aria-label="Erfolgreich"
          >
            ✅
          </div>
          <h1
            className="text-2xl sm:text-3xl font-extrabold mb-4"
            style={{ color: 'var(--fg)' }}
          >
            Nachricht erhalten!
          </h1>
          <p className="text-base mb-2" style={{ color: 'var(--muted)' }}>
            Ich melde mich innerhalb von 24–48 Stunden per E-Mail bei Ihnen.
          </p>
          <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>
            Bitte überprüfen Sie auch Ihren Spam-Ordner.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded transition-opacity duration-150 hover:opacity-90"
            style={{ background: 'var(--accent)', color: '#000' }}
          >
            Zurück zur Startseite
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
