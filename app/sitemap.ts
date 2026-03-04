import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabaseClient'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://rqb-593.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ]

  try {
    // Fetch properties for dynamic pages
    const { data: properties, error } = await supabase
      .from('properties')
      .select('id, updated_at, created_at')
      .or('status.is.null,status.neq.vendida')
      .order('created_at', { ascending: false })

    if (!error && properties) {
      const propertyPages = properties.map((property) => ({
        url: `${baseUrl}/propiedad/${property.id}`,
        lastModified: property.updated_at || property.created_at,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))

      return [...staticPages, ...propertyPages]
    }
  } catch (error) {
    console.error('Error generating sitemap:', error)
  }

  return staticPages
}
