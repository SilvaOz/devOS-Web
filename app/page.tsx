import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import FuerWenSection from '@/components/sections/FuerWenSection'
import ServicesSection from '@/components/sections/ServicesSection'
import PricingSection from '@/components/sections/PricingSection'
import ProcessSection from '@/components/sections/ProcessSection'
import AboutSection from '@/components/sections/AboutSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <FuerWenSection />
        <ServicesSection />
        <PricingSection />
        <ProcessSection />
        <AboutSection />
        <PortfolioSection maxItems={2} showLink={true} />
        <TestimonialsSection />

        {/* FAQ teaser */}
        <div
          className="py-10 border-t"
          style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              Haben Sie Fragen zu Ablauf, Preisen oder Technik?
            </p>
            <a
              href="/faq"
              className="text-sm font-semibold whitespace-nowrap link-hover-accent"
            >
              Häufige Fragen →
            </a>
          </div>
        </div>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
