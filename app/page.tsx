'use client'

import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { PropertiesSection } from '@/components/properties-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <AboutSection /> */}
      <PropertiesSection />
      <ContactSection />
      <Footer />
      {/* <WhatsAppButton /> */}
    </main>
  )
}
