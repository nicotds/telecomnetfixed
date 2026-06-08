import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MessageCircle, 
  Wifi, 
  Zap, 
  Router, 
  Tv, 
  Clock,
  Gauge,
  Shield,
  Sparkles,
  Crown,
  Rocket,
  Star,
  Flame
} from "lucide-react"
import { WifiPatternBackground } from "@/components/wifi-pattern-background"
import { Reveal } from "@/components/reveal"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Planes de Internet - Telecomnet",
  description: "Planes de fibra optica desde 350 MBPS hasta 800 MBPS.",
}

const plans = [
  { 
    name: "STARTER", 
    speed: "350", 
    price: "$17,39", 
    popular: false,
    tier: 1,
    accentColor: "bg-blue-500",
    accentColorLight: "bg-blue-50",
    textColor: "text-blue-600",
    borderHover: "hover:border-blue-300",
    shadowHover: "hover:shadow-blue-200/50",
    icon: Sparkles,
    tagline: "Ideal para empezar",
    image: "/images/starter.jpg",
    imageBg: "from-blue-50 to-white"
  },
  { 
    name: "PRIME", 
    speed: "500", 
    price: "$21,74", 
    popular: false,
    tier: 2,
    accentColor: "bg-cyan-500",
    accentColorLight: "bg-cyan-50",
    textColor: "text-cyan-600",
    borderHover: "hover:border-cyan-300",
    shadowHover: "hover:shadow-cyan-200/50",
    icon: Star,
    tagline: "Para toda la familia",
    image: "/images/prime.jpg",
    imageBg: "from-cyan-50 to-white"
  },
  { 
    name: "ULTRA", 
    speed: "600", 
    price: "$26,09", 
    popular: true,
    tier: 3,
    accentColor: "bg-emerald-500",
    accentColorLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderHover: "hover:border-emerald-300",
    shadowHover: "hover:shadow-emerald-200/50",
    icon: Rocket,
    tagline: "Recomendado",
    image: "/images/ultra.jpg",
    imageBg: "from-emerald-50 to-white"
  },
  { 
    name: "PRO", 
    speed: "700", 
    price: "$30,43", 
    popular: false,
    tier: 4,
    accentColor: "bg-yellow-500",
    accentColorLight: "bg-yellow-50",
    textColor: "text-yellow-600",
    borderHover: "hover:border-yellow-300",
    shadowHover: "hover:shadow-yellow-200/50",
    icon: Zap,
    tagline: "Gaming y streaming",
    image: "/images/pro.jpg",
    imageBg: "from-yellow-50 to-white"
  },
  { 
    name: "ULTRA PRO", 
    speed: "750", 
    price: "$34,78", 
    popular: false,
    tier: 5,
    accentColor: "bg-orange-500",
    accentColorLight: "bg-orange-50",
    textColor: "text-orange-600",
    borderHover: "hover:border-orange-300",
    shadowHover: "hover:shadow-orange-200/50",
    icon: Flame,
    tagline: "Trabajo desde casa",
    image: "/images/ultra-pro.jpg",
    imageBg: "from-orange-50 to-white"
  },
  { 
    name: "PREMIUM PRO", 
    speed: "800", 
    price: "$43,48", 
    popular: false,
    tier: 6,
    accentColor: "bg-purple-500",
    accentColorLight: "bg-purple-50",
    textColor: "text-purple-600",
    borderHover: "hover:border-purple-300",
    shadowHover: "hover:shadow-purple-200/50",
    icon: Crown,
    tagline: "Maxima potencia",
    image: "/images/premium-pro.jpg",
    imageBg: "from-purple-50 to-white"
  },
]

const benefits = [
  { text: "Instalacion gratis", icon: Zap, animClass: "animate-zap-flash" },
  { text: "Peliculas, Musica y Series", icon: Tv, animClass: "animate-tv-flicker" },
  { text: "Router Dual Band", icon: Router, animClass: "animate-router-blink" },
  { text: "Tecnologia WiFi 6", icon: Wifi, animClass: "animate-wifi-pulse" },
]

const features = [
  { 
    title: "Instalacion Gratuita", 
    desc: "Sin costos adicionales", 
    icon: Zap,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  { 
    title: "Router Dual Band", 
    desc: "2.4Ghz y 5Ghz incluido", 
    icon: Router,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  { 
    title: "Soporte 24/7", 
    desc: "Atencion todo el dia", 
    icon: Clock,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  { 
    title: "Fibra Optica", 
    desc: "Conexion estable y rapida", 
    icon: Gauge,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600"
  },
]

export default function PlanesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - mismo estilo que la pagina principal */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6] py-20 md:py-28">
        <WifiPatternBackground colorClass="text-blue-200" />
        
        {/* Robot asomandose */}
        <div className="absolute bottom-0 right-2 sm:right-8 z-10 pointer-events-none">
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 translate-y-2">
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl" />
            <img src="/robot-telecomnet.svg" alt="" className="relative w-full h-full object-contain drop-shadow-lg animate-float" />
          </div>
        </div>

        {/* Decorative floating icons */}
        <div className="absolute top-16 left-8 md:left-16 opacity-20 animate-float pointer-events-none">
          <Wifi className="h-12 w-12 md:h-16 md:w-16 text-white" />
        </div>
        <div className="absolute bottom-24 right-8 md:right-16 opacity-15 animate-float pointer-events-none" style={{ animationDelay: "1.5s" }}>
          <Router className="h-14 w-14 md:h-20 md:w-20 text-white" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <Reveal>
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/15 backdrop-blur-sm">
              Fibra Optica de Alta Velocidad
            </Badge>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight text-balance">
              Planes y Precios
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-pretty">
              Comienza inmediatamente. Elige el plan perfecto para tu hogar con instalacion gratuita y soporte incluido.
            </p>
          </Reveal>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Plans Section - fondo claro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, idx) => {
              const PlanIcon = plan.icon
              return (
                <Reveal key={plan.name} delay={idx * 80}>
                  <Card
                    className={`
                      group relative flex flex-col overflow-hidden h-full
                      bg-white border border-blue-100
                      transition-all duration-300 ease-out
                      hover:-translate-y-2 hover:shadow-xl ${plan.shadowHover}
                      ${plan.borderHover}
                      ${plan.popular ? "ring-2 ring-emerald-400 shadow-lg shadow-emerald-100" : "shadow-sm"}
                    `}
                  >
                    {/* Top accent bar */}
                    <div className={`h-1.5 w-full ${plan.accentColor}`} />
                    
                    {/* Plan image */}
                    {plan.image && (
                      <div className={`relative w-full h-80 overflow-hidden bg-gradient-to-b ${plan.imageBg}`}>
                        <Image
                          src={plan.image}
                          alt={`Robot mascota plan ${plan.name}`}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    
                    {/* Popular badge */}
                    {plan.popular && (
                      <Badge className="absolute top-5 right-4 z-20 bg-emerald-500 hover:bg-emerald-500 text-white text-xs font-medium shadow-md">
                        Recomendado
                      </Badge>
                    )}
                    
                    {/* Decorative background elements */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                      {/* Wifi icon */}
                      <div className="absolute -right-6 -bottom-6 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500">
                        <Wifi className="h-40 w-40 text-[#1e3a8a]" />
                      </div>
                      
                      {/* Robot mascot */}
                      <Image
                        src="/robot-telecomnet.svg"
                        alt=""
                        width={70}
                        height={70}
                        className="absolute -bottom-1 left-3 opacity-[0.08] group-hover:opacity-[0.15] group-hover:scale-110 transition-all duration-500"
                        aria-hidden="true"
                      />
                    </div>
                    
                    <CardHeader className="relative z-10 pb-3 pt-7">
                      {/* Plan icon + name */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${plan.accentColorLight} transition-transform duration-300 group-hover:scale-110`}>
                          <PlanIcon className={`h-5 w-5 ${plan.textColor}`} />
                        </div>
                        <span className={`text-sm font-bold tracking-widest ${plan.textColor}`}>
                          {plan.name}
                        </span>
                      </div>
                      
                      {/* Speed - Hero element */}
                      <div className="mb-1">
                        <span className="text-5xl md:text-6xl font-bold text-[#1e3a8a] tracking-tight">{plan.speed}</span>
                        <span className="text-xl font-medium text-muted-foreground ml-1">MBPS</span>
                      </div>
                      
                      {/* Tagline */}
                      <p className="text-sm text-muted-foreground mb-3">{plan.tagline}</p>
                      
                      {/* Price */}
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-[#1e3a8a]">{plan.price}</span>
                        <span className="text-muted-foreground text-sm">/mes + IVA</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative z-10 flex-1 pt-2 pb-4">
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-5" />
                      
                      <ul className="space-y-3">
                        {benefits.map((benefit) => {
                          const IconComponent = benefit.icon
                          return (
                            <li key={benefit.text} className="flex items-center gap-3">
                              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${plan.accentColorLight}`}>
                                <IconComponent className={`h-4 w-4 ${plan.textColor} ${benefit.animClass}`} />
                              </div>
                              <span className="text-sm text-foreground">{benefit.text}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </CardContent>
                    
                    <CardFooter className="relative z-10 pt-2 pb-6">
                      <Button
                        asChild
                        className={`
                          w-full gap-2 h-12 text-base font-medium
                          ${plan.accentColor} 
                          hover:opacity-90 transition-all duration-300
                          text-white shadow-md
                        `}
                      >
                        <a
                          href={`https://wa.me/593968539220?text=Hola,%20deseo%20mas%20informacion%20sobre%20el%20Plan%20${encodeURIComponent(plan.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="h-5 w-5" />
                          Contratar Plan
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section - fondo secundario como en home */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-amber-600 mb-3">
                Incluido
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4 text-balance">
                Todos nuestros planes incluyen
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto text-pretty">
                Sin costos ocultos. Todo lo que necesitas para conectarte.
              </p>
            </Reveal>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <Reveal key={item.title} delay={idx * 100}>
                    <div 
                      className="flex items-center gap-4 p-5 rounded-xl bg-white border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-blue-200 transition-all duration-300"
                    >
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg}`}>
                        <IconComponent className={`h-6 w-6 ${item.iconColor}`} />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-[#1e3a8a]">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - gradiente azul como en home */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] overflow-hidden">
        <WifiPatternBackground colorClass="text-blue-200" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <Shield className="h-5 w-5 text-amber-400" />
              <span className="text-white text-sm font-medium">Satisfaccion garantizada</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Tienes dudas? Contactanos
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto text-pretty">
              Nuestro equipo esta listo para ayudarte a elegir el plan perfecto para ti.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white h-14 px-8 text-lg font-semibold shadow-lg shadow-amber-500/20"
            >
              <a
                href="https://wa.me/593968539220?text=Hola,%20necesito%20ayuda%20para%20elegir%20un%20plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Hablar con un asesor
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
