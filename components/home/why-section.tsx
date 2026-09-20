import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { whyUs } from "@/lib/data";

export function WhySection() {
  return (
    <section
      id="why"
      className="scroll-mt-24 border-y-2 border-line"
    >
      <div className="mx-auto grid w-[min(100%-2rem,1400px)] gap-12 py-20 md:py-32 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-label text-accent mb-5">Why Luxury Fitness</p>
          <h2 className="text-display-xs md:text-6xl uppercase tracking-tighter">
            A Gym That
            <br />
            Respects
            <br />
            Your Work
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-snug text-muted-foreground md:text-xl">
            You can find a treadmill anywhere. What you&rsquo;re really looking
            for is a place that makes every session count. Here&rsquo;s what
            that means at Luxury Fitness Punjabi Bagh.
          </p>
        </div>

        <ul className="flex flex-col">
          {whyUs.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 60}>
                <div className="group border-b-2 border-line py-8 transition-colors hover:bg-muted/40 md:py-10">
                <div className="flex items-baseline gap-5">
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-sm font-bold text-accent"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold uppercase leading-tight tracking-tighter transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-snug text-muted-foreground transition-all duration-300 md:text-lg group-hover:translate-x-2 group-hover:text-foreground">
                      {item.description}
                    </p>
                  </div>
                  <ArrowRight
                    aria-hidden="true"
                    className="hidden h-6 w-6 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent md:block"
                  />
                </div>
              </div>
            </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}