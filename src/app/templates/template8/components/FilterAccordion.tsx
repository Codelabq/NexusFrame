import { ChevronDown, ChevronUp } from "lucide-react";

interface FilterOption {
  filterOptionId: string;
  filterOptionLabel: string;
  filterOptionCount: number;
}

interface FilterAccordionProps {
  label: string;
  type: string;
  options: FilterOption[];
  open: boolean;
  selected: string[];
  onToggle: () => void;
  onChange: (id: string) => void;
}

export default function FilterAccordion({ label, type, options, open, selected, onToggle, onChange }: FilterAccordionProps) {
  return <section className="rounded-lg border border-[#c4c5d7]/50 bg-[#eff4ff]/70 p-2 transition-colors hover:bg-[#eff4ff]"><button type="button" onClick={onToggle} aria-expanded={open} className="flex w-full items-center justify-between py-1 text-left"><span className="text-[14px] font-semibold text-[#0b1c30]">{label}</span>{open ? <ChevronUp className="h-4 w-4 text-[#747686]" /> : <ChevronDown className="h-4 w-4 text-[#747686]" />}</button>{open && <div className="mt-2 space-y-1 border-t border-[#c4c5d7]/40 pt-2">{options.map((option) => { const active = selected.includes(option.filterOptionId); return <label key={option.filterOptionId} className="flex cursor-pointer items-center justify-between rounded px-1 py-1.5 transition-colors hover:bg-[#e5eeff]"><span className="flex min-w-0 items-center gap-2"><input type={type === "radio" ? "radio" : "checkbox"} name={type === "radio" ? "date-posted" : label} checked={active} onChange={() => onChange(option.filterOptionId)} className="h-4 w-4 accent-[#1d4ed8]" /><span className={`truncate text-[12px] text-[#0b1c30] ${active ? "font-semibold" : ""}`}>{option.filterOptionLabel}</span></span><span className={`rounded px-1.5 py-0.5 font-['JetBrains_Mono'] text-[10px] ${active ? "bg-[#1d4ed8] text-white" : "bg-[#e5eeff] text-[#434655]"}`}>{option.filterOptionCount.toLocaleString()}</span></label>; })}</div>}</section>;
}
