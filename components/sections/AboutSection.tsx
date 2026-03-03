import Image from 'next/image'
import { ABOUT } from '@/lib/constants'
import { Icon } from '@/components/ui/Icon'
import type { IconName } from '@/components/ui/Icon'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left column — photo + personal intro */}
          <div className="flex flex-col gap-6">
            <div
              className="w-full max-w-xs rounded-2xl overflow-hidden border"
              style={{ borderColor: 'var(--border)' }}
            >
              <Image
                src="/oscar-about.png"
                alt="Oscar — DevOS Web"
                width={400}
                height={400}
                className="w-full h-auto object-cover object-top"
                priority
              />
            </div>

            {/* Name + role */}
            <div>
              <p
                className="text-xs font-mono font-semibold uppercase tracking-widest mb-2"
                style={{ color: 'var(--accent)' }}
              >
                {ABOUT.label}
              </p>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-1"
                style={{ color: 'var(--fg)' }}
              >
                {ABOUT.name}
              </h2>
              <p className="text-sm font-mono mb-4" style={{ color: 'var(--muted)' }}>
                {ABOUT.role}
              </p>
              <p className="text-base leading-relaxed mb-3" style={{ color: 'var(--muted)' }}>
                {ABOUT.paragraph}
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                {ABOUT.paragraph2}
              </p>
            </div>

            <a
              href="/#kontakt"
              className="self-start inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded transition-opacity duration-150 hover:opacity-90"
              style={{ background: 'var(--accent)', color: '#000' }}
            >
              {ABOUT.cta}
            </a>
          </div>

          {/* Right column — points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:pt-4">
            {ABOUT.points.map((point) => (
              <div
                key={point.title}
                className="rounded-xl p-5 border flex flex-col gap-2 card-hover"
                style={{
                  background: 'var(--bg)',
                  borderColor: 'var(--border)',
                }}
              >
                <Icon name={point.icon as IconName} size={22} style={{ color: 'var(--accent)' }} />
                <h3
                  className="text-sm font-bold"
                  style={{ color: 'var(--fg)' }}
                >
                  {point.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {point.description}
                </p>
              </div>
            ))}

            {/* Quote card */}
            <div
              className="sm:col-span-2 rounded-xl p-5 border"
              style={{
                background: 'var(--accent-dim)',
                borderColor: 'rgba(29,78,216,0.2)',
              }}
            >
              <p
                className="text-sm leading-relaxed italic"
                style={{ color: 'var(--fg)' }}
              >
                "Mein Ziel ist einfach: dass Sie sich nach unserem ersten Gespräch bereits entspannt fühlen. Alles andere übernehme ich."
              </p>
              <p className="text-xs mt-2 font-mono" style={{ color: 'var(--accent)' }}>
                — Oscar, Gründer DevOS Web
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
