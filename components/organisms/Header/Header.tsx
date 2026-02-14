import Link from "next/link";
import { NavLink } from "@/components/atoms";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold">
          BarberPro
        </Link>
        <nav className="flex gap-6">
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/stylists">Stylists</NavLink>
          <NavLink href="/booking">Book</NavLink>
          <NavLink href="/reviews">Reviews</NavLink>
          <NavLink href="/login">Login</NavLink>
        </nav>
      </div>
    </header>
  );
}
