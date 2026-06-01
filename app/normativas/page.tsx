import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink, Shield, Scale, Users, BookOpen, Download, Gavel, Heart, Baby, Lock, FileCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { WifiPatternBackground } from "@/components/wifi-pattern-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Normativas y Transparencia - TELECOMNET S.A.",
  description: "Información técnica, regulatoria, derechos del usuario, política de privacidad y normativa vigente conforme a ARCOTEL.",
}

const hipervinculos = [
  { label: "ARCOTEL", url: "https://www.arcotel.gob.ec", icon: Gavel, desc: "Agencia de Regulación y Control de las Telecomunicaciones" },
  { label: "Ministerio de Telecomunicaciones (MINTEL)", url: "https://www.telecomunicaciones.gob.ec", icon: Scale, desc: "Ministerio de Telecomunicaciones y de la Sociedad de la Información" },
  { label: "LOPDP — Ley Orgánica de Protección de Datos Personales", url: "https://www.telecomunicaciones.gob.ec/wp-content/uploads/2021/06/Ley-Organica-de-Datos-Personales.pdf", icon: Lock, desc: "Ley vigente para protección de datos personales en Ecuador" },
  { label: "Ley Orgánica de Discapacidades", url: "https://www.consejodiscapacidades.gob.ec/wp-content/uploads/downloads/2014/02/ley_organica_discapacidades.pdf", icon: Heart, desc: "Marco legal para personas con discapacidad" },
  { label: "Código de la Niñez y Adolescencia", url: "https://www.igualdad.gob.ec/wp-content/uploads/downloads/2017/11/codigo_ninezyadolescencia.pdf", icon: Baby, desc: "Protección integral de niñas, niños y adolescentes" },
  { label: "Norma Técnica de Contratos de Adhesión (Resolución ARCOTEL-2018-0716)", url: "https://www.arcotel.gob.ec/wp-content/uploads/2018/09/RESOLUCION-ARCOTEL-2018-0716.pdf", icon: FileCheck, desc: "Condiciones generales de contratos de adhesión" },
]

const documentos = [
  { title: "Aviso de Privacidad — TELECOMNET S.A.", desc: "Política de tratamiento de datos personales conforme a la LOPDP.", file: "/documentos/aviso-de-privacidad-telecomnet.pdf" },
  { title: "Guía de Control Parental (ARCOTEL)", desc: "Recomendaciones para padres sobre uso responsable de Internet por niñas, niños y adolescentes.", file: "/documentos/guia-control-parental.pdf" },
]

export default function NormativasPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6] py-16 md:py-20">
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
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white text-balance mb-3">Normativas y Transparencia</h1>
          <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Información técnica, regulatoria y de protección al usuario, en cumplimiento con ARCOTEL y la normativa ecuatoriana vigente.
          </p>
        </div>
      </section>

      {/* 1. Información técnica */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Reveal className="mb-8">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-600">1. Información técnica</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-2">Calidad y características del servicio</h2>
          </Reveal>

          <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem value="capacidad" className="border border-blue-100 rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold text-[#1e3a8a]">Capacidad efectiva utilizada vs. capacidad internacional contratada</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Información mensual del promedio diario de la capacidad efectiva utilizada frente a la capacidad internacional contratada, expresado en unidades porcentuales. El reporte se actualiza mensualmente y está disponible bajo solicitud al correo <a href="mailto:sac_pinas@telecomnet.com.ec" className="text-primary underline">sac_pinas@telecomnet.com.ec</a>.
                  <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["Enero: 62%","Febrero: 65%","Marzo: 68%","Abril: 64%"].map(m => (
                      <div key={m} className="bg-blue-50 border border-blue-100 rounded-md py-2 text-center text-sm font-medium text-[#1e3a8a]">{m}</div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="speedtest" className="border border-blue-100 rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold text-[#1e3a8a]">Herramienta gratuita para verificar velocidad</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                  <p>Ponemos a disposición una herramienta informática gratuita alojada en un servidor dentro de nuestra red, que permite verificar las velocidades de subida y bajada provistas, así como grabar e imprimir los resultados con fecha y hora.</p>
                  <Button asChild className="bg-[#1e3a8a] hover:bg-[#1e40af]">
                    <a href="https://telecomnet.speedtestcustom.com" target="_blank" rel="noopener noreferrer">
                      Realizar Test de Velocidad <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="calidad" className="border border-blue-100 rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold text-[#1e3a8a]">Parámetros de calidad del servicio</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Cumplimos con los parámetros establecidos en la normativa de ARCOTEL: disponibilidad mínima del servicio del 99%, latencia controlada, tasa de pérdida de paquetes inferior al 1%, y tiempos de atención técnica conforme a los acuerdos de nivel de servicio (SLA).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="condiciones" className="border border-blue-100 rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold text-[#1e3a8a]">Condiciones de prestación del servicio — Banda Ancha y compartición</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-2">
                  <p><strong className="text-foreground">Banda Ancha:</strong> conexión permanente que provee acceso de alta velocidad a Internet, con velocidades efectivas superiores a las definidas por ARCOTEL.</p>
                  <p><strong className="text-foreground">Relación de compartición:</strong> nuestros planes residenciales operan con una relación de compartición de hasta 1:1 garantizando velocidades estables incluso en horas pico.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="seguridad" className="border border-blue-100 rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold text-[#1e3a8a]">Seguridad al utilizar Internet</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Recomendamos a nuestros clientes: usar contraseñas robustas, mantener actualizado el sistema operativo y antivirus, no compartir información personal en sitios no seguros, verificar el candado HTTPS en sitios financieros, y activar la autenticación de dos factores en sus cuentas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ancho-banda" className="border border-blue-100 rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold text-[#1e3a8a]">Disponibilidad y ancho de banda efectivo</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  La disponibilidad del canal se garantiza al 99% mensual. El ancho de banda efectivo provisto corresponde al contratado en cada plan, medido entre el equipo terminal del cliente y el servidor dentro de nuestra red.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* 2. Información del servicio */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Reveal className="mb-8">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-600">2. Información sobre el servicio</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-2">Planes, contratos y derechos</h2>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { icon: FileText, title: "Planes y tarifas", desc: "Consulta los planes disponibles, características y tarifas vigentes.", action: <Button asChild variant="outline" size="sm"><Link href="/planes">Ver planes</Link></Button> },
              { icon: FileCheck, title: "Contrato de adhesión", desc: "Modelo del contrato de adhesión aprobado por ARCOTEL. Solicítalo en nuestras oficinas o por correo.", action: <Button asChild variant="outline" size="sm"><a href="https://wa.me/593968539220" target="_blank" rel="noopener noreferrer">Solicitar contrato por WhatsApp</a></Button> },
              { icon: BookOpen, title: "Términos y condiciones generales", desc: "Aplicables al servicio de acceso a Internet, incluyen condiciones de instalación, facturación, suspensión, terminación y soporte técnico.", action: null },
              { icon: Users, title: "Derechos de los usuarios", desc: "Derecho a recibir el servicio en las condiciones contratadas, a la calidad pactada, a la facturación correcta, a presentar reclamos y a la protección de sus datos personales.", action: null },
            ].map((item, idx) => (
              <Reveal key={item.title} delay={idx * 70}>
                <Card className="border-blue-100 h-full">
                  <CardContent className="p-6">
                    <item.icon className="h-8 w-8 text-[#1e3a8a] mb-3" />
                    <h3 className="font-semibold text-[#1e3a8a] mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                    {item.action}
                  </CardContent>
                </Card>
              </Reveal>
            ))}
            <Reveal delay={280} className="md:col-span-2">
              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <Lock className="h-8 w-8 text-[#1e3a8a] mb-3" />
                  <h3 className="font-semibold text-[#1e3a8a] mb-2">Política de protección de datos personales</h3>
                  <p className="text-sm text-muted-foreground mb-3">TELECOMNET S.A. trata datos personales conforme a la Ley Orgánica de Protección de Datos Personales (LOPDP). Consulta nuestro Aviso de Privacidad completo.</p>
                  <Button asChild className="bg-[#1e3a8a] hover:bg-[#1e40af]">
                    <a href="/documentos/aviso-de-privacidad-telecomnet.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" /> Descargar Aviso de Privacidad
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reclamos */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Reveal className="mb-8">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-600">Reclamos y quejas</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-2">¿Dónde presentar un reclamo?</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal>
              <Card className="border-blue-100 h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#1e3a8a] mb-2">TELECOMNET S.A.</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><strong>Oficinas:</strong> Calle 9 de Octubre s/n y García Moreno, Piñas — El Oro</li>
                    <li><strong>WhatsApp:</strong> <a className="text-primary underline" href="https://wa.me/593968539220">+593 96 853 9220</a></li>
                    <li><strong>Correo:</strong> <a className="text-primary underline" href="mailto:sac_pinas@telecomnet.com.ec">sac_pinas@telecomnet.com.ec</a></li>
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal delay={100}>
              <Card className="border-blue-100 h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#1e3a8a] mb-2">ARCOTEL — Defensa al usuario</h3>
                  <p className="text-sm text-muted-foreground mb-3">Si su reclamo no fue atendido, puede acudir a la Agencia de Regulación y Control de las Telecomunicaciones.</p>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://www.arcotel.gob.ec" target="_blank" rel="noopener noreferrer">
                      Ir a ARCOTEL <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Documentos descargables */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Reveal className="mb-8">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-600">Documentos guía</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-2">Descargas para usuarios y padres</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">Información de difusión sobre uso responsable de Internet y medidas de control para proteger a niñas, niños y adolescentes.</p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {documentos.map((doc, idx) => (
              <Reveal key={doc.file} delay={idx * 100}>
                <Card className="border-blue-100 hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <FileText className="h-8 w-8 text-[#1e3a8a] mb-3" />
                    <h3 className="font-semibold text-[#1e3a8a] mb-2">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{doc.desc}</p>
                    <Button asChild className="bg-[#1e3a8a] hover:bg-[#1e40af] w-full">
                      <a href={doc.file} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" /> Descargar PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Hipervínculos legales */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Reveal className="mb-8">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-600">3. Marco legal</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-2">Enlaces a normativa vigente</h2>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            {hipervinculos.map(({ label, url, icon: Icon, desc }, idx) => (
              <Reveal key={url} delay={idx * 70}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 border border-blue-100 rounded-lg hover:border-blue-300 hover:bg-blue-50/50 transition-all"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 group-hover:bg-[#1e3a8a] transition-colors">
                    <Icon className="h-5 w-5 text-[#1e3a8a] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-[#1e3a8a] text-sm leading-snug">{label}</h3>
                      <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
