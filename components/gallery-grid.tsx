"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
  tall?: boolean;
}

function MotionBlocker() {
  return null;
}

export function GalleryGrid({
  images,
  limit,
  className,
  itemClassName,
}: {
  images: GalleryImage[];
  limit?: number;
  className?: string;
  itemClassName?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const shown = limit ? images.slice(0, limit) : images;
  const lockRef = useRef(false);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((current) =>
        current === null ? current : (current + dir + shown.length) % shown.length
      ),
    [shown.length]
  );

  const onKey = useCallback(
    (event: KeyboardEvent) => {
      if (active === null) return;
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    },
    [active, close, step]
  );

  useEffect(() => {
    if (active === null) return;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, onKey]);

  const setActiveGuard = (index: number) => {
    if (lockRef.current) return;
    lockRef.current = true;
    setActive(index);
    setTimeout(() => {
      lockRef.current = false;
    }, 0);
  };

  return (
    <>
      <div className={cn("columns-2 gap-3 md:columns-3 md:gap-4", className)}>
        {shown.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveGuard(index)}
            aria-label={`Open photo: ${image.label}`}
            className={cn(
              "group relative mb-3 block w-full overflow-hidden border-2 border-line text-left md:mb-4",
              image.tall ? "aspect-[3/4]" : "aspect-[4/3]",
              itemClassName
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/20"
            />
            <span className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-3 border-t-2 border-line/60 bg-background/85 p-4 opacity-100 backdrop-blur-sm transition-opacity duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
              <span className="text-sm font-bold uppercase tracking-tighter md:text-base">
                {image.label}
              </span>
              <Maximize2
                className="h-4 w-4 shrink-0 text-accent"
                strokeWidth={2}
              />
            </span>
          </button>
        ))}
      </div>

      <MotionBlocker />
      {active !== null && shown[active] ? (
        <Lightbox
          image={shown[active]}
          index={active}
          total={shown.length}
          onClose={close}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
          onIndexChange={setActiveGuard}
        />
      ) : null}
    </>
  );
}

function Lightbox({
  image,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  image: GalleryImage;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onIndexChange: (index: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${total}`}
      className="fixed inset-0 z-[80] flex flex-col bg-background/95 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between border-b-2 border-line px-4 py-3 md:px-8">
        <p className="text-label text-muted-foreground">
          {index + 1} / {total}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="flex h-11 w-11 items-center justify-center border-2 border-line text-foreground transition-colors hover:bg-accent hover:text-black"
        >
          <X className="h-5 w-5" strokeWidth={2.5} />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-6 md:px-20">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous photo"
          className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border-2 border-line bg-background text-foreground transition-colors hover:bg-accent hover:text-black md:h-14 md:w-14 md:left-6"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </button>
        <figure className="flex max-h-full flex-col items-center">
          <div className="border-2 border-line p-2 bg-muted">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 900px) 94vw, 900px"
              className="max-h-[72vh] w-auto object-contain"
            />
          </div>
          <figcaption className="mt-4 text-base font-bold uppercase tracking-tighter md:text-lg">
            {image.label}
          </figcaption>
        </figure>
        <button
          type="button"
          onClick={onNext}
          aria-label="Next photo"
          className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border-2 border-line bg-background text-foreground transition-colors hover:bg-accent hover:text-black md:h-14 md:w-14 md:right-6"
        >
          <ChevronRight className="h-6 w-6" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}