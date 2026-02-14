import Link from "next/link";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  padded?: boolean;
}

export function NavLink({
  href,
  children,
  className = "",
  active = false,
  padded = false,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`transition ${active ? "text-primary-400" : ""} ${padded ? "rounded hover:bg-primary-100 px-3 py-2" : "hover:text-primary-400"} ${className}`}
    >
      {children}
    </Link>
  );
}
