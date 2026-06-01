import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Router, Headphones, Zap, MapPin, Film, Music, Tv } from "lucide-react"
import { LogoLarge } from "@/components/logo"
import { LogoIcon } from "@/components/logo-icon"
import { WifiPatternBackground } from "@/components/wifi-pattern-background"
import { Reveal } from "@/components/reveal"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Telecomnet - Tu punto de encuentro en la web",
  description: "Internet de fibra óptica con WiFi 6. Planes desde 350 MBPS hasta 800 MBPS. Instalación gratis, Router Dual Band y Soporte 24/7.",
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6] pt-12 pb-28 md:pt-16 md:pb-36 lg:pt-24 lg:pb-44">
        {/* Patrón decorativo de WiFi en el fondo */}
        <WifiPatternBackground colorClass="text-blue-200" />

        <div className="container mx-auto px-4 md:px-6 relative z-30">
          {/* Contenido principal: alineado a la izquierda en desktop, centrado en mobile */}
          <div className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left gap-6 mx-auto lg:mx-0">
            <LogoLarge withBackground animated />

            <div className="flex flex-col gap-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
                El internet que necesitas para navegar sin interrupciones
              </h1>
              <p className="text-base md:text-lg text-blue-100 text-pretty leading-relaxed">
                Internet de fibra óptica con tecnología WiFi 6 para tu hogar y negocio. Velocidad, estabilidad y el mejor servicio en tu zona.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 shadow-lg shadow-amber-500/20">
                <Link href="/planes">Ver Planes</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-[#1e3a8a] hover:bg-white/90 font-semibold px-8 shadow-lg shadow-black/10">
                <Link href="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Robot: asomándose desde la esquina inferior derecha (mobile y desktop) */}
        <div className="absolute bottom-0 right-2 sm:right-4 xl:right-12 z-10 pointer-events-none">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 translate-y-3 lg:translate-y-4">
            <div className="absolute inset-0 bg-blue-400/25 rounded-full blur-2xl lg:blur-3xl" />
            <div className="relative w-full h-full animate-float">
              <img
                src="/robot-telecomnet.svg"
                alt="Mascota robot de TelecomNet"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-xl lg:drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Decorative wave (en frente del robot para crear el efecto de asomarse) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="text-center mb-12 md:mb-14">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-amber-600 mb-3">
              Beneficios
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4 text-balance">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
              Ofrecemos los mejores beneficios para que disfrutes de una conexión estable y de alta velocidad.
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Wifi,
                title: "Fibra Óptica + WiFi 6",
                description: "Tecnología de última generación para una conexión ultra rápida y estable.",
                animClass: "animate-wifi-pulse",
                accent: "from-blue-500 to-cyan-400",
                iconBg: "bg-blue-50 group-hover:bg-blue-100",
                glow: "group-hover:shadow-blue-500/20",
              },
              {
                icon: Router,
                title: "Router Dual Band",
                description: "Equipos con doble banda 2.4Ghz y 5Ghz incluidos en tu instalación.",
                animClass: "animate-router-blink",
                accent: "from-emerald-500 to-teal-400",
                iconBg: "bg-emerald-50 group-hover:bg-emerald-100",
                glow: "group-hover:shadow-emerald-500/20",
              },
              {
                icon: Tv,
                title: "Entretenimiento Gratis",
                description: "Películas, música y series incluidas con tu instalación.",
                animClass: "animate-tv-flicker",
                accent: "from-violet-500 to-fuchsia-400",
                iconBg: "bg-violet-50 group-hover:bg-violet-100",
                glow: "group-hover:shadow-violet-500/20",
              },
              {
                icon: Headphones,
                title: "Soporte 24/7",
                description: "Atención técnica disponible las 24 horas, los 7 días de la semana.",
                animClass: "animate-headphone-swing",
                accent: "from-amber-500 to-orange-400",
                iconBg: "bg-amber-50 group-hover:bg-amber-100",
                glow: "group-hover:shadow-amber-500/20",
              },
            ].map(({ icon: Icon, title, description, animClass, accent, iconBg, glow }, idx) => (
              <Reveal key={title} delay={idx * 100}>
                <Card
                  className={`group relative overflow-hidden border border-blue-100 shadow-sm hover:shadow-xl ${glow} hover:-translate-y-2 transition-all duration-300 h-full`}
                >
                  {/* Gradient top accent bar */}
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  {/* Subtle gradient glow on hover */}
                  <div className={`absolute -inset-px rounded-[inherit] bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none`} />
                  <CardContent className="relative flex flex-col items-center text-center p-6 gap-3">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className={`h-7 w-7 text-[#1e3a8a] ${animClass}`} />
                    </div>
                    <h3 className="text-base font-semibold text-[#1e3a8a]">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="inline-block text-xs font-semibold tracking-wider uppercase text-amber-600">
                  Experiencia completa
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] text-balance leading-tight">
                  Más que solo internet
                </h2>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Con Telecomnet obtienes una experiencia completa de conectividad con beneficios exclusivos.
                </p>
              </div>
              <div className="grid gap-5">
                {[
                  {
                    icon: Zap,
                    title: "Velocidades hasta 800 MBPS",
                    description: "Descarga y navega sin límites con WiFi 6",
                    animClass: "animate-zap-flash",
                  },
                  {
                    icon: Film,
                    title: "Instalación con Entretenimiento",
                    description: "Películas, música y series gratis incluidas",
                    animClass: "animate-film-spin",
                  },
                  {
                    icon: Music,
                    title: "Streaming sin Cortes",
                    description: "Conexión estable para todo tu contenido",
                    animClass: "animate-music-bounce",
                  },
                ].map(({ icon: Icon, title, description, animClass }, idx) => (
                  <Reveal key={title} delay={150 + idx * 100} className="flex items-start gap-4 group">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1e3a8a] shadow-sm shadow-[#1e3a8a]/20 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-[#1e3a8a]/30">
                      <Icon className={`h-5 w-5 text-white ${animClass}`} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-semibold text-[#1e3a8a]">{title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Button asChild className="w-fit bg-[#1e3a8a] hover:bg-[#1e40af] shadow-sm">
                <Link href="/planes">Conoce nuestros planes</Link>
              </Button>
            </Reveal>
            <Reveal delay={200} className="relative flex items-center justify-center">
              <div className="relative w-56 h-56 md:w-64 md:h-64">
                {/* Halos suaves */}
                <div className="absolute inset-0 bg-blue-500/15 rounded-full blur-2xl" />
                <div className="absolute inset-6 bg-blue-400/10 rounded-full blur-xl" />
                {/* Icono de ondas */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <LogoIcon size={120} animated />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <MapPin className="h-5 w-5 text-amber-600 animate-pin-drop" />
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-600">
                Cobertura
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4 text-balance">
              Donde estamos
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty">
              Llevamos internet de alta velocidad a las siguientes localidades
            </p>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {['Piñas', 'Portovelo', 'Zaruma', 'Paccha', 'Marcabelí', 'Balsas'].map((ciudad, idx) => (
              <Reveal key={ciudad} delay={idx * 70}>
                <div
                  className="px-5 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm text-[#1e3a8a] font-medium hover:bg-blue-100 hover:border-blue-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-200 cursor-default"
                >
                  {ciudad}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] overflow-hidden">
        <WifiPatternBackground colorClass="text-blue-200" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              ¿Listo para conectarte?
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed text-pretty">
              Elige el plan que mejor se adapte a tus necesidades y disfruta de internet de alta velocidad con películas, música y series gratis.
            </p>
          </Reveal>
          <Reveal delay={150} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 shadow-lg shadow-amber-500/20">
              <Link href="/planes">Ver Planes</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white">
              <a href="https://wa.me/593968539220" target="_blank" rel="noopener noreferrer">
                Hablar por WhatsApp
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
