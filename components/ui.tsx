import { ArrowUpRight } from "lucide-react";

export function SectionTitle({
  eyebrow,
  title,
  copy,
  center = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display">{title}</h2>
      {copy && <p className="muted mt-6 max-w-2xl">{copy}</p>}
    </div>
  );
}

export function ArrowButton({
  children,
  href = "#kontakt",
  secondary = false,
}: {
  children: React.ReactNode;
  href?: string;
  secondary?: boolean;
}) {
  return (
    <a href={href} className={secondary ? "button-secondary" : "button-primary"}>
      {children}
      <ArrowUpRight size={16} />
    </a>
  );
}
