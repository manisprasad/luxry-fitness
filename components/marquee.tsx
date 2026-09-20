import { cn } from "@/lib/utils";

/**
 * CSS-driven infinite marquee. Content is duplicated inside the track so the
 * translateX(-50%) loop is seamless. Reduced-motion users get a static strip
 * (the animation-play-state: paused override in globals.css freezes it on a
 * stable frame instead of racing the animation).
 */
export function Marquee({
  children,
  duration = 40,
  className,
  ariaHidden = true,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className={cn("overflow-hidden whitespace-nowrap", className)}
      aria-hidden={ariaHidden}
    >
      <div
        className="flex w-max animate-marquee items-center"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="flex items-center shrink-0">{children}</div>
        <div className="flex items-center shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}