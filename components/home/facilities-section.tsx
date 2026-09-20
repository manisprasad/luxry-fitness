import { FacilityCard } from "@/components/facility-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getFacilities } from "@/lib/data";

export function FacilitiesSection() {
  const facilities = getFacilities();
  return (
    <section className="border-y-2 border-line">
      <div className="mx-auto w-[min(100%-2rem,1400px)] py-20 md:py-32">
        <SectionHeading
          eyebrow="Facilities"
          title={
            <>
              The Floor
              <br />
              Speaks
            </>
          }
          description="A look inside the training space at Luxury Fitness Punjabi Bagh."
        />

        <div className="grid gap-4 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-7">
            <Reveal>
              <FacilityCard
                src={facilities[0].src}
                alt={facilities[0].alt}
                label={facilities[0].label}
                width={facilities[0].width}
                height={facilities[0].height}
                index="01"
                aspect="aspect-[16/10]"
                priority
              />
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={80}>
              <FacilityCard
                src={facilities[1].src}
                alt={facilities[1].alt}
                label={facilities[1].label}
                width={facilities[1].width}
                height={facilities[1].height}
                index="02"
                aspect="aspect-[16/12]"
              />
            </Reveal>
          </div>
          <div className="md:col-span-5 md:order-last">
            <Reveal delay={160}>
              <FacilityCard
                src={facilities[2].src}
                alt={facilities[2].alt}
                label={facilities[2].label}
                width={facilities[2].width}
                height={facilities[2].height}
                index="03"
                aspect="aspect-[16/12]"
              />
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={240}>
              <FacilityCard
                src={facilities[3].src}
                alt={facilities[3].alt}
                label={facilities[3].label}
                width={facilities[3].width}
                height={facilities[3].height}
                index="04"
                aspect="aspect-[16/10]"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}