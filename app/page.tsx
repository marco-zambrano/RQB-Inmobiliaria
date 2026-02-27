'use server'

import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { PropertiesSection } from '@/components/properties-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { supabase } from '@/lib/supabaseClient'
import type { Property } from '@/types/property'

async function fetchWithImages(properties: any[]): Promise<Property[]> {
  if (!properties?.length) return []
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

  return (properties as any[]).map((p) => ({
    ...p,
    images: imagesByProperty[p.id] || [],
  }))
}

async function fetchProperties(): Promise<Property[]> {
  try {
    const { data } = await supabase
      .from('properties')
      .select('*')
      .or('status.is.null,status.neq.vendida')
      .order('created_at', { ascending: false })

    return fetchWithImages(data || [])
  } catch (e) {
    console.error('Error fetching properties', e)
    return []
  }
}

export default async function Page() {
  const [properties] = await Promise.all([
    fetchProperties(),
  ])

  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <AboutSection /> */}
      <PropertiesSection properties={properties} />
      <ContactSection />
      <Footer />
    </main>
  )
}
