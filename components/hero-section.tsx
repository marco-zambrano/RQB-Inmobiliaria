'use client'

import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  const scrollToProperties = () => {
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })
  }

  const heroUrl = process.env.NEXT_PUBLIC_HERO_IMAGE_URL || 'https://xpznugqofelwvteosjny.supabase.co/storage/v1/object/sign/Pages%20File/hero-property.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNGFlM2ZmNy1jMDJkLTRmNzUtYWVhYS0wNTY3NzI3YTAxYzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQYWdlcyBGaWxlL2hlcm8tcHJvcGVydHkuanBnIiwiaWF0IjoxNzcxNjk1MjI0LCJleHAiOjE3NzI1NTkyMjR9.8omFMbuErCHm6oLfLZYlxP-L_pBq83zd52R3H9zRhXU'

  return (  
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src={heroUrl}
        alt="Propiedades de lujo en Manta Manabí Ecuador - RQB-593 Inmobiliaria"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">
          RQB-593
        </h1>
        <p className="mb-2 max-w-2xl text-xl md:text-2xl text-balance">
          {'Encontramos la propiedad perfecta para tu estilo de vida'}
        </p>
        <p className="mb-2 text-lg text-white/90 md:text-xl">
          {'Compra - Venta - Alquiler - Varios'}
        </p>
        <p className="mb-8 text-lg text-white/90 md:text-xl">
          {'Manabí · Ecuador'}
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button 
            size="lg" 
            className="bg-white text-foreground hover:bg-white/90"
            onClick={scrollToProperties}
          >
            {'Ver Propiedades'}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white bg-transparent text-white hover:bg-white/10"
            asChild
          >
            <a href="https://wa.me/593999467091" target="_blank" rel="noopener noreferrer">
              {'Contactar por WhatsApp'}
            </a>
          </Button>
        </div>

        <button
          onClick={scrollToProperties}
          className="absolute bottom-12 flex flex-col items-center gap-2 transition-transform hover:scale-105"
          aria-label="Scroll to properties"
        >
          <span className="text-sm uppercase tracking-wider">
            {'Conoce nuestras propiedades'}
          </span>
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
