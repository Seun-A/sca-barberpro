import { Heading, Card } from "@/components";

export default function AdminReviewsPage() {
  return (
    <>
      <Heading level={1}>Reviews management</Heading>
      <p className="mt-2 text-gray-600">View and moderate customer feedback.</p>
      <div className="mt-6 space-y-4">
        <Card className="p-4">
          <p className="text-gray-700">&ldquo;Great cut!&rdquo;</p>
          <p className="mt-2 text-sm text-gray-500">— Mike, 5 stars</p>
          <div className="mt-2 flex gap-2">
            <button type="button" className="text-sm text-green-600 hover:underline">
              Approve
            </button>
            <button type="button" className="text-sm text-red-600 hover:underline">
              Hide
            </button>
          </div>
        </Card>
      </div>
    </>
  );
}
