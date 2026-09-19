"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How do I apply?",
    a: "Choose your course on the Programs page, then contact the college by phone at +264 85 8030415, email info@otc.nam.na, or visit the campus at Ongenga Industrial Park in Omafo. Staff will walk you through the enrolment steps and send you an application form. A downloadable form will appear on this page once the college supplies the current version.",
  },
  {
    q: "When can I start?",
    a: "Full-time National Vocational Certificate programmes take two intakes per year. Short courses take four intakes per year, and both streams accept full-time and part-time attendance. Call the college to confirm the next intake dates for your course.",
  },
  {
    q: "What does it cost?",
    a: "Short course fees currently published are: Farming for Feathered Animals N$3,000, Upholstery Making and Production N$3,000, International Computer Driving License N$1,500, and Millwright N$3,000. Full-time programme fees are set per intake: contact the college for the current fee schedule.",
  },
  {
    q: "Who can enrol?",
    a: "OTC aims to provide technical and vocational education and training to every able-bodied Namibian from all walks of life. Contact the college to confirm the entry requirements for the specific course you want, since they differ between the full-time NVC programmes and the short courses.",
  },
  {
    q: "Do you offer part-time study?",
    a: "Yes. Both the full-time NVC stream and the short course stream accept full-time and part-time enrolment, which lets working students train around a job.",
  },
];

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {FAQS.map((faq, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="border-border">
          <AccordionTrigger className="min-h-[56px] rounded-xl px-2 text-left font-display text-lg font-semibold tracking-tight text-navy hover:no-underline hover:text-navy/80 [&>svg]:text-gold">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="max-w-[68ch] px-2 text-[15px] leading-relaxed text-muted-foreground">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
