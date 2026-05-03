'use client'

import { useState } from 'react'
import { PRICING_PLANS, PRICING_NOTE } from '@/lib/constants'

export default function PricingSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section
      id="preise"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Grid background pattern (21st.dev style) */}
      <div className="pricing-grid-bg absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header — centered */}
        <div className="text-center mb-14" data-animate>
          <p
            className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--muted)' }}
          >
            PREISE
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-3"
            style={{ color: 'var(--fg)' }}
          >
            Klare Investition, keine Überraschungen
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: 'var(--muted)' }}>
            Alle Preise auf Anfrage per Rechnung. Keine versteckten Kosten.
          </p>
        </div>

        {/* 4-column grid (21st.dev layout) */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8"
          data-animate
          data-animate-delay="1"
        >
          {PRICING_PLANS.map((plan) => {
            const isActive = hoveredId ? hoveredId === plan.id : plan.featured
            return (
              <div
                key={plan.id}
                className="rounded-2xl p-6 border flex flex-col gap-5 cursor-default relative"
                style={{
                  background: plan.featured ? 'var(--accent-dim)' : 'var(--card)',
                  borderColor: isActive ? 'var(--accent)' : 'var(--border)',
                  boxShadow: isActive
                    ? '0 0 0 1px var(--accent), 0 8px 32px var(--glow)'
                    : 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={() => setHoveredId(plan.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Top badge */}
                {plan.featured && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-mono font-bold px-3 py-1 rounded-full whitespace-nowrap"
                    style={{ background: 'var(--accent)', color: '#fff' }}
                  >
                    ★ Empfohlen
                  </div>
                )}

                {/* Plan name + target */}
                <div>
                  <h3
                    className="text-base font-bold mb-0.5"
                    style={{ color: 'var(--fg)' }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-xs leading-snug" style={{ color: 'var(--muted)' }}>
                    {plan.target}
                  </p>
                </div>

                {/* Price */}
                <div>
                  <span
                    className="text-2xl font-extrabold font-mono"
                    style={{ color: isActive ? 'var(--accent)' : 'var(--fg)' }}
                  >
                    {plan.price}
                  </span>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
                    einmalig
                  </p>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'var(--border)' }} />

                {/* Features included */}
                {plan.features.length > 0 && (
                  <ul className="flex flex-col gap-2 flex-1">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: 'var(--fg)' }}
                      >
                        <span
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: 'var(--accent)' }}
                        >
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Features excluded */}
                {plan.excluded.length > 0 && (
                  <ul className="flex flex-col gap-1.5">
                    {plan.excluded.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: 'var(--muted)' }}
                      >
                        <span className="flex-shrink-0 mt-0.5">✗</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                <a
                  href={`/anfragen?package=${plan.id}`}
                  className={`mt-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded border transition-colors duration-150${!plan.featured ? ' pricing-btn-ghost' : ''}`}
                  style={
                    plan.featured
                      ? { background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' }
                      : { background: 'transparent', color: 'var(--fg)', borderColor: 'var(--border)' }
                  }
                >
                  Anfragen →
                </a>
              </div>
            )
          })}
        </div>

        {/* Footer note */}
        <p
          className="text-sm text-center max-w-xl mx-auto"
          style={{ color: 'var(--muted)' }}
        >
          {PRICING_NOTE}
        </p>
      </div>
    </section>
  )
}
