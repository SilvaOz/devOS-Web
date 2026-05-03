import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { getPost, getAllSlugs } from '@/lib/blog'
import { AdSenseAd } from '@/components/ui/AdSenseAd'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPost(slug)
    return {
      title: `${post.title} | DevOS Web Blog`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        publishedTime: post.date,
      },
    }
  } catch {
    return { title: 'Artikel nicht gefunden | DevOS Web' }
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params

  let post
  try {
    post = await getPost(slug)
  } catch {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Article header */}
        <header
          className="pt-32 pb-12 px-4 sm:px-6"
          style={{ background: 'var(--bg-elevated)' }}
        >
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-mono mb-8 transition-opacity hover:opacity-60"
              style={{ color: 'var(--muted)' }}
            >
              ← Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full"
                style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
              >
                {post.category}
              </span>
              {post.affiliate && (
                <span
                  className="text-xs font-mono px-2 py-1 rounded-full"
                  style={{ background: 'var(--bg)', color: 'var(--muted)', border: '1px solid var(--border)' }}
                >
                  ✦ Enthält Affiliate-Links
                </span>
              )}
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: 'var(--fg)',
                marginBottom: '1.25rem',
              }}
            >
              {post.title}
            </h1>

            <p
              className="text-lg mb-6"
              style={{ color: 'var(--muted)', lineHeight: '1.7' }}
            >
              {post.description}
            </p>

            <div
              className="flex items-center gap-4 text-xs font-mono pb-8"
              style={{
                color: 'var(--muted)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <span>DevOS Web</span>
              <span style={{ color: 'var(--border)' }} aria-hidden="true">·</span>
              <span>{formatDate(post.date)}</span>
              <span style={{ color: 'var(--border)' }} aria-hidden="true">·</span>
              <span>{post.readTime} Min. Lesezeit</span>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article
          className="py-14 px-4 sm:px-6"
          style={{ background: 'var(--bg)' }}
        >
          <div className="max-w-3xl mx-auto">
            <div
              className="prose-devos"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>
        </article>

        {/* AdSense — between article and CTA */}
        <div className="py-6 px-4 sm:px-6" style={{ background: 'var(--bg)' }}>
          <div className="max-w-3xl mx-auto">
            <AdSenseAd
              slot="2847391056"
              format="auto"
              style={{ minHeight: '90px' }}
            />
          </div>
        </div>

        {/* CTA */}
        <section
          className="py-14 px-4 sm:px-6"
          style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', color: 'var(--fg)' }}
            >
              Fragen zu Ihrer Website?
            </h2>
            <p className="mb-6" style={{ color: 'var(--muted)' }}>
              Ich helfe Ihnen persönlich — ohne Fachjargon und ohne Verpflichtung.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/kontakt"
                className="btn-primary inline-flex items-center justify-center px-6 py-3 font-semibold text-sm"
                style={{ background: 'var(--accent)', color: '#fff', borderRadius: '6px' }}
              >
                Kostenlos anfragen →
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-sm transition-opacity hover:opacity-60"
                style={{ color: 'var(--fg)' }}
              >
                Mehr Artikel
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
