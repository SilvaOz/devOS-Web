import { ABOUT } from '@/lib/constants'

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
            {/* Photo placeholder — Reemplazar con <Image src="/oscar.jpg" ... /> */}
            <div
              className="w-full max-w-xs rounded-2xl overflow-hidden border"
              style={{ borderColor: 'var(--border)' }}
            >
              <div
                className="w-full aspect-square flex items-end justify-center relative"
                style={{
                  background:
                    'linear-gradient(170deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
                }}
              >
                {/* Silueta SVG — reemplazar con foto real */}
                <svg
                  viewBox="0 0 200 220"
                  width="100%"
                  aria-hidden="true"
                  style={{ display: 'block' }}
                >
                  {/* Fondo de laptop / desk glow */}
                  <ellipse cx="100" cy="195" rx="70" ry="12" fill="rgba(255,215,0,0.08)" />
                  {/* Cuerpo */}
                  <rect x="62" y="105" width="76" height="90" rx="8" fill="#2a2a3a" />
                  {/* Cabeza */}
                  <circle cx="100" cy="82" r="30" fill="#2a2a3a" />
                  {/* Laptop base */}
                  <rect x="45" y="170" width="110" height="8" rx="3" fill="#1a1a2a" />
                  <rect x="55" y="150" width="90" height="22" rx="4" fill="#12121a" stroke="#2a2a3a" strokeWidth="1" />
                  {/* Laptop screen glow */}
                  <rect x="58" y="153" width="84" height="16" rx="2" fill="rgba(255,215,0,0.12)" />
                  {/* Hands on keyboard */}
                  <ellipse cx="80" cy="158" rx="12" ry="5" fill="#2a2a3a" />
                  <ellipse cx="120" cy="158" rx="12" ry="5" fill="#2a2a3a" />
                </svg>

                {/* Accent glow */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-16"
                  style={{
                    background: 'linear-gradient(to top, rgba(255,215,0,0.06), transparent)',
                  }}
                  aria-hidden="true"
                />
              </div>
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
                  background: 'var(--card)',
                  borderColor: 'var(--border)',
                }}
              >
                <span className="text-2xl">{point.icon}</span>
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
                borderColor: 'rgba(255,215,0,0.2)',
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
