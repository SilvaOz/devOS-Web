'use client'

import { useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import type { IconName } from '@/components/ui/Icon'

function FeatureList({ items, accent = 'var(--accent)' }: { items: readonly string[]; accent?: string }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'var(--fg)' }}>
          <span className="mt-0.5 flex-shrink-0" style={{ color: accent }}>✓</span>
          {f}
        </li>
      ))}
    </ul>
  )
}

const PRAXIS_FULL = {
  price: '1.500 EUR',
  features: [
    'WordPress + Divi oder Next.js',
    'Amelia Online-Buchungssystem',
    'Google Calendar Sync',
    'SEO-Grundlage + Yoast',
    'Zoom-Integration',
    'DSGVO-konform',
    'IONOS / All-Inkl Hosting',
  ] as const,
}

const PRAXIS_DESIGN = {
  price: '900 EUR',
  features: [
    'Individuelles Design nach Ihrem Stil',
    'Bis 5 Seiten',
    'Mobile-optimiert',
    'DSGVO-Grundlage',
    'IONOS / All-Inkl Hosting',
  ] as const,
  excluded: ['Amelia Buchungssystem', 'Google Calendar Sync', 'SEO-Integration', 'Zoom'],
}

const OTHER_PACKAGES = [
  {
    id: 'ki-automation',
    icon: 'Zap' as IconName,
    name: 'KI-Automatisierung',
    target: 'Selbstständige & Teams',
    price: 'ab 500 EUR',
    priceNote: 'je nach Komplexität',
    desc: 'Automatisierter Workflow nach Maß — Make.com, Python-Pipelines oder Claude-API-Agent. Einmalig einrichten, dauerhaft sparen.',
    features: [
      'Anforderungsanalyse inklusive',
      'Make.com oder Python-Pipeline',
      'Claude API / OpenAI Integration',
      'Google Sheets / Drive Anbindung',
      'Dokumentation + Übergabe',
      'Optionaler monatlicher Support',
    ] as const,
    scopeNote: 'Einfache Workflows ab 500 EUR · Komplexe Systeme auf Anfrage',
    href: '/anfragen?paket=ki-automation',
  },
  {
    id: 'app-mvp',
    icon: 'Smartphone' as IconName,
    name: 'App MVP',
    target: 'Gründer & Kreative',
    price: 'ab 2.500 EUR',
    priceNote: 'je nach Scope',
    desc: 'Funktionaler Prototyp für iOS, Android oder Web. Kein langer Entwicklungszyklus — in wenigen Wochen einsatzbereit.',
    features: [
      'React Native (iOS + Android) oder Next.js',
      'Design + Entwicklung',
      'Authentifizierung + Datenbank',
      'Deploy auf App Store / Vercel',
      'Festpreis nach Scope-Gespräch',
    ] as const,
    scopeNote: 'Web-App ab 2.500 EUR · Native App & komplexe Plattformen auf Anfrage',
    href: '/anfragen?paket=app-mvp',
  },
  {
    id: 'content-system',
    icon: 'Rss' as IconName,
    name: 'Content-System',
    target: 'Creator & Coaches',
    price: 'ab 1.200 EUR',
    priceNote: 'einmalig',
    desc: 'YouTube-Kanal-Setup mit KI-Pipeline, Pinterest-Integration und Blog — alles automatisiert, sodass Sie sich aufs Erstellen konzentrieren.',
    features: [
      'YouTube-Kanal-Strategie + SEO',
      'KI-Content-Pipeline (Python)',
      'Pinterest Business Setup',
      'Blog auf Next.js',
      'Make.com Automatisierung',
    ] as const,
    scopeNote: 'Umfang je nach Kanälen und Automatisierungsgrad',
    href: '/anfragen?paket=content-system',
  },
]

export default function PaketeGrid() {
  const [praxisFull, setPraxisFull] = useState(true)

  const praxis = praxisFull ? PRAXIS_FULL : PRAXIS_DESIGN

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

      {/* ── Praxis Digital (interaktiv) ── */}
      <div
        className="rounded-xl p-7 border flex flex-col gap-5 card-hover"
        style={{ background: 'var(--card)' }}
      >
        {/* Header */}
        <div className="flex items-start gap-4">
          <span
            className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0"
            style={{ background: 'var(--accent-dim)' }}
          >
            <Icon name="Stethoscope" size={20} style={{ color: 'var(--accent)' }} />
          </span>
          <div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--fg)' }}>Praxis Digital</h3>
            <p className="text-xs font-mono" style={{ color: 'var(--muted)' }}>Therapeuten &amp; Coaches</p>
          </div>
        </div>

        {/* Toggle */}
        <div
          className="flex rounded-lg p-1 gap-1"
          style={{ background: 'var(--bg-elevated)' }}
        >
          <button
            onClick={() => setPraxisFull(true)}
            className="flex-1 text-xs font-semibold py-2 px-3 rounded-md transition-all duration-150"
            style={
              praxisFull
                ? { background: 'var(--accent)', color: '#fff' }
                : { background: 'transparent', color: 'var(--muted)' }
            }
          >
            Mit Funktionen
          </button>
          <button
            onClick={() => setPraxisFull(false)}
            className="flex-1 text-xs font-semibold py-2 px-3 rounded-md transition-all duration-150"
            style={
              !praxisFull
                ? { background: 'var(--accent)', color: '#fff' }
                : { background: 'transparent', color: 'var(--muted)' }
            }
          >
            Nur Design
          </button>
        </div>

        {/* Precio */}
        <div className="flex items-center gap-3">
          <span
            className="text-2xl font-extrabold font-mono"
            style={{ color: 'var(--accent)' }}
          >
            {praxis.price}
          </span>
          <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>einmalig</span>
        </div>

        {/* Descripción */}
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
          {praxisFull
            ? 'Vollständige Website für Ihre Praxis — mit Online-Buchung, Google-Kalender-Sync, SEO und Hosting-Setup.'
            : 'Professionelles Design für Ihre Praxis — ohne technische Integrationen. Schnell, klar und mobil-optimiert.'}
        </p>

        {/* Features */}
        <FeatureList items={praxis.features} />

        {/* Nota si solo diseño */}
        {!praxisFull && (
          <div
            className="rounded-lg px-4 py-3 text-xs"
            style={{ background: 'var(--bg-elevated)', borderLeft: '3px solid var(--accent)', color: 'var(--muted)', lineHeight: '1.6' }}
          >
            <span style={{ color: 'var(--fg)', fontWeight: 600 }}>Hinweis: </span>
            Ohne {PRAXIS_DESIGN.excluded.join(', ')}. Diese können später als Erweiterung hinzugefügt werden.
          </div>
        )}

        <a
          href={`/anfragen?paket=praxis-digital${praxisFull ? '' : '&variante=design'}`}
          className="mt-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded border transition-colors duration-150 pricing-btn-ghost"
          style={{ background: 'transparent', color: 'var(--fg)', borderColor: 'var(--border)', borderRadius: '6px' }}
        >
          Kostenlos anfragen →
        </a>
      </div>

      {/* ── Otros 3 paquetes ── */}
      {OTHER_PACKAGES.map((pkg) => (
        <div
          key={pkg.id}
          className="rounded-xl p-7 border flex flex-col gap-5 card-hover"
          style={{ background: 'var(--card)' }}
        >
          <div className="flex items-start gap-4">
            <span
              className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0"
              style={{ background: 'var(--accent-dim)' }}
            >
              <Icon name={pkg.icon} size={20} style={{ color: 'var(--accent)' }} />
            </span>
            <div>
              <h3 className="text-lg font-bold" style={{ color: 'var(--fg)' }}>{pkg.name}</h3>
              <p className="text-xs font-mono" style={{ color: 'var(--muted)' }}>{pkg.target}</p>
            </div>
          </div>

          {/* Precio */}
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold font-mono" style={{ color: 'var(--accent)' }}>
              {pkg.price}
            </span>
            <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>{pkg.priceNote}</span>
          </div>

          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
            {pkg.desc}
          </p>

          <FeatureList items={pkg.features} />

          {/* Nota de scope */}
          <p
            className="text-xs font-mono"
            style={{ color: 'var(--muted)', borderLeft: '2px solid var(--border)', paddingLeft: '0.75rem' }}
          >
            {pkg.scopeNote}
          </p>

          <a
            href={pkg.href}
            className="mt-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded border transition-colors duration-150 pricing-btn-ghost"
            style={{ background: 'transparent', color: 'var(--fg)', borderColor: 'var(--border)', borderRadius: '6px' }}
          >
            Kostenlos anfragen →
          </a>
        </div>
      ))}

    </div>
  )
}
