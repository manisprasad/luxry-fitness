import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/button";
import { Marquee } from "@/components/marquee";
import { cn } from "@/lib/utils";
import { gym, navLinks } from "@/lib/data";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const marqueeItems = [
  "Visit Luxury Fitness",
  "Punjabi Bagh",
  "New Delhi",
  "Train Harder",
  "Live Stronger",
  "Book Your Free Trial",
];

function ContactLine({
  icon,
  label,
  value,
  href,
  empty,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  empty?: boolean;
}) {
  const content = href ? (
    <a href={href} className="transition-colors hover:text-accent">
      {value}
    </a>
  ) : (
    <>{value}</>
  );
  return (
    <li className="flex items-center gap-3 text-muted-foreground">
      <span aria-hidden="true" className="text-accent shrink-0">
        {icon}
      </span>
      <span className="sr-only">{label}: </span>
      {empty ? (
        <span className="mark-placeholder font-semibold text-foreground">
          {value}
        </span>
      ) : (
        content
      )}
    </li>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "Instagram", href: gym.instagram, Icon: InstagramIcon },
    { label: "Facebook", href: gym.facebook, Icon: FacebookIcon },
    { label: "YouTube", href: gym.youtube, Icon: YoutubeIcon },
  ].filter((s) => s.href);

  return (
    <footer className="border-t-2 border-line">
      <Marquee duration={30} ariaHidden>
        <div className="flex items-center bg-accent py-4 text-accent-foreground">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 pr-6 text-sm font-bold uppercase tracking-tighter md:text-base"
            >
              {item}
              <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
            </span>
          ))}
        </div>
      </Marquee>

      <div className="mx-auto w-[min(100%-2rem,1400px)] py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="text-3xl font-bold uppercase leading-none tracking-tighter md:text-4xl">
              {gym.shortName}
            </p>
            <p className="mt-2 text-lg text-muted-foreground">{gym.tagline}</p>
            <Button href="/free-trial" size="lg" className="mt-8">
              Book Free Trial
            </Button>
          </div>

          <nav aria-label="Footer">
            <p className="text-label text-muted-foreground mb-6">Quick Links</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-tighter transition-colors hover:text-accent"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-60" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/free-trial"
                  className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-tighter text-accent transition-colors hover:text-foreground"
                >
                  Free Trial
                  <ArrowUpRight className="h-4 w-4 opacity-60" />
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-label text-muted-foreground mb-6">Contact</p>
            <ul className="space-y-4">
              <ContactLine
                icon={<MapPin className="h-5 w-5" strokeWidth={2} />}
                label="Location"
                value={`${gym.area}, ${gym.city}`}
                href={gym.googleMapsUrl}
              />
              <ContactLine
                icon={<Phone className="h-5 w-5" strokeWidth={2} />}
                label="Phone"
                value={gym.phone ? gym.phone : "Add phone (see lib/data.ts)"}
                href={gym.phoneHref}
                empty={!gym.phone}
              />
              <ContactLine
                icon={<Mail className="h-5 w-5" strokeWidth={2} />}
                label="Email"
                value={gym.email ? gym.email : "Add email (see lib/data.ts)"}
                href={gym.email ? `mailto:${gym.email}` : undefined}
                empty={!gym.email}
              />
            </ul>
          </div>

          <div>
            <p className="text-label text-muted-foreground mb-6">Social</p>
            {socials.length > 0 ? (
              <ul className="space-y-3">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-3 text-base font-bold uppercase tracking-tighter transition-colors hover:text-accent"
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-3">
                {["Instagram", "Facebook", "YouTube"].map((label) => (
                  <li key={label}>
                    <span className="mark-placeholder font-bold uppercase tracking-tighter text-muted-foreground">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <p className="text-sm leading-relaxed text-muted-foreground mt-8">
              {gym.fullAddress}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-line">
        <div
          className={cn(
            "mx-auto flex w-[min(100%-2rem,1400px)] flex-col gap-3 py-8",
            "md:flex-row md:items-center md:justify-between"
          )}
        >
          <p className="text-sm text-muted-foreground">
            © {year} {gym.name}. All rights reserved.
          </p>
          <Link
            href="/free-trial"
            className="text-sm font-bold uppercase tracking-tighter text-accent transition-colors hover:text-foreground"
          >
            Start your journey
          </Link>
        </div>
      </div>
    </footer>
  );
}