"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <section className="pt-20 pb-20 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <span className="tag">Something went wrong</span>
        <p className="display-1 text-navy mt-6">
          <span className="text-gold italic font-500">Try that</span> again.
        </p>
        <p className="lead text-navy/75 mt-6 max-w-xl mx-auto">
          An unexpected error occurred while rendering this page. You can retry, or return home and
          continue from there. If the error keeps happening, please contact us directly.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-[13.5px] font-600 text-white hover:bg-navy-700 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-5 py-3 text-[13.5px] font-600 text-navy hover:bg-navy/5 transition-colors"
          >
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}
