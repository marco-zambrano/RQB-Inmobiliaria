'use client'

import { useState, useEffect } from 'react'
import { Property } from '@/components/properties-section'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'

interface PropertyFiltersProps {
  properties: Property[]
  onFilter: (filtered: Property[]) => void
}

export function PropertyFilters({ properties, onFilter }: PropertyFiltersProps) {
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [bedrooms, setBedrooms] = useState('all')
  const [bathrooms, setBathrooms] = useState('all')
  const [propertyType, setPropertyType] = useState('all')
  const [zone, setZone] = useState('all')
  const [sortBy, setSortBy] = useState('default')

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

    // Filter by bathrooms
    if (bathrooms !== 'all') {
      filtered = filtered.filter(p => p.bathrooms === Number(bathrooms))
    }

    // Filter by zone
    if (zone !== 'all') {
      filtered = filtered.filter(p => p.location.toLowerCase().includes(zone.toLowerCase()))
    }

    // Sort
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price)
    }

    onFilter(filtered)
  }, [minPrice, maxPrice, bedrooms, bathrooms, propertyType, zone, sortBy, properties, onFilter])

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
              <SelectItem value="apartment">{'Apartamento'}</SelectItem>
              <SelectItem value="house">{'Casa'}</SelectItem>
              <SelectItem value="penthouse">{'Penthouse'}</SelectItem>
              <SelectItem value="loft">{'Loft'}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 min-w-[140px]">
          <Select value={zone} onValueChange={setZone}>
            <SelectTrigger>
              <SelectValue placeholder="Zona: Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{'Zona: Todas'}</SelectItem>
              <SelectItem value="centro">{'Centro'}</SelectItem>
              <SelectItem value="norte">{'Norte'}</SelectItem>
              <SelectItem value="financiero">{'Distrito Financiero'}</SelectItem>
              <SelectItem value="chapinero">{'Chapinero'}</SelectItem>
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

        <div className="flex-1 min-w-[140px]">
          <Select value={bathrooms} onValueChange={setBathrooms}>
            <SelectTrigger>
              <SelectValue placeholder="Baños" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{'Baños'}</SelectItem>
              <SelectItem value="1">{'1'}</SelectItem>
              <SelectItem value="2">{'2'}</SelectItem>
              <SelectItem value="3">{'3'}</SelectItem>
              <SelectItem value="4">{'4+'}</SelectItem>
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
