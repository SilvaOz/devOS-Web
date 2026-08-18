import { ImageResponse } from 'next/og'

export const runtime     = 'edge'
export const alt         = 'DevOS Web – Websites & digitale Lösungen · Leipzig'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
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
          justifyContent: 'center',
          padding: '80px 96px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Accent line */}
        <div
          style={{
            width: '52px',
            height: '4px',
            background: '#5bbdba',
            borderRadius: '2px',
            marginBottom: '44px',
            display: 'flex',
          }}
        />

        {/* Headline line 1 */}
        <div
          style={{
            fontSize: '58px',
            fontWeight: 700,
            color: '#f3f5f3',
            lineHeight: 1.05,
            marginBottom: '6px',
            display: 'flex',
          }}
        >
          Gute digitale Arbeit
        </div>

        {/* Headline line 2 — accent */}
        <div
          style={{
            fontSize: '58px',
            fontWeight: 700,
            color: '#5bbdba',
            lineHeight: 1.05,
            marginBottom: '40px',
            display: 'flex',
          }}
        >
          beginnt unter der Oberfläche.
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(243,245,243,0.5)',
            lineHeight: 1.55,
            marginBottom: '72px',
            display: 'flex',
          }}
        >
          Websites & digitale Lösungen für Therapeuten, Coaches und Kreative
        </div>

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(91,189,186,0.1)',
            border: '1px solid rgba(91,189,186,0.28)',
            borderRadius: '100px',
            padding: '10px 24px',
          }}
        >
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
              fontSize: '19px',
              fontWeight: 600,
              color: 'rgba(243,245,243,0.8)',
              letterSpacing: '0.05em',
              display: 'flex',
            }}
          >
            DevOS Web · Leipzig, DE
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
