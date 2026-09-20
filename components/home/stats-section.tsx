import {
  Dumbbell,
  Star,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Marquee } from "@/components/marquee";
import { SectionHeading } from "@/components/section-heading";
import { valueProps } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  dumbbell: Dumbbell,
  target: Target,
  users: Users,
  star: Star,
};

const marqueeWords = [
  "Modern Equipment",
  "Training Focused",
  "Fitness Community",
  "Premium Experience",
  "Punjabi Bagh",
  "New Delhi",
];

export function StatsSection() {
  return (
    <section aria-label="What Luxury Fitness offers">
      <Marquee duration={24} ariaHidden>
        <div className="flex items-center bg-accent py-4 text-accent-foreground">
          {marqueeWords.map((word, i) => (
            <span
              key={i}
              className="flex items-center gap-6 pr-6 text-base font-bold uppercase tracking-tighter md:text-lg"
            >
              {word}
              <span aria-hidden="true" className="text-2xl leading-none">
                +
              </span>
            </span>
          ))}
        </div>
      </Marquee>

      <div className="mx-auto w-[min(100%-2rem,1400px)] py-20 md:py-32">
        <SectionHeading
          eyebrow="The Experience"
          title={
            <>
              Built For
              <br />
              Real Training
            </>
          }
          description="No gimmicks. A clean, well-equipped floor where consistency does the talking."
        />

        <div className="grid gap-px border-2 border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop) => {
            const Icon = icons[prop.icon] ?? Star;
            return (
              <div
                key={prop.number}
                className="card-invert group flex flex-col justify-between gap-10 bg-background p-8 md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="number-graphic text-[5rem] leading-none transition-colors group-hover:text-black"
                  >
                    {prop.number}
                  </span>
                  <Icon
                    className="h-9 w-9 text-accent transition-colors group-hover:text-black"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold uppercase leading-none tracking-tighter md:text-3xl">
                    {prop.title}
                  </h3>
                  <p className="mt-4 text-base leading-snug text-muted-foreground transition-colors group-hover:text-black/80">
                    {prop.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}