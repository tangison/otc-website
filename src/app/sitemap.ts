import type { MetadataRoute } from "next";

const BASE = "https://otc.nam.na";

const ROUTES = [
  "",
  "/about",
  "/programs",
  "/units",
  "/partners",
  "/apply",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path === "/apply" ? 0.9 : path === "/programs" ? 0.8 : 0.7,
  }));
}
