import { Heading, Input, Button } from "@/components";

export default function AdminSettingsPage() {
  return (
    <>
      <Heading level={1}>Settings</Heading>
      <p className="mt-2 text-gray-600">Business and app settings.</p>
      <form className="mt-8 max-w-md space-y-4">
        <Input label="Business name" defaultValue="BarberPro" />
        <Input label="Contact email" type="email" />
        <Button type="submit">Save changes</Button>
      </form>
    </>
  );
}
