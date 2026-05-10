'use client'

import { useEffect, useRef } from 'react'

function fade(progress: number, start: number, end: number) {
  if (progress <= start) return 0
  if (progress >= end) return 1
  return (progress - start) / (end - start)
}

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const targetRef    = useRef(0)
  const currentRef   = useRef(0)
  const rafRef       = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const isMobile = window.matchMedia('(max-width: 768px)').matches ||
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const LERP = isMobile ? 0.12 : 0.038 // más rápido en móvil → responde al momentum scroll

    const video = document.getElementById('water-video')  as HTMLVideoElement | null
    const fill  = document.getElementById('water-progress-fill') as HTMLElement | null
    const line1 = document.getElementById('wv-line1') as HTMLElement | null
    const line2 = document.getElementById('wv-line2') as HTMLElement | null
    const line3 = document.getElementById('wv-line3') as HTMLElement | null
    const cta   = document.getElementById('wv-cta')   as HTMLElement | null

    // iOS Safari bloquea currentTime hasta que el video haya jugado al menos 1 frame.
    // play() + pause() inmediato desbloquea el seeking sin iniciar reproducción real.
    const unlockSeeking = async () => {
      if (!video) return
      try {
        await video.play()
        video.pause()
        video.currentTime = 0
      } catch {
        // autoplay policy bloqueó — el seeking no funcionará hasta interacción del usuario
      }
    }
    unlockSeeking()

    const handleScroll = () => {
      const rect       = container.getBoundingClientRect()
      const scrolled   = -rect.top
      const scrollZone = container.offsetHeight - window.innerHeight
      if (scrollZone <= 0) return
      targetRef.current = Math.min(Math.max(scrolled / scrollZone, 0), 1)
    }

    const tick = () => {
      currentRef.current += (targetRef.current - currentRef.current) * LERP
      const p = currentRef.current

      // readyState >= 1 (HAVE_METADATA) es suficiente después del unlock
      if (video && video.readyState >= 1 && video.duration) {
        const newTime   = p * video.duration
        const frameStep = 1 / 30
        if (Math.abs(newTime - video.currentTime) >= frameStep) {
          video.currentTime = newTime
        }
      }

      if (fill) fill.style.width = `${p * 100}%`

      if (line1) {
        const o = fade(p, 0.50, 0.60)
        line1.style.opacity   = String(o)
        line1.style.transform = `translateY(${(1 - o) * 24}px)`
      }
      if (line2) {
        const o = fade(p, 0.60, 0.70)
        line2.style.opacity   = String(o)
        line2.style.transform = `translateY(${(1 - o) * 24}px)`
      }
      if (line3) {
        const o = fade(p, 0.70, 0.80)
        line3.style.opacity   = String(o)
        line3.style.transform = `translateY(${(1 - o) * 24}px)`
      }
      if (cta) {
        const o = fade(p, 0.82, 0.92)
        cta.style.opacity   = String(o)
        cta.style.transform = `translateY(${(1 - o) * 16}px)`
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="reel-container">
      <div className="reel-sticky">

        <video
          id="water-video"
          className="reel-video"
          src="/water-seekable.mp4"
          muted
          playsInline
          preload="auto"
        />

        <div className="wv-text">
          <span
            id="wv-line1"
            className="wv-line"
            style={{ opacity: 0, transform: 'translateY(24px)', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}
          >
            <span className="wv-badge">
              <span className="wv-badge-dot" />
              KI-gestützte Entwicklung
            </span>
            <span className="wv-badge">📍 Leipzig, DE</span>
          </span>
          <p
            id="wv-line2"
            className="wv-line wv-line-lg"
            style={{ opacity: 0, transform: 'translateY(24px)' }}
          >
            Ich baue digitale<br />Systeme
          </p>
          <p
            id="wv-line3"
            className="wv-line wv-line-accent"
            style={{ opacity: 0, transform: 'translateY(24px)' }}
          >
            mit KI.
          </p>
          <div
            id="wv-cta"
            className="wv-cta-row"
            style={{ opacity: 0, transform: 'translateY(16px)' }}
          >
            <a href="/anfragen" className="wv-cta-btn wv-cta-primary">
              Projekt anfragen →
            </a>
            <a href="/leistungen" className="wv-cta-btn wv-cta-secondary">
              Leistungen ansehen
            </a>
          </div>
        </div>

        <div className="reel-progress-bar">
          <div className="reel-progress-fill" id="water-progress-fill" />
        </div>

      </div>
    </div>
  )
}
