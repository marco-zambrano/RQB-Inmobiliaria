'use client'

import { useState } from 'react'
import type { Property } from '@/types/property'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bed, Bath, Maximize, ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import Image from 'next/image'
import { supabase } from '@/lib/supabaseClient'

interface PropertyCardProps {
  property: Property
  onViewMore: () => void
}

export function PropertyCard({ property, onViewMore }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const incrementInterest = async (propertyId: string) => {
    try {
      const { error } = await supabase.rpc('increment_property_interest', {
        p_property_id: propertyId
      })
      
      if (error) {
        console.error('Error incrementing interest:', error)
      }
    } catch (error) {
      console.error('Error calling increment_property_interest:', error)
    }
  }

  const handleViewMore = () => {
    // Increment interest level
    incrementInterest(property.id)
    // Call original onViewMore function
    onViewMore()
  }

  // Safe images array: properties may store images in a separate table
  const images: string[] = Array.isArray(property.images) && property.images.length > 0 ? property.images as string[] : []
  const imagesCount: number = images.length

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % imagesCount)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + imagesCount) % imagesCount)
  }

  const formatPrice = (price?: number) => {
  if (price == null) return 'Consultar'

  return new Intl.NumberFormat('es-EC', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

  const typeLabelMap: Record<string, string> = {
    apartamento: 'Apartamento',
    casa: 'Casa',
    local: 'Local',
    terreno: 'Terreno',
    casaRentera: 'Casa Rentera',
  }
  const typeLabel = property.property_type ? typeLabelMap[property.property_type.toLowerCase()] || property.property_type : 'Propiedad'

  return (
    <Card 
      className="group overflow-hidden transition-all hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {/* type pill */}
        <span className="absolute top-2 left-2 z-10 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-white">
          {typeLabel}
        </span>
        {imagesCount > 0 ? (
          <Image
            src={images[currentImageIndex]}
            alt={property.title ?? 'Propiedad'}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <div className="text-center">
              <div className="text-4xl mb-2">🏠</div>
              <p className="text-sm">No hay imágenes</p>
            </div>
          </div>
        )}
        {isHovered && imagesCount > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2">
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full opacity-90"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full opacity-90"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
        {imagesCount > 1 && (
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="mb-3">
          <p className="mb-1 font-[family-name:var(--font-playfair)] text-2xl font-semibold text-foreground">{property.title}</p>
          <p className="mb-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground">
            {formatPrice(property.price)}
          </p>
          <p className="text-sm text-muted-foreground">{`${property.address} - ${property.city}`}</p>
        </div>

        <div className="mb-4 flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <div>
              <span className="font-medium">{property.sqm_total}m²</span>
              <span className="text-xs block">Total</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4 opacity-70" />
            <div>
              <span className="font-medium">{property.sqm_built}m²</span>
              <span className="text-xs block">Construido</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.bathrooms}</span>
          </div>
        </div>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {property.description}
        </p>

        <div className="flex gap-2">
          <Button onClick={handleViewMore} className="flex-1">
            {'Ver más'}
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            asChild
          >
            <a href={`https://wa.me/593999467091?text=Hola, me interesa la propiedad: ${property.title}`} target="_blank" rel="noopener noreferrer">
              {'WhatsApp'}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
