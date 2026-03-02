import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import ServicesSection from '@/components/sections/ServicesSection'
import PricingSection from '@/components/sections/PricingSection'
import ProcessSection from '@/components/sections/ProcessSection'
import AboutSection from '@/components/sections/AboutSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <ServicesSection />
        <PricingSection />
        <ProcessSection />
        <AboutSection />
        <PortfolioSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
