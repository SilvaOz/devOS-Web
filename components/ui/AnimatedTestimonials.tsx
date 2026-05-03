'use client'

import { useState, useEffect, useCallback } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

// Stock photos matched to each persona (Unsplash)
const PHOTOS = [
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&h=600&fit=crop&auto=format', // Maria – Heilpraktikerin
  'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=500&h=600&fit=crop&auto=format', // Thomas – Fotograf
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&h=600&fit=crop&auto=format', // Karin – Yoga
]

// Stable (non-random) rotations for each card index when not active
const ROTATIONS = [-6, 5, -3]

function Stars() {
  return (
    <div className="flex gap-1 mb-6" aria-label="5 von 5 Sternen">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M7 1l1.545 3.13 3.455.502-2.5 2.436.59 3.44L7 8.885l-3.09 1.623.59-3.44L2 4.632l3.455-.502L7 1z"
            fill="var(--accent)"
          />
        </svg>
      ))}
    </div>
  )
}

export default function AnimatedTestimonials() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)
  const n = TESTIMONIALS.length

  const goTo = useCallback((index: number) => {
    setVisible(false)
    setTimeout(() => {
      setActive(index)
      setVisible(true)
    }, 180)
  }, [])

  const handleNext = useCallback(() => goTo((active + 1) % n), [active, n, goTo])
  const handlePrev = useCallback(() => goTo((active - 1 + n) % n), [active, n, goTo])

  // Autoplay — resets when user navigates (handleNext changes when active changes)
  useEffect(() => {
    const id = setInterval(handleNext, 5000)
    return () => clearInterval(id)
  }, [handleNext])

  return (
    <div className="w-full">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

        {/* ── Stacked images ─────────────────────────────────────────────────── */}
        <div className="flex items-center justify-center">
          <div className="relative h-80 w-full max-w-xs">
            {TESTIMONIALS.map((t, i) => {
              const isActive = i === active
              const dist = Math.min(Math.abs(i - active), n - Math.abs(i - active))
              return (
                <div
                  key={t.author}
                  aria-hidden={!isActive}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: isActive ? 1 : 0.52,
                    transform: `scale(${isActive ? 1 : 0.91}) translateY(${isActive ? 0 : 16}px) rotate(${isActive ? 0 : ROTATIONS[i]}deg)`,
                    zIndex: isActive ? n + 1 : n - dist,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transformOrigin: 'bottom center',
                  }}
                >
                  {/* Photo */}
                  <img
                    src={PHOTOS[i]}
                    alt={t.author}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover select-none"
                    style={{
                      boxShadow: isActive
                        ? '0 24px 64px rgba(28,25,23,0.2)'
                        : '0 8px 24px rgba(28,25,23,0.1)',
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const fb = e.currentTarget.nextElementSibling as HTMLElement | null
                      if (fb) fb.style.display = 'flex'
                    }}
                  />
                  {/* Fallback avatar (shown only if image fails to load) */}
                  <div
                    className="h-full w-full rounded-3xl items-center justify-center text-5xl font-extrabold font-serif select-none"
                    style={{
                      display: 'none',
                      background: 'var(--bg-elevated)',
                      color: 'var(--accent)',
                      border: '1px solid var(--border)',
                      boxShadow: isActive
                        ? '0 24px 64px rgba(28,25,23,0.12)'
                        : '0 8px 20px rgba(28,25,23,0.07)',
                    }}
                  >
                    {t.initial}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Text + controls ────────────────────────────────────────────────── */}
        <div className="flex flex-col justify-center py-4">
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.18s ease, transform 0.18s ease',
            }}
          >
            <Stars />

            <blockquote
              className="text-lg leading-relaxed mb-6"
              style={{
                color: 'var(--fg)',
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontStyle: 'italic',
              }}
            >
              „{TESTIMONIALS[active].quote}"
            </blockquote>

            {/* Metric */}
            <span
              className="inline-block text-xs font-mono font-semibold px-3 py-1.5 rounded-full mb-5"
              style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
            >
              ✓ {TESTIMONIALS[active].metric}
            </span>

            {/* Author */}
            <div className="flex items-center gap-3 mt-1">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                style={{
                  background: 'var(--bg-elevated)',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-fraunces), Georgia, serif',
                  border: '1px solid var(--border)',
                }}
                aria-hidden="true"
              >
                {TESTIMONIALS[active].initial}
              </div>
              <div>
                <p className="text-sm font-bold leading-tight" style={{ color: 'var(--fg)' }}>
                  {TESTIMONIALS[active].author}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
                  {TESTIMONIALS[active].role} · {TESTIMONIALS[active].location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3 mt-10">
            <button
              onClick={handlePrev}
              aria-label="Vorherige Bewertung"
              className="w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-150"
              style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--muted)'
              }}
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Nächste Bewertung"
              className="w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-150"
              style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--muted)'
              }}
            >
              <ArrowRight size={16} />
            </button>

            {/* Pill dots */}
            <div className="flex items-center gap-1.5 ml-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Bewertung ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    height: '6px',
                    width: i === active ? '20px' : '6px',
                    background: i === active ? 'var(--accent)' : 'var(--border)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
