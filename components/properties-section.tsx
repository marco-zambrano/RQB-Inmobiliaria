'use client'

import { useState } from 'react'
import { PropertyCard } from '@/components/property-card'
import { PropertyFilters } from '@/components/property-filters'
import { PropertyModal } from '@/components/property-modal'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export interface Property {
  id: number
  title: string
  price: number
  location: string
  area: number
  bedrooms: number
  bathrooms: number
  description: string
  images: string[]
  features: string[]
  totalArea: number
  constructionArea: number
  age: string
  coordinates: { lat: number; lng: number }
}

const mockProperties: Property[] = [
  {
    id: 1,
    title: 'Apartamento Moderno en Zona Premium',
    price: 450000,
    location: 'Centro Histórico, Ciudad',
    area: 120,
    bedrooms: 3,
    bathrooms: 2,
    description: 'Espectacular apartamento completamente remodelado con acabados de primera calidad. Amplios espacios, iluminación natural y vista panorámica. Ubicado en el corazón de la ciudad con acceso a todos los servicios.',
    images: ['/property-1.jpg', '/property-2.jpg', '/property-3.jpg'],
    features: ['Garaje', 'Piscina', 'Gimnasio', 'Seguridad 24/7', 'Terraza privada'],
    totalArea: 150,
    constructionArea: 120,
    age: '2 años',
    coordinates: { lat: 4.6097, lng: -74.0817 }
  },
  {
    id: 2,
    title: 'Penthouse con Vista Panorámica',
    price: 890000,
    location: 'Distrito Financiero, Ciudad',
    area: 220,
    bedrooms: 4,
    bathrooms: 3,
    description: 'Exclusivo penthouse en el último piso con vista de 360 grados. Amplias terrazas, cocina gourmet, acabados premium y diseño arquitectónico de vanguardia. Para los más exigentes.',
    images: ['/property-2.jpg', '/property-3.jpg', '/property-1.jpg'],
    features: ['Terraza amplia', 'Jacuzzi', 'Wine cellar', 'Smart home', 'Estacionamiento doble'],
    totalArea: 280,
    constructionArea: 220,
    age: 'Nuevo',
    coordinates: { lat: 4.6533, lng: -74.0836 }
  },
  {
    id: 3,
    title: 'Casa Familiar con Jardín',
    price: 620000,
    location: 'Residencial Norte, Ciudad',
    area: 280,
    bedrooms: 5,
    bathrooms: 4,
    description: 'Hermosa casa de dos plantas con amplio jardín y zonas verdes. Perfecta para familias que buscan espacio y tranquilidad sin alejarse de la ciudad. Excelente ubicación cerca de colegios.',
    images: ['/property-3.jpg', '/property-1.jpg', '/property-2.jpg'],
    features: ['Jardín amplio', 'BBQ area', 'Cuarto de servicio', 'Garaje triple', 'Zona de juegos'],
    totalArea: 350,
    constructionArea: 280,
    age: '5 años',
    coordinates: { lat: 4.7110, lng: -74.0721 }
  },
  {
    id: 4,
    title: 'Loft Industrial Renovado',
    price: 380000,
    location: 'Zona Artística, Ciudad',
    area: 95,
    bedrooms: 2,
    bathrooms: 2,
    description: 'Moderno loft con diseño industrial y toques contemporáneos. Techos altos, ventanales amplios y acabados de estilo urbano. Ideal para profesionales y creativos.',
    images: ['/property-1.jpg', '/property-3.jpg', '/property-2.jpg'],
    features: ['Diseño único', 'Parqueadero', 'Balcón', 'Zona coworking', 'Pet friendly'],
    totalArea: 95,
    constructionArea: 95,
    age: '1 año',
    coordinates: { lat: 4.6486, lng: -74.0575 }
  },
  {
    id: 5,
    title: 'Apartamento Ejecutivo',
    price: 520000,
    location: 'Chapinero Alto, Ciudad',
    area: 140,
    bedrooms: 3,
    bathrooms: 3,
    description: 'Elegante apartamento en torre moderna con todas las comodidades. Vista espectacular, acabados premium y excelente ubicación cerca de restaurantes y centros comerciales.',
    images: ['/property-2.jpg', '/property-1.jpg', '/property-3.jpg'],
    features: ['Vista panorámica', 'Gimnasio', 'Salón social', 'Seguridad', 'Parqueadero'],
    totalArea: 160,
    constructionArea: 140,
    age: '3 años',
    coordinates: { lat: 4.6372, lng: -74.0628 }
  },
  {
    id: 6,
    title: 'Villa Mediterránea',
    price: 1200000,
    location: 'Condominio Exclusivo, Afueras',
    area: 350,
    bedrooms: 6,
    bathrooms: 5,
    description: 'Impresionante villa de estilo mediterráneo en condominio cerrado. Amplios espacios, piscina privada, jardines paisajísticos y las mejores vistas. El lujo en su máxima expresión.',
    images: ['/property-3.jpg', '/property-2.jpg', '/property-1.jpg'],
    features: ['Piscina privada', 'Cancha de tenis', 'Wine cellar', 'Cinema', 'Seguridad privada'],
    totalArea: 500,
    constructionArea: 350,
    age: 'Nuevo',
    coordinates: { lat: 4.7500, lng: -74.0500 }
  },
]

export function PropertiesSection() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [filteredProperties, setFilteredProperties] = useState(mockProperties)
  const [currentPage, setCurrentPage] = useState(1)
  const propertiesPerPage = 6

  const indexOfLastProperty = currentPage * propertiesPerPage
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty)
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage)

  return (
    <>
      <section id="properties" className="bg-background py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight md:text-5xl">
            {'Propiedades Disponibles'}
          </h2>

          <PropertyFilters 
            properties={mockProperties}
            onFilter={setFilteredProperties}
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {currentProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewMore={() => setSelectedProperty(property)}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => setCurrentPage(page)}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      <PropertyModal
        property={selectedProperty}
        open={!!selectedProperty}
        onOpenChange={(open) => !open && setSelectedProperty(null)}
      />
    </>
  )
}
