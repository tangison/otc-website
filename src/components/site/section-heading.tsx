import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  lead,
  light = false,
  className,
  id,
}: {
  title: string;
  lead?: string;
  light?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2
        id={id}
        className={cn(
          "font-display text-[1.9rem] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[2.75rem]",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            light ? "text-white/75" : "text-muted-foreground"
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
