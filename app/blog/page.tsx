import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { getAllPosts } from '@/lib/blog'
import { AdSenseAd } from '@/components/ui/AdSenseAd'

export const metadata: Metadata = {
  title: 'Blog | DevOS Web — Tipps für Therapeuten & Coaches',
  description:
    'Praktische Tipps zu WordPress, Online-Buchungssystemen und KI-Tools für Therapeuten, Heilpraktiker und Coaches im DACH-Raum.',
  robots: { index: false, follow: true },
}

const CATEGORY_COLORS: Record<string, string> = {
  'WordPress für Therapeuten': 'var(--accent-wp)',
  'Online-Buchungssysteme': 'var(--accent)',
  'KI-Tools für Selbstständige': 'var(--accent)',
  'Automatisierung mit KI': 'var(--accent)',
  'Website-Tipps für Heilpraktiker': 'var(--accent)',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section
          className="pt-32 pb-16 px-4 sm:px-6"
          style={{ background: 'var(--bg-elevated)' }}
        >
          <div className="max-w-4xl mx-auto">
            <p
              className="text-xs font-mono tracking-widest uppercase mb-4"
              style={{ color: 'var(--muted)' }}
            >
              Blog · DevOS Web
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: 'var(--fg)',
                marginBottom: '1rem',
              }}
            >
              Tipps für Ihre digitale Praxis
            </h1>
            <p
              className="text-lg max-w-2xl"
              style={{ color: 'var(--muted)', lineHeight: '1.7' }}
            >
              Praktische Anleitungen zu WordPress, Buchungssystemen und KI-Tools —
              erklärt ohne Fachjargon, für Therapeuten und Coaches.
            </p>
          </div>
        </section>

        {/* AdSense — below header */}
        <div className="py-4 px-4 sm:px-6" style={{ background: 'var(--bg-elevated)' }}>
          <div className="max-w-4xl mx-auto">
            <AdSenseAd slot="7319284650" format="horizontal" style={{ minHeight: '60px' }} />
          </div>
        </div>

        {/* Posts grid */}
        <section className="py-16 px-4 sm:px-6" style={{ background: 'var(--bg)' }}>
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <p style={{ color: 'var(--muted)' }}>Keine Artikel vorhanden.</p>
            ) : (
              <div className="flex flex-col gap-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="card-hover rounded-xl p-6 sm:p-8"
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          background: 'var(--accent-dim)',
                          color: CATEGORY_COLORS[post.category] ?? 'var(--accent)',
                        }}
                      >
                        {post.category}
                      </span>
                      {post.affiliate && (
                        <span
                          className="text-xs font-mono px-2 py-1 rounded-full"
                          style={{ background: 'var(--bg-elevated)', color: 'var(--muted)' }}
                        >
                          ✦ Affiliate
                        </span>
                      )}
                    </div>

                    <Link href={`/blog/${post.slug}`} className="group">
                      <h2
                        className="text-xl sm:text-2xl font-bold mb-2 transition-colors duration-200 group-hover:text-[color:var(--accent)]"
                        style={{
                          fontFamily: 'var(--font-fraunces), Georgia, serif',
                          color: 'var(--fg)',
                        }}
                      >
                        {post.title}
                      </h2>
                    </Link>

                    <p
                      className="text-sm mb-4 leading-relaxed"
                      style={{ color: 'var(--muted)', lineHeight: '1.7' }}
                    >
                      {post.description}
                    </p>

                    <div
                      className="flex items-center justify-between flex-wrap gap-3"
                    >
                      <div
                        className="flex items-center gap-4 text-xs font-mono"
                        style={{ color: 'var(--muted)' }}
                      >
                        <span>{formatDate(post.date)}</span>
                        <span style={{ color: 'var(--border)' }} aria-hidden="true">·</span>
                        <span>{post.readTime} Min. Lesezeit</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-semibold transition-opacity duration-200 hover:opacity-60"
                        style={{ color: 'var(--accent)' }}
                      >
                        Artikel lesen →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
