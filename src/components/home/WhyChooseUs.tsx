import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { business } from "@/data/business";

const reasons = [
  {
    title: "Licensed & Certified Technicians",
    description:
      "Every technician on our team is licensed, NATE-certified, and background-checked for your peace of mind.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Upfront Pricing, No Hidden Fees",
    description:
      "You get a clear quote before any work begins. The price we quote is the price you pay — guaranteed.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Same-Day & Emergency Service",
    description:
      "We know HVAC problems cannot wait. We offer same-day appointments and 24/7 emergency response with no overtime charges.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: `Locally Owned Since ${business.yearEstablished}`,
    description: `We are your neighbors. As a locally owned business serving ${business.address.city} for over ${new Date().getFullYear() - business.yearEstablished} years, your satisfaction is our reputation.`,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Why Choose Comfort Air?"
          subtitle="We earn your trust with every service call."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {reason.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
