'use client'

import { useEffect, useState, useRef } from 'react'
import { MessageSquare, Search, Code2, Zap, CheckCircle2 } from 'lucide-react'

const STEPS = [
  {
    id: 1,
    icon: MessageSquare,
    label: 'Erstgespräch',
    detail: 'Ziele & Bedürfnisse verstehen',
    duration: 2000,
  },
  {
    id: 2,
    icon: Search,
    label: 'Analyse',
    detail: 'Strategie & Stack definieren',
    duration: 2000,
  },
  {
    id: 3,
    icon: Code2,
    label: 'Entwicklung',
    detail: 'KI-gestützt, schnell & präzise',
    duration: 2500,
  },
  {
    id: 4,
    icon: Zap,
    label: 'Automatisierung',
    detail: 'Prozesse & Workflows einrichten',
    duration: 2000,
  },
  {
    id: 5,
    icon: CheckCircle2,
    label: 'Launch & Support',
    detail: 'Live — und du bist nicht allein',
    duration: 2000,
  },
]

export function WorkflowDemo() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [barWidth, setBarWidth] = useState(0)
  const rafRef = useRef<number | null>(null)

  // Advance step after each duration
  useEffect(() => {
    const step = STEPS[activeIndex]
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % STEPS.length)
    }, step.duration)
    return () => clearTimeout(timer)
  }, [activeIndex])

  // Animate progress bar: reset to 0 then ramp to 100 over duration
  useEffect(() => {
    setBarWidth(0)
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const duration = STEPS[activeIndex].duration
    rafRef.current = requestAnimationFrame(() => {
      setBarWidth(100)
    })
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [activeIndex])

  const progress = Math.round(((activeIndex + 1) / STEPS.length) * 100)

  return (
    <div
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        maxWidth: '380px',
        width: '100%',
        fontFamily: 'var(--font-jetbrains), monospace',
      }}
    >
      {/* Header */}
      <div
        style={{
          background: 'var(--bg-elevated)',
          borderBottom: '1px solid var(--border)',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
        <span style={{ flex: 1 }} />
        <span style={{ fontSize: '0.7rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          DevOS System
        </span>
      </div>

      {/* Steps */}
      <div style={{ padding: '16px' }}>
        {STEPS.map((step, i) => {
          const state = i < activeIndex ? 'done' : i === activeIndex ? 'active' : 'pending'
          const Icon = step.icon

          return (
            <div
              key={step.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '9px 10px',
                borderRadius: '8px',
                marginBottom: '4px',
                background: state === 'active' ? 'var(--bg-elevated)' : 'transparent',
                transition: 'background 0.3s ease',
              }}
            >
              {/* Icon */}
              <div style={{ flexShrink: 0, width: 28, display: 'flex', justifyContent: 'center' }}>
                {state === 'done' ? (
                  <CheckCircle2
                    size={16}
                    style={{ color: '#4ade80' }}
                  />
                ) : (
                  <Icon
                    size={16}
                    style={{
                      color: state === 'active' ? 'var(--accent)' : 'var(--border)',
                      animation: state === 'active' ? 'stepPulse 1.2s ease-in-out infinite' : 'none',
                    }}
                  />
                )}
              </div>

              {/* Label */}
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: state === 'active' ? 700 : 400,
                  color: state === 'done'
                    ? 'var(--muted)'
                    : state === 'active'
                    ? 'var(--fg)'
                    : 'var(--border)',
                  flex: 1,
                  transition: 'color 0.3s',
                }}
              >
                {step.label}
              </span>

              {/* Status badge */}
              <span
                style={{
                  fontSize: '0.6rem',
                  fontFamily: 'var(--font-jetbrains), monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  padding: '2px 7px',
                  borderRadius: '999px',
                  color: state === 'done'
                    ? '#4ade80'
                    : state === 'active'
                    ? 'var(--accent)'
                    : 'var(--border)',
                  background: state === 'done'
                    ? 'rgba(74,222,128,0.1)'
                    : state === 'active'
                    ? 'var(--accent-dim)'
                    : 'transparent',
                  border: state === 'pending' ? '1px solid var(--border)' : 'none',
                }}
              >
                {state === 'done' ? 'done' : state === 'active' ? 'active' : 'pending'}
              </span>
            </div>
          )
        })}
      </div>

      {/* Active detail + progress bar */}
      <div
        style={{
          borderTop: '1px solid var(--border)',
          padding: '14px 16px 16px',
        }}
      >
        <p
          style={{
            fontSize: '0.75rem',
            color: 'var(--muted)',
            marginBottom: '10px',
            minHeight: '1.2em',
          }}
        >
          {STEPS[activeIndex].detail}
        </p>

        {/* Progress bar track */}
        <div
          style={{
            height: '4px',
            borderRadius: '2px',
            background: 'var(--border)',
            overflow: 'hidden',
            marginBottom: '6px',
          }}
        >
          <div
            style={{
              height: '100%',
              borderRadius: '2px',
              background: 'var(--accent)',
              width: `${barWidth}%`,
              transition: barWidth === 0
                ? 'none'
                : `width ${STEPS[activeIndex].duration}ms linear`,
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.65rem',
            color: 'var(--muted)',
          }}
        >
          <span>Schritt {activeIndex + 1} / {STEPS.length}</span>
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{progress}%</span>
        </div>
      </div>
    </div>
  )
}
