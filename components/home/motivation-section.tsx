import Image from "next/image";
import { Button } from "@/components/button";
import { photos } from "@/lib/data";

export function MotivationSection() {
  return (
    <section className="relative overflow-hidden border-b-2 border-line">
      <Image
        src={photos.motivation.src}
        alt={photos.motivation.alt}
        fill
        sizes="100vw"
        priority={false}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative mx-auto w-[min(100%-2rem,1400px)] py-24 md:py-40">
        <p className="text-label text-accent mb-6">Your Journey</p>
        <h2 className="text-display-sm max-w-5xl">
          Your Goal.
          <br />
          Your Discipline.
          <br />
          Your Transformation.
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-snug text-muted-foreground md:text-xl lg:text-2xl">
          Nobody transforms in a single session. It&rsquo;s built one visit at a
          time — and the first visit is free.
        </p>
        <Button href="/free-trial" size="xl" className="mt-12">
          Start With A Free Trial
        </Button>
      </div>
    </section>
  );
}