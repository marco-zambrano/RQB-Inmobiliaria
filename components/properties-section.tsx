 'use client'

import { useState } from 'react'
import { PropertyCard } from '@/components/property-card'
import { PropertyFilters } from '@/components/property-filters'
import { PropertyModal } from '@/components/property-modal'
import type { Property } from '@/types/property'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export function PropertiesSection({ properties }: { properties?: Property[] }) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const initial = properties && properties.length > 0 ? properties : []
  const [filteredProperties, setFilteredProperties] = useState(initial)
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
            properties={initial}
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
