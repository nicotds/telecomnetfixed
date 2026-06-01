import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, MessageCircle } from "lucide-react"
import { WifiPatternBackground } from "@/components/wifi-pattern-background"
import { WifiIcon } from "@/components/wifi-icon"


const plans = [
  {
    name: "STARTER",
    speed: "350 MBPS",
    price: "$17,39",
    popular: false,
  },
  {
    name: "PRIME",
    speed: "500 MBPS",
    price: "$21,74",
    popular: false,
  },
  {
    name: "ULTRA",
    speed: "600 MBPS",
    price: "$26,09",
    popular: true,
  },
  {
    name: "PRO",
    speed: "700 MBPS",
    price: "$30,43",
    popular: false,
  },
  {
    name: "ULTRA PRO",
    speed: "750 MBPS",
    price: "$34,78",
    popular: false,
  },
  {
    name: "PREMIUM PRO",
    speed: "800 MBPS",
    price: "$43,48",
    popular: false,
  },
]

const benefits = [
  "Instalación gratis",
  "Películas, Música y Series",
  "Router Dual Band",
  "Tecnología Dual 5Ghz",
]

function PlanesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6] py-16 md:py-24">
        {/* Patrón decorativo de WiFi en el fondo */}
        <WifiPatternBackground colorClass="text-blue-200" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Planes
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. Todos incluyen instalación gratis y router dual band.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                style={{
                  boxShadow: plan.popular
                    ? "0 0 0 1px rgb(245 158 11 / 0.6), 0 0 32px -4px rgb(245 158 11 / 0.45), 0 0 60px -10px rgb(59 130 246 / 0.35)"
                    : "0 0 0 1px rgb(59 130 246 / 0.35), 0 0 24px -4px rgb(59 130 246 / 0.35), 0 0 48px -12px rgb(30 58 138 / 0.25)",
                }}
                className={`relative flex flex-col border transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "border-amber-500/70 scale-105 hover:[box-shadow:0_0_0_1px_rgb(245_158_11_/_0.8),0_0_44px_-4px_rgb(245_158_11_/_0.6),0_0_80px_-10px_rgb(59_130_246_/_0.5)]"
                    : "border-blue-400/40 hover:border-blue-400/70 hover:[box-shadow:0_0_0_1px_rgb(59_130_246_/_0.65),0_0_36px_-4px_rgb(59_130_246_/_0.55),0_0_72px_-12px_rgb(30_58_138_/_0.4)]"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-amber-500 hover:bg-amber-500 text-white">
                    Más Popular
                  </Badge>
                )}
                {/* Decoración de fondo con icono de WiFi 3D */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                  <WifiIcon
                    size={240}
                    opacity={plan.popular ? 0.18 : 0.12}
                    className="absolute -right-14 -bottom-16"
                  />
                </div>
                <CardHeader className="relative z-10 text-center pb-2 pt-8">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {plan.name}
                  </p>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-[#1e3a8a]">{plan.speed}</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground"> + IVA/mes</span>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 flex-1 pt-6">
                  <ul className="space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="relative z-10 pt-4">
                  <Button 
                    asChild 
                    className={`w-full gap-2 ${
                      plan.popular 
                        ? "bg-amber-500 hover:bg-amber-600" 
                        : "bg-[#1e3a8a] hover:bg-[#1e40af]"
                    }`}
                  >
                    <a 
                      href={`https://wa.me/593968539220?text=Hola,%20deseo%20más%20información%20sobre%20el%20Plan%20${encodeURIComponent(plan.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Contratar por WhatsApp
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">
              Todos nuestros planes incluyen
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Check className="h-6 w-6 text-[#1e3a8a]" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-[#1e3a8a]">Instalación Gratuita</h3>
                  <p className="text-sm text-muted-foreground">Sin costos adicionales</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Check className="h-6 w-6 text-[#1e3a8a]" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-[#1e3a8a]">Router Dual Band</h3>
                  <p className="text-sm text-muted-foreground">2.4Ghz y 5Ghz incluido</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Check className="h-6 w-6 text-[#1e3a8a]" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-[#1e3a8a]">Soporte 24/7</h3>
                  <p className="text-sm text-muted-foreground">Atención todo el día</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Check className="h-6 w-6 text-[#1e3a8a]" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-[#1e3a8a]">Fibra Óptica</h3>
                  <p className="text-sm text-muted-foreground">Conexión estable y rápida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export const Route = createFileRoute("/planes")({
  component: PlanesPage,
  head: () => ({
    meta: [
      { title: "Planes de Internet - Telecomnet" },
      { name: "description", content: "Planes de fibra óptica desde 350 MBPS hasta 800 MBPS." },
    ],
  }),
});
