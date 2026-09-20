import { Mail, MapPin, Phone } from "lucide-react";
import { MapEmbed } from "@/components/map-embed";
import { SectionHeading } from "@/components/section-heading";
import { gym } from "@/lib/data";

export function LocationSection() {
  return (
    <section className="mx-auto w-[min(100%-2rem,1400px)] py-20 md:py-32">
      <SectionHeading
        eyebrow="Find Us"
        title={
          <>
            Right In
            <br />
            Punjabi Bagh
          </>
        }
        description="Conveniently located in Punjabi Bagh, West Delhi. Drop in, or get directions."
      />

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div className="flex flex-col gap-6">
          <div className="border-2 border-line p-8 md:p-10">
            <MapPin className="h-8 w-8 text-accent" strokeWidth={1.5} aria-hidden="true" />
            <p className="text-label text-muted-foreground mt-5">Location</p>
            <p className="mt-2 text-xl font-bold uppercase leading-tight tracking-tighter md:text-2xl">
              {gym.area}, {gym.city}
            </p>
            <p className="mt-2 text-muted-foreground">{gym.fullAddress}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Plus code: {gym.plusCode}
            </p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {gym.amenities.map((amenity) => (
                <li
                  key={amenity}
                  className="border border-line px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground"
                >
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-2 border-line p-8 md:p-10">
            <Phone className="h-8 w-8 text-accent" strokeWidth={1.5} aria-hidden="true" />
            <p className="text-label text-muted-foreground mt-5">Phone</p>
            <a
              href={gym.phoneHref}
              className="mt-2 block text-xl font-bold uppercase tracking-tighter transition-colors hover:text-accent md:text-2xl"
            >
              {gym.phone}
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Call or WhatsApp to ask about membership and timings.
            </p>
          </div>
          <div className="border-2 border-line p-8 md:p-10">
            <Mail className="h-8 w-8 text-accent" strokeWidth={1.5} aria-hidden="true" />
            <p className="text-label text-muted-foreground mt-5">Email</p>
            {gym.email ? (
              <a
                href={`mailto:${gym.email}`}
                className="mt-2 block text-xl font-bold uppercase tracking-tighter transition-colors hover:text-accent md:text-2xl"
              >
                {gym.email}
              </a>
            ) : (
              <p className="mark-placeholder mt-2 text-xl font-bold uppercase tracking-tighter">
                Add email (see lib/data.ts)
              </p>
            )}
          </div>
        </div>

        <MapEmbed className="self-start" />
      </div>
    </section>
  );
}