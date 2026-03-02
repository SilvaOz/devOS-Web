import { FOOTER } from '@/lib/constants'

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <span
              className="font-mono text-xl font-semibold"
              style={{ color: 'var(--fg)' }}
            >
              Dev<span style={{ color: 'var(--accent)' }}>OS</span>
            </span>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              {FOOTER.tagline}
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-2">
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-1"
              style={{ color: 'var(--muted)' }}
            >
              Navigation
            </p>
            {FOOTER.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-hover text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2">
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-1"
              style={{ color: 'var(--muted)' }}
            >
              Rechtliches
            </p>
            {FOOTER.legal.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-hover text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            {FOOTER.copyright}
          </p>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            {FOOTER.vatNote}
          </p>
        </div>
      </div>
    </footer>
  )
}
