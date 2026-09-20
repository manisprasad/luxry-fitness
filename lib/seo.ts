import type { Metadata } from "next";
import { gym, seoDefaults, siteUrl } from "@/lib/data";

const description = seoDefaults.description;

export function pageMetadata(path: string, title: string): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: gym.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${siteUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: gym.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/og.png`],
    },
  };
}