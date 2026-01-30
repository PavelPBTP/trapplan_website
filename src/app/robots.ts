import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    host: "https://www.trapplan.com",
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "ia_archiver",
        disallow: ["/"],
      },
    ],
    sitemap: ["https://www.trapplan.com/sitemap.xml"],
  };
}
