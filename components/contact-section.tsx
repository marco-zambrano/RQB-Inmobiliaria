'use client'

import { Mail, Phone, Clock, Facebook, Send, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const SOCIAL_LINKS: { label: string; href: string; icon: LucideIcon }[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100067704142172', icon: Facebook },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="mb-4 font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight md:text-5xl">
            {'Contáctanos'}
          </h2>
          <p className="text-balance text-muted-foreground text-lg max-w-2xl mx-auto">
            {'Estamos disponibles para ayudarte a encontrar la propiedad de tus sueños. Contáctanos por cualquiera de nuestros canales.'}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex flex-col gap-4">
            <Card className="border-2 transition-all hover:shadow-lg hover:scale-[1.02]">
              <CardContent className="p-5 text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-1 font-semibold text-lg">{'WhatsApp'}</h3>
                <p className="text-sm text-muted-foreground mb-3">{'+593 99 946 7091'}</p>
                <Button asChild className="w-full" size="sm">
                  <a href="https://wa.me/593999467091" target="_blank" rel="noopener noreferrer">
                    {'Enviar Mensaje'}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg hover:scale-[1.02]">
              <CardContent className="p-5 text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-1 font-semibold text-lg">{'Email'}</h3>
                <p className="text-sm text-muted-foreground mb-3">{'robinhood-64@hotmail.com'}</p>
                <Button asChild className="w-full" size="sm" variant="outline">
                  <a href="mailto:robinhood-64@hotmail.com">
                    {'Enviar Email'}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg hover:scale-[1.02]">
              <CardContent className="p-5 text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-1 font-semibold text-lg">{'Horario'}</h3>
                <p className="text-sm text-muted-foreground">{'Lun - Vie: 8:00 AM - 8:00 PM'}</p>
                <p className="text-sm text-muted-foreground">{'Sábados: 9:00 AM - 8:00 PM'}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 backdrop-blur w-fit mx-auto">
            <CardContent className="p-8 flex flex-col items-center justify-center text-center">
              <Send className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">{'¿Listo para encontrar tu propiedad ideal?'}</h3>
              <p className="mb-6 text-muted-foreground text-balance max-w-md">
                {'Nuestro equipo de expertos está listo para asesorarte en cada paso del proceso'}
              </p>

              <Button asChild size="lg" className="mb-8 min-w-[220px]">
                <a href="https://wa.me/+593999467091" target="_blank" rel="noopener noreferrer">
                  {'Contactar por WhatsApp'}
                </a>
              </Button>

              {SOCIAL_LINKS.length > 0 && (
                <div className="w-full border-t pt-6">
                  <p className="mb-4 text-sm font-medium text-muted-foreground">
                    {'Nuestras Redes Sociales'}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {SOCIAL_LINKS.map((social) => (
                      <Button
                        key={social.label}
                        asChild
                        variant="outline"
                        size="lg"
                        className="gap-2"
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <social.icon className="h-5 w-5" />
                          {social.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
