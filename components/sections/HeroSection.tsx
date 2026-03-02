'use client'

import { useEffect, useRef } from 'react'
import { HERO } from '@/lib/constants'

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const chars =
      '01アイウエオカキクケコサシスセソタチツテト{}[]()<>=+-*/&|^%$#@!?;:,.'
    const fontSize = 13
    let columns = 0
    let drops: number[] = []

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      columns = Math.floor(rect.width / fontSize)
      drops = Array(columns).fill(1)
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    let animId: number
    let lastTime = 0
    const interval = 90 // ms between frames → ~11fps, slow and elegant

    const draw = (timestamp: number) => {
      animId = requestAnimationFrame(draw)
      if (timestamp - lastTime < interval) return
      lastTime = timestamp

      ctx.fillStyle = 'rgba(10, 10, 15, 0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = 'rgba(255, 215, 0, 0.18)'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i] += 0.4
      }
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Code Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: 'transform' }}
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
        <div className="max-w-2xl">
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
              style={{ background: 'var(--accent)', color: '#000' }}
            >
              {HERO.ctaPrimary}
            </a>
            <a
              href="#leistungen"
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
      </div>
    </section>
  )
}
