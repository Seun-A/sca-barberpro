import { PageLayout, Heading, Card } from "@/components";

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Heading level={1}>Services & Pricing</Heading>
        <p className="mt-2 text-gray-600">
          Browse our services and transparent pricing.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Haircut" className="p-6">
            <p className="text-gray-600">Classic cut and style.</p>
            <p className="mt-2 font-semibold">$25</p>
          </Card>
          <Card title="Beard Trim" className="p-6">
            <p className="text-gray-600">Shape and maintain your beard.</p>
            <p className="mt-2 font-semibold">$15</p>
          </Card>
          <Card title="Hair + Beard" className="p-6">
            <p className="text-gray-600">Full grooming package.</p>
            <p className="mt-2 font-semibold">$35</p>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
