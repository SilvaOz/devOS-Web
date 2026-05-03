'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { PORTFOLIO_CASES } from '@/lib/constants'
import type { PortfolioCase } from '@/lib/constants'
import { X, ExternalLink, Github, ArrowRight } from 'lucide-react'

type Props = {
  maxItems?: number
  showLink?: boolean
}

// ─── Modal ──────────────────────────────────────────────────────────────────

function PortfolioModal({
  project,
  onClose,
}: {
  project: PortfolioCase
  onClose: () => void
}) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(5px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="modal-panel relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl"
        style={{ background: 'var(--card)', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* ── Hero image ─────────────────────────────────────────────────── */}
        <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-2xl flex-shrink-0">
          {project.image ? (
            <Image
              src={project.image}
              alt={`Screenshot: ${project.title}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 672px"
              priority
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
            />
          )}

          {/* Bottom gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.75) 100%)',
            }}
            aria-hidden="true"
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
            style={{ background: 'rgba(0,0,0,0.55)', color: '#fff' }}
            aria-label="Schließen"
          >
            <X size={16} />
          </button>

          {/* Title over image */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
            <p
              className="text-xs font-mono mb-1.5 uppercase tracking-widest"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              {project.type}
            </p>
            <h2
              className="text-2xl sm:text-3xl font-extrabold text-white leading-tight"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
            >
              {project.title}
            </h2>
          </div>
        </div>

        {/* ── Content ────────────────────────────────────────────────────── */}
        <div className="p-6 sm:p-8 flex flex-col gap-7">

          {/* Metrics */}
          <div className="flex flex-wrap gap-2.5">
            {project.metrics.map(m => (
              <span
                key={m}
                className="text-sm font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: 'var(--accent-dim)',
                  color: 'var(--accent)',
                  border: '1px solid rgba(194,65,12,0.2)',
                }}
              >
                ✓ {m}
              </span>
            ))}
          </div>

          {/* Description + Problem/Lösung */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.description && (
              <div>
                <p
                  className="text-xs font-mono uppercase tracking-widest mb-2"
                  style={{ color: 'var(--accent)' }}
                >
                  Das Projekt
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {project.description}
                </p>
              </div>
            )}
            {project.problem && (
              <div>
                <p
                  className="text-xs font-mono uppercase tracking-widest mb-2"
                  style={{ color: 'var(--accent)' }}
                >
                  Problem → Lösung
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {project.problem}
                </p>
              </div>
            )}
          </div>

          {/* Stack */}
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-2.5"
              style={{ color: 'var(--muted)' }}
            >
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map(tag => (
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
          </div>

          {/* Links */}
          {(project.url || project.github) && (
            <div
              className="flex flex-wrap gap-3 pt-5 border-t"
              style={{ borderColor: 'var(--border)' }}
            >
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded transition-opacity hover:opacity-90"
                  style={{ background: 'var(--accent)', color: '#fff' }}
                >
                  <ExternalLink size={14} />
                  Website besuchen
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded border transition-colors hover:opacity-80"
                  style={{
                    color: 'var(--fg)',
                    borderColor: 'var(--border)',
                    background: 'var(--bg)',
                  }}
                >
                  <Github size={14} />
                  GitHub
                </a>
              )}
            </div>
          )}

          {/* CTA */}
          <div
            className="rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4"
            style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
          >
            <div className="flex-1">
              <p className="text-sm font-bold mb-0.5" style={{ color: 'var(--fg)' }}>
                Ähnliches Projekt geplant?
              </p>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>
                Ich antworte innerhalb von 24–48 Stunden.
              </p>
            </div>
            <a
              href="/#kontakt"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded whitespace-nowrap transition-opacity hover:opacity-90"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Anfragen <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Card ───────────────────────────────────────────────────────────────────

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
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot: ${project.title}`}
            fill
            className="object-cover object-top transition-all duration-500 blur-md group-hover:blur-0 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center transition-all duration-500 blur-md group-hover:blur-0`}
          >
            <span className="text-3xl font-extrabold font-mono text-white/20">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-xs font-mono px-2 py-1 rounded"
            style={{
              background: 'rgba(28,25,23,0.72)',
              color: '#fff',
              backdropFilter: 'blur(6px)',
            }}
          >
            {project.type}
          </span>
        </div>

        {/* Hover overlay hint */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: 'rgba(0,0,0,0.35)' }}
          aria-hidden="true"
        >
          <span
            className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Details ansehen →
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-base font-bold" style={{ color: 'var(--fg)' }}>
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map(tag => (
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
        </div>

        <div
          className="flex flex-wrap gap-4 pt-2 border-t"
          style={{ borderColor: 'var(--border)' }}
        >
          {project.metrics.map(metric => (
            <span key={metric} className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
              {metric}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}

// ─── Section ────────────────────────────────────────────────────────────────

export default function PortfolioSection({ maxItems, showLink }: Props) {
  const cases = maxItems !== undefined ? PORTFOLIO_CASES.slice(0, maxItems) : PORTFOLIO_CASES
  const [selected, setSelected] = useState<PortfolioCase | null>(null)
  const closeModal = useCallback(() => setSelected(null), [])

  return (
    <>
      <section id="portfolio" className="py-20 sm:py-28" style={{ background: 'var(--bg)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="mb-12 flex items-end justify-between gap-4" data-animate>
            <div>
              <p
                className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--accent)' }}
              >
                PORTFOLIO
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--fg)' }}>
                Echte Projekte
              </h2>
            </div>
            {showLink && (
              <a href="/portfolio" className="text-sm font-semibold whitespace-nowrap link-hover-accent">
                Alle Projekte →
              </a>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-animate data-animate-delay="1">
            {cases.map(project => (
              <PortfolioCard
                key={project.title}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && <PortfolioModal project={selected} onClose={closeModal} />}
    </>
  )
}
