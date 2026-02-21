import { CheckCircle2, Home, Users, Award } from 'lucide-react'

export function AboutSection() {
  const stats = [
    { icon: Home, value: '500+', label: 'Propiedades Vendidas' },
    { icon: Users, value: '1,200+', label: 'Clientes Satisfechos' },
    { icon: Award, value: '15+', label: 'Años de Experiencia' },
  ]

  const features = [
    'Asesoría personalizada en cada paso del proceso',
    'Portafolio exclusivo de propiedades premium',
    'Equipo de profesionales certificados',
    'Acompañamiento legal y financiero completo',
    'Tecnología de punta para búsqueda de propiedades',
    'Servicio postventa y seguimiento continuo',
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl font-bold text-foreground lg:text-5xl text-balance">
                {'Sobre Nosotros'}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {'En Elite Properties, nos especializamos en conectar a nuestros clientes con las propiedades más exclusivas y deseadas del mercado. Con más de 15 años de experiencia, hemos construido una reputación sólida basada en la confianza, profesionalismo y resultados excepcionales.'}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {'Nuestro equipo de expertos en bienes raíces trabaja incansablemente para entender tus necesidades y encontrar la propiedad perfecta que se adapte a tu estilo de vida y aspiraciones. Ya sea que estés buscando tu primera vivienda, una inversión estratégica o la casa de tus sueños, estamos aquí para guiarte en cada paso del camino.'}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 pt-4">
              <h3 className="font-semibold text-xl text-foreground mb-4">
                {'¿Por qué elegirnos?'}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-serif text-3xl font-bold text-foreground">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Mission Statement Card */}
            <div className="rounded-lg border bg-accent/20 p-8 shadow-sm">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {'Nuestra Misión'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {'Facilitar el acceso a propiedades premium mediante un servicio personalizado, transparente y profesional que supere las expectativas de nuestros clientes, construyendo relaciones duraderas basadas en la confianza y la excelencia.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
