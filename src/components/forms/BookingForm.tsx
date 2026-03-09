"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { submitContactForm } from "@/actions/contact";
import Button from "@/components/ui/Button";

const serviceOptions = [
  { value: "ac-repair", label: "AC Repair" },
  { value: "heating", label: "Heating Repair" },
  { value: "emergency", label: "Emergency Service" },
  { value: "installation", label: "HVAC Installation" },
  { value: "maintenance", label: "Maintenance Plan" },
  { value: "air-quality", label: "Indoor Air Quality" },
  { value: "other", label: "Other" },
];

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    const result = await submitContactForm(data);

    if (result.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-green-500"
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
        <h3 className="mt-4 text-lg font-semibold text-green-800">
          Thank You!
        </h3>
        <p className="mt-2 text-sm text-green-700">
          We received your request and will contact you within 1 hour during
          business hours. For urgent needs, call us directly.
        </p>
        <Button
          onClick={() => setStatus("idle")}
          variant="secondary"
          size="sm"
          className="mt-4"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Honeypot - hidden from humans */}
      <div className="hidden" aria-hidden="true">
        <input {...register("honeypot")} tabIndex={-1} autoComplete="off" />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name *
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          autoComplete="name"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
          placeholder="John Smith"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email + Phone row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            autoComplete="email"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone *
          </label>
          <input
            {...register("phone")}
            id="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Service Type + Property Type row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">
            Service Needed *
          </label>
          <select
            {...register("serviceType")}
            id="serviceType"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
          >
            <option value="">Select a service...</option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <p className="mt-1 text-sm text-red-600">
              {errors.serviceType.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property Type *
          </label>
          <div className="mt-2 flex gap-4">
            <label className="flex items-center gap-2">
              <input
                {...register("propertyType")}
                type="radio"
                value="residential"
                className="h-4 w-4 border-gray-300 text-brand-600 focus:ring-brand-600"
              />
              <span className="text-sm text-gray-700">Residential</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                {...register("propertyType")}
                type="radio"
                value="commercial"
                className="h-4 w-4 border-gray-300 text-brand-600 focus:ring-brand-600"
              />
              <span className="text-sm text-gray-700">Commercial</span>
            </label>
          </div>
          {errors.propertyType && (
            <p className="mt-1 text-sm text-red-600">
              {errors.propertyType.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          How Can We Help? *
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
          placeholder="Describe your HVAC issue or what service you need..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Error state */}
      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Request Service"
        )}
      </Button>
    </form>
  );
}
