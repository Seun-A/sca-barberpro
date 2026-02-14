export interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-primary-200 px-4 py-6 ${className}`}
    >
      {title && (
        <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      )}
      {children}
    </div>
  );
}
