import type { Metadata } from "next";
import { TrialForm } from "@/components/trial-form";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/free-trial", "Book A Free Trial");

export default async function BookTrialPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const params = await searchParams;
  const defaultGoal = params.service ?? undefined;

  return (
    <>
      <PageHero
        eyebrow="Book A Trial"
        number="05"
        title={
          <>
            Start Your
            <br />
            <span className="text-accent">Journey.</span>
          </>
        }
        description="Your first workout starts here. Book a free trial at Luxury Fitness Punjabi Bagh — one simple form, one step forward."
      />

      <section className="border-b-2 border-line">
        <div className="mx-auto w-[min(100%-2rem,1400px)] py-20 md:py-24">
          <div className="mx-auto max-w-4xl border-2 border-line p-6 md:p-12">
            <TrialForm defaultGoal={defaultGoal} />
          </div>
        </div>
      </section>
    </>
  );
}