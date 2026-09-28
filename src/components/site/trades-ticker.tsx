// Trades ticker: a slow marquee of the college's trades. Marquee is the one place
// linear easing is correct. Pauses on hover/focus; renders as a static wrap for
// reduced-motion users.
const items = [
  "Welding & Metal Fabrication",
  "Joinery & Cabinet Making",
  "Bricklaying & Plastering",
  "Electrical General",
  "Auto Mechanics",
  "Horticulture & Crop Husbandry",
  "Nine short courses",
];

export default function TradesTicker() {
  const row = (hidden: boolean) => (
    <div className="ticker-row" aria-hidden={hidden}>
      {items.map((t) => (
        <span key={t} className="inline-flex items-center gap-6 pr-6">
          {t}
          <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-otc-gold" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="ticker border-y border-otc-navy-deep/40 bg-otc-gold text-otc-ink">
      <div className="ticker-track py-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.18em]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
