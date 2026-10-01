"use client";

import { useState } from "react";
import { ArrowUpDown, BadgeCheck, Cpu, Gauge, Laptop, Ruler, SlidersHorizontal, Wallet, type LucideIcon } from "lucide-react";
import type { FilterGroup, Option } from "../types";
import FilterDropdown from "./FilterDropdown";
import type { Tone } from "../types";

interface FilterBarProps {
  filters: Record<string, string>;
  onFilterChange: (groupId: string, value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
  condition: string;
  onConditionChange: (value: string) => void;
  matchCount: number;
  topFilterGroups: FilterGroup[];
  gpuFilterGroup: FilterGroup;
  conditionLabel: string;
  conditionOptions: Option[];
  sortLabel: string;
  sortOptions: Option[];
  matchLabel: string;
}

const filterIcons: Record<string, LucideIcon> = {
  brand: BadgeCheck,
  formFactor: Laptop,
  cpu: Cpu,
  price: Wallet,
  ram: Ruler,
  gpu: Gauge,
};

export default function FilterBar({
  filters,
  onFilterChange,
  sort,
  onSortChange,
  condition,
  onConditionChange,
  matchCount,
  topFilterGroups,
  gpuFilterGroup,
  conditionLabel,
  conditionOptions,
  sortLabel,
  sortOptions,
  matchLabel,
}: FilterBarProps) {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  return (
    <section className="sticky top-20 z-40 w-full bg-[#0d1c2d] px-[1rem] py-[1rem] shadow-md backdrop-blur-md md:px-[1.5rem]">
      <div className="flex flex-col gap-[0.75rem]">
        {/* Facet ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-[1rem]">
          <div className="flex flex-wrap items-center gap-[0.5rem]">
            {topFilterGroups.map((group) => (
              <FilterDropdown
                key={group.filterGroupId}
                id={group.filterGroupId}
                icon={filterIcons[group.filterGroupId] ?? Cpu}
                tone={group.filterGroupTone as Tone}
                options={group.filterGroupOptions}
                value={filters[group.filterGroupId] ?? "all"}
                menuWidthClass={group.filterGroupMenuWidthClass}
                openMenuId={openMenuId}
                onToggle={setOpenMenuId}
                onChange={(value) => onFilterChange(group.filterGroupId, value)}
              />
            ))}
          </div>

          <div className="ml-auto flex items-center gap-[1rem]">
            <div className="hidden items-center gap-2 font-['JetBrains_Mono'] text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#bfc7d2] sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7bd0ff]" />
              <span>{matchCount} {matchLabel}</span>
            </div>

            <div className="flex items-center gap-1.5 rounded-[0.5rem] bg-[#122131] px-3 py-1.5">
              <ArrowUpDown className="h-4 w-4 text-[#7bd0ff]" />
              <span className="font-['JetBrains_Mono'] text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#bfc7d2]">
                {sortLabel}
              </span>
              <select
                value={sort}
                onChange={(event) => onSortChange(event.target.value)}
                aria-label="Sort configurations"
                className="cursor-pointer bg-transparent font-['JetBrains_Mono'] text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#d4e4fa] focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option
                    key={option.optionValue}
                    value={option.optionValue}
                    className="bg-[#273647] text-[#d4e4fa]"
                  >
                    {option.optionLabel}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* GPU facet + condition segmented control */}
        <div className="flex flex-wrap items-center justify-between gap-[0.75rem] pt-1">
          <FilterDropdown
            id={gpuFilterGroup.filterGroupId}
            icon={filterIcons[gpuFilterGroup.filterGroupId] ?? Gauge}
            tone={gpuFilterGroup.filterGroupTone as Tone}
            options={gpuFilterGroup.filterGroupOptions}
            value={filters[gpuFilterGroup.filterGroupId] ?? "all"}
            menuWidthClass={gpuFilterGroup.filterGroupMenuWidthClass}
            openMenuId={openMenuId}
            onToggle={setOpenMenuId}
            onChange={(value) => onFilterChange(gpuFilterGroup.filterGroupId, value)}
          />

          <div className="inline-flex items-center rounded-[0.5rem] bg-[#010f1f] p-1">
            <span className="hidden select-none items-center gap-1 px-2 font-['JetBrains_Mono'] text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#bfc7d2] md:inline-flex">
              <SlidersHorizontal className="h-3 w-3 text-[#93ccff]" />
              {conditionLabel}
            </span>
            {conditionOptions.map((option) => {
              const active = option.optionValue === condition;
              return (
                <button
                  key={option.optionValue}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onConditionChange(option.optionValue)}
                  className={`cursor-pointer rounded-[0.25rem] px-2.5 py-1 font-['JetBrains_Mono'] text-[12px] leading-[16px] tracking-[0.04em] transition-colors ${
                    active
                      ? "bg-[#7bd0ff] font-semibold text-[#00354a] shadow-sm"
                      : "text-[#bfc7d2] hover:text-[#d4e4fa]"
                  }`}
                >
                  {option.optionLabel}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
