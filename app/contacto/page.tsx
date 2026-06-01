"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, Clock, MessageCircle, MapPin, User, AtSign, Send } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { WifiPatternBackground } from "@/components/wifi-pattern-background"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hola, mi nombre es ${formData.nombre}.\n\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\n\nMensaje: ${formData.mensaje}`
    const whatsappUrl = `https://wa.me/593968539220?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="flex flex-col">
      {/* Hero con robot asomandose */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6] py-16 md:py-24">
        <WifiPatternBackground colorClass="text-blue-200" />
        
        {/* Robot asomandose desde la esquina inferior derecha */}
        <div className="absolute bottom-0 right-2 sm:right-8 z-10 pointer-events-none">
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 translate-y-2">
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl" />
            <img
              src="/robot-telecomnet.svg"
              alt=""
              className="relative w-full h-full object-contain drop-shadow-lg animate-float"
            />
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-30">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur mb-4">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contacto</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Formulario mejorado */}
            <Reveal>
              <Card className="border-none shadow-xl bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                      <Send className="h-5 w-5 text-[#1e3a8a]" />
                    </div>
                    <CardTitle className="text-2xl text-[#1e3a8a]">Envíanos un mensaje</CardTitle>
                  </div>
                  <p className="text-muted-foreground text-sm">Completa el formulario y te contactaremos por WhatsApp</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-[#1e3a8a] font-medium">Nombre completo</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="nombre"
                          placeholder="Tu nombre"
                          className="pl-10 border-blue-100 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]/20"
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#1e3a8a] font-medium">Correo electrónico</Label>
                      <div className="relative">
                        <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          className="pl-10 border-blue-100 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]/20"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="text-[#1e3a8a] font-medium">Teléfono</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="telefono"
                          type="tel"
                          placeholder="Tu número de teléfono"
                          className="pl-10 border-blue-100 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]/20"
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mensaje" className="text-[#1e3a8a] font-medium">Mensaje</Label>
                      <Textarea
                        id="mensaje"
                        placeholder="¿En qué podemos ayudarte?"
                        rows={4}
                        className="border-blue-100 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]/20 resize-none"
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] gap-2 h-12 text-base font-semibold shadow-lg shadow-blue-500/20">
                      <MessageCircle className="h-5 w-5" />
                      Enviar por WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Reveal>

            {/* Informacion de contacto */}
            <div className="flex flex-col gap-6">
              <Reveal delay={100}>
                <div className="mb-2">
                  <span className="text-xs font-semibold tracking-wider uppercase text-amber-600">Contacto directo</span>
                  <h2 className="text-2xl font-bold text-[#1e3a8a] mt-1">Información de contacto</h2>
                </div>
                <p className="text-muted-foreground">
                  Nuestro equipo de soporte está disponible las 24 horas del día, los 7 días de la semana para ayudarte con cualquier consulta.
                </p>
              </Reveal>

              <div className="grid gap-4">
                {[
                  { icon: Phone, title: "Teléfono / WhatsApp", content: <a href="tel:+593968539220" className="text-muted-foreground hover:text-[#1e3a8a] transition-colors">+593 96 853 9220</a>, color: "bg-green-50", iconColor: "text-green-600" },
                  { icon: Mail, title: "Correo Electrónico", content: <a href="mailto:sac_pinas@telecomnet.com.ec" className="text-muted-foreground hover:text-[#1e3a8a] transition-colors">sac_pinas@telecomnet.com.ec</a>, color: "bg-blue-50", iconColor: "text-[#1e3a8a]" },
                  { icon: Clock, title: "Soporte Técnico", content: <p className="text-muted-foreground">24/7 - Todos los días</p>, color: "bg-amber-50", iconColor: "text-amber-600" },
                  { icon: MapPin, title: "Ubicación", content: <p className="text-muted-foreground">Piñas, El Oro - Ecuador</p>, color: "bg-violet-50", iconColor: "text-violet-600" },
                ].map((item, idx) => (
                  <Reveal key={item.title} delay={150 + idx * 70}>
                    <Card className="border-blue-100 hover:border-blue-200 hover:shadow-md transition-all group">
                      <CardContent className="flex items-center gap-4 p-5">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                          <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#1e3a8a]">{item.title}</h3>
                          {item.content}
                        </div>
                      </CardContent>
                    </Card>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={450}>
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] gap-2 w-full h-14 text-base font-semibold shadow-lg shadow-green-500/20">
                  <a href="https://wa.me/593968539220" target="_blank" rel="noopener noreferrer">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chatear por WhatsApp
                  </a>
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Seccion de ubicacion */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="text-center mb-10">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-600">Ubicación</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mt-2 mb-4">Encuéntranos</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Visítanos en nuestras oficinas o contáctanos por cualquiera de nuestros canales de atención.
            </p>
          </Reveal>
          <Reveal delay={150} className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Oficinas Telecomnet</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                      <span>Calle 9 de Octubre s/n y García Moreno, Piñas - El Oro, Ecuador</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-[#1e3a8a] shrink-0" />
                      <span>Lunes a Viernes: 8:00 - 18:00</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[#1e3a8a] shrink-0" />
                      <span>+593 96 853 9220</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] p-8 flex items-center justify-center min-h-[200px]">
                  <div className="text-center text-white">
                    <MapPin className="h-12 w-12 mx-auto mb-3 opacity-80" />
                    <p className="text-lg font-semibold">Piñas, El Oro</p>
                    <p className="text-blue-100 text-sm">Ecuador</p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
