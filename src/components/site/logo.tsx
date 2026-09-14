import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
    >
      <rect width="64" height="64" rx="14" className="fill-ink" />
      <path d="M19 13h9v38h-9z" className="fill-background" />
      <path d="M31.5 32 47 13h-11L22.5 30.5 41 51h11L31.5 32Z" className="fill-jade-bright" />
      <circle cx="47.5" cy="17.5" r="3.5" className="fill-background" />
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
        Kaidron
      </span>
    </span>
  );
}
