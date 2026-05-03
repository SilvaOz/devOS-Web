'use client'

import { useState, useEffect, useCallback } from 'react'
import { PORTFOLIO_CASES } from '@/lib/constants'
import type { PortfolioCase } from '@/lib/constants'
import { X, ExternalLink, ArrowRight } from 'lucide-react'

type Props = {
  maxItems?: number
  showLink?: boolean
}

// ─── Modal ───────────────────────────────────────────────────────────────────

function PortfolioModal({
  project,
  onClose,
}: {
  project: PortfolioCase
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(5px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl"
        style={{ background: 'var(--card)', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header gradient */}
        <div
          className={`relative h-44 bg-gradient-to-br ${project.gradient} rounded-t-2xl flex items-end px-6 pb-5`}
        >
          <div
            className="absolute inset-0 rounded-t-2xl"
            style={{
              background: 'linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.65) 100%)',
            }}
            aria-hidden="true"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
            style={{ background: 'rgba(0,0,0,0.45)', color: '#fff' }}
            aria-label="Schließen"
          >
            <X size={16} />
          </button>
          <div className="relative z-10">
            <p className="text-xs font-mono mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {project.sector} · {project.location}
            </p>
            <h2
              className="text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
            >
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            {project.subtitle}
          </p>

          <div className="flex flex-col gap-4">
            {[
              { label: project.kind === 'client' ? 'Problem' : 'Herausforderung', text: project.problem },
              { label: project.kind === 'client' ? 'Lösung' : 'Was ich gebaut habe', text: project.solution },
            ].map(({ label, text }) => (
              <div key={label}>
                <p
                  className="text-xs font-mono uppercase tracking-widest mb-1.5"
                  style={{ color: 'var(--accent)' }}
                >
                  {label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {text}
                </p>
              </div>
            ))}

            <div
              className="rounded-lg p-4"
              style={{ background: 'var(--accent-dim)', border: '1px solid rgba(46,125,122,0.15)' }}
            >
              <p
                className="text-xs font-mono uppercase tracking-widest mb-1"
                style={{ color: 'var(--accent)' }}
              >
                Ergebnis
              </p>
              <p className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>
                {project.result}
              </p>
            </div>
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded border"
                style={{
                  background: 'var(--bg)',
                  color: 'var(--fg)',
                  borderColor: 'var(--border)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div
            className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-opacity hover:opacity-90"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                <ExternalLink size={14} />
                {project.badge ?? 'Ansehen'}
              </a>
            )}
            <div className="flex-1">
              <p className="text-sm font-bold mb-0.5" style={{ color: 'var(--fg)' }}>
                Ähnliches Projekt geplant?
              </p>
              <a
                href="/anfragen"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ color: 'var(--accent)' }}
              >
                Anfragen <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Card ────────────────────────────────────────────────────────────────────

function PortfolioCard({
  project,
  onClick,
}: {
  project: PortfolioCase
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="text-left rounded-xl border overflow-hidden group w-full transition-shadow duration-200 hover:shadow-lg"
      style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
    >
      {/* Gradient image area */}
      <div
        className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-end px-5 pb-4`}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.65) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Kind badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-xs font-mono px-2 py-1 rounded"
            style={{
              background: 'rgba(28,25,23,0.60)',
              color: '#fff',
              backdropFilter: 'blur(6px)',
            }}
          >
            {project.kind === 'client' ? 'Kundenprojekt' : 'Eigenprodukt'}
          </span>
        </div>

        {/* Hover hint */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: 'rgba(0,0,0,0.25)' }}
          aria-hidden="true"
        >
          <span
            className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Details ansehen →
          </span>
        </div>

        {/* Title */}
        <div className="relative z-10">
          <p className="text-xs font-mono mb-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {project.sector}
          </p>
          <h3 className="text-base font-bold text-white leading-tight">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-3">
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          {project.subtitle}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-0.5 rounded border"
              style={{
                background: 'var(--bg)',
                color: 'var(--muted)',
                borderColor: 'var(--border)',
              }}
            >
              {tag}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span
              className="text-xs font-mono px-2 py-0.5 rounded border"
              style={{
                background: 'var(--bg)',
                color: 'var(--muted)',
                borderColor: 'var(--border)',
              }}
            >
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>
    </button>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function PortfolioSection({ maxItems, showLink }: Props) {
  const featured = PORTFOLIO_CASES.filter((c) => c.featured)
  const cases = maxItems !== undefined ? featured.slice(0, maxItems) : PORTFOLIO_CASES
  const [selected, setSelected] = useState<PortfolioCase | null>(null)
  const closeModal = useCallback(() => setSelected(null), [])

  return (
    <>
      <section id="portfolio" className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <p
                className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--accent)' }}
              >
                PORTFOLIO
              </p>
              <h2
                className="text-3xl sm:text-4xl font-extrabold"
                style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
              >
                Echte Projekte
              </h2>
            </div>
            {showLink && (
              <a
                href="/portfolio"
                className="text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-70"
                style={{ color: 'var(--accent)' }}
              >
                Alle Projekte →
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cases.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {selected && <PortfolioModal project={selected} onClose={closeModal} />}
    </>
  )
}
