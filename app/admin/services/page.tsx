import { Heading, Card, Button } from "@/components";

export default function AdminServicesPage() {
  return (
    <>
      <Heading level={1}>Services management</Heading>
      <p className="mt-2 text-gray-600">Add, edit, and manage services and pricing.</p>
      <div className="mt-6">
        <Button className="mb-4">Add service</Button>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card title="Haircut - $25" className="p-4">
            <div className="flex gap-2">
              <Button variant="outline" className="text-sm">
                Edit
              </Button>
              <Button variant="secondary" className="text-sm">
                Delete
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
