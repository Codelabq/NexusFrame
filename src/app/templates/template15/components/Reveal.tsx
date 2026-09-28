"use client";

import { useEffect, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in milliseconds, mirrors the original `.delay-*` utilities. */
  delay?: number;
  className?: string;
}

/**
 * Reproduces the original `fadeInUp` entrance animation using only Tailwind
 * transition utilities (no global CSS keyframes).
 */
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
