import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/button";
import { CtaSection } from "@/components/cta-section";
import { GalleryGrid } from "@/components/gallery-grid";
import { Hero } from "@/components/hero";
import { LocationSection } from "@/components/home/location-section";
import { FacilitiesSection } from "@/components/home/facilities-section";
import { MotivationSection } from "@/components/home/motivation-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhySection } from "@/components/home/why-section";
import { SectionHeading } from "@/components/section-heading";
import { galleryImages, seoDefaults } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/", seoDefaults.title);

const previewImages = galleryImages.slice(0, 6).map((image, index) => ({
  ...image,
  tall: index % 3 === 1,
}));

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <WhySection />
      <ServicesPreview />
      <FacilitiesSection />
      <MotivationSection />

      <section className="mx-auto w-[min(100%-2rem,1400px)] py-20 md:py-32">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Inside
              <br />
              The Gym
            </>
          }
          description="Real photos of the training space at Luxury Fitness Punjabi Bagh."
        />
        <GalleryGrid images={previewImages} />
        <div className="mt-12">
          <Button href="/gallery" variant="outline" size="lg">
            View Full Gallery
            <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
          </Button>
        </div>
      </section>

      <TestimonialsSection />
      <LocationSection />

      <CtaSection
        number="LF"
        eyebrow="Begin"
        title={
          <>
            Ready To Start?
            <br />
            <span className="text-accent">Your First Workout</span>
            <br />
            Starts Here.
          </>
        }
        subtitle="Book a free trial, walk in, and feel the floor for yourself. No pressure — just training."
        buttonLabel="Book Your Free Trial"
      />
    </>
  );
}