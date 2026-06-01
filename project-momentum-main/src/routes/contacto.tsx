import { createFileRoute } from "@tanstack/react-router";

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, Clock, MessageCircle, MapPin } from "lucide-react"

function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Construct WhatsApp message with form data
    const message = `Hola, mi nombre es ${formData.nombre}.\n\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\n\nMensaje: ${formData.mensaje}`
    const whatsappUrl = `https://wa.me/593968539220?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contacto
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1e3a8a]">Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <Input
                      id="nombre"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      placeholder="Tu número de teléfono"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      placeholder="¿En qué podemos ayudarte?"
                      rows={5}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Enviar por WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-[#1e3a8a]">Información de contacto</h2>
              <p className="text-muted-foreground">
                Nuestro equipo de soporte está disponible las 24 horas del día, los 7 días de la semana para ayudarte con cualquier consulta.
              </p>

              <div className="grid gap-4">
                <Card className="border-none shadow-md">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <Phone className="h-6 w-6 text-[#1e3a8a]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a8a]">Teléfono / WhatsApp</h3>
                      <a href="tel:+593968539220" className="text-muted-foreground hover:text-primary">
                        +593 96 853 9220
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <Mail className="h-6 w-6 text-[#1e3a8a]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a8a]">Correo Electrónico</h3>
                      <a href="mailto:sac_pinas@telecomnet.com.ec" className="text-muted-foreground hover:text-primary">
                        sac_pinas@telecomnet.com.ec
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <Clock className="h-6 w-6 text-[#1e3a8a]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a8a]">Soporte Técnico</h3>
                      <p className="text-muted-foreground">24/7 - Todos los días</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <MapPin className="h-6 w-6 text-[#1e3a8a]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a8a]">Cobertura</h3>
                      <p className="text-muted-foreground">Ecuador</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Direct WhatsApp Button */}
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] gap-2 mt-4">
                <a href="https://wa.me/593968539220" target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chatear por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
  head: () => ({
    meta: [
      { title: "Contacto - Telecomnet" },
      { name: "description", content: "Contáctanos para contratar tu plan de internet de fibra óptica." },
    ],
  }),
});
