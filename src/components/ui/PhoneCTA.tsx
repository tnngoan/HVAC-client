import { business } from "@/data/business";

interface PhoneCTAProps {
  className?: string;
  variant?: "header" | "hero" | "inline";
}

export default function PhoneCTA({
  className = "",
  variant = "inline",
}: PhoneCTAProps) {
  const phoneDigits = business.phone.replace(/\D/g, "");

  if (variant === "header") {
    return (
      <a
        href={`tel:+1${phoneDigits}`}
        className={`inline-flex items-center gap-2 rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-600 ${className}`}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
        {business.phone}
      </a>
    );
  }

  if (variant === "hero") {
    return (
      <a
        href={`tel:+1${phoneDigits}`}
        className={`inline-flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-brand-700 ${className}`}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
        Call Now: {business.phone}
      </a>
    );
  }

  return (
    <a
      href={`tel:+1${phoneDigits}`}
      className={`font-semibold text-brand-600 hover:text-brand-700 ${className}`}
    >
      {business.phone}
    </a>
  );
}
