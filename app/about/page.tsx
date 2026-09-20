import type { Metadata } from "next";
import { Check } from "lucide-react";
import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  philosophy,
  photos,
  story,
  whyUs,
} from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/about", "About Us");

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        number="02"
        title={
          <>
            More Than A Gym.
            <br />
            <span className="text-accent">A Place To Get Stronger.</span>
          </>
        }
        description={story.heroIntro}
      />

      {/* Story */}
      <section className="border-b-2 border-line">
        <div className="mx-auto grid w-[min(100%-2rem,1400px)] gap-12 py-20 md:py-32 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-label text-accent mb-5">Our Story</p>
            <h2 className="text-display-xs md:text-6xl uppercase tracking-tighter">
              Built For
              <br />
              Serious
              <br />
              Training
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-xl font-medium leading-snug md:text-2xl">
              {story.intro}
            </p>
            {story.body.map((paragraph, index) => (
              <Reveal key={index} delay={index * 60}>
                <p className="mt-8 text-lg leading-snug text-muted-foreground md:text-xl">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-b-2 border-line">
        <div className="mx-auto w-[min(100%-2rem,1400px)] py-20 md:py-32">
          <SectionHeading
            eyebrow="Philosophy"
            title={
              <>
                Five Principles.
                <br />
                One Standard.
              </>
            }
          />
          <div className="grid gap-px border-2 border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {philosophy.map((item, index) => (
              <div
                key={item.title}
                className="card-invert group flex flex-col justify-between gap-16 bg-background p-8 md:p-10"
              >
                <span
                  aria-hidden="true"
                  className="number-graphic text-[5rem] leading-none transition-colors group-hover:text-black"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-3xl font-bold uppercase leading-none tracking-tighter">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-snug text-muted-foreground transition-colors group-hover:text-black/80 md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-b-2 border-line">
        <div className="mx-auto w-[min(100%-2rem,1400px)] py-20 md:py-32">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <>
                The Details
                <br />
                That Matter
              </>
            }
          />
          <ul className="grid gap-px border-2 border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={(index % 3) * 60} className="h-full">
                  <div className="card-invert group flex h-full flex-col gap-10 bg-background p-8 md:p-10">
                    <Check
                      className="h-9 w-9 text-accent transition-colors group-hover:text-black"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-2xl font-bold uppercase leading-tight tracking-tighter">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-base leading-snug text-muted-foreground transition-colors group-hover:text-black/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gym experience */}
      <section>
        <div className="mx-auto grid w-[min(100%-2rem,1400px)] items-center gap-12 py-20 md:py-32 lg:grid-cols-2 lg:gap-24">
          <div className="border-2 border-line p-2 bg-muted">
            <Image
              src={photos.aboutMain.src}
              alt={photos.aboutMain.alt}
              width={photos.aboutMain.width}
              height={photos.aboutMain.height}
              sizes="(max-width: 1024px) 92vw, 45vw"
              className="aspect-[16/10] h-auto w-full object-cover"
            />
          </div>
          <div>
            <p className="text-label text-accent mb-5">The Gym Experience</p>
            <h2 className="text-display-xs md:text-6xl uppercase tracking-tighter">
              Walk In.
              <br />
              Feel The
              <br />
              Difference.
            </h2>
            <p className="mt-8 text-lg leading-snug text-muted-foreground md:text-xl lg:text-2xl">
              The best way to understand Luxury Fitness is to train in it.
              Book a free trial, look around the floor, try the equipment and
              decide for yourself.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        number="02"
        variant="accent"
        title={
          <>
            Ready To Experience
            <br />
            Luxury Fitness?
          </>
        }
        buttonLabel="Book A Free Trial"
      />
    </>
  );
}