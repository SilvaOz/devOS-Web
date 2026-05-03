import { Suspense } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import RequestForm from '@/components/sections/RequestForm'

export const metadata = {
  title: 'Projekt anfragen — DevOS Web',
  description: 'Starten Sie Ihr Webprojekt in 3 Schritten. Angebot in 24–48 Stunden.',
}

export default function AnfragenPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>
        <Suspense>
          <RequestForm />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
