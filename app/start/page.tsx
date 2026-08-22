import { Suspense } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import StartSection from '@/components/sections/StartSection'

export const metadata = {
  title: 'Website starten — DevOS Web',
  description: 'Schritt für Schritt zur fertigen Website — egal wie weit Sie schon sind. Für Teilnehmer des Praxis Erfolg Kurses.',
}

export default function StartPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>
        <Suspense>
          <StartSection />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
