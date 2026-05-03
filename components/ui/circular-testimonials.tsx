'use client'

import { useState, useEffect, useCallback } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export type CircularTestimonial = {
  quote: string
  name: string
  designation: string
  src: string
}

type Colors = {
  name?: string
  designation?: string
  testimony?: string
  arrowBackground?: string
  arrowForeground?: string
  arrowHoverBackground?: string
}

type FontSizes = {
  name?: string
  designation?: string
  quote?: string
}

type Props = {
  testimonials: CircularTestimonial[]
  autoplay?: boolean
  colors?: Colors
  fontSizes?: FontSizes
}

// ─── Arrow button ─────────────────────────────────────────────────────────────

function ArrowBtn({
  dir, onClick, bg, fg, hover,
}: {
  dir: 'left' | 'right'
  onClick: () => void
  bg: string
  fg: string
  hover: string
}) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === 'left' ? 'Vorherige' : 'Nächste'}
      style={{ background: bg, transition: 'background 0.18s ease' }}
      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = hover }}
      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = bg }}
      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {dir === 'left' ? (
          <path d="M15 18l-6-6 6-6" stroke={fg} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 18l6-6-6-6" stroke={fg} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export function CircularTestimonials({
  testimonials,
  autoplay = false,
  colors = {},
  fontSizes = {},
}: Props) {
  const [active, setActive] = useState(0)
  const [textVisible, setTextVisible] = useState(true)
  const n = testimonials.length

  // Resolved colors with fallbacks
  const arrowBg   = colors.arrowBackground    ?? '#141414'
  const arrowFg   = colors.arrowForeground    ?? '#f1f1f7'
  const arrowHov  = colors.arrowHoverBackground ?? '#00A6FB'
  const nameCol   = colors.name              ?? '#0a0a0a'
  const desgCol   = colors.designation       ?? '#454545'
  const quotCol   = colors.testimony         ?? '#171717'

  // Resolved font sizes
  const nameFs  = fontSizes.name        ?? '24px'
  const desgFs  = fontSizes.designation ?? '16px'
  const quotFs  = fontSizes.quote       ?? '18px'

  const goTo = useCallback((index: number) => {
    setTextVisible(false)
    setTimeout(() => {
      setActive(index)
      setTextVisible(true)
    }, 200)
  }, [])

  const handleNext = useCallback(() => goTo((active + 1) % n), [active, n, goTo])
  const handlePrev = useCallback(() => goTo((active - 1 + n) % n), [active, n, goTo])

  useEffect(() => {
    if (!autoplay) return
    const id = setInterval(handleNext, 4500)
    return () => clearInterval(id)
  }, [autoplay, handleNext])

  // ── Circle geometry — scales automatically for any number of testimonials ──
  // avatarSize shrinks as n grows (min 40px), radius adjusts to fit in fixed 300px container
  const SIZE       = 300
  const CENTER     = SIZE / 2
  const avatarSize = Math.max(40, 88 - (n - 3) * 7)         // 88px@n=3 → 40px@n=10+
  const R          = Math.round((SIZE - avatarSize - 20) / 2) // always fits in container
  const scaleActive = Math.min(1.22, 1 + 12 / avatarSize)    // scale less for small avatars

  const getPos = (i: number) => {
    const step  = (2 * Math.PI) / n
    const angle = (i - active) * step // active → 0rad (3 o'clock, faces the text)
    return {
      x: CENTER + R * Math.cos(angle),
      y: CENTER + R * Math.sin(angle),
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16 w-full">

      {/* ── Circular photo ring ───────────────────────────────────────────── */}
      <div
        className="relative flex-shrink-0"
        style={{ width: `${SIZE}px`, height: `${SIZE}px` }}
      >
        {/* Dashed orbit track */}
        <svg
          className="absolute inset-0 pointer-events-none"
          width={SIZE}
          height={SIZE}
          aria-hidden="true"
        >
          <circle
            cx={CENTER}
            cy={CENTER}
            r={R}
            fill="none"
            stroke={nameCol}
            strokeWidth="1"
            strokeDasharray="4 9"
            opacity="0.12"
          />
        </svg>

        {/* Center dot */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '8px',
            height: '8px',
            left: `${CENTER - 4}px`,
            top: `${CENTER - 4}px`,
            background: arrowBg,
            opacity: 0.18,
          }}
          aria-hidden="true"
        />

        {/* Avatar buttons */}
        {testimonials.map((t, i) => {
          const { x, y } = getPos(i)
          const isActive = i === active
          return (
            <button
              key={t.name}
              onClick={() => goTo(i)}
              aria-label={t.name}
              style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                transform: `translate(-50%, -50%) scale(${isActive ? scaleActive : 0.8})`,
                transition: 'all 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: isActive ? 2 : 1,
                outline: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <div
                style={{
                  width: `${avatarSize}px`,
                  height: `${avatarSize}px`,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  opacity: isActive ? 1 : 0.5,
                  border: isActive ? `3px solid ${arrowBg}` : '2px solid transparent',
                  boxShadow: isActive ? '0 8px 32px rgba(0,0,0,0.2)' : 'none',
                  transition: 'all 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <img
                  src={t.src}
                  alt={t.name}
                  draggable={false}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={e => {
                    // Fallback: hide broken image, show initial
                    const el = e.currentTarget
                    el.style.display = 'none'
                    const fb = el.nextElementSibling as HTMLElement | null
                    if (fb) fb.style.display = 'flex'
                  }}
                />
                {/* Initial fallback */}
                <div
                  style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: `${Math.round(avatarSize * 0.38)}px`,
                    fontWeight: 700,
                    color: arrowBg,
                    background: `${arrowBg}14`,
                  }}
                >
                  {t.name.charAt(0)}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* ── Text + navigation ─────────────────────────────────────────────── */}
      <div
        className="flex-1 flex flex-col gap-5"
        style={{
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          maxWidth: '480px',
        }}
      >
        {/* Stars */}
        <div className="flex gap-1" aria-label="5 Sterne" role="img">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M7 1l1.545 3.13 3.455.502-2.5 2.436.59 3.44L7 8.885l-3.09 1.623.59-3.44L2 4.632l3.455-.502L7 1z"
                fill={arrowBg}
              />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote
          style={{
            fontSize: quotFs,
            color: quotCol,
            lineHeight: 1.65,
            fontStyle: 'italic',
            margin: 0,
          }}
        >
          „{testimonials[active].quote}"
        </blockquote>

        {/* Name + designation */}
        <div>
          <p style={{ fontSize: nameFs, color: nameCol, fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
            {testimonials[active].name}
          </p>
          <p style={{ fontSize: desgFs, color: desgCol, marginTop: '4px', margin: '4px 0 0 0' }}>
            {testimonials[active].designation}
          </p>
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2.5 mt-1">
          <ArrowBtn dir="left"  onClick={handlePrev} bg={arrowBg} fg={arrowFg} hover={arrowHov} />
          <ArrowBtn dir="right" onClick={handleNext} bg={arrowBg} fg={arrowFg} hover={arrowHov} />
        </div>
      </div>

    </div>
  )
}
