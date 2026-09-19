import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ongenga Technical College",
    short_name: "OTC",
    description:
      "A Namibian TVET institution. National Vocational Certificate programs across seven trades, plus short courses from ICDL to millwright.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#01007F",
    icons: [
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    categories: ["education", "vocational", "training"],
    lang: "en-NA",
  };
}
