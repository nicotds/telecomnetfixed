import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Gauge, Facebook, Instagram, Phone, HelpCircle, Globe, Share2 } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { WifiPatternBackground } from "@/components/wifi-pattern-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Links de Interés - Telecomnet",
  description: "Enlaces útiles y recursos relacionados con tu servicio de internet.",
}

const herramientas = [
  { 
    title: "Test de Velocidad", 
    description: "Mide la velocidad de tu conexión a internet en tiempo real con nuestra herramienta oficial.", 
    href: "https://telecomnet.speedtestcustom.com", 
    icon: Gauge, 
    featured: true,
    color: "amber"
  },
]

const redesSociales = [
  { 
    title: "Facebook", 
    description: "Síguenos para estar al día con nuestras novedades y promociones.", 
    href: "https://www.facebook.com/Telecomnetsa", 
    icon: Facebook,
    color: "blue"
  },
  { 
    title: "Instagram", 
    description: "Contenido exclusivo y detrás de cámaras de Telecomnet.", 
    href: "https://www.instagram.com/telecomnet_sa/", 
    icon: Instagram,
    color: "pink"
  },
  { 
    title: "TikTok", 
    description: "Videos entretenidos y tips sobre tecnología e internet.", 
    href: "https://www.tiktok.com/@telecomnet.sa", 
    icon: () => (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    color: "slate"
  },
]

const contacto = [
  { 
    title: "WhatsApp", 
    description: "Contáctanos directamente para soporte técnico o consultas comerciales.", 
    href: "https://wa.me/593968539220", 
    icon: Phone,
    color: "green"
  },
]

const colorClasses: Record<string, { bg: string; iconBg: string; iconColor: string; border: string; button: string }> = {
  amber: { bg: "bg-amber-50", iconBg: "bg-amber-100", iconColor: "text-amber-600", border: "ring-2 ring-amber-400", button: "bg-amber-500 hover:bg-amber-600" },
  blue: { bg: "bg-blue-50", iconBg: "bg-blue-100", iconColor: "text-blue-600", border: "border-blue-100 hover:border-blue-200", button: "bg-blue-600 hover:bg-blue-700" },
  pink: { bg: "bg-pink-50", iconBg: "bg-pink-100", iconColor: "text-pink-600", border: "border-pink-100 hover:border-pink-200", button: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" },
  slate: { bg: "bg-slate-50", iconBg: "bg-slate-100", iconColor: "text-slate-700", border: "border-slate-100 hover:border-slate-200", button: "bg-slate-800 hover:bg-slate-900" },
  green: { bg: "bg-green-50", iconBg: "bg-green-100", iconColor: "text-green-600", border: "border-green-100 hover:border-green-200", button: "bg-[#25D366] hover:bg-[#128C7E]" },
}

export default function LinksDeInteresPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6] py-16 md:py-24">
        <WifiPatternBackground colorClass="text-blue-200" />
        {/* Robot asomandose */}
        <div className="absolute bottom-0 right-2 sm:right-8 z-10 pointer-events-none">
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 translate-y-2">
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl" />
            <img src="/robot-telecomnet.svg" alt="" className="relative w-full h-full object-contain drop-shadow-lg animate-float" />
          </div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-30">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur mb-4">
            <Globe className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Links de Interés</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Recursos útiles y enlaces importantes para nuestros clientes.
          </p>
        </div>
      </section>

      {/* Herramientas */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">
                <Gauge className="h-5 w-5 text-amber-600" />
              </div>
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-600">Herramientas</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a]">Mide tu conexión</h2>
          </Reveal>

          <div className="grid gap-6">
            {herramientas.map((link, idx) => {
              const colors = colorClasses[link.color]
              const IconComponent = link.icon
              return (
                <Reveal key={link.title} delay={idx * 100}>
                  <Card className={`border-none shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 ${colors.border}`}>
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
                        <div className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl ${colors.iconBg}`}>
                          <IconComponent className={`h-10 w-10 ${colors.iconColor}`} />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{link.title}</h3>
                          <p className="text-muted-foreground">{link.description}</p>
                        </div>
                        <Button asChild size="lg" className={`${colors.button} gap-2 px-8 shrink-0`}>
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Realizar Test
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Redes Sociales */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                <Share2 className="h-5 w-5 text-[#1e3a8a]" />
              </div>
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-600">Síguenos</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a]">Redes Sociales</h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {redesSociales.map((link, idx) => {
              const colors = colorClasses[link.color]
              const IconComponent = link.icon
              return (
                <Reveal key={link.title} delay={idx * 100}>
                  <Card className={`border shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group h-full ${colors.border}`}>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.iconBg} mb-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`h-7 w-7 ${colors.iconColor}`} />
                      </div>
                      <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">{link.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">{link.description}</p>
                      <Button asChild className={`w-full gap-2 ${colors.button}`}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Seguir
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contacto Directo */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                <Phone className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-600">Contacto</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a]">Contacto Directo</h2>
          </Reveal>

          <div className="grid gap-6">
            {contacto.map((link, idx) => {
              const colors = colorClasses[link.color]
              const IconComponent = link.icon
              return (
                <Reveal key={link.title} delay={idx * 100}>
                  <Card className={`border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${colors.border}`}>
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
                        <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${colors.iconBg}`}>
                          <svg className={`h-8 w-8 ${colors.iconColor}`} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{link.title}</h3>
                          <p className="text-muted-foreground">{link.description}</p>
                        </div>
                        <Button asChild size="lg" className={`${colors.button} gap-2 px-8 shrink-0`}>
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Contactar
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA de ayuda */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                  <HelpCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas ayuda?</h2>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                Si tienes alguna pregunta o necesitas asistencia técnica, no dudes en contactarnos. Estamos disponibles 24/7.
              </p>
            </Reveal>
            <Reveal delay={150} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 gap-2">
                <a href="https://wa.me/593968539220" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4" />
                  Contactar Soporte
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white gap-2">
                <a href="https://telecomnet.speedtestcustom.com" target="_blank" rel="noopener noreferrer">
                  <Gauge className="h-4 w-4" />
                  Test de Velocidad
                </a>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
