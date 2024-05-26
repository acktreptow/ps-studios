import { MetadataRoute } from "next";
import developers from "../app/data/developers.json";
import { Developer } from "../app/types/Developer";

export default function sitemap(): MetadataRoute.Sitemap {
  const developersEntries: MetadataRoute.Sitemap = developers
    .filter(
      (developer: Developer) =>
        developer.name !== "PlayStation Logo" && developer.name !== "PS5 Logo"
    )
    .map((developer: Developer) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/developers/${developer.urlPath}`,
      lastModified: new Date(),
    }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/developers`,
      lastModified: new Date(),
    },
    ...developersEntries,
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/ps5games`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/stats`,
      lastModified: new Date(),
    },
  ];
}
