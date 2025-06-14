export function Card({ children }) {
  return <div className="rounded-lg border p-4 shadow">{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
