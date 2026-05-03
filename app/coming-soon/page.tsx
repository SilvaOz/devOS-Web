'use client'

import { useState } from 'react'

export default function ComingSoonPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
      style={{ background: 'var(--bg-elevated)' }}
    >
      {/* Subtle blobs */}
      <div aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center gap-8">

        {/* Logo */}
        <div className="flex items-center gap-2 font-mono">
          <span
            className="font-bold text-2xl"
            style={{ color: 'var(--accent)' }}
          >
            &gt;_
          </span>
          <span className="font-semibold text-2xl" style={{ color: 'var(--fg)' }}>
            DevOS
          </span>
          <span className="font-medium text-lg" style={{ color: 'var(--muted)' }}>
            Web
          </span>
        </div>

        {/* Headline */}
        <div>
          <p
            className="text-xs font-mono tracking-widest uppercase mb-4"
            style={{ color: 'var(--muted)' }}
          >
            Leipzig · DACH-Raum · 2026
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: 'var(--fg)',
              marginBottom: '1rem',
            }}
          >
            Wir sind gleich da.
          </h1>
          <p
            className="text-lg max-w-sm mx-auto"
            style={{ color: 'var(--muted)', lineHeight: '1.75' }}
          >
            Digitale Systeme mit KI — für Therapeuten, Coaches und Kreative.
            Die neue Website kommt bald.
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-12 mx-auto"
          style={{ height: '2px', background: 'var(--accent)', opacity: 0.5 }}
          aria-hidden="true"
        />

        {/* Newsletter signup */}
        {status === 'success' ? (
          <div
            className="rounded-xl px-6 py-5 w-full"
            style={{
              background: 'var(--accent-dim)',
              border: '1px solid rgba(46,125,122,0.2)',
            }}
          >
            <p className="font-semibold" style={{ color: 'var(--accent)' }}>
              ✓ Sie sind dabei!
            </p>
            <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
              Prüfen Sie Ihren Posteingang — wir melden uns beim Launch.
            </p>
          </div>
        ) : (
          <div className="w-full">
            <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
              Beim Launch benachrichtigen lassen + kostenloser Website-Leitfaden:
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ihre@email.de"
                required
                className="flex-1 px-4 py-3 text-sm rounded-lg border outline-none transition-colors"
                style={{
                  background: 'var(--card)',
                  color: 'var(--fg)',
                  borderColor: 'var(--border)',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent)' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border)' }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary px-5 py-3 text-sm font-semibold rounded-lg whitespace-nowrap disabled:opacity-50"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                {status === 'loading' ? '...' : 'Benachrichtigen →'}
              </button>
            </form>
            {status === 'error' && (
              <p className="text-xs mt-2" style={{ color: '#f87171' }}>
                Etwas ist schiefgelaufen. Bitte direkt schreiben: info@devos-web.de
              </p>
            )}
          </div>
        )}

        {/* Contact */}
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          Oder direkt:{' '}
          <a
            href="mailto:info@devos-web.de"
            className="transition-opacity hover:opacity-70"
            style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            info@devos-web.de
          </a>
        </p>

      </div>

      {/* Footer note */}
      <p
        className="absolute bottom-6 text-xs"
        style={{ color: 'var(--border)' }}
      >
        © 2026 DevOS Web · Leipzig
      </p>
    </div>
  )
}
