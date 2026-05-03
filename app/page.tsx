import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import FuerWenSection from '@/components/sections/FuerWenSection'
import ServicesSection from '@/components/sections/ServicesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import PricingSection from '@/components/sections/PricingSection'
import AboutSection from '@/components/sections/AboutSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import FAQTeaser from '@/components/sections/FAQTeaser'
import ContactSection from '@/components/sections/ContactSection'
import ExpressSection from '@/components/sections/ExpressSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <FuerWenSection />
        <ServicesSection />
        <ExpressSection />
        <TestimonialsSection />
        <ProcessSection />
        <AboutSection />
        <PricingSection />
        <PortfolioSection maxItems={2} showLink={true} />
        <FAQTeaser />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
