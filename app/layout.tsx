import type { Metadata } from 'next'
import { Manrope, JetBrains_Mono, Fraunces } from 'next/font/google'
import './globals.css'
import AnimationInit from '@/components/ui/AnimationInit'

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
  title: 'DevOS Web – Professionelle Webentwicklung in Leipzig',
  description:
    'WordPress-Websites und Full-Stack-Entwicklung für Unternehmen in Deutschland. Ab 700 EUR. Antwort in 24–48h.',
  keywords: [
    'Webentwicklung Leipzig',
    'WordPress Leipzig',
    'Website erstellen lassen',
    'Divi Builder',
  ],
  openGraph: {
    title: 'DevOS Web – Professionelle Webentwicklung Leipzig',
    description: 'WordPress + Full-Stack. Ab 700 EUR. Leipzig.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'DevOS Web',
  },
}

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
      <body className="antialiased">
        <AnimationInit />
        {children}
      </body>
    </html>
  )
}
