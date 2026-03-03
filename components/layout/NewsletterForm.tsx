'use client'

import { useState } from 'react'
import { NEWSLETTER } from '@/lib/constants'
import { MailCheck, Lock } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

function PdfIcon() {
  return (
    <svg
      width="72"
      height="88"
      viewBox="0 0 72 88"
      fill="none"
      aria-hidden="true"
    >
      {/* Page shadow */}
      <rect x="6" y="6" width="60" height="78" rx="6" fill="rgba(255,215,0,0.06)" />
      {/* Page */}
      <rect x="2" y="2" width="60" height="78" rx="6" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
      {/* Folded corner */}
      <path d="M46 2 L62 18 L46 18 Z" fill="var(--bg-elevated)" stroke="var(--border)" strokeWidth="1" />
      <path d="M46 2 L62 18 H46 Z" fill="var(--bg)" opacity="0.6" />
      {/* Lines */}
      <rect x="10" y="28" width="36" height="2.5" rx="1.25" fill="var(--border)" />
      <rect x="10" y="36" width="42" height="2" rx="1" fill="var(--border)" opacity="0.6" />
      <rect x="10" y="43" width="38" height="2" rx="1" fill="var(--border)" opacity="0.6" />
      <rect x="10" y="50" width="40" height="2" rx="1" fill="var(--border)" opacity="0.6" />
      <rect x="10" y="57" width="30" height="2" rx="1" fill="var(--border)" opacity="0.4" />
      {/* PDF badge */}
      <rect x="8" y="64" width="30" height="10" rx="3" fill="var(--accent)" />
      <text x="23" y="72" textAnchor="middle" fontSize="7" fontWeight="700" fill="#000" fontFamily="monospace">
        PDF
      </text>
      {/* Checkmark glow */}
      <circle cx="52" cy="72" r="10" fill="rgba(255,215,0,0.15)" />
      <text x="52" y="76" textAnchor="middle" fontSize="11" fill="var(--accent)">✓</text>
    </svg>
  )
}

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

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
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <span
          className="w-12 h-12 flex items-center justify-center rounded-full"
          style={{ background: 'var(--accent-dim)' }}
        >
          <MailCheck size={24} style={{ color: 'var(--accent)' }} />
        </span>
        <p className="text-base font-semibold" style={{ color: 'var(--accent)' }}>
          {NEWSLETTER.successMessage}
        </p>
        <p className="text-xs" style={{ color: 'var(--muted)' }}>
          Prüfen Sie Ihren Posteingang — auch den Spam-Ordner.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

      {/* Left — offer */}
      <div className="flex gap-6 items-start">
        {/* PDF visual */}
        <div className="flex-shrink-0 hidden sm:block">
          <PdfIcon />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <span
              className="text-xs font-mono font-semibold uppercase tracking-widest"
              style={{ color: 'var(--accent)' }}
            >
              {NEWSLETTER.label}
            </span>
            <h3
              className="text-xl sm:text-2xl font-extrabold mt-1 mb-1"
              style={{ color: 'var(--fg)' }}
            >
              {NEWSLETTER.title}
            </h3>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              {NEWSLETTER.subtitle}
            </p>
          </div>

          <ul className="flex flex-col gap-2">
            {NEWSLETTER.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm" style={{ color: 'var(--fg)' }}>
                <span className="mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }}>✓</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right — form */}
      <div className="flex flex-col gap-4">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={NEWSLETTER.placeholder}
            required
            className="flex-1 min-w-0 px-4 py-3 text-sm rounded-lg border outline-none transition-colors duration-150"
            style={{
              background: 'var(--bg)',
              color: 'var(--fg)',
              borderColor: 'var(--border)',
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent)' }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border)' }}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-5 py-3 text-sm font-semibold rounded-lg transition-opacity duration-150 hover:opacity-90 disabled:opacity-50 whitespace-nowrap"
            style={{ background: 'var(--accent)', color: '#000' }}
          >
            {status === 'loading' ? '...' : NEWSLETTER.submit}
          </button>
        </form>

        {status === 'error' && (
          <p className="text-xs" style={{ color: '#f87171' }}>
            {NEWSLETTER.errorMessage}
          </p>
        )}

        <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--muted)' }}>
          <Lock size={12} />
          {NEWSLETTER.privacy}
        </p>
      </div>

    </div>
  )
}
