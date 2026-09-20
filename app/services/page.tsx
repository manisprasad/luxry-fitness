import type { Metadata } from "next";
import {
  Dumbbell,
  Flame,
  HeartPulse,
  Scale,
  UserCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/button";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { serviceIcons, services } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/services", "Services");

const icons: Record<string, LucideIcon> = {
  dumbbell: Dumbbell,
  heartPulse: HeartPulse,
  userCheck: UserCheck,
  zap: Zap,
  scale: Scale,
  flame: Flame,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        number="03"
        title={
          <>
            Every Goal
            <br />
            <span className="text-accent">Needs A Plan.</span>
          </>
        }
        description="Pick a direction. Book a free trial. The plan is simple from there — consistent training, in a space built for it."
      />

      <section className="border-b-2 border-line">
        <div className="mx-auto w-[min(100%-2rem,1400px)] py-20 md:py-32">
          <div className="flex flex-col gap-8 md:gap-12">
            {services.map((service, index) => {
              const Icon = icons[serviceIcons[service.id]] ?? Dumbbell;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="card-invert group scroll-mt-28 border-2 border-line bg-background p-8 md:sticky md:top-24 md:p-14"
                >
                  <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[0.4fr_1fr_0.3fr] lg:items-start">
                    <div className="flex items-start justify-between">
                      <span
                        aria-hidden="true"
                        className="number-graphic text-[5rem] leading-none transition-colors group-hover:text-black md:text-[7rem]"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon
                        className="h-10 w-10 text-accent transition-colors group-hover:text-black md:h-14 md:w-14"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="max-w-3xl">
                      <h2 className="text-4xl font-bold uppercase leading-none tracking-tighter md:text-6xl lg:text-7xl">
                        {service.title}
                      </h2>
                      <p className="mt-6 text-lg leading-snug text-muted-foreground transition-colors group-hover:text-black/80 md:text-xl">
                        {service.description}
                      </p>
                      <p className="mt-6 border-t border-line pt-5 text-sm font-bold uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-black/80">
                        {service.audience}
                      </p>
                    </div>
                    <Button
                      href={`/free-trial?service=${service.id}`}
                      variant="outline"
                      size="lg"
                      className="lg:justify-self-end"
                    >
                      Book A Trial
                      <ArrowRight
                        className="h-5 w-5 transition-transform group-hover:translate-x-1"
                        strokeWidth={2.5}
                      />
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection
        number="03"
        eyebrow="Not Sure Where To Start?"
        title={
          <>
            Try The Floor
            <br />
            <span className="text-accent">For Free.</span>
          </>
        }
        subtitle="Book a free trial. Walk in, look around, train. Then decide what fits you best."
        buttonLabel="Book Your Free Trial"
      />
    </>
  );
}