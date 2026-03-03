import { FOOTER } from '@/lib/constants'
import NewsletterForm from './NewsletterForm'

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: '#1f2937', background: '#111827' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Newsletter lead magnet */}
        <div
          className="mb-10 pb-10 border-b rounded-xl p-6 sm:p-8 border"
          style={{
            borderColor: 'rgba(29,78,216,0.25)',
            background: '#1a2035',
          }}
        >
          <NewsletterForm />
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <span
              className="font-mono text-xl font-semibold"
              style={{ color: '#f9fafb' }}
            >
              Dev<span style={{ color: 'var(--accent)' }}>OS</span>
            </span>
            <p className="text-sm" style={{ color: '#9ca3af' }}>
              {FOOTER.tagline}
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-2">
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-1"
              style={{ color: '#6b7280' }}
            >
              Navigation
            </p>
            {FOOTER.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-hover-dark text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2">
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-1"
              style={{ color: '#6b7280' }}
            >
              Rechtliches
            </p>
            {FOOTER.legal.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-hover-dark text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          style={{ borderColor: '#1f2937' }}
        >
          <p className="text-xs" style={{ color: '#6b7280' }}>
            {FOOTER.copyright}
          </p>
          <p className="text-xs" style={{ color: '#6b7280' }}>
            {FOOTER.vatNote}
          </p>
        </div>
      </div>
    </footer>
  )
}
