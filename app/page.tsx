'use server'

import { HeroSection } from '@/components/hero-section'
import { PropertiesSection } from '@/components/properties-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { supabase } from '@/lib/supabaseClient'
import type { Property } from '@/types/property'

async function fetchProperties(): Promise<Property[]> {
  try {
    const { data, error } = await supabase
      .from('properties')
      .select(`
        *,
        property_images(property_id, image_url),
        property_videos(property_id, video_url)
      `)
      .or('status.is.null,status.neq.vendida')
      .order('created_at', { ascending: false })

    if (error) throw error

    return (data ?? []).map((p) => ({
      ...p,
      images: (p.property_images ?? []).map((i: any) => i.image_url),
      videos: (p.property_videos ?? []).map((v: any) => v.video_url),
    }))
  } catch (e) {
    console.error('Error fetching properties:', e)
    return []
  }
}

export default async function Page() {
  const properties = await fetchProperties()

  return (
    <main className="min-h-screen">
      <HeroSection />
      <PropertiesSection properties={properties} />
      <ContactSection />
      <Footer />
    </main>
  )
}