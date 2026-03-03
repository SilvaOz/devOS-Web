'use client'

import { useEffect, useRef } from 'react'
import { HERO } from '@/lib/constants'

export default function HeroSection() {
  const rainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = rainRef.current
    if (!container) return

    const snippets = [
      'const [data, setData] = useState([])',
      'npm run build && npm run start',
      'git commit -m "feat: neue Seite"',
      'export default function Page()',
      'import Image from "next/image"',
      'res.status(200).json({ ok: true })',
      'border-radius: 12px;',
      'display: flex; gap: 1rem;',
      'SELECT * FROM projekte WHERE aktiv',
      'docker compose up --build -d',
      '@media (max-width: 768px) {}',
      'const router = useRouter()',
      'await prisma.user.create(data)',
      'font-family: "Manrope", sans-serif',
      'z-index: 10; position: relative;',
      'vercel deploy --prod',
      'npm install tailwindcss',
      'type Props = { title: string }',
      'async function fetchData(url)',
      'padding: 2rem; margin: 0 auto;',
    ]

    const columnCount = Math.floor(window.innerWidth / 45)
    const cols: HTMLDivElement[] = []

    for (let i = 0; i < columnCount; i++) {
      const col = document.createElement('div')
      col.className = 'rain-col'
      col.style.left = `${(i / columnCount) * 100}%`
      col.style.animationDuration = `${80 + Math.random() * 60}s`
      col.style.animationDelay  = `${-Math.random() * 120}s`
      col.style.opacity = String(0.6 + Math.random() * 0.35)

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
      className="hero-dark relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#e8e8ed' }}
    >
      {/* Grid */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Noise texture */}
      <div className="hero-noise" aria-hidden="true" />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 40% 50%, rgba(232,232,237,0.72) 0%, rgba(232,232,237,0.86) 70%, rgba(232,232,237,0.95) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Code Rain — encima del overlay */}
      <div
        ref={rainRef}
        className="absolute inset-0 overflow-hidden"
        aria-hidden="true"
        style={{
          filter: 'blur(1.2px)',
          WebkitMaskImage: 'radial-gradient(ellipse 38% 50% at 82% 48%, rgba(0,0,0,0.5) 10%, transparent 70%), radial-gradient(ellipse 20% 22% at 4% 28%, rgba(0,0,0,0.55) 0%, transparent 100%)',
          WebkitMaskComposite: 'source-over',
          maskImage: 'radial-gradient(ellipse 38% 50% at 82% 48%, rgba(0,0,0,0.5) 10%, transparent 70%), radial-gradient(ellipse 20% 22% at 4% 28%, rgba(0,0,0,0.55) 0%, transparent 100%)',
          maskComposite: 'add',
        }}
      />

      {/* Glow orbs — encima del overlay */}
      <div className="hero-orb hero-orb-tr" aria-hidden="true" />
      <div className="hero-orb hero-orb-bl" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 md:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full mb-6 border"
              style={{
                background: 'rgba(0,0,0,0.18)',
                borderColor: 'rgba(0,0,0,0.25)',
                color: '#111111',
              }}
            >
              <span style={{ color: '#111' }}>●</span> {HERO.badge}
            </div>

            {/* H1 */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
            >
              <span style={{ color: '#111111' }}>{HERO.h1Line1}</span>
              <br />
              <span style={{ color: 'var(--accent)' }}>{HERO.h1Line2}</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
              style={{ color: '#555' }}
            >
              Ich entwickle <strong style={{ color: '#111' }}>Websites</strong> für{' '}
              <strong style={{ color: '#111' }}>Therapeuten</strong>,{' '}
              <strong style={{ color: '#111' }}>Künstler</strong> und{' '}
              <strong style={{ color: '#111' }}>kleine Unternehmen</strong> —{' '}
              <strong style={{ color: '#111' }}>persönlich</strong>,{' '}
              <strong style={{ color: '#111' }}>klar</strong> und ohne Fachjargon.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded text-sm transition-opacity duration-150 hover:opacity-90"
                style={{ background: 'var(--accent)', color: '#000' }}
              >
                {HERO.ctaPrimary}
              </a>
              <a
                href="#fuer-wen"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded text-sm border transition-all duration-150"
                style={{
                  color: '#000',
                  borderColor: '#000',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = '#000'
                  el.style.color = '#fff'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'transparent'
                  el.style.color = '#000'
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
              className="rounded-2xl overflow-hidden"
              style={{
                background: '#1e1e1e',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
              }}
            >
              {/* Title bar — macOS style */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ background: '#2b2b2b', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                <span className="font-mono text-xs ml-3" style={{ color: '#6b6b6b' }}>
                  devos — bash
                </span>
              </div>

              {/* Body */}
              <div className="p-6 font-mono text-sm flex flex-col gap-3">
                <p style={{ color: '#555' }}>
                  $ devos --init projekt
                </p>
                <p className="terminal-line terminal-line-1" style={{ color: '#ff7700' }}>
                  <span style={{ color: '#00d000' }}>✓</span> Anforderungen analysiert
                </p>
                <p className="terminal-line terminal-line-2" style={{ color: '#ffd580' }}>
                  <span style={{ color: '#00d000' }}>✓</span> Design &amp; Struktur erstellt
                </p>
                <p className="terminal-line terminal-line-3" style={{ color: '#e0e0e0' }}>
                  <span style={{ color: '#00d000' }}>✓</span> Code geschrieben &amp; getestet
                </p>
                <p className="terminal-line terminal-line-4" style={{ color: '#7dd3fc' }}>
                  <span style={{ color: '#00d000' }}>✓</span> Auf Server deployed
                </p>
                <p className="terminal-line terminal-line-5" style={{ color: '#00d000' }}>
                  <span>●</span> Ihre Website ist live.
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
