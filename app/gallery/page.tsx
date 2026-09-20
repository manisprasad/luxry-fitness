import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { galleryImages } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/gallery", "Gallery");

const images = galleryImages.map((image, index) => ({
  ...image,
  tall: index % 3 === 1,
}));

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        number="04"
        title={
          <>
            The Gym
            <br />
            <span className="text-accent">In Pictures.</span>
          </>
        }
        description="Real photos from the floor at Luxury Fitness Punjabi Bagh. Click any image to view it full-screen."
      />

      <section className="border-b-2 border-line">
        <div className="mx-auto w-[min(100%-2rem,1400px)] py-20 md:py-32">
          <GalleryGrid images={images} />
        </div>
      </section>

      <CtaSection
        number="04"
        variant="accent"
        eyebrow="See It In Person"
        title={
          <>
            Photos Are Good.
            <br />
            Visiting Is Better.
          </>
        }
        buttonLabel="Book A Free Trial"
      />
    </>
  );
}