"use client";

import type { ButtonHTMLAttributes } from "react";

export type BrutalistButtonVariant = "primary" | "secondary";

interface BrutalistButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BrutalistButtonVariant;
}

export default function BrutalistButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: BrutalistButtonProps) {
  const variantClasses = variant === "primary"
    ? "bg-[#caf300] text-[#596c00] border-[2px] border-[#caf300] shadow-[4px_4px_0px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
    : "bg-[#131313] text-[#ffffff] border-[2px] border-[#ffffff] shadow-[4px_4px_0px_0px_#353535] hover:bg-[#ffffff] hover:text-[#131313]";

  return (
    <button
      {...props}
      className={`relative overflow-hidden rounded-none px-[16px] py-[8px] font-['JetBrains_Mono'] text-[11px] font-[700] uppercase transition-all duration-75 ease-out ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
}
