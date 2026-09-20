import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NoiseLayer, SkipLink } from "@/components/accessibility";
import { gym, seoDefaults, siteUrl } from "@/lib/data";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoDefaults.title,
    template: `%s | ${gym.shortName}`,
  },
  description: seoDefaults.description,
  keywords: seoDefaults.keywords,
  authors: [{ name: gym.name }],
  creator: gym.name,
  publisher: gym.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: gym.name,
    title: seoDefaults.title,
    description: seoDefaults.description,
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: gym.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: seoDefaults.title,
    description: seoDefaults.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-snippet": -1 },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  name: gym.name,
  description: seoDefaults.description,
  url: siteUrl,
  image: [`${siteUrl}/og.png`],
  telephone: gym.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: gym.streetAddress,
    addressLocality: gym.area,
    addressRegion: gym.state,
    postalCode: "110026",
    addressCountry: "IN",
  },
  areaServed: `${gym.city}, ${gym.country}`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: gym.googleRating.rating,
    reviewCount: gym.googleRating.count,
    bestRating: 5,
  },
  hasMap: gym.googleMapsUrl,
  ...(gym.email ? { email: gym.email } : {}),
  ...([gym.instagram, gym.facebook, gym.youtube].filter(Boolean).length
    ? { sameAs: [gym.instagram, gym.facebook, gym.youtube].filter(Boolean) }
    : {}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <SkipLink />
        <NoiseLayer />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}