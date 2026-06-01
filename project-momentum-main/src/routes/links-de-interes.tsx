import { createFileRoute } from "@tanstack/react-router";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Gauge, Facebook, Instagram, Phone, FileText, HelpCircle } from "lucide-react"


const links = [
  {
    title: "Test de Velocidad",
    description: "Mide la velocidad de tu conexión a internet en tiempo real.",
    href: "https://telecomnet.speedtestcustom.com",
    icon: Gauge,
    featured: true,
  },
  {
    title: "Facebook",
    description: "Síguenos en Facebook para estar al día con nuestras novedades.",
    href: "https://www.facebook.com/Telecomnetsa",
    icon: Facebook,
  },
  {
    title: "Instagram",
    description: "Contenido exclusivo y promociones en Instagram.",
    href: "https://www.instagram.com/telecomnet_sa/",
    icon: Instagram,
  },
  {
    title: "TikTok",
    description: "Videos y contenido entretenido en TikTok.",
    href: "https://www.tiktok.com/@telecomnet.sa",
    icon: () => (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    description: "Contáctanos directamente por WhatsApp para soporte o consultas.",
    href: "https://wa.me/593968539220",
    icon: Phone,
  },
]

function LinksDeInteresPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Links de Interés
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Recursos útiles y enlaces importantes para nuestros clientes.
          </p>
        </div>
      </section>

      {/* Links Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => {
              const IconComponent = link.icon
              return (
                <Card 
                  key={link.title} 
                  className={`border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${
                    link.featured ? "md:col-span-2 lg:col-span-1 ring-2 ring-amber-500" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${
                        link.featured ? "bg-amber-100" : "bg-blue-100"
                      }`}>
                        <IconComponent className={`h-6 w-6 ${
                          link.featured ? "text-amber-600" : "text-[#1e3a8a]"
                        }`} />
                      </div>
                      <CardTitle className="text-[#1e3a8a]">{link.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <p className="text-muted-foreground">{link.description}</p>
                    <Button 
                      asChild 
                      className={`w-full gap-2 ${
                        link.featured 
                          ? "bg-amber-500 hover:bg-amber-600" 
                          : "bg-[#1e3a8a] hover:bg-[#1e40af]"
                      }`}
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Visitar
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <HelpCircle className="h-8 w-8 text-[#1e3a8a]" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
                ¿Necesitas ayuda?
              </h2>
              <p className="text-muted-foreground">
                Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#1e3a8a] hover:bg-[#1e40af] gap-2">
                <a href="https://wa.me/593968539220" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4" />
                  Contactar Soporte
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white">
                <a href="https://telecomnet.speedtestcustom.com" target="_blank" rel="noopener noreferrer">
                  <Gauge className="h-4 w-4" />
                  Test de Velocidad
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export const Route = createFileRoute("/links-de-interes")({
  component: LinksDeInteresPage,
  head: () => ({
    meta: [
      { title: "Links de Interés - Telecomnet" },
      { name: "description", content: "Enlaces útiles y recursos relacionados con tu servicio de internet." },
    ],
  }),
});
