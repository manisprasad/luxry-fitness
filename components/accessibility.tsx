export function NoiseLayer() {
  return <div className="noise-layer" role="presentation" aria-hidden="true" />;
}

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-black focus:px-6 focus:py-3 focus:text-sm focus:font-bold focus:uppercase"
    >
      Skip to main content
    </a>
  );
}