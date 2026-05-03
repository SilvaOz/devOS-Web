'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, ExternalLink } from 'lucide-react'
import type { PortfolioCase } from '@/lib/constants'

// ─── Modal ───────────────────────────────────────────────────────────────────

function Modal({ project, onClose }: { project: PortfolioCase; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.80)', backdropFilter: 'blur(6px)', zIndex: 9999 }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{ background: 'var(--card)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={`relative h-44 bg-gradient-to-br ${project.gradient} rounded-t-2xl flex items-end px-6 pb-5`}
        >
          <div
            className="absolute inset-0 rounded-t-2xl"
            style={{ background: 'linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.65) 100%)' }}
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
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-5">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: 'var(--accent)' }}>
              {project.kind === 'client' ? 'Problem' : 'Herausforderung'}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{project.problem}</p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: 'var(--accent)' }}>
              {project.kind === 'client' ? 'Lösung' : 'Was ich gebaut habe'}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{project.solution}</p>
          </div>

          <div
            className="rounded-lg p-4"
            style={{ background: 'var(--accent-dim)', border: '1px solid rgba(46,125,122,0.15)' }}
          >
            <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: 'var(--accent)' }}>
              Ergebnis
            </p>
            <p className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>{project.result}</p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded border"
                style={{ background: 'var(--bg)', color: 'var(--fg)', borderColor: 'var(--border)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-opacity hover:opacity-85"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                <ExternalLink size={14} />
                {project.badge ?? 'Ansehen'}
              </a>
            )}
            <a
              href="/anfragen"
              className="text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: 'var(--accent)' }}
            >
              Ähnliches Projekt anfragen →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Card ────────────────────────────────────────────────────────────────────

function Card({ project, onClick }: { project: PortfolioCase; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-left rounded-xl border overflow-hidden group w-full transition-shadow duration-200 hover:shadow-lg"
      style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
    >
      {/* Gradient */}
      <div className={`relative h-36 bg-gradient-to-br ${project.gradient} flex items-end px-5 pb-4`}>
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.65) 100%)' }}
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: 'rgba(0,0,0,0.22)' }}
          aria-hidden="true"
        >
          <span
            className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Details ansehen →
          </span>
        </div>
        <div className="relative z-10">
          <p className="text-xs font-mono mb-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {project.sector} · {project.location}
          </p>
          <h3 className="text-base font-bold text-white leading-tight">{project.title}</h3>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-2.5">
        <p className="text-sm" style={{ color: 'var(--muted)' }}>{project.subtitle}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-0.5 rounded border"
              style={{ background: 'var(--bg)', color: 'var(--muted)', borderColor: 'var(--border)' }}
            >
              {tag}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span
              className="text-xs font-mono px-2 py-0.5 rounded border"
              style={{ background: 'var(--bg)', color: 'var(--muted)', borderColor: 'var(--border)' }}
            >
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>
    </button>
  )
}

// ─── Grid ────────────────────────────────────────────────────────────────────

export default function PortfolioGrid({
  cases,
}: {
  cases: PortfolioCase[]
}) {
  const [selected, setSelected] = useState<PortfolioCase | null>(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((p) => (
          <Card key={p.id} project={p} onClick={() => setSelected(p)} />
        ))}
      </div>
      {selected && <Modal project={selected} onClose={close} />}
    </>
  )
}
