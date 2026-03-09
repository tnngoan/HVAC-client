import Button from "@/components/ui/Button";
import PhoneCTA from "@/components/ui/PhoneCTA";
import { business } from "@/data/business";

export default function Hero() {
  return (
    <section className="relative bg-brand-800 py-20 sm:py-28 lg:py-36">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 opacity-90" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Reliable HVAC Service in{" "}
            <span className="text-accent-500">
              {business.address.city}, {business.address.state}
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-blue-100 sm:text-xl">
            Licensed technicians. Same-day service. Satisfaction guaranteed.
            Keeping your home comfortable since {business.yearEstablished}.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="accent" size="lg">
              Book a Free Estimate
            </Button>
            <PhoneCTA variant="hero" />
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-6">
            {[
              { icon: "shield", text: "Licensed & Insured" },
              { icon: "clock", text: "24/7 Emergency Service" },
              { icon: "check", text: "100% Satisfaction Guarantee" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-sm font-medium text-blue-100"
              >
                <svg
                  className="h-5 w-5 text-accent-500"
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
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
