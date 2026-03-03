'use client'

import { useEffect, useRef } from 'react'
import { HERO } from '@/lib/constants'

export default function HeroSection() {
  const rainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = rainRef.current
    if (!container) return

    const snippets = [
      'const user = await getUser(id)',
      'function render() { return jsx }',
      'import { useState } from "react"',
      'export default async function()',
      'type Props = { id: string }',
      'if (!auth) redirect("/login")',
      'useEffect(() => { init() }, [])',
      '.map(item => item.id)',
      '.filter(Boolean).length > 0',
      'return res.status(200).json()',
      'const [open, setOpen] = useState(false)',
      'schema.parse(formData)',
      'z.string().email().min(1)',
      'git commit -m "feat: add"',
      'npm run build && npm start',
      'SELECT id, name FROM users',
      'docker compose up --build',
      'interface User { id: number }',
      'async/await Promise.all([])',
      'throw new Error("not found")',
    ]

    const columnCount = Math.floor(window.innerWidth / 110)
    const cols: HTMLDivElement[] = []

    for (let i = 0; i < columnCount; i++) {
      const col = document.createElement('div')
      col.className = 'rain-col'
      col.style.left = `${(i / columnCount) * 100}%`
      col.style.animationDuration = `${18 + Math.random() * 22}s`
      col.style.animationDelay  = `${-Math.random() * 30}s`
      col.style.opacity = String(0.07 + Math.random() * 0.11)

      let text = ''
      for (let j = 0; j < 12; j++) {
        text += snippets[Math.floor(Math.random() * snippets.length)] + '   '
      }
      col.textContent = text
      container.appendChild(col)
      cols.push(col)
    }

    return () => cols.forEach(c => c.remove())
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Grid */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Glow orbs — top-right gold, bottom-left blue */}
      <div className="hero-orb hero-orb-tr" aria-hidden="true" />
      <div className="hero-orb hero-orb-bl" aria-hidden="true" />

      {/* Code Rain */}
      <div
        ref={rainRef}
        className="absolute inset-0 overflow-hidden"
        aria-hidden="true"
      />

      {/* Gradient overlay — ensures text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 40% 50%, transparent 0%, rgba(10,10,15,0.7) 70%, rgba(10,10,15,0.95) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 md:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full mb-6 border"
              style={{
                background: 'var(--accent-dim)',
                borderColor: 'rgba(255,215,0,0.25)',
                color: 'var(--accent)',
              }}
            >
              {HERO.badge}
            </div>

            {/* H1 */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
              style={{ color: 'var(--fg)' }}
            >
              {HERO.h1Line1}
              <br />
              <span style={{ color: 'var(--accent)' }}>{HERO.h1Line2}</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
              style={{ color: 'var(--muted)' }}
            >
              {HERO.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded text-sm transition-opacity duration-150 hover:opacity-90"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                {HERO.ctaPrimary}
              </a>
              <a
                href="#fuer-wen"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded text-sm border transition-colors duration-150"
                style={{
                  color: 'var(--fg)',
                  borderColor: 'var(--border)',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'var(--bg-elevated)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'transparent'
                }}
              >
                {HERO.ctaGhost}
              </a>
            </div>

            {/* Micro-text */}
            <div
              className="flex flex-wrap gap-4 text-xs font-mono"
              style={{ color: 'var(--muted)' }}
            >
              {HERO.micros.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>

          {/* Right — terminal (desktop only) */}
          <div className="hidden lg:block">
            <div
              className="rounded-xl overflow-hidden border"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
              }}
            >
              {/* Title bar */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border)' }}
              >
                <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                <span className="font-mono text-xs ml-3" style={{ color: 'var(--muted)' }}>
                  devos-terminal
                </span>
              </div>

              {/* Body */}
              <div className="p-6 font-mono text-sm flex flex-col gap-3">
                <p style={{ color: 'var(--muted)' }}>
                  $ devos --init projekt
                </p>
                <p className="terminal-line terminal-line-1" style={{ color: 'var(--accent)' }}>
                  ✓ Anforderungen analysiert
                </p>
                <p className="terminal-line terminal-line-2" style={{ color: 'var(--fg)' }}>
                  ✓ Design &amp; Struktur erstellt
                </p>
                <p className="terminal-line terminal-line-3" style={{ color: 'var(--fg)' }}>
                  ✓ Code geschrieben &amp; getestet
                </p>
                <p className="terminal-line terminal-line-4" style={{ color: 'var(--accent)' }}>
                  ✓ Auf Server deployed
                </p>
                <p className="terminal-line terminal-line-5" style={{ color: 'var(--fg)' }}>
                  <span style={{ color: 'var(--accent)' }}>●</span> Ihre Website ist live.
                  <span className="terminal-cursor" />
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
