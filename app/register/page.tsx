import Link from "next/link";
import { PageLayout, Heading, Button, Input } from "@/components";

export default function RegisterPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-sm px-4 py-16">
        <Heading level={1}>Register</Heading>
        <p className="mt-2 text-gray-600">Create your BarberPro account.</p>
        <form className="mt-8 flex flex-col gap-4">
          <Input label="Full name" required />
          <Input type="email" label="Email" required />
          <Input type="password" label="Password" required />
          <Button type="submit" className="mt-2">
            Create account
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-black hover:underline">
            Login
          </Link>
        </p>
      </div>
    </PageLayout>
  );
}
