import { cn } from "@/lib/utils";

export const formInputClass =
  "h-14 md:h-16 w-full border-b-2 border-line bg-transparent text-base md:text-lg font-medium text-foreground placeholder:text-[#52525b] focus:outline-none focus:border-accent transition-colors disabled:opacity-50";

export function Field({
  label,
  htmlFor,
  required,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <label htmlFor={htmlFor} className="mb-2 flex items-center gap-1">
        <span className="text-label text-muted-foreground">{label}</span>
        {required && (
          <span aria-hidden="true" className="text-accent">
            *
          </span>
        )}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-2 text-sm font-bold uppercase tracking-tight text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function SubmitBar({
  children,
  status,
}: {
  children: React.ReactNode;
  status?: { ok: boolean; message: string } | null;
}) {
  return (
    <div className="mt-10 border-t-2 border-line pt-8">
      {children}
      {status ? (
        <p
          role="alert"
          className={cn(
            "mt-6 text-sm font-semibold",
            status.ok ? "text-muted-foreground" : "text-accent"
          )}
        >
          {status.message}
        </p>
      ) : null}
    </div>
  );
}