"use client";

import { useMemo, useState } from "react";
import { workstations, telemetryBadges } from "../data";
import ConfiguratorHeader from "./ConfiguratorHeader";
import FilterBar from "./FilterBar";
import TelemetryInspector from "./TelemetryInspector";
import WorkstationCard from "./WorkstationCard";

export default function Template14Workspace() {
  const [brand, setBrand] = useState("all");
  const [formFactor, setFormFactor] = useState("all");
  const [useCase, setUseCase] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [compareIds, setCompareIds] = useState<string[]>([]);

  const filteredWorkstations = useMemo(() => {
    return workstations.filter((ws) => {
      const matchesBrand = brand === "all" || brand === "silicon-craft" || true;
      const matchesUseCase = useCase === "all" || ws.tags.includes(useCase.replace("-", "") || useCase);
      const matchesPriceRange =
        priceRange === "all" ||
        (priceRange === "under-2k" && ws.price < 2000) ||
        (priceRange === "2k-3k" && ws.price >= 2000 && ws.price <= 3000) ||
        (priceRange === "3k-5k" && ws.price > 3000 && ws.price <= 5000) ||
        (priceRange === "over-5k" && ws.price > 5000);
      return matchesBrand && matchesUseCase && matchesPriceRange;
    });
  }, [brand, useCase, priceRange]);

  const toggleCompare = (id: string) => {
    setCompareIds((current) => {
      if (current.includes(id)) return current.filter((entry) => entry !== id);
      return current.length >= 3 ? [current[0], ...current.slice(1), id] : [...current, id];
    });
  };

  return (
    <main className="min-h-screen bg-[#051424] text-[#d4e4fa]">
      <ConfiguratorHeader />
      <div className="w-full bg-[#0d1c2d] px-4 py-2 text-[#bfc7d2] font-['JetBrains_Mono'] text-[11px]">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1 bg-[#0284c7]/10 text-[#93ccff] px-2 py-1 border border-[#0284c7]/30"><span className="material-symbols-outlined text-xs">bolt</span> SPRING COMPUTE EVENT: UP TO $400 OFF TITAN WORKSTATIONS</span>
            <span className="bg-[#00a6e0] text-[#00374d] px-2 py-1 font-semibold">LIMITED ALLOCATION</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[#94a3b8]">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs text-[#00daf3]">check_circle</span> FREE NEXT-DAY PRIORITY FREIGHT</span>
            <span>•</span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs text-[#7bd0ff]">verified_user</span> ZERO THERMAL THROTTLING GUARANTEE</span>
          </div>
        </div>
      </div>

      <FilterBar
        activeBrand={brand}
        activeFormFactor={formFactor}
        activeUseCase={useCase}
        activePriceRange={priceRange}
        onBrandChange={setBrand}
        onFormFactorChange={setFormFactor}
        onUseCaseChange={setUseCase}
        onPriceRangeChange={setPriceRange}
      />

      <div className="w-full bg-[#051424] px-4 py-3 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 text-[#94a3b8] font-['JetBrains_Mono'] text-[11px]">
          {telemetryBadges.map((item) => (
            <span key={item.label} className="flex items-center gap-1.5 text-[#94a3b8]">
              <span className={`material-symbols-outlined text-xs ${item.color === "primary" ? "text-[#93ccff]" : item.color === "secondary" ? "text-[#7bd0ff]" : "text-[#00daf3]"}`}>{item.icon}</span>
              {item.label}
            </span>
          ))}
          <span className="text-right text-[#f8fafc]">ACTIVE BENCHMARK RUNNER: 3DMark Speedway & Cinebench R24 Validated</span>
        </div>
      </div>

      <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-4 py-6 lg:px-12 xl:grid-cols-[1fr_320px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredWorkstations.map((workstation) => (
            <WorkstationCard
              key={workstation.id}
              workstation={workstation}
              selected={compareIds.includes(workstation.id)}
              onSelect={toggleCompare}
              onCompare={toggleCompare}
            />
          ))}
        </div>
        <TelemetryInspector
          selectedIds={compareIds}
          workstations={workstations}
          onRemove={(id) => setCompareIds((current) => current.filter((entry) => entry !== id))}
        />
      </section>

      <footer className="border-t border-[#1f242d] bg-[#0d1c2d] px-4 py-8 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-3">
          <div>
            <h2 className="font-['Inter'] text-2xl font-semibold text-[#f8fafc]">Enterprise & Lab Fleet Deployment</h2>
            <p className="mt-3 max-w-md text-[#94a3b8] font-['Inter'] text-sm leading-6">
              Equip your engineering department with standardized hardware, zero-touch deployment automation, and certified fleet qualification.
            </p>
            <button type="button" className="mt-4 bg-[#0284c7] text-[#f8fafc] px-4 py-2 rounded-lg font-semibold hover:bg-[#0369a1]">Request Enterprise Quote</button>
          </div>
          <div>
            <h3 className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#94a3b8]">Hardware Warranty</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#bfc7d2]">
              <li>3-year Zero-Tolerance RMA</li>
              <li>Advanced component replacement</li>
              <li>On-site service coverage</li>
            </ul>
          </div>
          <div>
            <h3 className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#94a3b8]">Technical Specs</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#bfc7d2]">
              <li>PCIe 5.0 compliance</li>
              <li>Dual-FPGA acceleration</li>
              <li>Thermal throttling guardrails</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
