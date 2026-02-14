import Link from "next/link";
import { PageLayout, Heading, Button, Input } from "@/components";

export default function LoginPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-sm px-4 py-16">
        <Heading level={1}>Login</Heading>
        <p className="mt-2 text-gray-600">Sign in to your BarberPro account.</p>
        <form className="mt-8 flex flex-col gap-4">
          <Input type="email" label="Email" required />
          <Input type="password" label="Password" required />
          <Button type="submit" className="mt-2">
            Sign in
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-medium text-black hover:underline">
            Register
          </Link>
        </p>
        <p className="mt-2 text-center text-sm">
          <Link href="/admin/dashboard" className="text-gray-500 hover:underline">
            Go to admin dashboard →
          </Link>
        </p>
      </div>
    </PageLayout>
  );
}
