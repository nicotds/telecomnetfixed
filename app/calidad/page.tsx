import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Zap, Clock, Award, CheckCircle, Server, Headphones, Gauge } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { WifiPatternBackground } from "@/components/wifi-pattern-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Calidad del Servicio - Telecomnet",
  description: "Compromiso de calidad y normativa que respalda nuestro servicio de internet.",
}

const qualityFeatures = [
  { icon: Zap, title: "Alta Velocidad", description: "Velocidades simétricas de hasta 800 MBPS para descarga y subida de archivos sin esperas." },
  { icon: Server, title: "Infraestructura Robusta", description: "Red de fibra óptica de última generación con redundancia para máxima disponibilidad." },
  { icon: Clock, title: "99.9% Uptime", description: "Garantizamos una disponibilidad del servicio superior al 99.9% durante todo el año." },
  { icon: Shield, title: "Conexión Segura", description: "Protección de datos y navegación segura para tu tranquilidad." },
  { icon: Headphones, title: "Soporte Premium", description: "Equipo técnico especializado disponible 24/7 para resolver cualquier incidencia." },
  { icon: Gauge, title: "Monitoreo Constante", description: "Supervisamos la red continuamente para detectar y resolver problemas antes de que te afecten." },
]

const commitments = [
  "Instalación en menos de 48 horas hábiles",
  "Respuesta a incidencias en menos de 4 horas",
  "Técnicos certificados y capacitados",
  "Equipos de alta calidad incluidos",
  "Sin cláusulas de permanencia abusivas",
  "Facturación transparente",
]

export default function CalidadPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Calidad de Servicio</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Nuestro compromiso es brindarte la mejor experiencia de conectividad con los más altos estándares de calidad.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">Estándares de Calidad</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trabajamos constantemente para superar tus expectativas en cada aspecto de nuestro servicio.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {qualityFeatures.map((feature, idx) => (
              <Reveal key={feature.title} delay={idx * 80}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
                        <feature.icon className="h-6 w-6 text-[#1e3a8a]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                  <Award className="h-7 w-7 text-amber-600" />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a8a]">Nuestro Compromiso</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                En Telecomnet nos comprometemos a brindarte un servicio de excelencia. Estos son nuestros compromisos contigo:
              </p>
              <ul className="space-y-4">
                {commitments.map((commitment, idx) => (
                  <Reveal key={commitment} delay={idx * 70} as="li" className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-foreground">{commitment}</span>
                  </Reveal>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150} className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#1e3a8a] mb-2">99.9%</div>
                  <div className="text-xl text-muted-foreground mb-6">Disponibilidad Garantizada</div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#1e3a8a]">24/7</div>
                      <div className="text-sm text-muted-foreground">Soporte</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#1e3a8a]">{"<4h"}</div>
                      <div className="text-sm text-muted-foreground">Respuesta</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#1e3a8a]">800</div>
                      <div className="text-sm text-muted-foreground">MBPS</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-[#1e3a8a] overflow-hidden">
        {/* Robot asomandose desde la esquina inferior derecha */}
        <div className="absolute bottom-0 right-4 md:right-12 z-0 pointer-events-none opacity-20 hover:opacity-30 transition-opacity duration-500">
          <div className="relative w-24 h-24 md:w-32 md:h-32 translate-y-4">
            <img
              src="/robot-telecomnet.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <Reveal>
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <Gauge className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprueba tu Velocidad</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Verifica que estás recibiendo la velocidad contratada con nuestra herramienta de test de velocidad.
            </p>
          </Reveal>
          <Reveal delay={150} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 gap-2">
              <a href="https://telecomnet.speedtestcustom.com" target="_blank" rel="noopener noreferrer">
                <Gauge className="h-4 w-4" />
                Test de Velocidad
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white">
              <Link href="/contacto">Reportar Problema</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
