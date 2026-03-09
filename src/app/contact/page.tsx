import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import BookingForm from "@/components/forms/BookingForm";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: `Contact Us | Get a Free HVAC Estimate`,
  description: `Request HVAC service in ${business.address.city}, ${business.address.state}. Free estimates for AC repair, heating, installation, and more. Call ${business.phone} or fill out our form.`,
};

export default function ContactPage() {
  const phoneDigits = business.phone.replace(/\D/g, "");

  return (
    <>
      <section className="bg-brand-800 py-16 sm:py-20">
        <Container>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get a Free Estimate
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Fill out the form below and we will get back to you within 1 hour
            during business hours. For emergencies, call us directly.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact", href: "/contact" },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Request Service
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                All fields marked with * are required.
              </p>
              <div className="mt-6">
                <BookingForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  Contact Information
                </h3>

                <div className="mt-6 space-y-5">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Phone</p>
                      <a
                        href={`tel:+1${phoneDigits}`}
                        className="text-sm text-brand-600 hover:text-brand-700"
                      >
                        {business.phone}
                      </a>
                      <p className="mt-0.5 text-xs text-gray-500">
                        Available 24/7 for emergencies
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <a
                        href={`mailto:${business.email}`}
                        className="text-sm text-brand-600 hover:text-brand-700"
                      >
                        {business.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Office
                      </p>
                      <p className="text-sm text-gray-600">
                        {business.address.street}
                        <br />
                        {business.address.city}, {business.address.state}{" "}
                        {business.address.zip}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Business Hours
                      </p>
                      <div className="mt-1 space-y-0.5 text-sm text-gray-600">
                        <p>Mon–Fri: {business.hours.weekdays}</p>
                        <p>Sat: {business.hours.saturday}</p>
                        <p>Sun: {business.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Service Areas
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    {business.serviceAreas.join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
