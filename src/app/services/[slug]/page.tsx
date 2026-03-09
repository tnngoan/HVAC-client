import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PhoneCTA from "@/components/ui/PhoneCTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { services } from "@/data/services";
import { business } from "@/data/business";
import FAQAccordion from "./FAQAccordion";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://comfortairhvac.com";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "HVACBusiness",
      name: business.name,
      telephone: business.phone,
    },
    areaServed: business.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
    url: `${siteUrl}/services/${service.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="bg-brand-800 py-16 sm:py-20">
        <Container>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            {service.shortDescription}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="accent" size="lg">
              {service.ctaText}
            </Button>
            <PhoneCTA variant="hero" />
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${service.slug}` },
            ]}
          />

          {/* Problem */}
          <div className="mt-8 max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              The Problem
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {service.problem}
            </p>
          </div>

          {/* Solution + Benefits */}
          <div className="mt-12 max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Our Solution
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {service.solution}
            </p>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-base text-gray-700"
                >
                  <svg
                    className="h-6 w-6 shrink-0 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              How It Works
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step) => (
                <div key={step.step} className="relative">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          {service.faqs.length > 0 && (
            <div className="mt-16 max-w-3xl">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <FAQAccordion faqs={service.faqs} />
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 rounded-2xl bg-brand-50 p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {service.ctaText}
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Contact us today for a free estimate. No obligation, no hidden
              fees.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Get a Free Estimate
              </Button>
              <PhoneCTA variant="hero" className="!border-brand-600 !text-brand-600 hover:!bg-brand-600 hover:!text-white" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
