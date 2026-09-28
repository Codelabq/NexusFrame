"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { siliconCraftFilterOption } from "@/types/index";
import { toneTextClass } from "./tones";
import type { Tone } from "./types";

interface FilterDropdownProps {
  id: string;
  icon: LucideIcon;
  tone: Tone;
  options: siliconCraftFilterOption[];
  value: string;
  menuWidthClass?: string;
  openMenuId: string | null;
  onToggle: (id: string | null) => void;
  onChange: (value: string) => void;
}

export default function FilterDropdown({
  id,
  icon: Icon,
  tone,
  options,
  value,
  menuWidthClass = "w-64",
  openMenuId,
  onToggle,
  onChange,
}: FilterDropdownProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const isOpen = openMenuId === id;

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        onToggle(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onToggle(null);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onToggle]);

  const activeOption = options.find((option) => option.filterOptionValue === value) ?? options[0];
  const triggerLabel = activeOption.filterOptionShort ?? activeOption.filterOptionLabel;
  const isFiltered = value !== "all";

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => onToggle(isOpen ? null : id)}
        className={`flex cursor-pointer items-center gap-[0.25rem] rounded-[0.5rem] px-3 py-1.5 font-['Inter'] text-[14px] leading-[20px] tracking-[0.01em] font-medium transition-colors ${
          isOpen || isFiltered
            ? "bg-[#273647] text-[#d4e4fa]"
            : "bg-[#122131] text-[#d4e4fa] hover:bg-[#1c2b3c]"
        }`}
      >
        <Icon className={`h-4 w-4 ${toneTextClass(tone)}`} />
        <span>{triggerLabel}</span>
        <ChevronDown
          className={`h-4 w-4 text-[#bfc7d2] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen ? (
        <div
          role="menu"
          className={`absolute left-0 top-full z-50 mt-1.5 flex flex-col gap-0.5 rounded-[0.75rem] bg-[#273647] p-1 shadow-[0_18px_44px_rgba(0,0,0,0.5)] ${menuWidthClass}`}
        >
          {options.map((option) => {
            const selected = option.filterOptionValue === value;
            return (
              <button
                key={option.filterOptionValue}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => {
                  onChange(option.filterOptionValue);
                  onToggle(null);
                }}
                className={`w-full cursor-pointer rounded-[0.5rem] px-3 py-1.5 text-left font-['Inter'] text-[14px] leading-[20px] tracking-[0.01em] font-medium transition-colors ${
                  selected
                    ? "bg-[#2c3a4c] text-[#d4e4fa]"
                    : "text-[#bfc7d2] hover:bg-[#2c3a4c] hover:text-[#d4e4fa]"
                }`}
              >
                {option.filterOptionLabel}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
