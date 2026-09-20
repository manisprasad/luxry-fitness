export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role?: string;
}) {
  return (
    <figure className="flex h-full w-[min(85vw,460px)] shrink-0 flex-col justify-between whitespace-normal overflow-hidden border-2 border-line p-8 md:p-10">
      <div>
        <span aria-hidden="true" className="text-6xl font-bold leading-none text-accent">
          &ldquo;
        </span>
        <blockquote className="mt-4 text-xl font-medium leading-snug md:text-2xl">
          {quote}
        </blockquote>
      </div>
      <figcaption className="mt-8 border-t border-line pt-5">
        <p className="text-base font-bold uppercase tracking-tighter">
          {name}
        </p>
        {role && <p className="text-sm text-muted-foreground">{role}</p>}
      </figcaption>
    </figure>
  );
}