import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Kontakt — DevOS Web',
  description: 'Projekt anfragen oder eine Frage stellen. Ich antworte innerhalb von 24–48 Stunden.',
}

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
