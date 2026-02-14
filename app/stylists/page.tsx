import { PageLayout, Heading, Card } from "@/components";

export default function StylistsPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Heading level={1}>Stylist Portfolios</Heading>
        <p className="mt-2 text-gray-600">
          Meet our barbers and stylists. Click to see their work.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Alex" className="p-6">
            <p className="text-gray-600">Senior barber, 10+ years.</p>
          </Card>
          <Card title="Jordan" className="p-6">
            <p className="text-gray-600">Stylist & color specialist.</p>
          </Card>
          <Card title="Sam" className="p-6">
            <p className="text-gray-600">Classic cuts & fades.</p>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
