import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { SUPPORT_PLANS } from '@/lib/constants'

type Props = {
  searchParams: Promise<{ type?: string; plan?: string }>
}

export default async function SuccessPage({ searchParams }: Props) {
  const { type, plan: planId } = await searchParams
  const isSupport = type === 'support'
  const plan = isSupport ? SUPPORT_PLANS.find((p) => p.id === planId) : null

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen flex items-center justify-center px-4"
        style={{ background: 'var(--bg)' }}
      >
        <div className="text-center max-w-md">
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: 'var(--accent-dim)', border: '2px solid rgba(194,65,12,0.2)' }}
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

          {isSupport ? (
            <>
              <h1
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{ color: 'var(--fg)' }}
              >
                Zahlung erfolgreich!
              </h1>
              <p className="text-base mb-2" style={{ color: 'var(--muted)' }}>
                {plan
                  ? plan.billingType === 'subscription'
                    ? `Ihr Abonnement „${plan.name}" ist aktiv — ${plan.totalPrice} €/Monat, jederzeit kündbar.`
                    : `Ihre ${plan.name} (${plan.duration}) ist bestätigt.`
                  : 'Ihr Pflege-Paket ist bestätigt.'}
              </p>
              <p className="text-sm mb-2" style={{ color: 'var(--muted)' }}>
                Sie erhalten eine Bestätigung per E-Mail von Stripe.
              </p>
              <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>
                Ich melde mich innerhalb von 24h bei Ihnen, um alles einzurichten.
              </p>
            </>
          ) : (
            <>
              <h1
                className="text-2xl sm:text-3xl font-bold mb-4"
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
            </>
          )}

          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-sm transition-opacity duration-150 hover:opacity-90"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Zurück zur Startseite
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
