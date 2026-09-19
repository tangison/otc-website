import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { UnitPanels } from "@/components/site/unit-panels";

export const metadata: Metadata = {
  title: "Institutional Units",
  description:
    "Four units extend OTC beyond the classroom: the Entrepreneurial Development Centre, the OTC Boxing Club, the Auxiliary Centre and the Sem Hasheela Agricultural Campus.",
  alternates: { canonical: "/units" },
};

export default function UnitsPage() {
  return (
    <>
      <PageHero
        image="/images/course-entrepreneurship.webp"
        alt="Shop owner arranging garments in a small business"
        title="Four arms, one institution"
        lead="Open each unit to see what it does and how to take part."
        priority
      />
      <section className="mx-auto max-w-[1200px] space-y-6 px-5 py-16 md:px-10 md:py-24">
        <UnitPanels />
      </section>
    </>
  );
}
