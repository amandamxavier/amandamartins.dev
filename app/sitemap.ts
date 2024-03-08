import { MetadataRoute } from "next";

function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://amandamartins.dev",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://amandamartins.dev/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://amandamartins.dev/content",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://amandamartins.dev/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}

export default sitemap;
