import Link from "next/link";
import { PageLayout, Button, Heading } from "@/components";

export default function LandingPage() {
  return (
    <PageLayout>
      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <Heading level={1}>BarberPro</Heading>
          <p className="mt-4 text-lg text-gray-600">
            Your look, our craft. Book with the best barbers and stylists.
          </p>
          <Link href="/booking" className="mt-6 inline-block">
            <Button>Book an appointment</Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
