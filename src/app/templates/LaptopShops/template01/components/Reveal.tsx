"use client";

import { useEffect, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in milliseconds. */
  delay?: number;
  className?: string;
}

/**
 * Entrance animation built purely from Tailwind transition utilities
 * (the source design ships no global CSS keyframes).
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
        shown ? "translate-y-0 opacity-100" : "translate-y-[18px] opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
