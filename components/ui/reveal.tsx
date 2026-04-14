"use client";

import type { ElementType } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/utils/cn";

interface RevealProps {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
}

export function Reveal({ children, as: Component = "div", className }: RevealProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Component
      ref={ref}
      className={cn(
        "transition-all duration-300 motion-reduce:transition-none",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className
      )}
    >
      {children}
    </Component>
  );
}
