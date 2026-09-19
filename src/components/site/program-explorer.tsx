"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/site/reveal";
import { FULLTIME, SHORT, type Course } from "@/lib/courses";
import { cn } from "@/lib/utils";

/**
 * Progressive disclosure core: course imagery stays visible,
 * the reading matter lives behind a dialog per course.
 */
export function ProgramExplorer() {
  return (
    <Tabs defaultValue="fulltime" className="w-full">
      <TabsList
        aria-label="Course categories"
        className="h-auto gap-1 rounded-full bg-navy/5 p-1.5"
      >
        <TabsTrigger
          value="fulltime"
          className="min-h-[44px] rounded-full px-5 py-2.5 text-sm font-semibold data-[state=active]:bg-navy data-[state=active]:text-white md:px-7 md:text-base"
        >
          Full-time NVC
        </TabsTrigger>
        <TabsTrigger
          value="short"
          className="min-h-[44px] rounded-full px-5 py-2.5 text-sm font-semibold data-[state=active]:bg-navy data-[state=active]:text-white md:px-7 md:text-base"
        >
          Short courses
        </TabsTrigger>
      </TabsList>

      <TabsContent value="fulltime" className="mt-10">
        <CourseMosaic courses={FULLTIME} />
      </TabsContent>
      <TabsContent value="short" className="mt-10">
        <CourseMosaic courses={SHORT} prices />
      </TabsContent>
    </Tabs>
  );
}

const SPANS = [
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-4",
  "md:col-span-5",
  "md:col-span-6",
  "md:col-span-3",
  "md:col-span-3",
];

function CourseMosaic({ courses, prices = false }: { courses: Course[]; prices?: boolean }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const open = courses.find((c) => c.slug === openSlug) ?? null;

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-9 md:gap-5">
        {courses.map((course, i) => (
          <Reveal
            as="li"
            key={course.slug}
            delay={(i % 3) * 80}
            className={cn("col-span-1 sm:col-span-1", SPANS[i % SPANS.length])}
          >
            <button
              type="button"
              onClick={() => setOpenSlug(course.slug)}
              aria-haspopup="dialog"
              className="group relative block w-full overflow-hidden rounded-2xl bg-navy text-left shadow-[0_24px_48px_-24px_rgba(1,0,127,0.35)] transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="block aspect-[16/10]">
                <Image
                  src={course.image}
                  alt={course.alt}
                  width={1400}
                  height={875}
                  sizes="(min-width: 768px) 45vw, 92vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy/95 via-navy/45 to-transparent"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <span className="font-display text-lg font-semibold leading-snug tracking-tight text-white md:text-xl">
                  {course.name}
                </span>
                <span className="mb-0.5 flex shrink-0 items-center gap-2">
                  {prices && course.price ? (
                    <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
                      {course.price}
                    </span>
                  ) : null}
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 text-white transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-navy"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </span>
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </ul>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpenSlug(null)}>
        <DialogContent className="max-w-3xl overflow-hidden rounded-3xl border-none p-0">
          {open ? (
            <>
              <div className="relative h-56 w-full overflow-hidden md:h-72">
                <Image
                  src={open.image}
                  alt={open.alt}
                  fill
                  sizes="(min-width: 768px) 768px, 92vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent"
                />
              </div>
              <DialogHeader className="space-y-3 px-6 pb-1 pt-5 md:px-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-navy">
                    {open.category === "fulltime" ? "Full-time NVC" : "Short course"}
                  </span>
                  {open.price ? (
                    <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
                      {open.price}
                    </span>
                  ) : null}
                </div>
                <DialogTitle className="font-display text-2xl font-semibold tracking-tight text-navy md:text-3xl">
                  {open.name}
                </DialogTitle>
                <DialogDescription className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {open.summary}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-5 px-6 pb-6 md:px-8 md:pb-8">
                <p className="max-w-[65ch] text-[15px] leading-relaxed text-foreground/80">
                  {open.detail}
                </p>
                <dl className="grid grid-cols-2 gap-4 border-t border-border pt-5 text-sm">
                  <div>
                    <dt className="font-semibold text-navy">Intakes</dt>
                    <dd className="mt-1 text-muted-foreground">
                      {open.category === "fulltime"
                        ? "2 per year, full-time and part-time"
                        : "4 per year, full-time and part-time"}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Fees</dt>
                    <dd className="mt-1 text-muted-foreground">
                      {open.price ? open.price : "Contact the college for current fees"}
                    </dd>
                  </div>
                </dl>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/admissions"
                    className="press inline-flex min-h-[48px] items-center rounded-full bg-gold px-7 text-sm font-semibold text-navy transition-colors hover:bg-gold-soft"
                  >
                    Apply for this course
                  </Link>
                  <a
                    href="tel:+264858030415"
                    className="press inline-flex min-h-[48px] items-center rounded-full border border-navy/25 px-7 text-sm font-semibold text-navy transition-colors hover:border-gold hover:bg-gold/10"
                  >
                    Call +264 85 8030415
                  </a>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
