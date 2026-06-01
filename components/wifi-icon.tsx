type WifiIconProps = {
  className?: string
  size?: number
  opacity?: number
}

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
