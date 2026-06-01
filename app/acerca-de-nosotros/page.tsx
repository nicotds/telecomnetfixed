import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, Award } from "lucide-react"
import { Logo } from "@/components/logo"
import { Reveal } from "@/components/reveal"
import { WifiPatternBackground } from "@/components/wifi-pattern-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acerca de Nosotros - Telecomnet",
  description: "Conoce a Telecomnet, tu proveedor de internet de fibra óptica de alta velocidad.",
}

export default function AcercaDeNosotrosPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Acerca de Nosotros</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Conoce más sobre Telecomnet y nuestro compromiso con llevarte la mejor conectividad.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">Tu punto de encuentro en la web</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                En Telecomnet nos dedicamos a proporcionar servicios de internet de alta velocidad utilizando tecnología de fibra óptica de última generación. Nuestro compromiso es conectar hogares y negocios con la mejor calidad de servicio y atención personalizada.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Con años de experiencia en el sector de las telecomunicaciones, hemos construido una red robusta y confiable que nos permite ofrecer velocidades de hasta 800 MBPS, garantizando una experiencia de navegación sin interrupciones.
              </p>
            </Reveal>
            <Reveal delay={150} className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-20 blur-xl" />
                <div className="relative bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
                  <Logo animated />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <Card className="border-none shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                      <Target className="h-7 w-7 text-[#1e3a8a]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e3a8a]">Nuestra Misión</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Brindar servicios de conectividad de alta calidad que permitan a nuestros clientes disfrutar de una experiencia digital sin límites. Nos comprometemos a ofrecer soluciones tecnológicas accesibles, confiables y con un servicio al cliente excepcional.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal delay={100}>
              <Card className="border-none shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                      <Eye className="h-7 w-7 text-[#1e3a8a]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e3a8a]">Nuestra Visión</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser el proveedor de internet líder en nuestra región, reconocido por la calidad de nuestro servicio, la innovación tecnológica y el compromiso con la satisfacción de nuestros clientes. Buscamos expandir nuestra cobertura para conectar más comunidades.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">Nuestros Valores</h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, title: "Calidad", desc: "Ofrecemos la mejor tecnología y servicio del mercado." },
              { icon: Users, title: "Compromiso", desc: "Estamos comprometidos con la satisfacción de nuestros clientes." },
              { icon: Target, title: "Innovación", desc: "Actualizamos constantemente nuestra tecnología e infraestructura." },
              { icon: Eye, title: "Transparencia", desc: "Precios claros y sin sorpresas en nuestros servicios." },
            ].map((item, idx) => (
              <Reveal key={item.title} delay={idx * 100} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <item.icon className="h-8 w-8 text-[#1e3a8a]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
