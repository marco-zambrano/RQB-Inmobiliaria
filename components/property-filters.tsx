'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { provinciasEcuador } from '@/lib/ecuador'

interface PropertyFiltersProps {
  onFiltersChange: (filters: {
    minPrice: string
    maxPrice: string
    bedrooms: string
    propertyType: string
    province: string
    canton: string
    sortBy: string
  }) => void
}

export function PropertyFilters({ onFiltersChange }: PropertyFiltersProps) {
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

  function handleChange(patch: Partial<{
    minPrice: string
    maxPrice: string
    bedrooms: string
    propertyType: string
    province: string
    canton: string
    sortBy: string
  }>) {
    const next = { minPrice, maxPrice, bedrooms, propertyType, province, canton, sortBy, ...patch }
    onFiltersChange(next)
  }

  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <div className="flex flex-wrap items-end gap-3">
          <div className="flex-1 min-w-[140px]">
          <Select value={propertyType} onValueChange={(val) => {
            setPropertyType(val)
            handleChange({ propertyType: val })
          }}>
            <SelectTrigger>
              <SelectValue placeholder="Tipo: Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{'Tipo: Todos'}</SelectItem>
              <SelectItem value="apartamento">{'Apartamento'}</SelectItem>
              <SelectItem value="casa">{'Casa'}</SelectItem>
              <SelectItem value="local">{'Local'}</SelectItem>
              <SelectItem value="casa rentera">{'Casa Rentera'}</SelectItem>
              <SelectItem value="terreno">{'Terreno'}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 min-w-[120px]">
          <Input
            type="number"
            placeholder="Precio mín."
            value={minPrice}
            onChange={(e) => {
              setMinPrice(e.target.value)
              handleChange({ minPrice: e.target.value })
            }}
          />
        </div>

        <div className="flex-1 min-w-[120px]">
          <Input
            type="number"
            placeholder="Precio máx."
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(e.target.value)
              handleChange({ maxPrice: e.target.value })
            }}
          />
        </div>

        <div className="flex-1 min-w-[140px]">
          <Select value={bedrooms} onValueChange={(val) => {
            setBedrooms(val)
            handleChange({ bedrooms: val })
          }}>
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
              handleChange({ province: val, canton: 'all' })
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona Provincia" />
            </SelectTrigger>
            <SelectContent>
              {provinceList.map((prov) => (
                <SelectItem key={prov} value={prov}>
                  {prov === 'all' ? 'Selec.. Provincia' : prov.replace(/_/g, ' ')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Canton select */}
        <div className="flex-1 min-w-[140px]">
          <Select
            value={canton}
            onValueChange={(val) => {
              setCanton(val)
              handleChange({ canton: val })
            }}
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
          <Select value={sortBy} onValueChange={(val) => {
            setSortBy(val)
            handleChange({ sortBy: val })
          }}>
            <SelectTrigger>
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              {/* <SelectItem value="default">{'Ordenar por'}</SelectItem> */}
              <SelectItem value="default">{'Precio: Menor a Mayor'}</SelectItem>
              <SelectItem value="price-desc">{'Precio: Mayor a Menor'}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
