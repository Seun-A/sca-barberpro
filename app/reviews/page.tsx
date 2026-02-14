import { PageLayout, Heading, Card } from "@/components";

export default function ReviewsPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Heading level={1}>Customer Reviews</Heading>
        <p className="mt-2 text-gray-600">
          Feedback and reviews from our clients.
        </p>
        <div className="mt-8 space-y-4">
          <Card className="p-6">
            <p className="text-gray-700">
              &ldquo;Best haircut I&apos;ve had. Will definitely come back.&rdquo;
            </p>
            <p className="mt-2 text-sm font-medium">— Mike, 5 stars</p>
          </Card>
          <Card className="p-6">
            <p className="text-gray-700">
              &ldquo;Professional and friendly. Great atmosphere.&rdquo;
            </p>
            <p className="mt-2 text-sm font-medium">— Sarah, 5 stars</p>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
