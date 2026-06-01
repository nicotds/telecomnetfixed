import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="border-t bg-[#1e3a8a] text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo and Description */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center self-start">
              <Logo size="md" withBackground animated={false} />
            </Link>
            <p className="text-sm text-blue-200">
              Tu punto de encuentro en la web. Internet de alta velocidad con fibra óptica para tu hogar y negocio.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Enlaces Rápidos</h3>
            <div className="flex flex-col gap-2">
              <Link href="/planes" className="text-sm text-blue-200 hover:text-white transition-colors">
                Planes
              </Link>
              <Link href="/acerca-de-nosotros" className="text-sm text-blue-200 hover:text-white transition-colors">
                Acerca de Nosotros
              </Link>
              <Link href="/contacto" className="text-sm text-blue-200 hover:text-white transition-colors">
                Contacto
              </Link>
              <Link href="/normativas" className="text-sm text-blue-200 hover:text-white transition-colors">
                Normativas
              </Link>
              <a 
                href="https://telecomnet.speedtestcustom.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-200 hover:text-white transition-colors"
              >
                Test de Velocidad
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Telecomnetsa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/telecomnet_sa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@telecomnet.sa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-2">
              Soporte técnico 24/7
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} Telecomnet. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
