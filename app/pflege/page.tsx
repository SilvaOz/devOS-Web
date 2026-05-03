import { Suspense } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PflegeSection from '@/components/sections/PflegeSection'

export const metadata = {
  title: 'Website-Pflege für Bestandskunden — DevOS Web',
  description: 'Pflege-Pakete ab 99 EUR/Monat. Kein Stundentakt, kein Nachdenken — einfach anschreiben.',
}

export default function PflegePage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>
        <Suspense>
          <PflegeSection />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
