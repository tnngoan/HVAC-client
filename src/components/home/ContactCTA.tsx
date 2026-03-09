import Button from "@/components/ui/Button";
import PhoneCTA from "@/components/ui/PhoneCTA";

export default function ContactCTA() {
  return (
    <section className="bg-accent-500 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Stay Comfortable?
        </h2>
        <p className="mt-4 text-lg text-orange-100">
          Get your free estimate today. No obligation, no pressure — just honest
          advice from certified HVAC professionals.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="secondary" size="lg" className="bg-white text-accent-600 border-white hover:bg-orange-50">
            Book a Free Estimate
          </Button>
          <PhoneCTA variant="hero" />
        </div>
      </div>
    </section>
  );
}
