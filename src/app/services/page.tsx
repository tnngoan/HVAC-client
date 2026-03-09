import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { services } from "@/data/services";
import { business } from "@/data/business";
import Link from "next/link";

export const metadata: Metadata = {
  title: `HVAC Services in ${business.address.city}, ${business.address.state}`,
  description: `Complete HVAC services in ${business.address.city}: AC repair, heating, emergency service, installation, maintenance, and indoor air quality. Call ${business.phone}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-800 py-16 sm:py-20">
        <Container>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our HVAC Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            From emergency repairs to complete system installations, we provide
            reliable HVAC solutions for homes and businesses across the{" "}
            {business.address.city} area.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
            ]}
          />

          <SectionHeading
            title="How Can We Help?"
            subtitle="Select a service to learn more about what we offer."
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-8 transition-all hover:border-brand-200 hover:shadow-lg"
              >
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-brand-600">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.shortDescription}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <svg
                        className="h-5 w-5 shrink-0 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  {service.ctaText}
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
