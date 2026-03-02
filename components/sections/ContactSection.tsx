'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { CONTACT, contactSchema, type ContactFormData } from '@/lib/constants'

export default function ContactSection() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [sendError, setSendError] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  // Read ?package= from URL and pre-select
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const pkg = params.get('package')
    if (pkg) {
      const valid = CONTACT.packageOptions.find((o) => o.value === pkg)
      if (valid) setValue('package', pkg)
    }
  }, [setValue])

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    setSendError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        router.push('/success')
      } else {
        setSendError(true)
      }
    } catch {
      setSendError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const inputBase: React.CSSProperties = {
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border)',
    color: 'var(--fg)',
    borderRadius: '8px',
    padding: '10px 14px',
    fontSize: '14px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.15s',
  }

  const errorStyle: React.CSSProperties = {
    color: '#f87171',
    fontSize: '12px',
    marginTop: '4px',
  }

  return (
    <section
      id="kontakt"
      className="py-20 sm:py-28"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Info left */}
          <div className="flex flex-col gap-6">
            <div>
              <p
                className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--accent)' }}
              >
                {CONTACT.label}
              </p>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-3"
                style={{ color: 'var(--fg)' }}
              >
                {CONTACT.h2}
              </h2>
              <p className="text-base" style={{ color: 'var(--muted)' }}>
                {CONTACT.paragraph}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span style={{ color: 'var(--accent)' }}>📧</span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm transition-colors duration-150"
                  style={{ color: 'var(--fg)' }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = 'var(--accent)')
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = 'var(--fg)')
                  }
                >
                  {CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ color: 'var(--accent)' }}>📍</span>
                <span className="text-sm" style={{ color: 'var(--fg)' }}>
                  {CONTACT.location}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ color: 'var(--accent)' }}>🕐</span>
                <span className="text-sm" style={{ color: 'var(--fg)' }}>
                  {CONTACT.hours}
                </span>
              </div>
            </div>

            <p
              className="text-sm italic"
              style={{ color: 'var(--muted)' }}
            >
              {CONTACT.noPhone}
            </p>

            <div
              className="rounded-lg p-4 border"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              <p
                className="text-xs font-mono mb-1"
                style={{ color: 'var(--muted)' }}
              >
                IBAN (Referenz)
              </p>
              <p
                className="text-sm font-mono"
                style={{ color: 'var(--fg)' }}
              >
                {CONTACT.ibanPlaceholder}
              </p>
            </div>
          </div>

          {/* Form right */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
            noValidate
          >
            {/* Name */}
            <div>
              <label
                className="block text-sm font-medium mb-1.5"
                style={{ color: 'var(--fg)' }}
                htmlFor="name"
              >
                Vorname *
              </label>
              <input
                id="name"
                type="text"
                autoComplete="given-name"
                style={inputBase}
                {...register('name')}
                onFocus={(e) =>
                  (e.target.style.borderColor = 'var(--accent)')
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = 'var(--border)')
                }
              />
              {errors.name && (
                <p style={errorStyle}>{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-sm font-medium mb-1.5"
                style={{ color: 'var(--fg)' }}
                htmlFor="email"
              >
                E-Mail *
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                style={inputBase}
                {...register('email')}
                onFocus={(e) =>
                  (e.target.style.borderColor = 'var(--accent)')
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = 'var(--border)')
                }
              />
              {errors.email && (
                <p style={errorStyle}>{errors.email.message}</p>
              )}
            </div>

            {/* Package select */}
            <div>
              <label
                className="block text-sm font-medium mb-1.5"
                style={{ color: 'var(--fg)' }}
                htmlFor="package"
              >
                Paket *
              </label>
              <select
                id="package"
                style={{ ...inputBase, cursor: 'pointer' }}
                {...register('package')}
                onFocus={(e) =>
                  (e.target.style.borderColor = 'var(--accent)')
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = 'var(--border)')
                }
              >
                <option value="" style={{ background: 'var(--bg-elevated)' }}>
                  Bitte wählen…
                </option>
                {CONTACT.packageOptions.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    style={{ background: 'var(--bg-elevated)' }}
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.package && (
                <p style={errorStyle}>{errors.package.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-sm font-medium mb-1.5"
                style={{ color: 'var(--fg)' }}
                htmlFor="message"
              >
                Nachricht *
              </label>
              <textarea
                id="message"
                rows={5}
                style={{ ...inputBase, resize: 'vertical' }}
                {...register('message')}
                onFocus={(e) =>
                  (e.target.style.borderColor = 'var(--accent)')
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = 'var(--border)')
                }
              />
              {errors.message && (
                <p style={errorStyle}>{errors.message.message}</p>
              )}
            </div>

            {/* Privacy checkbox */}
            <div className="flex items-start gap-3">
              <input
                id="privacy"
                type="checkbox"
                className="mt-0.5 flex-shrink-0"
                style={{ accentColor: 'var(--accent)' }}
                {...register('privacy')}
              />
              <label
                htmlFor="privacy"
                className="text-sm"
                style={{ color: 'var(--muted)' }}
              >
                Ich akzeptiere die{' '}
                <a
                  href="/datenschutz"
                  style={{ color: 'var(--accent)' }}
                  className="underline underline-offset-2"
                >
                  Datenschutzerklärung
                </a>{' '}
                *
              </label>
            </div>
            {errors.privacy && (
              <p style={{ ...errorStyle, marginTop: '-12px' }}>
                {errors.privacy.message}
              </p>
            )}

            {/* Error message */}
            {sendError && (
              <p
                className="text-sm rounded-lg p-3"
                style={{
                  color: '#f87171',
                  background: 'rgba(248,113,113,0.1)',
                  border: '1px solid rgba(248,113,113,0.2)',
                }}
              >
                {CONTACT.errorMessage}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded transition-opacity duration-150 disabled:opacity-60"
              style={{ background: 'var(--accent)', color: '#000' }}
            >
              {isLoading ? 'Wird gesendet…' : CONTACT.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
