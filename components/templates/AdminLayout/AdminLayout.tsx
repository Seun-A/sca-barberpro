import Link from "next/link";
import { NavLink } from "@/components/atoms";

export interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-56 border-r border-gray-200 bg-gray-50 p-4">
        <Link href="/" className="mb-6 block font-bold">
          BarberPro Admin
        </Link>
        <nav className="flex flex-col gap-2 text-sm">
          <NavLink padded href="/admin/dashboard">Dashboard</NavLink>
          <NavLink padded href="/admin/appointments">Appointments</NavLink>
          <NavLink padded href="/admin/services">Services</NavLink>
          <NavLink padded href="/admin/stylists">Stylists</NavLink>
          <NavLink padded href="/admin/reviews">Reviews</NavLink>
          <NavLink padded href="/admin/settings">Settings</NavLink>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
