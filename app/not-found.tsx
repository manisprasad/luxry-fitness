import type { Metadata } from "next";
import { Button } from "@/components/button";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/404", "Page Not Found");

export default function NotFound() {
  return (
    <section className="relative overflow-hidden border-b-2 border-line">
      <span
        aria-hidden="true"
        className="number-graphic absolute -bottom-8 right-2"
      >
        404
      </span>
      <div className="mx-auto flex min-h-[70vh] w-[min(100%-2rem,1400px)] flex-col items-start justify-center py-24">
        <p className="text-label text-accent mb-6">Error 404</p>
        <h1 className="text-display">
          Off
          <br />
          <span className="text-accent">Track.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-snug text-muted-foreground md:text-xl lg:text-2xl">
          The page you&rsquo;re looking for doesn&rsquo;t exist. But your next
          workout does — let&rsquo;s get you back on the floor.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href="/" size="lg">
            Back To Home
          </Button>
          <Button href="/free-trial" variant="outline" size="lg">
            Book Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}