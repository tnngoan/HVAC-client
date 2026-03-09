import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { getTestimonials, type Testimonial } from "@/lib/notion";

const staticReviews: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    rating: 5,
    text: "Called at 10 PM when our AC died in July. A tech was here within 45 minutes and had it running by midnight. Incredible service!",
  },
  {
    id: "2",
    name: "James R.",
    rating: 5,
    text: "Upfront pricing, no surprises. They replaced our entire HVAC system in one day and even cleaned up better than they found it.",
  },
  {
    id: "3",
    name: "Linda K.",
    rating: 5,
    text: "Been using their maintenance plan for 3 years. Our system runs more efficiently and we have not had a single breakdown since.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default async function ReviewsSnippet() {
  const notionReviews = await getTestimonials();
  const reviews = notionReviews.length > 0 ? notionReviews : staticReviews;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 mb-2">
            <Stars count={5} />
            <span className="text-lg font-bold text-gray-900">4.8</span>
          </div>
          <p className="text-sm text-gray-500">Based on 215+ Google Reviews</p>
        </div>

        <SectionHeading title="What Our Customers Say" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <Stars count={review.rating} />
              <p className="mt-4 text-sm leading-6 text-gray-600">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-gray-900">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
