import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "accent" | "outline" | "outlineDark" | "ghost";
type Size = "md" | "lg" | "xl";

const base =
  "inline-flex items-center justify-center gap-2 text-center uppercase tracking-tighter font-bold transition-all duration-300 ease-in-out rounded-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none select-none";

const variants: Record<Variant, string> = {
  accent:
    "bg-accent text-accent-foreground hover:scale-105 active:scale-95 hover:bg-accent",
  outline:
    "border-2 border-line text-foreground hover:bg-foreground hover:text-black active:scale-95",
  outlineDark:
    "border-2 border-black text-black hover:bg-black hover:text-accent active:scale-95",
  ghost: "text-foreground hover:text-accent",
};

const sizes: Record<Size, string> = {
  md: "h-14 px-8 text-sm",
  lg: "h-16 px-10 text-base",
  xl: "h-[72px] px-12 text-lg md:h-20",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

interface ButtonAsButton extends CommonProps {
  href?: undefined;
  external?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

interface ButtonAsLink extends CommonProps {
  href: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  disabled?: undefined;
  target?: string;
  type?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function buttonClass({
  variant = "accent",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button(props: ButtonProps) {
  const { variant = "accent", size = "md", className, children, ariaLabel } =
    props;

  if (typeof props.href === "string") {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={buttonClass({ variant, size, className })}
          aria-label={ariaLabel}
          onClick={props.onClick}
          target={props.target ?? "_blank"}
          rel="noreferrer noopener"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={props.href}
        className={buttonClass({ variant, size, className })}
        aria-label={ariaLabel}
        onClick={props.onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={buttonClass({ variant, size, className })}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}