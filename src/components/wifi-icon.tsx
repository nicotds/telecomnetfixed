type WifiIconProps = {
  className?: string
  size?: number
  /** Opacidad del icono (0 a 1). Por defecto 1. */
  opacity?: number
}

/**
 * Icono de WiFi 3D (PNGTree). El archivo SVG ya tiene su color azul,
 * así que se renderiza como imagen y se controla solo con `opacity`.
 */
export function WifiIcon({ className, size = 100, opacity = 1 }: WifiIconProps) {
  return (
    <img
      src="/wifi-3d.svg"
      alt=""
      width={size}
      height={size}
      style={{ opacity }}
      className={className}
      aria-hidden="true"
      draggable={false}
    />
  )
}
