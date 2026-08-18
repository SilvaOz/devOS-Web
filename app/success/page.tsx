import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { SUPPORT_PLANS } from '@/lib/constants'

type Props = {
  searchParams: Promise<{ type?: string; plan?: string }>
}

function CheckIcon() {
  return (
    <div
      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
      style={{ background: 'var(--accent-dim)', border: '2px solid rgba(46,125,122,0.2)' }}
      role="img"
      aria-label="Erfolgreich"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 13l4 4L19 7"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default async function SuccessPage({ searchParams }: Props) {
  const { type, plan: planId } = await searchParams
  const supportPlan = type === 'support' ? SUPPORT_PLANS.find((p) => p.id === planId) : null

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen flex items-center justify-center px-4"
        style={{ background: 'var(--bg)' }}
      >
        <div className="text-center max-w-md">
          <CheckIcon />

          {type === 'express' && (
            <>
              <h1 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--fg)' }}>
                Vielen Dank!
              </h1>
              <p className="text-base mb-2" style={{ color: 'var(--muted)' }}>
                Ihre Rechnung wurde erstellt und wird Ihnen per E-Mail zugesendet.
              </p>
              <p className="text-sm mb-2" style={{ color: 'var(--muted)' }}>
                Bitte überweisen Sie den Rechnungsbetrag gemäß den Zahlungsinformationen auf der Rechnung.
              </p>
              <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>
                Bei Fragen: <a href="mailto:info@devos-web.de" style={{ color: 'var(--accent)' }}>info@devos-web.de</a>
              </p>
            </>
          )}

          {type === 'support' && (
            <>
              <h1 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--fg)' }}>
                Vielen Dank!
              </h1>
              <p className="text-base mb-2" style={{ color: 'var(--muted)' }}>
                {supportPlan
                  ? `Ihre Anfrage für „${supportPlan.name}" (${supportPlan.duration}) wurde erhalten.`
                  : 'Ihre Anfrage wurde erhalten.'}
              </p>
              <p className="text-sm mb-2" style={{ color: 'var(--muted)' }}>
                Ihre Rechnung wurde erstellt und wird Ihnen per E-Mail zugesendet. Bitte überweisen Sie den Rechnungsbetrag gemäß den Zahlungsinformationen auf der Rechnung.
              </p>
              <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>
                Bei Fragen: <a href="mailto:info@devos-web.de" style={{ color: 'var(--accent)' }}>info@devos-web.de</a>
              </p>
            </>
          )}

          {(type === 'contact' || !type) && (
            <>
              <h1 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--fg)' }}>
                Nachricht erhalten!
              </h1>
              <p className="text-base mb-2" style={{ color: 'var(--muted)' }}>
                Ich melde mich innerhalb von 24–48 Stunden per E-Mail bei Ihnen.
              </p>
              <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>
                Bitte überprüfen Sie auch Ihren Spam-Ordner.
              </p>
            </>
          )}

          <a
            href="/leistungen"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-sm transition-opacity duration-150 hover:opacity-90"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Zurück zu den Leistungen
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
