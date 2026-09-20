import { ArrowUpRight, Star } from "lucide-react";
import { Marquee } from "@/components/marquee";
import { Button } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { gym, testimonials } from "@/lib/data";

const fullStars = Math.round(gym.googleRating.rating);

export function TestimonialsSection() {
  return (
    <section className="border-y-2 border-line py-20 md:py-32">
      <div className="mx-auto w-[min(100%-2rem,1400px)]">
        <div className="mb-12 flex flex-col gap-10 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={`${gym.googleRating.rating} / 5 · ${gym.googleRating.count} Google Reviews`}
            title={
              <>
                Trusted By
                <br />
                Real People
              </>
            }
            className="mb-0"
          />
          <div className="flex items-center gap-3 shrink-0">
            <div
              className="flex items-center gap-1 border-2 border-line px-3 py-2"
              aria-label={`Rated ${gym.googleRating.rating} out of 5 on Google`}
            >
              <span className="text-2xl font-bold leading-none">
                {gym.googleRating.rating}
              </span>
              <span
                className="flex items-center"
                role="img"
                aria-hidden="true"
              >
                {Array.from({ length: fullStars }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                    strokeWidth={1.5}
                  />
                ))}
              </span>
            </div>
            <Button
              href={gym.googleRating.sourceUrl}
              external
              variant="outline"
              size="md"
              className="text-sm"
            >
              Read On Google
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      </div>

      <Marquee duration={55} ariaHidden={false}>
        <div className="flex items-stretch gap-6 pr-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </Marquee>
    </section>
  );
}