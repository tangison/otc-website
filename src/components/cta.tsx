import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTAProps = {
  href: string;
  children: React.ReactNode;
  variant?: "navy" | "gold" | "outline";
  className?: string;
};

export function CTA({ href, children, variant = "navy", className = "" }: CTAProps) {
  const base =
    "group inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-600 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]";

  const styles =
    variant === "navy"
      ? "bg-navy text-white hover:bg-navy-700"
      : variant === "gold"
      ? "bg-gold text-navy hover:bg-gold-soft"
      : "border border-navy/15 text-navy hover:border-navy/35 hover:bg-navy/5";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span
        className={`grid h-6 w-6 place-items-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[2px] ${
          variant === "outline" ? "bg-navy text-white" : variant === "gold" ? "bg-navy text-white" : "bg-gold text-navy"
        }`}
      >
        <ArrowRight size={12} strokeWidth={2.4} className="-translate-y-[0.5px]" />
      </span>
    </Link>
  );
}
