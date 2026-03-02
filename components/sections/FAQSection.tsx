'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section
      id="faq"
      className="py-20 sm:py-28"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent)' }}
          >
            FAQ
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold"
            style={{ color: 'var(--fg)' }}
          >
            Häufige Fragen
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-2">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={item.question}
                className="rounded-xl border overflow-hidden transition-colors duration-150"
                style={{
                  background: 'var(--card)',
                  borderColor: isOpen ? 'var(--accent)' : 'var(--border)',
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-sm font-semibold"
                    style={{ color: 'var(--fg)' }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="flex-shrink-0 text-base transition-transform duration-300"
                    style={{
                      color: 'var(--accent)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}
                >
                  <p
                    className="px-5 pb-5 text-sm leading-relaxed"
                    style={{ color: 'var(--muted)' }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
