import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className={cn("eyebrow flex items-center gap-3", inverted ? "text-jade-bright" : "text-jade", align === "center" && "justify-center")}>
        <span aria-hidden="true" className={cn("inline-block h-px w-8", inverted ? "bg-jade-bright/60" : "bg-jade/60")} />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display mt-4 text-4xl leading-[1.06] tracking-tight sm:text-5xl",
          inverted ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", inverted ? "text-ink-muted" : "text-muted-foreground")}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
