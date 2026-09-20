import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/button";
import { photos, gym } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-line">
      <span
        aria-hidden="true"
        className="number-graphic absolute -bottom-10 right-2 hidden lg:block"
      >
        01
      </span>
      <div className="mx-auto grid w-[min(100%-2rem,1400px)] items-center gap-12 pb-16 pt-32 md:pb-24 md:pt-40 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 text-label text-accent">
            <MapPin className="h-4 w-4" strokeWidth={2.5} />
            {gym.area} · {gym.city} · {gym.country}
          </p>
          <h1 className="text-display mt-8">
            Train Hard.
            <br />
            Become
            <br />
            <span className="text-accent">Stronger.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-snug text-muted-foreground md:text-xl lg:text-2xl">
            {gym.name} is a premium fitness destination in {gym.area},{" "}
            {gym.city} — a serious training floor, quality equipment and a
            focused community built around your progress.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/free-trial" size="lg">
              Book Free Trial
            </Button>
            <Button href="/gallery" variant="outline" size="lg">
              Explore The Gym
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="border-2 border-line bg-muted p-2">
            <Image
              src={photos.hero.src}
              alt={photos.hero.alt}
              width={photos.hero.width}
              height={photos.hero.height}
              priority
              sizes="(max-width: 1024px) 92vw, 45vw"
              className="aspect-[16/10] h-auto w-full object-cover"
            />
          </div>
          <p className="text-label mt-4 flex items-center justify-between">
            <span>Inside The Gym</span>
            <span className="text-accent">LF-PB</span>
          </p>
        </div>
      </div>

      <a
        href="#why"
        className="group absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
        aria-label="Scroll to why Luxury Fitness"
      >
        <span className="text-label">Scroll</span>
        <ArrowDown
          className="h-5 w-5 animate-bounce transition-colors group-hover:text-accent"
          strokeWidth={2}
          aria-hidden="true"
        />
      </a>
    </section>
  );
}