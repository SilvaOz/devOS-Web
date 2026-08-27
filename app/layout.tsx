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
  metadataBase: new URL('https://devos-web.de'),
  title: 'DevOS Web – Websites & digitale Lösungen · Leipzig',
  description:
    'Professionelle Websites, Buchungen und digitale Lösungen für Therapeuten, Coaches und Kreative — persönlich entwickelt, verständlich erklärt, zuverlässig betreut.',
  keywords: [
    'Webentwicklung Leipzig',
    'WordPress Therapeuten',
    'Website Coaches',
    'Website erstellen lassen',
    'Divi Builder',
    'DACH',
  ],
  openGraph: {
    title: 'DevOS Web – Websites & digitale Lösungen · Leipzig',
    description: 'Professionelle Websites für Therapeuten, Coaches und Kreative — persönlich entwickelt, verständlich erklärt.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'DevOS Web',
  },
  verification: {
    google: '_TeGMen5h8wjhS1wDDlfj9AWLl8oJVbqqViztIzWt0k',
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
