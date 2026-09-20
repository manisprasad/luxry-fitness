import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  number,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  number?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b-2 border-line",
        "pt-32 pb-16 md:pt-44 md:pb-24",
        className
      )}
    >
      {number && (
        <span
          aria-hidden="true"
          className="number-graphic absolute right-4 top-16 hidden lg:block"
        >
          {number}
        </span>
      )}
      <div className="mx-auto w-[min(100%-2rem,1400px)]">
        {eyebrow && <p className="text-label text-accent mb-6">{eyebrow}</p>}
        <h1 className="text-display sm:text-display-sm">{title}</h1>
        {description && (
          <p className="mt-8 max-w-3xl text-lg leading-tight text-muted-foreground md:text-xl lg:text-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}