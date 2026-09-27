"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface for the operator, never the visitor
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <span aria-hidden="true" className="block h-[3px] w-14 bg-otc-gold" />
      <p aria-hidden="true" className="font-display mt-6 text-[7rem] font-semibold italic leading-none tracking-tight text-otc-gold-deep sm:text-[10rem]">
        500
      </p>
      <h1 className="display-2 mt-2 max-w-2xl text-otc-navy">
        Something broke on our side
      </h1>
      <p className="lede mt-4 max-w-xl">
        The page hit an error while loading. Try again, and if it keeps happening, phone the college
        and tell us what you were doing: it helps us fix it fast.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-[48px] items-center rounded-sm bg-otc-navy px-6 text-base font-semibold text-white transition-colors hover:bg-otc-navy-deep"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex min-h-[48px] items-center rounded-sm border border-otc-navy/30 px-6 text-base font-semibold text-otc-navy transition-colors hover:bg-secondary"
        >
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
