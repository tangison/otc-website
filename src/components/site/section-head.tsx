import Reveal from "./reveal";

export default function SectionHead({
  index,
  title,
  lede,
  align = "left",
  dark = false,
}: {
  index?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className={`flex items-baseline gap-3 ${align === "center" ? "justify-center" : ""}`}>
        {index ? (
          <span aria-hidden="true" className="font-display text-sm italic text-otc-gold-deep">
            {index}
          </span>
        ) : null}
        <span aria-hidden="true" className="h-[2px] w-10 bg-otc-gold" />
      </div>
      <h2
        className={`display-2 mt-3 ${dark ? "text-white" : "text-otc-navy"}`}
      >
        {title}
      </h2>
      {lede ? <p className={`lede mt-4 ${dark ? "text-white/70" : ""}`}>{lede}</p> : null}
    </Reveal>
  );
}
