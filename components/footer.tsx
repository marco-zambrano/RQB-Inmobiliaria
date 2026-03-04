'use client'

import { Facebook, Mail } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  const acbirLogo = process.env.NEXT_PUBLIC_LOGO_URL || 'https://xpznugqofelwvteosjny.supabase.co/storage/v1/object/sign/rqb-bucket/acbir.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNGFlM2ZmNy1jMDJkLTRmNzUtYWVhYS0wNTY3NzI3YTAxYzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJycWItYnVja2V0L2FjYmlyLnBuZyIsImlhdCI6MTc3MjY2MDYwNCwiZXhwIjoxODM1NzMyNjA0fQ.W5NcD7y12Pp_Me71csPC7zc69OMGhxW9VT_9mYuUseo'

  return (
    <footer className="border-t bg-card py-12 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="mb-4  text-2xl font-bold">
              {'RQB-593 Inmobiliaria'}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {'Tu socio de confianza en bienes raíces. Conectando personas con las propiedades de sus sueños.'}
            </p>
          </div>

          {/* Quick Links */}
          <div className='md:ml-5'>
            <h4 className="mb-4 font-semibold">{'Enlaces Rápidos'}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#properties" className="text-muted-foreground transition-colors hover:text-foreground">
                  {'Propiedades'}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  {'Contacto'}
                </a>
              </li>
            </ul>
          </div>
          {/* ACBIR LOGO and LICENSE */}
          <div className="flex flex-col items-center md:items-start">
              <Image
                src={acbirLogo}
                alt="ACBIR Logo"
                width={100}
                height={100}
              />
              <div className="text-sm text-muted-foreground font-semibold">
                <p>Lic.prof.#689-G</p>
                <p>MIPRO N: 18094</p>
              </div>
            </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-4 font-semibold">{'Redes Sociales'}</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100067704142172"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-muted"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:robinhood-64@hotmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-muted"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>{'© 2025 RQB 593. Todos los derechos reservados.'}</p>
        </div>
      </div>
    </footer>
  )
}
