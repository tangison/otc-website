import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { path: "", priority: 1, freq: "weekly" as const },
    { path: "/programmes", priority: 0.9, freq: "monthly" as const },
    { path: "/admissions", priority: 0.9, freq: "monthly" as const },
    { path: "/about", priority: 0.8, freq: "monthly" as const },
    { path: "/alumni", priority: 0.8, freq: "monthly" as const },
    { path: "/partners", priority: 0.7, freq: "monthly" as const },
    { path: "/contact", priority: 0.7, freq: "yearly" as const },
    { path: "/brand", priority: 0.3, freq: "yearly" as const },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" as const },
    { path: "/terms", priority: 0.3, freq: "yearly" as const },
  ];
  return pages.map((p) => ({
    url: `${site.domain}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
