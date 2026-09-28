"use client";

import { useState } from "react";
import { brands, formFactors, useCases, priceRanges } from "../data";

type FilterBarProps = {
  activeBrand: string;
  activeFormFactor: string;
  activeUseCase: string;
  activePriceRange: string;
  onBrandChange: (brand: string) => void;
  onFormFactorChange: (formFactor: string) => void;
  onUseCaseChange: (useCase: string) => void;
  onPriceRangeChange: (priceRange: string) => void;
};

export default function FilterBar({
  activeBrand,
  activeFormFactor,
  activeUseCase,
  activePriceRange,
  onBrandChange,
  onFormFactorChange,
  onUseCaseChange,
  onPriceRangeChange,
}: FilterBarProps) {
  const [brandOpen, setBrandOpen] = useState(false);
  const [formFactorOpen, setFormFactorOpen] = useState(false);
  const [useCaseOpen, setUseCaseOpen] = useState(false);
  const [priceRangeOpen, setPriceRangeOpen] = useState(false);

  return (
    <section className="sticky top-0 z-40 bg-[#0d1c2d] px-4 py-3 lg:px-12 shadow-md backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <Dropdown
            label={activeBrand === "all" ? "All Brands" : brands.find(b => b.id === activeBrand)?.label ?? "All Brands"}
            options={brands}
            value={activeBrand}
            onChange={onBrandChange}
            open={brandOpen}
            setOpen={setBrandOpen}
            icon="verified"
          />
          <Dropdown
            label={activeFormFactor === "all" ? "All Form Factors" : formFactors.find(f => f.id === activeFormFactor)?.label ?? "All Form Factors"}
            options={formFactors}
            value={activeFormFactor}
            onChange={onFormFactorChange}
            open={formFactorOpen}
            setOpen={setFormFactorOpen}
            icon="computer"
          />
          <Dropdown
            label={activeUseCase === "all" ? "All Use Cases" : useCases.find(u => u.id === activeUseCase)?.label ?? "All Use Cases"}
            options={useCases}
            value={activeUseCase}
            onChange={onUseCaseChange}
            open={useCaseOpen}
            setOpen={setUseCaseOpen}
            icon="psychology"
          />
          <Dropdown
            label={activePriceRange === "all" ? "All Prices" : priceRanges.find(p => p.id === activePriceRange)?.label ?? "All Prices"}
            options={priceRanges}
            value={activePriceRange}
            onChange={onPriceRangeChange}
            open={priceRangeOpen}
            setOpen={setPriceRangeOpen}
            icon="attach_money"
          />
        </div>
        <div className="flex items-center gap-2 text-[#94a3b8] font-['JetBrains_Mono'] text-[11px]">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> LIVE INVENTORY</span>
          <span className="hidden md:inline">|</span>
          <span>CODE: <strong className="text-[#38bdf8]">TITAN2025</strong></span>
        </div>
      </div>
    </section>
  );
}

function Dropdown({
  label,
  options,
  value,
  onChange,
  open,
  setOpen,
  icon,
}: {
  label: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  icon: string;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-[#151820] px-3 py-1.5 rounded-lg text-[#f8fafc] hover:bg-[#1e232f] hover:border-[#38bdf8] border border-[#2d3442] transition-colors font-['Inter'] text-[12px] font-medium"
      >
        <span className="text-[#0284c7] material-symbols-outlined text-base">{icon}</span>
        <span>{label}</span>
        <span className="material-symbols-outlined text-sm text-[#94a3b8]">{open ? "expand_less" : "expand_more"}</span>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1.5 w-64 bg-[#1c2b3c] rounded-xl shadow-xl p-1 z-50 flex flex-col gap-0.5">
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => { onChange(option.id); setOpen(false); }}
              className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors font-['Inter'] text-[12px] ${
                value === option.id
                  ? "bg-[#1e232f] text-[#f8fafc]"
                  : "text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#273647]"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}