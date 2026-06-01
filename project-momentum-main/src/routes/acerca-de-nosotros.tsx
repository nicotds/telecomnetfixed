import { createFileRoute } from "@tanstack/react-router";

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, Award } from "lucide-react"
import { Logo } from "@/components/logo"


function AcercaDeNosotrosPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Acerca de Nosotros
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Conoce más sobre Telecomnet y nuestro compromiso con llevarte la mejor conectividad.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">
                Tu punto de encuentro en la web
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                En Telecomnet nos dedicamos a proporcionar servicios de internet de alta velocidad utilizando tecnología de fibra óptica de última generación. Nuestro compromiso es conectar hogares y negocios con la mejor calidad de servicio y atención personalizada.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Con años de experiencia en el sector de las telecomunicaciones, hemos construido una red robusta y confiable que nos permite ofrecer velocidades de hasta 800 MBPS, garantizando una experiencia de navegación sin interrupciones.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-20 blur-xl" />
                <div className="relative bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
                  <Logo animated />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-none shadow-lg">
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
            <Card className="border-none shadow-lg">
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
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Award className="h-8 w-8 text-[#1e3a8a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">Calidad</h3>
              <p className="text-sm text-muted-foreground">
                Ofrecemos la mejor tecnología y servicio del mercado.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Users className="h-8 w-8 text-[#1e3a8a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">Compromiso</h3>
              <p className="text-sm text-muted-foreground">
                Estamos comprometidos con la satisfacción de nuestros clientes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Target className="h-8 w-8 text-[#1e3a8a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">Innovación</h3>
              <p className="text-sm text-muted-foreground">
                Actualizamos constantemente nuestra tecnología e infraestructura.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Eye className="h-8 w-8 text-[#1e3a8a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">Transparencia</h3>
              <p className="text-sm text-muted-foreground">
                Precios claros y sin sorpresas en nuestros servicios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export const Route = createFileRoute("/acerca-de-nosotros")({
  component: AcercaDeNosotrosPage,
  head: () => ({
    meta: [
      { title: "Acerca de Nosotros - Telecomnet" },
      { name: "description", content: "Conoce a Telecomnet, tu proveedor de internet de fibra óptica de alta velocidad." },
    ],
  }),
});
