"use client";

import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { Trade } from "@/lib/site";

function TradeDetails({ trade }: { trade: Trade }) {
  return (
    <div className="space-y-6">
      <div className="img-frame relative aspect-[16/9]">
        <Image src={trade.image} alt={trade.alt} fill sizes="(max-width: 640px) 90vw, 520px"
                  quality={60}
                className="object-cover" />
        {trade.imageCaption ? <p className="caption-chip">{trade.imageCaption}</p> : null}
      </div>

      <dl className="space-y-4 text-[0.95rem]">
        <div className="border-b border-border pb-3">
          <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-otc-gold-deep">Qualification</dt>
          <dd className="mt-1 font-medium text-otc-ink">{trade.qualification}</dd>
        </div>
        <div className="border-b border-border pb-3">
          <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-otc-gold-deep">Career pathways</dt>
          <dd className="mt-2">
            <ul className="flex flex-wrap gap-1.5">
              {trade.pathways.map((p) => (
                <li key={p} className="rounded-full bg-secondary px-3 py-1 text-[0.8rem] font-medium text-otc-navy-deep">
                  {p}
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div className="border-b border-border pb-3">
          <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-otc-gold-deep">Entry requirements</dt>
          <dd className="mt-1 text-otc-ink/85">
            Set per programme and confirmed by the admissions office. Phone {""}
            <a href="tel:+264812946126" className="font-medium text-otc-navy underline-offset-4 hover:underline">
              +264 81 294 6126
            </a>{" "}
            before you apply.
          </dd>
        </div>
        <div className="border-b border-border pb-3">
          <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-otc-gold-deep">Duration and mode</dt>
          <dd className="mt-1 text-otc-ink/85">Full-time, day classes on campus in Ongenga.</dd>
        </div>
        <div>
          <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-otc-gold-deep">Fees</dt>
          <dd className="mt-1 text-otc-ink/85">
            The college issues its fee schedule (in N$) for each intake. Contact admissions for the current rates.
          </dd>
        </div>
      </dl>

      <div className="flex flex-wrap gap-3">
        <Link prefetch={false}
          href="/admissions"
          className="inline-flex min-h-[44px] items-center rounded-sm bg-otc-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-otc-navy-deep"
        >
          How to apply
        </Link>
        <Link prefetch={false}
          href="/contact"
          className="inline-flex min-h-[44px] items-center rounded-sm border border-otc-navy/30 px-5 text-sm font-semibold text-otc-navy transition-colors hover:bg-secondary"
        >
          Ask a question
        </Link>
      </div>
    </div>
  );
}

export default function TradeTile({ trade, span = "", aspect = "aspect-[4/3]", priority = false }: { trade: Trade; span?: string; aspect?: string; priority?: boolean }) {
  return (
    <Dialog>
      <article className={`group relative ${span}`}>
        <DialogTrigger asChild>
          <button type="button" className="block w-full text-left focus-visible-ring" aria-label={`View details for ${trade.name}`}>
            <div className={`img-frame relative ${aspect}`}>
              <Image
                src={trade.image}
                alt={trade.alt}
                fill
                priority={priority}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                quality={60}
                className="object-cover"
              />
              {trade.imageCaption ? <p className="caption-chip">{trade.imageCaption}</p> : null}
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-otc-navy sm:text-2xl">
                  {trade.name}
                </h3>
                <p className="mt-1 text-[0.95rem] text-otc-ink/70">{trade.blurb}</p>
              </div>
              <span
                aria-hidden="true"
                className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-otc-navy/25 text-otc-navy transition-colors group-hover:bg-otc-navy group-hover:text-white"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </button>
        </DialogTrigger>
      </article>

      <DialogContent className="max-h-[85vh] overflow-y-auto bg-otc-paper sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-semibold tracking-tight text-otc-navy">
            {trade.name}
          </DialogTitle>
          <DialogDescription className="text-otc-ink/70">{trade.blurb}</DialogDescription>
        </DialogHeader>
        <TradeDetails trade={trade} />
      </DialogContent>
    </Dialog>
  );
}
