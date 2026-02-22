'use server'

import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { PropertiesSection } from '@/components/properties-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { supabase } from '@/lib/supabaseClient'
import type { Property } from '@/types/property'

async function fetchProperties(): Promise<Property[]> {
  try {
    const { data: properties } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false })

    if (!properties || properties.length === 0) return []

    const ids = properties.map((p: any) => p.id)

    const { data: images } = await supabase
      .from('property_images')
      .select('property_id, image_url')
      .in('property_id', ids)

    const imagesByProperty: Record<string, string[]> = {}
    if (images) {
      for (const img of images as any[]) {
        if (!imagesByProperty[img.property_id]) imagesByProperty[img.property_id] = []
        imagesByProperty[img.property_id].push(img.image_url)
      }
    }

    const results: Property[] = (properties as any[]).map((p) => ({
      ...p,
      images: imagesByProperty[p.id] || [],
    }))

    return results
  } catch (e) {
    console.error('Error fetching properties', e)
    return []
  }
}

export default async function Page() {
  const properties = await fetchProperties()

  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <AboutSection /> */}
      <PropertiesSection properties={properties} />
      <ContactSection />
      <Footer />
      {/* <WhatsAppButton /> */}
    </main>
  )
}
