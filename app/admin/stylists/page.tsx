import { Heading, Card, Button } from "@/components";

export default function AdminStylistsPage() {
  return (
    <>
      <Heading level={1}>Stylists management</Heading>
      <p className="mt-2 text-gray-600">Manage stylist profiles and portfolios.</p>
      <div className="mt-6">
        <Button className="mb-4">Add stylist</Button>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card title="Alex" className="p-4">
            <p className="text-sm text-gray-600">Senior barber</p>
            <div className="mt-2 flex gap-2">
              <Button variant="outline" className="text-sm">
                Edit
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
