'use client'

import type { Property } from '@/types/property'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function formatDate(isoString?: string | null) {
  if (!isoString) return '—'
  try {
    return new Date(isoString).toLocaleDateString('es-EC', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }
  catch {
    return '—'
  }
}

function formatPrice(price?: number) {
  if (price == null) return 'Consultar'
  return new Intl.NumberFormat('es-EC', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function SoldPropertiesTable({ properties }: { properties: Property[] }) {
  if (!properties?.length) {
    return (
      <p className="text-center text-muted-foreground py-8">
        No hay propiedades vendidas aún.
      </p>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Propiedad</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Ubicación</TableHead>
          <TableHead>Precio</TableHead>
          <TableHead className="text-right">Fecha de venta</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {properties.map((p) => (
          <TableRow key={p.id}>
            <TableCell className="font-medium">{p.title ?? '—'}</TableCell>
            <TableCell className="capitalize">{p.property_type ?? '—'}</TableCell>
            <TableCell>{`${p.address ?? ''} - ${p.city ?? ''}`.trim() || '—'}</TableCell>
            <TableCell>{formatPrice(p.price)}</TableCell>
            <TableCell className="text-right">{formatDate(p.sold_at)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
