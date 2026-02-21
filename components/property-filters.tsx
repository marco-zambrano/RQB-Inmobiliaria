'use client'

import { useState, useEffect } from 'react'
import { Property } from '@/components/properties-section'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { provinciasEcuador } from '@/lib/ecuador'

interface PropertyFiltersProps {
  properties: Property[]
  onFilter: (filtered: Property[]) => void
}

export function PropertyFilters({ properties, onFilter }: PropertyFiltersProps) {
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [bedrooms, setBedrooms] = useState('all')
  // removed bathrooms and zone filters per requirements
  const [propertyType, setPropertyType] = useState('all')
  const [province, setProvince] = useState('all')
  const [canton, setCanton] = useState('all')
  const [sortBy, setSortBy] = useState('default')

  // derive lists from static data
  const provinceList = ['all', ...Object.keys(provinciasEcuador)]
  const cantonList =
    province !== 'all'
      ? provinciasEcuador[province] || []
      : Array.from(
          new Set(Object.values(provinciasEcuador).flat())
        )

  useEffect(() => {
    let filtered = [...properties]

    // Filter by price
    if (minPrice) {
      filtered = filtered.filter(p => p.price >= Number(minPrice))
    }
    if (maxPrice) {
      filtered = filtered.filter(p => p.price <= Number(maxPrice))
    }

    // Filter by bedrooms
    if (bedrooms !== 'all') {
      filtered = filtered.filter(p => p.bedrooms === Number(bedrooms))
    }

    // Filter by property type
    if (propertyType !== 'all') {
      filtered = filtered.filter(p => p.type === propertyType)
    }

    // Filter by province/canton
    if (province !== 'all') {
      filtered = filtered.filter(p => p.province === province)
    }
    if (canton !== 'all') {
      filtered = filtered.filter(p => p.canton === canton)
    }

    // Sort
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price)
    }

    onFilter(filtered)
  }, [minPrice, maxPrice, bedrooms, propertyType, province, canton, sortBy, properties, onFilter])

  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <div className="flex flex-wrap items-end gap-3">
          <div className="flex-1 min-w-[140px]">
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Tipo: Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{'Tipo: Todos'}</SelectItem>
              <SelectItem value="apartamento">{'Apartamento'}</SelectItem>
              <SelectItem value="casa">{'Casa'}</SelectItem>
              <SelectItem value="negocio">{'Negocio'}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 min-w-[120px]">
          <Input
            type="number"
            placeholder="Precio mín."
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>

        <div className="flex-1 min-w-[120px]">
          <Input
            type="number"
            placeholder="Precio máx."
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        <div className="flex-1 min-w-[140px]">
          <Select value={bedrooms} onValueChange={setBedrooms}>
            <SelectTrigger>
              <SelectValue placeholder="Habitaciones" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{'Habitaciones'}</SelectItem>
              <SelectItem value="1">{'1'}</SelectItem>
              <SelectItem value="2">{'2'}</SelectItem>
              <SelectItem value="3">{'3'}</SelectItem>
              <SelectItem value="4">{'4'}</SelectItem>
              <SelectItem value="5">{'5+'}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Province select */}
        <div className="flex-1 min-w-[140px]">
          <Select
            value={province}
            onValueChange={(val) => {
              setProvince(val)
              setCanton('all')
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona Provincia" />
            </SelectTrigger>
            <SelectContent>
              {provinceList.map((prov) => (
                <SelectItem key={prov} value={prov}>
                  {prov === 'all' ? 'Selecciona Provincia' : prov.replace(/_/g, ' ')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Canton select */}
        <div className="flex-1 min-w-[140px]">
          <Select
            value={canton}
            onValueChange={setCanton}
            disabled={province === 'all'}
          >
            <SelectTrigger
              className={province === 'all' ? 'opacity-50 cursor-not-allowed' : ''}
            >
            <SelectValue placeholder="Selecciona Cantón" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{'Selecciona Cantón'}</SelectItem>
              {cantonList.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 min-w-[160px]">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">{'Ordenar por'}</SelectItem>
              <SelectItem value="price-asc">{'Precio: Menor a Mayor'}</SelectItem>
              <SelectItem value="price-desc">{'Precio: Mayor a Menor'}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
