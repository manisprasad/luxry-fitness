import Image from "next/image";

export function FacilityCard({
  src,
  alt,
  label,
  width,
  height,
  index,
  aspect,
  priority = false,
}: {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
  index: string;
  aspect?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={`group relative overflow-hidden border-2 border-line ${aspect ?? "aspect-[4/3]"}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 33vw"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
        <span className="text-xl font-bold uppercase leading-none tracking-tighter md:text-2xl">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="text-3xl font-bold leading-none tracking-tighter text-muted-foreground transition-colors group-hover:text-accent"
        >
          {index}
        </span>
      </figcaption>
    </figure>
  );
}