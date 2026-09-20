import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { TrialForm } from "@/components/trial-form";
import { gym } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/free-trial", "Book Your Free Trial");

export default async function FreeTrialPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const params = await searchParams;
  const defaultGoal = params.service ?? undefined;

  return (
    <>
      <PageHero
        eyebrow="Free Trial"
        number="05"
        title={
          <>
            Book Your
            <br />
            <span className="text-accent">Free Trial.</span>
          </>
        }
        description="Take the first step toward your fitness goals. Tell us when works for you — we'll take it from there."
      />

      <section className="border-b-2 border-line">
        <div className="mx-auto grid w-[min(100%-2rem,1400px)] gap-12 py-20 md:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start">
            <div className="border-2 border-line p-8">
              <p className="text-label text-accent mb-4">What To Expect</p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-base md:text-lg">
                  <span aria-hidden="true" className="text-accent">01</span>
                  A proper look at the training floor
                </li>
                <li className="flex gap-3 text-base md:text-lg">
                  <span aria-hidden="true" className="text-accent">02</span>
                  A chance to try the equipment
                </li>
                <li className="flex gap-3 text-base md:text-lg">
                  <span aria-hidden="true" className="text-accent">03</span>
                  A conversation about your goals
                </li>
                <li className="flex gap-3 text-base md:text-lg">
                  <span aria-hidden="true" className="text-accent">04</span>
                  No pressure, no hard sell
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4 border-2 border-line p-8">
              <MapPin className="h-8 w-8 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className="text-base font-bold uppercase tracking-tighter">
                  {gym.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {gym.area}, {gym.city}, {gym.country}
                </p>
              </div>
            </div>
            <p className="px-2 text-sm leading-relaxed text-muted-foreground">
              Fill in the form and our team will contact you to confirm your
              visit. Submitting this form is a request — your trial visit is
              confirmed once we reach out.
            </p>
          </div>

          <div className="border-2 border-line p-6 md:p-12">
            <TrialForm defaultGoal={defaultGoal} />
          </div>
        </div>
      </section>
    </>
  );
}