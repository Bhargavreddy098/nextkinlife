import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
    >
      <rect width="64" height="64" rx="14" className="fill-ink" />
      {/* N monogram: two stems + jade diagonal */}
      <path d="M18 51V13h8v38h-8z" className="fill-background" />
      <path d="M38 51V13h8v38h-8z" className="fill-background" />
      <path d="M18 13h8.5L46 51h-8.5L18 13Z" className="fill-jade-bright" />
      <circle cx="46" cy="17" r="3" className="fill-background" />
    </svg>
  );
}

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-8 w-8" />
      <span
        className={cn(
          "text-[1.15rem] font-semibold tracking-tight",
          inverted ? "text-white" : "text-foreground"
        )}
      >
        NextKinLife
      </span>
    </span>
  );
}
