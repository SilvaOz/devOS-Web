import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import VideoSection from '@/components/sections/VideoSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import ServicesSection from '@/components/sections/ServicesSection'
import FuerWenSection from '@/components/sections/FuerWenSection'
import ProcessSection from '@/components/sections/ProcessSection'
import PricingSection from '@/components/sections/PricingSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import AboutSection from '@/components/sections/AboutSection'
import CTASection from '@/components/sections/CTASection'
import FAQSection from '@/components/sections/FAQSection'
import ContactBanner from '@/components/sections/ContactBanner'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <VideoSection />
        <MarqueeSection />
        <ServicesSection />
        <FuerWenSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <AboutSection />
        <CTASection />
        <FAQSection />
        <ContactBanner />
      </main>
      <Footer />
    </>
  )
}
