import type { Metadata } from 'next'
import { Manrope, JetBrains_Mono, Fraunces } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import AnimationInit from '@/components/ui/AnimationInit'
import { CookieConsent } from '@/components/ui/CookieConsent'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DevOS Web – Digitale Systeme mit KI · Leipzig',
  description:
    'Websites, Apps und KI-Automatisierungen für Therapeuten, Coaches und Kreative im DACH-Raum. Persönlich, klar und ohne Fachjargon.',
  keywords: [
    'Webentwicklung Leipzig',
    'WordPress Therapeuten',
    'KI Automatisierung',
    'Website erstellen lassen',
    'Divi Builder',
    'DACH',
  ],
  openGraph: {
    title: 'DevOS Web – Digitale Systeme mit KI',
    description: 'Websites, Apps und KI-Automatisierungen für Therapeuten, Coaches und Kreative.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'DevOS Web',
  },
}

const ADSENSE_ID = 'ca-pub-6393735346618361'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="de"
      className={`${manrope.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* AdSense verification meta tag */}
        <meta name="google-adsense-account" content={ADSENSE_ID} />
      </head>
      <body className="antialiased">
        <AnimationInit />
        {children}
        <CookieConsent />

        {/* Google AdSense — loads after interaction, respects consent via AdSenseAd component */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
