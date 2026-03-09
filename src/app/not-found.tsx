import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="text-center">
        <p className="text-4xl font-bold text-brand-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, we could not find the page you are looking for. Let us help you
          get back on track.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button href="/">Go Home</Button>
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
