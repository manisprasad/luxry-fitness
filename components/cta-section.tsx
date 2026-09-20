import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

export function CtaSection({
  number,
  eyebrow,
  title,
  subtitle,
  buttonLabel,
  buttonHref = "/free-trial",
  className,
  variant = "dark",
}: {
  number?: string;
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  buttonLabel: string;
  buttonHref?: string;
  className?: string;
  variant?: "dark" | "accent";
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-t-2 border-line",
        variant === "accent"
          ? "bg-accent text-black"
          : "bg-background text-foreground",
        className
      )}
    >
      {number && (
        <span
          aria-hidden="true"
          className={cn(
            "number-graphic absolute -bottom-6 right-4",
            variant === "accent" && "text-black"
          )}
        >
          {number}
        </span>
      )}
      <div className="mx-auto w-[min(100%-2rem,1400px)] py-24 md:py-36">
        {eyebrow && (
          <p
            className={cn(
              "text-label mb-6",
              variant === "accent" ? "text-black/80" : "text-accent"
            )}
          >
            {eyebrow}
          </p>
        )}
        <h2 className="text-display-sm max-w-5xl">{title}</h2>
        {subtitle && (
          <p
            className={cn(
              "mt-8 max-w-2xl text-lg leading-snug md:text-2xl",
              variant === "accent" ? "text-black/80" : "text-muted-foreground"
            )}
          >
            {subtitle}
          </p>
        )}
<Button
        href={buttonHref}
        size="xl"
        variant={variant === "accent" ? "outlineDark" : "accent"}
        className="mt-12"
      >
        {buttonLabel}
      </Button>
      </div>
    </section>
  );
}