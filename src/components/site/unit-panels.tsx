"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Unit = {
  id: string;
  name: string;
  image: string;
  alt: string;
  summary: string;
  facts: { label: string; text: string }[];
  green?: boolean;
};

const UNITS: Unit[] = [
  {
    id: "edc",
    name: "Entrepreneurial Development Centre",
    image: "/images/unit-edc.webp",
    alt: "Trader arranging colourful woven bags at a market stall",
    summary:
      "Where trainees become founders: the EDC promotes innovation, creativity and entrepreneurship among trainees, students and the public.",
    facts: [
      {
        label: "Who it serves",
        text: "Trainees, students and the wider public, on campus and beyond.",
      },
      {
        label: "Start-up assistance",
        text: "Helps trainees establish their own businesses, with small start-up assistance to get a venture moving.",
      },
      {
        label: "Programme link",
        text: "Works alongside the full-time Entrepreneurship NVC course.",
      },
    ],
  },
  {
    id: "boxing",
    name: "OTC Boxing Club",
    image: "/images/unit-boxing.webp",
    alt: "Boxer in gloves working stance at training",
    summary:
      "Boxing is the institution's adopted sport code, training body and discipline alongside the trades.",
    facts: [
      {
        label: "Open to the public",
        text: "Registration is open to public participants, not only enrolled trainees.",
      },
      {
        label: "Sport code",
        text: "The college's adopted sport, run as an institutional club.",
      },
      {
        label: "Join",
        text: "Contact the college to register for training.",
      },
    ],
  },
  {
    id: "auxiliary",
    name: "Auxiliary Centre",
    image: "/images/detail-tools.webp",
    alt: "Organised tools and training accessories on shelves",
    summary:
      "The college's own counter: institutional corporate items and training accessories, sold on site.",
    facts: [
      {
        label: "What it sells",
        text: "Institutional corporate items and training accessories.",
      },
      {
        label: "Where",
        text: "At the campus, serving trainees and visitors.",
      },
    ],
  },
  {
    id: "sem-hasheela",
    name: "Sem Hasheela Agricultural Campus",
    image: "/images/course-mushroom.webp",
    alt: "Oyster mushrooms growing on cultivation shelves",
    summary:
      "The college's agricultural incubation campus and production hub, extending training into the field.",
    facts: [
      {
        label: "Apiculture",
        text: "Bee farming practice and production.",
      },
      {
        label: "Crop and animal husbandry",
        text: "Field crops, poultry and livestock husbandry.",
      },
      {
        label: "Food processing",
        text: "Turning harvest into product: value addition in practice.",
      },
      {
        label: "Mushroom production",
        text: "Cultivated mushroom growing as an enterprise skill.",
      },
    ],
    green: true,
  },
];

const AGRI_STRIP = [
  {
    image: "/images/course-beekeeping.webp",
    alt: "Beekeeper in protective suit lifting a hive frame",
    label: "Apiculture",
  },
  {
    image: "/images/course-animal.webp",
    alt: "Cattle grazing on green pasture",
    label: "Animal husbandry",
  },
  {
    image: "/images/course-poultry.webp",
    alt: "Free range chicken at a poultry farm",
    label: "Poultry",
  },
  {
    image: "/images/course-foodprocess.webp",
    alt: "Scoop of grain at a processing facility",
    label: "Food processing",
  },
];

export function UnitPanels() {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        {UNITS.map((unit, i) => (
          <AccordionItem
            key={unit.id}
            value={unit.id}
            className="overflow-hidden rounded-3xl border border-border bg-white shadow-[0_24px_48px_-28px_rgba(1,0,127,0.25)] data-[state=open]:shadow-[0_32px_64px_-28px_rgba(1,0,127,0.35)]"
          >
            <div className="grid md:grid-cols-[1.1fr_1fr]">
              <div
                className={
                  i % 2 === 1 ? "md:order-2" : undefined
                }
              >
                <Image
                  src={unit.image}
                  alt={unit.alt}
                  width={1400}
                  height={933}
                  sizes="(min-width: 768px) 55vw, 92vw"
                  className="h-56 w-full object-cover md:h-full md:min-h-[380px]"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <AccordionTrigger className="text-left hover:no-underline [&>svg]:hidden">
                  <span>
                    <span className="block font-display text-2xl font-semibold tracking-tight text-navy md:text-[2rem] md:leading-tight">
                      {unit.name}
                    </span>
                    <span className="mt-3 block max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">
                      {unit.summary}
                    </span>
                    <span className="mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-navy px-5 text-sm font-semibold text-white">
                      {unit.green ? (
                        <span className="bg-otc-green" aria-hidden="true">
                          <ChipGreen />
                        </span>
                      ) : null}
                      Details
                      <ChevronDown />
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <dl className="divide-y divide-border border-t border-border">
                    {unit.facts.map((fact) => (
                      <div key={fact.label} className="py-4">
                        <dt
                          className={
                            unit.green
                              ? "text-xs font-semibold uppercase tracking-[0.14em] text-otc-green"
                              : "text-xs font-semibold uppercase tracking-[0.14em] text-gold"
                          }
                        >
                          {fact.label}
                        </dt>
                        <dd className="mt-1.5 text-[15px] leading-relaxed text-foreground/85">
                          {fact.text}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </AccordionContent>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Agricultural campus strip: green accent reserved for agriculture */}
      <div className="mt-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-navy md:text-3xl">
            Inside Sem Hasheela
          </h2>
          <Link
            href="/programs"
            className="press inline-flex min-h-[44px] items-center rounded-full border border-otc-green/30 px-6 text-sm font-semibold text-otc-green transition-colors hover:bg-otc-green hover:text-white"
          >
            See agriculture courses
          </Link>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {AGRI_STRIP.map((item) => (
            <li key={item.label} className="group relative overflow-hidden rounded-2xl">
              <span className="block aspect-[3/4] bg-navy/10">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 24vw, 46vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-otc-green/85 via-otc-green/15 to-transparent"
              />
              <span className="absolute inset-x-0 bottom-0 p-4 font-display text-base font-semibold text-white md:text-lg">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function ChevronDown() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-300 [[data-state=open]>&]:rotate-180"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChipGreen() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2c-1 4-4 5-4 9a4 4 0 0 0 8 0c0-4-3-5-4-9Z" opacity="0.9" />
      <path d="M8 16c-2 0-3-2-3-2s1.5-.5 3 0M16 16c2 0 3-2 3-2s-1.5-.5-3 0" opacity="0.6" />
    </svg>
  );
}
