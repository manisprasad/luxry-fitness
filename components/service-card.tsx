import {
  ArrowRight,
  Dumbbell,
  Flame,
  HeartPulse,
  Scale,
  UserCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { serviceIcons } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  dumbbell: Dumbbell,
  heartPulse: HeartPulse,
  userCheck: UserCheck,
  zap: Zap,
  scale: Scale,
  flame: Flame,
};

export function ServiceCard({
  index,
  id,
  title,
  description,
  audience,
}: {
  index: string;
  id: string;
  title: string;
  description: string;
  audience: string;
}) {
  const Icon = icons[serviceIcons[id] ?? "dumbbell"] ?? Dumbbell;

  return (
    <article
      id={id}
      className="card-invert group relative flex min-h-[340px] scroll-mt-28 flex-col justify-between border-2 border-line p-8 md:p-10"
    >
      <div className="flex items-start justify-between">
        <span className="number-graphic text-[4rem] leading-none transition-colors group-hover:text-black">
          {index}
        </span>
        <Icon
          className="h-10 w-10 text-accent transition-colors group-hover:text-black"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold uppercase leading-none tracking-tighter md:text-3xl lg:text-4xl">
          {title}
        </h3>
        <p className="mt-4 text-base leading-snug text-muted-foreground transition-colors group-hover:text-black/80 md:text-lg">
          {description}
        </p>
        <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-black/80">
          {audience}
        </p>
        <a
          href={`/free-trial?service=${id}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-tighter text-accent transition-colors group-hover:text-black"
        >
          Learn More
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        </a>
      </div>
    </article>
  );
}