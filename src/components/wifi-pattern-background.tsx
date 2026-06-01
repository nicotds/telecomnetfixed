import { WifiIcon } from "./wifi-icon"

/**
 * Patrón decorativo de fondo con pocos iconos de WiFi 3D
 * dispersos, opacidad muy baja y un pulso muy suave.
 * Pensado para colocarse dentro de un contenedor
 * `relative overflow-hidden`.
 *
 * La prop `colorClass` se mantiene por compatibilidad con quien
 * ya lo usa, pero el SVG 3D ya viene coloreado y no se recolorea.
 */
type WifiPatternBackgroundProps = {
  colorClass?: string
}

const ICONS = [
  { top: "6%", left: "5%", size: 130, opacity: 0.22, delay: "0s" },
  { top: "12%", left: "78%", size: 170, opacity: 0.2, delay: "1.2s" },
  { top: "55%", left: "12%", size: 140, opacity: 0.22, delay: "0.6s" },
  { top: "65%", left: "72%", size: 160, opacity: 0.2, delay: "1.8s" },
  { top: "36%", left: "44%", size: 110, opacity: 0.16, delay: "0.9s" },
  { top: "82%", left: "38%", size: 100, opacity: 0.18, delay: "2.2s" },
] as const

export function WifiPatternBackground(_: WifiPatternBackgroundProps = {}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {ICONS.map((it, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: it.top,
            left: it.left,
            animationDelay: it.delay,
            animationDuration: "4s",
          }}
        >
          <WifiIcon size={it.size} opacity={it.opacity} />
        </div>
      ))}
    </div>
  )
}
