import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { business } from "@/data/business";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${business.name}`,
    default: `${business.name} | ${business.address.city} HVAC Service`,
  },
  description: `Licensed HVAC contractor serving ${business.address.city}, ${business.address.state}. AC repair, heating, installation, and 24/7 emergency service. Call ${business.phone} for a free estimate.`,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://comfortairhvac.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: business.name,
  },
};

const hvacBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: business.name,
  telephone: business.phone,
  email: business.email,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://comfortairhvac.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: "US",
  },
  areaServed: business.serviceAreas.map((city) => ({
    "@type": "City",
    name: city,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "215",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}
      >
        <JsonLd data={hvacBusinessSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
