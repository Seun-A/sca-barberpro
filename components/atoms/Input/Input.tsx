import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

export function Input({
  id,
  label,
  className = "",
  required = false,
  ...props
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s/g, "-");
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label} {required && <span>*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={`border border-gray-300 rounded px-3 py-2 focus:border-primary-300 outline-none ${className}`}
        {...props}
      />
    </div>
  );
}
