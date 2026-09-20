import { ArrowRight } from "lucide-react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/data";

export function ServicesPreview() {
  return (
    <section className="mx-auto w-[min(100%-2rem,1400px)] py-20 md:py-32">
      <SectionHeading
        eyebrow="Training"
        title={
          <>
            Find Your
            <br />
            Focus
          </>
        }
        description="A range of training options — from strength work to cardio, personal training and general fitness."
      />

      <div className="grid gap-px border-2 border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map((service, index) => (
          <div className="bg-background" key={service.id}>
            <ServiceCard
              index={String(index + 1).padStart(2, "0")}
              id={service.id}
              title={service.title}
              description={service.description}
              audience={service.audience}
            />
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Button href="/services" variant="outline" size="lg">
          View All Services
          <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
        </Button>
        <Reveal>
          <Button href="/free-trial" size="lg">
            Book Free Trial
          </Button>
        </Reveal>
      </div>
    </section>
  );
}