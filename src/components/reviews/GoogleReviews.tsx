"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function GoogleReviews() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="What Our Customers Say"
          subtitle="See why hundreds of Austin homeowners trust us with their comfort."
        />

        {/*
          Replace the class below with your Elfsight widget class.
          1. Sign up at elfsight.com
          2. Create a Google Reviews widget
          3. Copy the class name (e.g., elfsight-app-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
          4. Replace the placeholder below
        */}
        <div className="mt-8 flex items-center justify-center rounded-xl border border-gray-200 bg-white p-12 text-center">
          <div>
            <p className="text-sm text-gray-500">
              Google Reviews widget will appear here.
            </p>
            <p className="mt-2 text-xs text-gray-400">
              Configure your Elfsight widget ID in this component to display
              live Google reviews.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
