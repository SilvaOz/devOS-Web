import { ReactElement } from 'react'
import { MARQUEE_ITEMS } from '@/lib/constants'

// ─── SVG Logo components ──────────────────────────────────────────────────────

const LogoReact = () => (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor">
    <ellipse cx="20" cy="20" rx="17" ry="6.5" strokeWidth="1.5" />
    <ellipse cx="20" cy="20" rx="17" ry="6.5" strokeWidth="1.5" transform="rotate(60 20 20)" />
    <ellipse cx="20" cy="20" rx="17" ry="6.5" strokeWidth="1.5" transform="rotate(-60 20 20)" />
    <circle cx="20" cy="20" r="2.5" fill="currentColor" stroke="none" />
  </svg>
)

const LogoNextjs = () => (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 30V10l16 20V10" />
  </svg>
)

const LogoWordPress = () => (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor">
    <circle cx="20" cy="20" r="17" strokeWidth="1.5" />
    <path d="M11 14l3.5 12 5.5-9 5.5 9 3.5-12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const LogoTypeScript = () => (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
    <rect x="4" y="4" width="32" height="32" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 17h9M14.5 17v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 25c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-2.5-3-3c-1.5-.5-2.5-1.2-2.5-2.5S23.8 17 25 17s2.5 1.1 2.5 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const LogoNodejs = () => (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor">
    <path d="M20 4l14 8v16l-14 8L6 28V12z" strokeWidth="1.5" />
    <path d="M14 27V13l6 13 6-13v14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const LogoTailwind = () => (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M5 16c1.5-5 5-7.5 9.5-5.5S21 17 25 15s7-8 10-9" />
    <path d="M5 25c1.5-5 5-7.5 9.5-5.5S21 26 25 24s7-8 10-9" />
  </svg>
)

const LogoMongoDB = () => (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor">
    <path d="M20 4c0 0-11 9-11 19a11 11 0 0022 0C31 13 20 4 20 4z" strokeWidth="1.5" />
    <path d="M20 30v7" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const LogoStripe = () => (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
    <rect x="4" y="4" width="32" height="32" rx="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M14 24c0 3 2.5 4.5 6 4.5 4 0 6-1.8 6-4.5 0-2.5-1.8-4-5.5-4.5C17.5 19 16 18 16 16s1.5-3 4-3c2 0 4 1 4 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const LogoGoogle = () => (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor">
    <path d="M34 20c0-7.7-6.3-14-14-14S6 12.3 6 20s6.3 14 14 14c6.5 0 12-4.5 13.5-10.5H20V20h14v0z" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

const LogoGitHub = () => (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="currentColor">
    <path d="M20 4C11.2 4 4 11.2 4 20c0 7.1 4.6 13.1 11 15.3.8.1 1.1-.4 1.1-.8v-3c-4.5 1-5.4-2.1-5.4-2.1-.7-1.8-1.8-2.3-1.8-2.3-1.5-1 .1-1 .1-1 1.6.1 2.5 1.7 2.5 1.7 1.5 2.5 3.8 1.8 4.7 1.3.1-1 .6-1.8 1-2.2-3.6-.4-7.4-1.8-7.4-8 0-1.8.6-3.2 1.7-4.3-.2-.4-.7-2 .2-4.2 0 0 1.4-.4 4.5 1.7 1.3-.4 2.7-.5 4-.5s2.7.2 4 .5c3.1-2.1 4.5-1.7 4.5-1.7.9 2.2.3 3.8.1 4.2 1 1.1 1.7 2.5 1.7 4.3 0 6.2-3.8 7.6-7.4 8 .6.5 1.1 1.5 1.1 3.1v4.5c0 .4.3.9 1.1.8C31.4 33.1 36 27.1 36 20 36 11.2 28.8 4 20 4z" />
  </svg>
)

const LogoDocker = () => (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="5" height="4" rx="0.5" />
    <rect x="14" y="12" width="5" height="4" rx="0.5" />
    <rect x="20" y="12" width="5" height="4" rx="0.5" />
    <rect x="14" y="7" width="5" height="4" rx="0.5" />
    <path d="M5 22s2-4 8-4h16c2.5 0 5-2 6-4" strokeLinecap="round" />
    <path d="M5 22c0 5 4 8 10 8h4c6 0 10-3 10-8" strokeLinecap="round" />
  </svg>
)

const LogoPostgreSQL = () => (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="18" cy="18" rx="11" ry="12" />
    <path d="M29 13c2-1 6 0 6 4s-4 5-6 5" />
    <path d="M18 30v7M22 30v7" strokeLinecap="round" />
    <path d="M14 16c0 0 1.5 3 4 3s4-3 4-3" strokeLinecap="round" />
    <circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="21" cy="14" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

const LogoDivi = () => (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor">
    <circle cx="20" cy="20" r="17" strokeWidth="1.5" />
    <path d="M14 10h7c5.5 0 9 4 9 10s-3.5 10-9 10h-7V10z" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

const LogoWooCommerce = () => (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor">
    <path d="M7 9h26l-4 20H11L7 9z" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M14 9V7c0-3.5 12-3.5 12 0v2" strokeWidth="1.5" />
    <path d="M13 24l2-9 3.5 6 3.5-6 2 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const LogoAmelia = () => (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor">
    <path d="M7 33L20 7l13 26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 25h16" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

// ─── Logo map ─────────────────────────────────────────────────────────────────

const LOGOS: Record<string, () => ReactElement> = {
  'React': LogoReact,
  'Next.js': LogoNextjs,
  'WordPress': LogoWordPress,
  'TypeScript': LogoTypeScript,
  'Node.js': LogoNodejs,
  'Tailwind CSS': LogoTailwind,
  'MongoDB': LogoMongoDB,
  'Stripe': LogoStripe,
  'Google': LogoGoogle,
  'GitHub': LogoGitHub,
  'Docker': LogoDocker,
  'PostgreSQL': LogoPostgreSQL,
  'Divi': LogoDivi,
  'WooCommerce': LogoWooCommerce,
  'Amelia': LogoAmelia,
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function MarqueeSection() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <section
      className="py-6 overflow-hidden border-y"
      style={{
        background: 'var(--bg-elevated)',
        borderColor: 'var(--border)',
      }}
      aria-label="Technologie-Stack"
    >
      <div className="flex">
        <ul
          className="marquee-track flex items-center gap-12 whitespace-nowrap"
          aria-hidden="true"
        >
          {items.map((item, i) => {
            const Logo = LOGOS[item.label]
            return (
              <li
                key={`${item.label}-${i}`}
                className={`logo-item flex items-center gap-2.5 select-none${item.wp ? ' logo-wp' : ''}`}
                style={{ color: item.wp ? 'var(--accent-wp)' : 'var(--muted)' }}
              >
                {Logo && <Logo />}
                <span className="text-sm font-mono font-medium">{item.label}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
