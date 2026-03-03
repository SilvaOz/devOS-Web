'use client'

import { useEffect, useState } from 'react'
import { NAV_LINKS, NAV_CTA } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(232,232,237,0.45)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="/"
          className="font-mono text-xl font-semibold tracking-tight select-none"
          style={{ color: 'var(--fg)' }}
        >
          Dev<span style={{ color: 'var(--accent)' }}>OS</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: '#333' }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = '#000')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = '#333')
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="/#kontakt"
          className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold rounded transition-opacity duration-150 hover:opacity-90"
          style={{
            background: 'var(--accent)',
            color: '#000',
          }}
        >
          {NAV_CTA}
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menü öffnen"
        >
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{
              background: 'var(--fg)',
              transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : '',
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{
              background: 'var(--fg)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{
              background: 'var(--fg)',
              transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : '',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-3"
          style={{
            background: '#e8e8ed',
            borderBottom: '1px solid var(--border)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-sm font-medium py-2"
              style={{ color: 'var(--muted)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#kontakt"
            onClick={handleNavClick}
            className="mt-2 inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded"
            style={{ background: 'var(--accent)', color: '#000' }}
          >
            {NAV_CTA}
          </a>
        </div>
      )}
    </header>
  )
}
