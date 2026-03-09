"use client";

import { useState } from "react";

interface FAQAccordionProps {
  faqs: { question: string; answer: string }[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-6 divide-y divide-gray-200">
      {faqs.map((faq, index) => (
        <div key={index} className="py-4">
          <button
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="flex w-full items-start justify-between text-left"
          >
            <span className="text-base font-medium text-gray-900">
              {faq.question}
            </span>
            <svg
              className={`ml-4 h-5 w-5 shrink-0 text-gray-500 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          {openIndex === index && (
            <p className="mt-3 text-sm leading-6 text-gray-600">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
