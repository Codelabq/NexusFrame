"use client";

import { ChevronDown, ChevronsUpDown, SlidersHorizontal } from "lucide-react";
import type {
  apexBodyStyleOption,
  apexMileageRange,
  apexOption,
  apexSortOption,
} from "@/types/index";
import Reveal from "./Reveal";

interface FilterBarProps {
  make: string;
  onMakeChange: (value: string) => void;
  model: string;
  onModelChange: (value: string) => void;
  budget: string;
  onBudgetChange: (value: string) => void;
  mileage: number;
  onMileageChange: (value: number) => void;
  bodyStyle: string;
  onBodyStyleChange: (value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
  onApply: () => void;
  onClear: () => void;
  applyCount: number;
  hasPendingChanges: boolean;
  makeOptions: apexOption[];
  modelOptions: apexOption[];
  priceOptions?: apexOption[];
  bodyStyleOptions: apexBodyStyleOption[];
  sortOptions: apexSortOption[];
  mileageRange: apexMileageRange;
  labelMake: string;
  labelModel: string;
  labelBudget: string;
  labelMileage: string;
  labelClear: string;
  labelApply: string;
  labelSort: string;
  applyCountSuffix: string;
}

const selectClass =
  "w-full cursor-pointer appearance-none rounded-[0.5rem] border border-[#bfc7d2]/30 bg-[#eff4ff] py-2.5 pl-3 pr-8 font-['Manrope'] text-[14px] leading-[20px] font-semibold tracking-[-0.01em] text-[#0b1c30] transition-colors hover:border-[#707881] focus:outline-none focus:ring-2 focus:ring-[#006194]/20";

const labelClass =
  "font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] font-bold uppercase tracking-[0.06em] text-[#565e74]";

export default function FilterBar({
  make,
  onMakeChange,
  model,
  onModelChange,
  budget,
  onBudgetChange,
  mileage,
  onMileageChange,
  bodyStyle,
  onBodyStyleChange,
  sort,
  onSortChange,
  onApply,
  onClear,
  applyCount,
  hasPendingChanges,
  makeOptions,
  modelOptions,
  priceOptions,
  bodyStyleOptions,
  sortOptions,
  mileageRange,
  labelMake,
  labelModel,
  labelBudget,
  labelMileage,
  labelClear,
  labelApply,
  labelSort,
  applyCountSuffix,
}: FilterBarProps) {
  return (
    <section className="w-full border-b border-[#bfc7d2]/15 bg-[#eff4ff] px-[1rem] py-[1rem] md:px-[2rem]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[1rem]">
        {/* Primary controls ribbon */}
        <Reveal
          delay={220}
          className="flex flex-col items-stretch justify-between gap-[1rem] rounded-[0.5rem] border border-[#bfc7d2]/30 bg-[#ffffff] p-[1rem] shadow-sm lg:flex-row lg:items-center"
        >
          <div className="grid flex-1 grid-cols-2 gap-[0.5rem] md:grid-cols-4">
            {/* Make */}
            <div className="flex flex-col gap-1">
              <label htmlFor="filter-make" className={labelClass}>
                {labelMake}
              </label>
              <div className="relative">
                <select
                  id="filter-make"
                  value={make}
                  onChange={(event) => onMakeChange(event.target.value)}
                  className={selectClass}
                >
                  {makeOptions.map((option) => (
                    <option key={option.optionValue} value={option.optionValue}>
                      {option.optionLabel}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#3f4850]" />
              </div>
            </div>

            {/* Model */}
            <div className="flex flex-col gap-1">
              <label htmlFor="filter-model" className={labelClass}>
                {labelModel}
              </label>
              <div className="relative">
                <select
                  id="filter-model"
                  value={model}
                  onChange={(event) => onModelChange(event.target.value)}
                  className={selectClass}
                >
                  {modelOptions.map((option) => (
                    <option key={option.optionValue} value={option.optionValue}>
                      {option.optionLabel}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#3f4850]" />
              </div>
            </div>

            {/* Budget */}
            {priceOptions && priceOptions.length > 0 && (
              <div className="flex flex-col gap-1">
                <label htmlFor="filter-price" className={labelClass}>
                  {labelBudget}
                </label>
                <div className="relative">
                  <select
                    id="filter-price"
                    value={budget}
                    onChange={(event) => onBudgetChange(event.target.value)}
                    className={selectClass}
                  >
                    {priceOptions.map((option) => (
                      <option key={option.optionValue} value={option.optionValue}>
                        {option.optionLabel}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#3f4850]" />
                </div>
              </div>
            )}

            {/* Mileage */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <label htmlFor="mileage-range" className={labelClass}>
                  {labelMileage}
                </label>
                <span className="font-['Manrope'] text-[14px] leading-[20px] font-bold text-[#006194]">
                  {mileage.toLocaleString("en-US")} mi
                </span>
              </div>
              <div className="flex h-[42px] items-center px-1">
                <input
                  id="mileage-range"
                  type="range"
                  min={mileageRange.min}
                  max={mileageRange.max}
                  step={mileageRange.step}
                  value={mileage}
                  onChange={(event) => onMileageChange(Number(event.target.value))}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-[0.5rem] bg-[#dce9ff] accent-[#006194] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Apply / reset */}
          <div className="flex items-center gap-[0.5rem] pt-2 lg:pt-0">
            <button
              type="button"
              onClick={onClear}
              className="cursor-pointer whitespace-nowrap rounded-[0.5rem] bg-[#e5eeff] px-[1rem] py-2.5 font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold text-[#0b1c30] transition-all duration-200 hover:bg-[#dce9ff] active:scale-95"
            >
              {labelClear}
            </button>
            <button
              type="button"
              onClick={onApply}
              className="flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-[0.5rem] bg-[#006194] px-[1.5rem] py-2.5 font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#007bb9] hover:shadow-[0_4px_14px_rgba(0,97,148,0.2)] active:scale-95"
            >
              <SlidersHorizontal className="h-[18px] w-[18px]" />
              <span>
                {labelApply} ({applyCount} {applyCountSuffix})
              </span>
              {hasPendingChanges ? (
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#38BDF8]" />
              ) : null}
            </button>
          </div>
        </Reveal>

        {/* Body style pills + sort */}
        <div className="flex flex-wrap items-center justify-between gap-[0.5rem]">
          <div className="flex flex-wrap items-center gap-1.5">
            {bodyStyleOptions.map((option) => {
              const active = option.bodyStyleOptionId === bodyStyle;
              return (
                <button
                  key={option.bodyStyleOptionId}
                  type="button"
                  onClick={() => onBodyStyleChange(option.bodyStyleOptionId)}
                  className={`cursor-pointer rounded-full px-3.5 py-1.5 font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] font-bold uppercase tracking-[0.06em] transition-all duration-200 active:scale-95 ${
                    active
                      ? "bg-[#0b1c30] text-[#f8f9ff] shadow-sm hover:opacity-90"
                      : "border border-[#bfc7d2]/30 bg-[#ffffff] text-[#565e74] hover:bg-[#e5eeff] hover:text-[#0b1c30]"
                  }`}
                >
                  {option.bodyStyleOptionLabel}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <span className={labelClass}>{labelSort}</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(event) => onSortChange(event.target.value)}
                aria-label="Sort inventory"
                className="cursor-pointer appearance-none rounded-[0.5rem] border border-[#bfc7d2]/30 bg-[#ffffff] py-1.5 pl-3 pr-8 font-['Manrope'] text-[14px] leading-[20px] font-semibold text-[#0b1c30] shadow-sm transition-colors hover:border-[#707881] focus:outline-none focus:ring-2 focus:ring-[#006194]/20"
              >
                {sortOptions.map((option) => (
                  <option key={option.sortOptionValue} value={option.sortOptionValue}>
                    {option.sortOptionLabel}
                  </option>
                ))}
              </select>
              <ChevronsUpDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#3f4850]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
