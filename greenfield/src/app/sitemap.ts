import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://khajaniwelfaresociety.com";
  return ["","/about","/our-work","/projects","/impact","/heritage","/stories","/get-involved","/contact","/donate"].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "monthly" as const : "yearly" as const, priority: path === "" ? 1 : 0.7 }));
}
