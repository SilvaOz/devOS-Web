'use client'

import { useState } from 'react'
import { NEWSLETTER } from '@/lib/constants'
import { MailCheck, Lock } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const COVER_ITEMS = [
  'Wie Sie bei Google gefunden werden',
  'Warum Ladezeit direkt Kunden kostet',
  'Die 5 häufigsten Website-Fehler',
  'Was eine Website wirklich kosten sollte',
  'Seite selbst pflegen — ohne Programmierer',
]

function EbookCover() {
  const scale = 0.38
  const W = 400, H = 560
  return (
    <div
      className="hidden sm:block flex-shrink-0"
      style={{ width: W * scale, height: H * scale, position: 'relative' }}
    >
      <div style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        position: 'absolute',
        width: W,
        height: H,
        borderRadius: 18,
        background: 'linear-gradient(145deg, #0e0e0e 0%, #161008 100%)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 24px 64px rgba(0,0,0,0.65), 0 0 0 1px rgba(46,125,122,0.20)',
      }}>

        {/* ── Background dot grid ── */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 1 }} aria-hidden="true">
          <defs>
            <pattern id="ec-dots" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="11" cy="11" r="0.9" fill="rgba(255,255,255,0.06)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ec-dots)" />
        </svg>

        {/* ── Radial glow top-right ── */}
        <div style={{ position: 'absolute', right: -80, top: -80, width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(46,125,122,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />

        {/* ── Bottom-left cool glow ── */}
        <div style={{ position: 'absolute', left: -60, bottom: -60, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(46,125,122,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {/* ── Top accent line ── */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #2e7d7a, #3aada9, rgba(46,125,122,0))' }} />

        {/* ── Left accent bar ── */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'linear-gradient(180deg, #2e7d7a 0%, rgba(46,125,122,0.12) 100%)' }} />

        {/* ── Big watermark "10" ── */}
        <div style={{ position: 'absolute', right: -18, bottom: 52, fontFamily: 'Georgia, serif', fontSize: 280, fontWeight: 900, color: 'rgba(46,125,122,0.06)', lineHeight: 1, letterSpacing: -16, userSelect: 'none', pointerEvents: 'none' }}>10</div>

        {/* ── Content ── */}
        <div style={{ padding: '30px 28px 0 28px', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>

          {/* Top row: badge + label */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(46,125,122,0.15)', border: '1px solid rgba(46,125,122,0.35)', color: '#4ecdc4', fontSize: 10, fontWeight: 700, letterSpacing: '2px', padding: '4px 10px', borderRadius: 5 }}>
              ✦ KOSTENLOS
            </div>
            <span style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.22)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Leitfaden</span>
          </div>

          {/* Number + title block */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 2 }}>
              <span style={{ fontSize: 72, fontWeight: 900, color: 'var(--accent)', lineHeight: 0.85, letterSpacing: '-4px', fontFamily: 'Georgia, serif' }}>10</span>
              <div style={{ paddingTop: 6 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 2 }}>Tipps für</div>
                <div style={{ fontSize: 34, fontWeight: 800, color: '#ffffff', lineHeight: 1, letterSpacing: '-1px' }}>Ihre</div>
                <div style={{ fontSize: 34, fontWeight: 800, color: 'var(--accent)', lineHeight: 1, letterSpacing: '-1px' }}>Website</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, rgba(46,125,122,0.5), rgba(46,125,122,0.05))' }} />
            <span style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.28)', fontStyle: 'italic' }}>ohne Fachjargon</span>
          </div>

          {/* Checklist */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
            {COVER_ITEMS.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.72)', lineHeight: 1.4 }}>
                <div style={{ flexShrink: 0, width: 17, height: 17, borderRadius: 4, background: 'rgba(46,125,122,0.18)', border: '1px solid rgba(46,125,122,0.40)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <polyline points="2,5 4.5,7.5 8.5,2.5" stroke="#4ecdc4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Footer ── */}
        <div style={{ padding: '12px 28px 14px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ color: 'var(--accent)', fontFamily: 'monospace', fontWeight: 700, fontSize: 15, lineHeight: 1 }}>&gt;_</span>
            <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 11, fontWeight: 600, letterSpacing: '0.3px' }}>DevOS Web</span>
          </div>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.5px' }}>devos-web.de</span>
        </div>

      </div>
    </div>
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
        <EbookCover />

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
            style={{ background: 'var(--accent)', color: '#fff' }}
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
