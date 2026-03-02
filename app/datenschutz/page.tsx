import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Datenschutzerklärung – DevOS Web',
}

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen pt-28 pb-20 px-4"
        style={{ background: 'var(--bg)' }}
      >
        <div className="max-w-2xl mx-auto">
          <h1
            className="text-3xl font-extrabold mb-4"
            style={{ color: 'var(--fg)' }}
          >
            Datenschutzerklärung
          </h1>
          <p className="text-base" style={{ color: 'var(--muted)' }}>
            Diese Seite wird in Kürze aktualisiert.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
