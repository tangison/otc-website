import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <span aria-hidden="true" className="block h-[3px] w-14 bg-otc-gold" />
      <p aria-hidden="true" className="font-display mt-6 text-[7rem] font-semibold italic leading-none tracking-tight text-otc-gold-deep sm:text-[10rem]">
        404
      </p>
      <h1 className="display-2 mt-2 max-w-2xl text-otc-navy">
        This page is not on the campus map
      </h1>
      <p className="lede mt-4 max-w-xl">
        The link may be old, or the page may have moved. The college itself is exactly where it
        always is: in Ongenga, Ohangwena Region.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-[48px] items-center rounded-sm bg-otc-navy px-6 text-base font-semibold text-white transition-colors hover:bg-otc-navy-deep"
        >
          Back to the homepage
        </Link>
        <Link
          href="/programmes"
          className="inline-flex min-h-[48px] items-center rounded-sm border border-otc-navy/30 px-6 text-base font-semibold text-otc-navy transition-colors hover:bg-secondary"
        >
          Browse programmes
        </Link>
      </div>
    </section>
  );
}
