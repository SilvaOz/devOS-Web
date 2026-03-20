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
        background: scrolled ? 'rgba(247,243,238,0.6)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-1 select-none font-mono tracking-tight"
          aria-label="DevOS Web — Startseite"
        >
          <span className="font-bold text-lg" style={{ color: 'var(--accent)' }}>
            &gt;_
          </span>
          <span className="font-semibold text-lg" style={{ color: 'var(--fg)' }}>
            DevOS
          </span>
          <span className="font-medium text-sm" style={{ color: 'var(--muted)' }}>
            Web
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="/#kontakt"
          className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-sm transition-opacity duration-150 hover:opacity-90"
          style={{
            background: 'var(--accent)',
            color: '#fff',
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
              transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : undefined,
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
              transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : undefined,
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-3"
          style={{
            background: 'var(--bg-elevated)',
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
            className="mt-2 inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-sm"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            {NAV_CTA}
          </a>
        </div>
      )}
    </header>
  )
}
