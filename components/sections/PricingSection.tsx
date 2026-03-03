'use client'

import { useState } from 'react'
import { PRICING_PLANS, PRICING_NOTE } from '@/lib/constants'

export default function PricingSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section
      id="preise"
      className="py-20 sm:py-28"
      style={{ background: 'var(--bg-light)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent)' }}
          >
            PREISE
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-3"
            style={{ color: 'var(--fg-light)' }}
          >
            Klare Investition, keine Überraschungen
          </h2>
          <p className="text-base" style={{ color: 'var(--muted-light)' }}>
            Alle Preise auf Anfrage per Rechnung. Keine versteckten Kosten.
          </p>
        </div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {PRICING_PLANS.map((plan) => {
            const isHighlighted = hoveredId ? hoveredId === plan.id : plan.featured
            return (
              <div
                key={plan.id}
                className="rounded-xl p-6 sm:p-8 border flex flex-col gap-5 cursor-default"
                style={{
                  background: 'var(--card-light)',
                  borderColor: isHighlighted ? 'var(--accent)' : 'var(--border-light)',
                  boxShadow: isHighlighted
                    ? '0 0 0 1px var(--accent), 0 4px 24px rgba(29,78,216,0.12)'
                    : 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={() => setHoveredId(plan.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Plan header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: 'var(--fg-light)' }}
                      >
                        {plan.name}
                      </h3>
                      {plan.featured && (
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded-full"
                          style={{ background: 'var(--accent)', color: '#fff' }}
                        >
                          Empfohlen
                        </span>
                      )}
                    </div>
                    <p className="text-xs" style={{ color: 'var(--muted-light)' }}>
                      {plan.target}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span
                      className="text-xl font-extrabold font-mono"
                      style={{ color: 'var(--accent)' }}
                    >
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* Features included */}
                {plan.features.length > 0 && (
                  <ul className="flex flex-col gap-2">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: 'var(--fg-light)' }}
                      >
                        <span style={{ color: 'var(--accent)' }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Features excluded */}
                {plan.excluded.length > 0 && (
                  <ul className="flex flex-col gap-2">
                    {plan.excluded.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: 'var(--muted-light)' }}
                      >
                        <span>✗</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                <a
                  href={`/?package=${plan.id}#kontakt`}
                  className={`mt-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded border transition-colors duration-150${!plan.featured ? ' pricing-btn-ghost' : ''}`}
                  style={
                    plan.featured
                      ? {
                          background: 'var(--accent)',
                          color: '#fff',
                          borderColor: 'var(--accent)',
                        }
                      : {
                          background: 'transparent',
                          color: 'var(--fg-light)',
                          borderColor: 'var(--border-light)',
                        }
                  }
                >
                  Anfragen
                </a>
              </div>
            )
          })}
        </div>

        {/* Note */}
        <p
          className="text-sm text-center max-w-xl mx-auto"
          style={{ color: 'var(--muted-light)' }}
        >
          {PRICING_NOTE}
        </p>
      </div>
    </section>
  )
}
