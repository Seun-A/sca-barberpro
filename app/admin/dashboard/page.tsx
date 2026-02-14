import { Heading, Card } from "@/components";

export default function AdminDashboardPage() {
  return (
    <>
      <Heading level={1}>Dashboard</Heading>
      <p className="mt-2 text-gray-600">
        Stats, schedule overview, and recent reviews.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Card title="Today's appointments" className="p-6">
          <p className="text-2xl font-bold">12</p>
        </Card>
        <Card title="Pending reviews" className="p-6">
          <p className="text-2xl font-bold">3</p>
        </Card>
        <Card title="Active stylists" className="p-6">
          <p className="text-2xl font-bold">5</p>
        </Card>
      </div>
    </>
  );
}
