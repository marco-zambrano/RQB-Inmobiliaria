'use client'

import { useState } from 'react'
import { Property } from '@/components/properties-section'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bed, Bath, Maximize, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface PropertyCardProps {
  property: Property
  onViewMore: () => void
}

export function PropertyCard({ property, onViewMore }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Card 
      className="group overflow-hidden transition-all hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={property.images[currentImageIndex]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isHovered && property.images.length > 1 && (
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
        {property.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
            {property.images.map((_, index) => (
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
          <p className="mb-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground">
            {formatPrice(property.price)}
          </p>
          <p className="text-sm text-muted-foreground">{property.location}</p>
        </div>

        <div className="mb-4 flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>{property.area}m²</span>
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
          <Button onClick={onViewMore} className="flex-1">
            {'Ver más'}
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            asChild
          >
            <a href={`https://wa.me/1234567890?text=Hola, me interesa la propiedad: ${property.title}`} target="_blank" rel="noopener noreferrer">
              {'WhatsApp'}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
