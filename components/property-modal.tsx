'use client'

import { useState } from 'react'
import { Property } from '@/components/properties-section'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Bed, Bath, Maximize, MapPin, Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'

interface PropertyModalProps {
  property: Property | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PropertyModal({ property, open, onOpenChange }: PropertyModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!property) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh]">
          <div className="relative">
            {/* Image Gallery */}
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
              <Image
                src={property.images[currentImageIndex]}
                alt={property.title}
                fill
                className="object-cover"
              />
              {property.images.length > 1 && (
                <>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute left-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {property.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50 w-2'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              <DialogHeader className="mb-6">
                <DialogTitle className="font-[family-name:var(--font-playfair)] text-3xl">
                  {property.title}
                </DialogTitle>
              </DialogHeader>

              {/* Price and Location */}
              <div className="mb-6">
                <p className="mb-2 font-[family-name:var(--font-playfair)] text-4xl font-bold text-foreground">
                  {formatPrice(property.price)}
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {property.location}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="mb-6 grid grid-cols-4 gap-4 rounded-lg border bg-muted/30 p-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Maximize className="h-5 w-5" />
                  </div>
                  <p className="mt-1 text-2xl font-bold">{property.area}m²</p>
                  <p className="text-xs text-muted-foreground">{'Área'}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Bed className="h-5 w-5" />
                  </div>
                  <p className="mt-1 text-2xl font-bold">{property.bedrooms}</p>
                  <p className="text-xs text-muted-foreground">{'Habitaciones'}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Bath className="h-5 w-5" />
                  </div>
                  <p className="mt-1 text-2xl font-bold">{property.bathrooms}</p>
                  <p className="text-xs text-muted-foreground">{'Baños'}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <p className="mt-1 text-2xl font-bold">{property.age}</p>
                  <p className="text-xs text-muted-foreground">{'Antigüedad'}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="mb-3 text-xl font-semibold">{'Descripción'}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="mb-3 text-xl font-semibold">{'Características'}</h3>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Technical Info */}
              <div className="mb-6">
                <h3 className="mb-3 text-xl font-semibold">{'Información Técnica'}</h3>
                <div className="grid grid-cols-2 gap-4 rounded-lg border p-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{'Área Total'}</p>
                    <p className="font-semibold">{property.totalArea}m²</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{'Área Construida'}</p>
                    <p className="font-semibold">{property.constructionArea}m²</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mb-6">
                <h3 className="mb-3 text-xl font-semibold">{'Ubicación'}</h3>
                <div className="aspect-video w-full overflow-hidden rounded-lg border">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${property.coordinates.lat},${property.coordinates.lng}&zoom=15`}
                    allowFullScreen
                  />
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="w-full"
                asChild
              >
                <a href={`https://wa.me/1234567890?text=Hola, me interesa la propiedad: ${property.title}`} target="_blank" rel="noopener noreferrer">
                  {'Contactar por WhatsApp'}
                </a>
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
