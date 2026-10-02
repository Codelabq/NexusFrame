import { Check, CompareArrows, Memory, Speed, Straighten, Storage } from "lucide-react";
import type { Workstation } from "../data";

const specIcons = { cpu: Memory, gpu: Speed, ram: Straighten, storage: Storage };

export default function WorkstationCard({
  workstation,
  selected,
  onSelect,
  onCompare,
}: {
  workstation: Workstation;
  selected: boolean;
  onSelect: (id: string) => void;
  onCompare: (id: string) => void;
}) {
  const badgeColors = {
    emerald: "bg-emerald-400",
    amber: "bg-amber-400",
    cyan: "bg-cyan-400",
  };

  return (
    <article
      className={`group flex flex-col bg-[#151820] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative ${
        selected ? "border border-[#0284c7] shadow-[0_0_10px_rgba(2,132,199,0.2)]" : "border border-[#1f242d]"
      }`}
    >
      <div className="relative w-full h-64 bg-[#010f1f] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0284c7]/10 via-transparent to-transparent opacity-70 group-hover:scale-110 transition-transform duration-500" />
        <img
          src={workstation.imageUrl}
          alt={workstation.imageAlt}
          className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
        />
        <div className="absolute top-3 left-3 bg-[#010f1f]/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
          <span className={`w-2 h-2 rounded-full ${badgeColors[workstation.badgeColor]}`} />
          <span className="font-['JetBrains_Mono'] text-[11px] font-semibold tracking-wide text-emerald-400">
            {workstation.stockLabel}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-[#1c2b3c]/80 px-2 py-0.5 rounded font-['JetBrains_Mono'] text-[11px] text-[#7bd0ff]">
          {workstation.tdp ?? workstation.weight ?? "SPEC"}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#7bd0ff] tracking-widest uppercase">
              {workstation.series}
            </span>
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#94a3b8] bg-[#1c2b3c] px-2 py-0.5 rounded">
              {workstation.revision}
            </span>
          </div>
          <h3 className="font-['Inter'] text-xl font-semibold leading-tight text-[#f8fafc]">
            {workstation.name}
          </h3>
          <p className="font-['Inter'] text-[13px] text-[#94a3b8]">
            {workstation.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 font-['JetBrains_Mono'] text-[12px]">
          {[
            { key: "cpu", label: "CPU", icon: Memory, color: "#0284c7" },
            { key: "gpu", label: "GPU", icon: Speed, color: "#7bd0ff" },
            { key: "ram", label: "RAM", icon: Straighten, color: "#00e5ff" },
            { key: "storage", label: "Storage", icon: Storage, color: "#f8fafc" },
          ].map((spec) => {
            const data = workstation[spec.key as keyof typeof workstation] as { label: string; detail: string };
            const Icon = specIcons[spec.key as keyof typeof specIcons];
            return (
              <div key={spec.key} className="bg-[#0d1c2d] p-2 rounded-lg flex flex-col">
                <span className="text-[#94a3b8] text-[10px] uppercase tracking-wider flex items-center gap-1">
                  <Icon className="h-3 w-3" style={{ color: spec.color }} />
                  {spec.label}
                </span>
                <span className="text-[#f8fafc] font-semibold text-[11px] truncate mt-0.5">{data.label}</span>
                <span className="text-[#94a3b8] text-[10px]">{data.detail}</span>
              </div>
            );
          })}
        </div>

        <div className="pt-2 flex flex-col gap-2 bg-[#0d1c2d]/50 p-3 rounded-lg">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="font-['JetBrains_Mono'] text-xl font-semibold text-[#f8fafc]">${workstation.price.toLocaleString()}.00</span>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#94a3b8] ml-1.5">or ${workstation.monthlyPrice}/mo (0% APR)</span>
            </div>
            <label className="flex items-center gap-1.5 cursor-pointer text-[#94a3b8] hover:text-[#f8fafc] text-[11px] font-['JetBrains_Mono'] select-none">
              <input
                type="checkbox"
                checked={selected}
                onChange={() => onCompare(workstation.id)}
                className="w-3.5 h-3.5 rounded bg-[#1c2b3c] border-0 accent-[#0284c7] cursor-pointer"
              />
              <span>+ Compare</span>
            </label>
          </div>
          <button
            type="button"
            onClick={() => onSelect(workstation.id)}
            className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-[#f8fafc] font-['Inter'] text-[12px] font-semibold py-2 px-4 rounded-lg text-center flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <span>Configure & View Specs</span>
            <CompareArrows className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}