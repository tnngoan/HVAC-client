import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ContactCTA from "@/components/home/ContactCTA";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: `About ${business.name} | Licensed ${business.address.city} HVAC Contractor`,
  description: `Family-owned HVAC company serving ${business.address.city}, ${business.address.state} since ${business.yearEstablished}. Licensed, insured, NATE-certified technicians.`,
};

const stats = [
  {
    value: `${new Date().getFullYear() - business.yearEstablished}+`,
    label: "Years in Business",
  },
  { value: "10,000+", label: "Homes Served" },
  { value: "4.8", label: "Star Rating" },
  { value: "24/7", label: "Emergency Service" },
];

const certifications = [
  "EPA Section 608 Certified",
  "NATE Certified Technicians",
  "BBB Accredited Business",
  `Texas License #${business.license}`,
  "Fully Licensed & Insured",
  "Trane Comfort Specialist",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-800 py-16 sm:py-20">
        <Container>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            About {business.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Your trusted local HVAC partner since {business.yearEstablished}.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
            ]}
          />

          {/* Company Story */}
          <div className="mt-8 max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Serving {business.address.city} Since {business.yearEstablished}
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-gray-600">
              <p>
                {business.name} was founded with a simple mission: provide
                honest, reliable HVAC service at fair prices. What started as a
                one-truck operation has grown into one of{" "}
                {business.address.city}&apos;s most trusted heating and cooling
                companies — but our values remain the same.
              </p>
              <p>
                We believe every homeowner deserves comfort they can count on.
                That means showing up on time, diagnosing problems accurately,
                quoting fair prices upfront, and standing behind our work with
                real guarantees.
              </p>
              <p>
                As a locally owned and operated company, we are not just serving
                customers — we are serving our neighbors. Our technicians live in
                the communities we serve, and our reputation depends on every
                single service call.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center"
              >
                <p className="text-3xl font-bold text-brand-600">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Certifications & Credentials
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Your safety and satisfaction are backed by industry-leading
              certifications.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3"
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
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Service Areas
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              We proudly serve the following communities in the greater{" "}
              {business.address.city} area:
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {business.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
