import { cn } from "@/lib/utils";

interface LogoIconProps {
  className?: string;
  animated?: boolean;
  size?: number;
}

export function LogoIcon({ className, animated = false, size = 40 }: LogoIconProps) {
  const height = Math.round(size * (887 / 1166));
  return (
    <img
      src="/logo-ondas.svg"
      alt="TELECOMNET"
      width={size}
      height={height}
      className={cn(animated && "animate-pulse", className)}
    />
  );
}
