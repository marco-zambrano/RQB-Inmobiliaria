'use client'

import { Instagram, Facebook, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-card py-12 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-4  text-2xl font-bold">
              {'RQB 593'}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {'Tu socio de confianza en bienes raíces. Conectando personas con las propiedades de sus sueños.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
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
              {/* <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  {'Sobre Nosotros'}
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  {'Servicios'}
                </a>
              </li> */}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold">{'Redes Sociales'}</h4>
            <div className="flex gap-3">
              {/* <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-muted"
              >
                <Instagram className="h-5 w-5" />
              </a> */}
              <a
                href="https://facebook.com"
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
