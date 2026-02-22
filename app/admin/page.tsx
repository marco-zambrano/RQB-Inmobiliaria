'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import type { Property } from '@/types/property'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { markPropertyAsSold } from '../actions'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseAnonKey)

function formatPrice(price?: number) {
  if (price == null) return 'Consultar'
  return new Intl.NumberFormat('es-EC', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export default function AdminPage() {
  const [available, setAvailable] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [markingId, setMarkingId] = useState<number | string | null>(null)

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from('properties')
        .select('*')
        .or('status.is.null,status.neq.vendida')
        .order('created_at', { ascending: false })

      setAvailable((data as Property[]) || [])
      setLoading(false)
    }
    load()
  }, [])

  async function handleMarkAsSold(p: Property) {
    setMarkingId(p.id)
    const result = await markPropertyAsSold(p.id)
    setMarkingId(null)
    if (result.success) {
      setAvailable((prev) => prev.filter((x) => x.id !== p.id))
    }
  }

  if (loading) return <div className="p-8">Cargando…</div>

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 font-[family-name:var(--font-playfair)] text-3xl font-bold">
          Admin – Marcar como vendida
        </h1>
        <p className="mb-6 text-muted-foreground">
          Selecciona una propiedad disponible para marcarla como vendida. Se guardará la fecha actual en la base de datos.
        </p>

        <div className="rounded-lg border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Propiedad</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead className="text-right">Acción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {available.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.title ?? '—'}</TableCell>
                  <TableCell className="capitalize">{p.property_type ?? '—'}</TableCell>
                  <TableCell>{formatPrice(p.price)}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={!!markingId}
                      onClick={() => handleMarkAsSold(p)}
                    >
                      {markingId === p.id ? 'Guardando…' : 'Marcar como vendida'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {available.length === 0 && (
            <p className="p-8 text-center text-muted-foreground">
              No hay propiedades disponibles para marcar como vendidas.
            </p>
          )}
        </div>
      </div>
    </main>
  )
}
