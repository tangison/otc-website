import { readFileSync, writeFileSync } from "fs";
let s = readFileSync("/home/z/my-project/src/lib/site.ts", "utf8");
const start = s.indexOf("export const graduationCarousel");
const end = s.indexOf("export const campusCarousel");
const replacement = `export const alumniCarousel = [
  { src: "/images/graduation-01-c.webp", caption: "Graduate arriving to family greetings" },
  { src: "/images/graduation-02-c.webp", caption: "Receiving the certificate folder on stage" },
  { src: "/images/graduation-03-c.webp", caption: "The handshake that ends the trade" },
  { src: "/images/graduation-04-c.webp", caption: "Certificate handover, recognition ceremony" },
  { src: "/images/outreach-01-c.webp", caption: "OTC outreach stand, rural skills demo" },
  { src: "/images/outreach-02-c.webp", caption: "Showing the tools of the trades" },
  { src: "/images/outreach-03-c.webp", caption: "OTC staff with community members" },
];

`;
s = s.slice(0, start) + replacement + s.slice(end);
writeFileSync("/home/z/my-project/src/lib/site.ts", s);
console.log("site.ts: alumniCarousel in place, old two removed");
