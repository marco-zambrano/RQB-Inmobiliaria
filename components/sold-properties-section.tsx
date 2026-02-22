'use client'

import type { Property } from '@/types/property'
import { SoldPropertiesTable } from './sold-properties-table'

export function SoldPropertiesSection({ properties }: { properties?: Property[] }) {
  const sold = properties && properties.length > 0 ? properties : []

  return (
    <section id="vendidas" className="bg-muted/30 py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight md:text-5xl">
          Propiedades Vendidas
        </h2>

        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <SoldPropertiesTable properties={sold} />
        </div>
      </div>
    </section>
  )
}
