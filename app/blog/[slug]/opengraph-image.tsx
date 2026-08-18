import { ImageResponse } from 'next/og'
import { getAllSlugs, getAllPosts } from '@/lib/blog'

export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const posts    = getAllPosts()
  const post     = posts.find((p) => p.slug === slug)

  const title    = post?.title    ?? 'DevOS Web Blog'
  const category = post?.category ?? 'Blog'
  const fontSize = title.length > 55 ? '44px' : title.length > 40 ? '50px' : '56px'

  return new ImageResponse(
    (
      <div
        style={{
          background: '#1c1917',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '72px 96px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top — category pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(91,189,186,0.12)',
            border: '1px solid rgba(91,189,186,0.32)',
            borderRadius: '100px',
            padding: '8px 22px',
          }}
        >
          <div
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#5bbdba',
              display: 'flex',
            }}
          />
          <div
            style={{
              fontSize: '17px',
              fontWeight: 600,
              color: '#5bbdba',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              display: 'flex',
            }}
          >
            {category}
          </div>
        </div>

        {/* Middle — article title */}
        <div
          style={{
            fontSize,
            fontWeight: 700,
            color: '#f3f5f3',
            lineHeight: 1.2,
            maxWidth: '960px',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {title}
        </div>

        {/* Bottom — branding */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#5bbdba',
                display: 'flex',
              }}
            />
            <div
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: 'rgba(243,245,243,0.65)',
                display: 'flex',
              }}
            >
              DevOS Web · Leipzig
            </div>
          </div>
          <div
            style={{
              fontSize: '18px',
              color: 'rgba(243,245,243,0.35)',
              letterSpacing: '0.03em',
              display: 'flex',
            }}
          >
            devos-web.de/blog
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
