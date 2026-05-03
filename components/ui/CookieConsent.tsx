'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export type ConsentStatus = 'accepted' | 'declined' | null

export const CONSENT_KEY = 'devos_cookie_consent'

export function getConsent(): ConsentStatus {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(CONSENT_KEY) as ConsentStatus
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
    // reload so AdSense script picks up consent
    window.location.reload()
  }

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-0"
    >
      <div
        className="max-w-3xl mx-auto rounded-xl p-5 sm:p-6 shadow-xl"
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          boxShadow: '0 -4px 32px rgba(0,0,0,0.10)',
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold mb-1" style={{ color: 'var(--fg)' }}>
              🍪 Diese Website verwendet Cookies
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
              Wir nutzen Google AdSense zur Anzeigenschaltung und analysieren Besuche
              anonym. Mit Klick auf „Akzeptieren" stimmen Sie der Nutzung zu.{' '}
              <Link
                href="/datenschutz"
                className="underline underline-offset-2 transition-opacity hover:opacity-70"
                style={{ color: 'var(--accent)' }}
              >
                Datenschutz
              </Link>
            </p>
          </div>

          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={decline}
              className="px-4 py-2 text-xs font-semibold rounded-md border transition-opacity hover:opacity-70"
              style={{
                background: 'transparent',
                color: 'var(--muted)',
                borderColor: 'var(--border)',
              }}
            >
              Ablehnen
            </button>
            <button
              onClick={accept}
              className="px-5 py-2 text-xs font-semibold rounded-md transition-opacity hover:opacity-90"
              style={{
                background: 'var(--accent)',
                color: '#fff',
              }}
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
