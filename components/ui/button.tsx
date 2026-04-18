import Link from "next/link";
import { cn } from "@/utils/cn";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const baseClassName =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9d00ff] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";
  const variantClassName =
    variant === "primary"
      ? "bg-[#9d00ff] text-slate-950 hover:bg-[#9d00ff]/90"
      : "border border-slate-700 bg-slate-900/80 text-slate-100 hover:border-slate-500 hover:bg-slate-900";

  return (
    <Link href={href} className={cn(baseClassName, variantClassName)}>
      {children}
    </Link>
  );
}
