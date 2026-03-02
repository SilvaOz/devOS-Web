'use client'

import { useState } from 'react'
import { NEWSLETTER } from '@/lib/constants'

type Status = 'idle' | 'loading' | 'success' | 'error'

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
      } else if (res.status === 429) {
        setStatus('error')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
        {NEWSLETTER.successMessage}
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-3 max-w-sm">
      <p className="text-xs font-mono font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
        {NEWSLETTER.label}
      </p>
      <p className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>
        {NEWSLETTER.title}
      </p>
      <p className="text-xs" style={{ color: 'var(--muted)' }}>
        {NEWSLETTER.description}
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={NEWSLETTER.placeholder}
          required
          className="flex-1 min-w-0 px-3 py-2 text-sm rounded border outline-none"
          style={{
            background: 'var(--bg)',
            color: 'var(--fg)',
            borderColor: 'var(--border)',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 text-sm font-semibold rounded transition-opacity duration-150 hover:opacity-90 disabled:opacity-50 whitespace-nowrap"
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
    </div>
  )
}
