import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  withBackground?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  showSlogan?: boolean;
}

const ICON_ASPECT = 1166 / 887;
const TEXT_ASPECT = 1360 / 226;

const sizeConfig = {
  sm: { height: 26, gap: 4 },
  md: { height: 36, gap: 5 },
  lg: { height: 48, gap: 6 },
  xl: { height: 64, gap: 8 },
};

export function Logo({
  className,
  withBackground = false,
  size = "md",
  animated = true,
  showSlogan = true,
}: LogoProps) {
  const { height, gap } = sizeConfig[size];

  return (
    <div className={cn(className)}>
      <div
        className={cn("flex items-center", withBackground && "bg-white rounded-xl px-4 py-3 shadow-lg")}
        style={{ gap: `${gap}px` }}
      >
        <img
          src="/logo-ondas.svg"
          alt="TELECOMNET"
          width={Math.round(height * ICON_ASPECT)}
          height={height}
          className={cn("flex-shrink-0", animated && "animate-logo-pulse")}
          style={{ height, width: "auto" }}
        />
        {showSlogan && (
          <img
            src="/texto-telecomnet.svg"
            alt="Tu punto de encuentro en la web"
            width={Math.round(height * TEXT_ASPECT)}
            height={height}
            className="flex-shrink-0"
            style={{ height, width: "auto" }}
          />
        )}
      </div>
    </div>
  );
}

export function LogoLarge({ className, withBackground = false, animated = true }: Omit<LogoProps, "size">) {
  return (
    <div className={cn(className)}>
      <div
        className={cn(
          "flex items-center gap-2 md:gap-3",
          withBackground && "bg-white rounded-2xl px-6 py-4 md:px-8 md:py-5 shadow-xl",
        )}
      >
        <img
          src="/logo-ondas.svg"
          alt="TELECOMNET"
          className={cn(
            "flex-shrink-0 h-[44px] md:h-[60px] lg:h-[75px] w-auto",
            animated && "animate-logo-pulse",
          )}
        />
        <img
          src="/texto-telecomnet.svg"
          alt="Tu punto de encuentro en la web"
          className="flex-shrink-0 h-[44px] md:h-[60px] lg:h-[75px] w-auto"
        />
      </div>
    </div>
  );
}
