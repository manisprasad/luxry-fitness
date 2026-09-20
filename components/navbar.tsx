"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/button";
import { MobileMenu } from "@/components/mobile-menu";
import { gym, navLinks, photos } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-sm border-b-2 border-line py-2"
            : "bg-transparent py-4"
        )}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex w-[min(100%-2rem,1400px)] items-center justify-between gap-6"
        >
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label={`${gym.name} — home`}
          >
            <Image
              src={photos.logo.src}
              alt={photos.logo.alt}
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 border border-line"
            />
            <span className="flex flex-col leading-none">
              <span className="text-base font-bold uppercase tracking-tighter md:text-lg">
                {gym.shortName}
              </span>
              <span className="text-label text-muted-foreground mt-0.5">
                Punjabi Bagh
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-sm font-bold uppercase tracking-tighter transition-colors hover:text-accent",
                    active ? "text-accent" : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Button
              href="/free-trial"
              size="md"
              className="hidden md:inline-flex px-6"
            >
              Free Trial
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center border-2 border-line text-foreground transition-colors hover:bg-accent hover:text-black lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}