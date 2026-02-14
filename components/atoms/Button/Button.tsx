import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "white" | "outline";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base = "px-4 py-2 rounded-md font-medium transition";
  const variants = {
    primary: "bg-primary text-bp-black hover:bg-primary-300",
    white: "bg-bp-white text-bp-black hover:bg-primary-200",
    outline: "border border-primary text-primary hover:bg-primary hover:text-bp-black",
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
