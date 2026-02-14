type HeadingLevel = 1 | 2 | 3 | 4;

export interface HeadingProps {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}

export function Heading({
  level = 1,
  children,
  className = "",
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const base = "font-serif";
  const styles: Record<HeadingLevel, string> = {
    1: "text-4xl font-bold tracking-tight",
    2: "text-3xl font-bold",
    3: "text-2xl font-semibold",
    4: "text-xl font-semibold",
  };
  return <Tag className={`${base} ${styles[level]} ${className}`}>{children}</Tag>;
}
