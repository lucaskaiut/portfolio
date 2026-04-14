import { cn } from "@/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <article
    onClick={onClick}
      className={cn(
        "rounded-2xl bg-slate-900/70 p-6 shadow-lg shadow-black/25 backdrop-blur transition-shadow duration-200 hover:shadow-xl hover:shadow-black/35",
        className
      )}
    >
      {children}
    </article>
  );
}
