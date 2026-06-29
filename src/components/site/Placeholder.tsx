import { type ReactNode } from "react";
import { ImageIcon } from "lucide-react";

export function Placeholder({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`relative grid place-items-center rounded-2xl border-2 border-dashed border-border bg-muted/50 text-muted-foreground ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-2 p-6 text-center">
        <ImageIcon className="h-8 w-8 opacity-60" />
        <p className="text-xs font-medium uppercase tracking-wider">Image placeholder</p>
        <p className="text-sm">{label}</p>
        {children}
      </div>
    </div>
  );
}
