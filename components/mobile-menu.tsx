"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/button";
import { gym, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu" id="mobile-menu">
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-black/70"
        tabIndex={-1}
      />
      <div
        className="absolute right-0 top-0 flex h-full w-[min(88vw,380px)] flex-col border-l-2 border-line bg-background"
      >
        <div className="flex items-start justify-between border-b-2 border-line p-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-tighter">
              {gym.name}
            </p>
            <p className="text-label text-muted-foreground mt-1">
              {gym.city} · {gym.country}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center border-2 border-line text-foreground transition-colors hover:bg-foreground hover:text-black"
          >
            <X className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-6" aria-label="Mobile">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between border-b border-line py-4 text-2xl font-bold uppercase tracking-tighter transition-colors hover:text-accent",
                  active && "text-accent"
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
                <span aria-hidden="true" className="text-muted-foreground">
                  /
                </span>
              </a>
            );
          })}
        </nav>

        <div className="border-t-2 border-line p-6">
          <Button href="/free-trial" size="lg" className="w-full" onClick={() => onClose()}>
            Book Free Trial
          </Button>
          <p className="text-label text-muted-foreground mt-4 text-center">
            {gym.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}