import type { MetadataRoute } from "next";

const baseUrl = "https://tuition-site-seven.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/resources`, priority: 0.9 },
    { url: `${baseUrl}/about`, priority: 0.7 },
  ];
}
