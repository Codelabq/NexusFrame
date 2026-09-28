import { Bell, Filter, ShieldCheck } from "lucide-react";
import FilterAccordion from "./FilterAccordion";

interface FilterGroup {
  filterGroupId: string;
  filterGroupLabel: string;
  filterGroupType: string;
  filterGroupOptions: { filterOptionId: string; filterOptionLabel: string; filterOptionCount: number }[];
}

type FilterSidebarProps = {
  filterGroups: FilterGroup[];
  openGroups: Record<string, boolean>;
  selections: Record<string, string[]>;
  alertsEnabled: boolean;
  filterTitle: string;
  clearAllLabel: string;
  alertsTitle: string;
  alertsEnabledLabel: string;
  alertsDisabledLabel: string;
  complianceLabel: string;
  securityRefLabel: string;
  onToggleGroup: (id: string) => void;
  onChange: (group: string, value: string, type: "checkbox" | "radio") => void;
  onClear: () => void;
  onAlertsToggle: () => void;
};

export default function FilterSidebar({ filterGroups, openGroups, selections, alertsEnabled, filterTitle, clearAllLabel, alertsTitle, alertsEnabledLabel, alertsDisabledLabel, complianceLabel, securityRefLabel, onToggleGroup, onChange, onClear, onAlertsToggle }: FilterSidebarProps) {
  return <aside className="flex flex-col gap-3 lg:sticky lg:top-24"><div className="rounded-lg border border-[#c4c5d7]/60 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.05)]"><div className="mb-3 flex items-center justify-between border-b border-[#c4c5d7]/50 pb-3"><h2 className="flex items-center gap-2 text-[16px] font-semibold text-[#0b1c30]"><Filter className="h-4 w-4 text-[#1d4ed8]" />{filterTitle}</h2><button type="button" onClick={onClear} className="text-[11px] font-semibold text-[#1d4ed8] hover:underline">{clearAllLabel}</button></div><div className="space-y-2">{filterGroups.map((group) => <FilterAccordion key={group.filterGroupId} label={group.filterGroupLabel} type={group.filterGroupType} options={group.filterGroupOptions} open={openGroups[group.filterGroupId]} selected={selections[group.filterGroupId] ?? []} onToggle={() => onToggleGroup(group.filterGroupId)} onChange={(value) => onChange(group.filterGroupId, value, group.filterGroupType as "checkbox" | "radio")} />)}</div><button type="button" onClick={onAlertsToggle} className={`mt-3 flex w-full items-center gap-2 rounded-lg p-3 text-left transition-colors ${alertsEnabled ? "bg-[#dce9ff]" : "bg-[#e5eeff] hover:bg-[#dce9ff]"}`}><Bell className={`h-5 w-5 text-[#1d4ed8] ${alertsEnabled ? "animate-pulse" : ""}`} /><span><span className="block text-[13px] font-semibold text-[#0b1c30]">{alertsTitle}</span><span className="block text-[11px] text-[#434655]">{alertsEnabled ? alertsEnabledLabel : alertsDisabledLabel}</span></span></button></div><div className="flex items-center justify-between rounded-lg border border-[#c4c5d7]/60 bg-white p-3"><span className="flex items-center gap-2 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.04em] text-[#434655]"><ShieldCheck className="h-4 w-4 text-[#1d4ed8]" />{complianceLabel}</span><span className="font-['JetBrains_Mono'] text-[10px] text-[#747686]">{securityRefLabel}</span></div></aside>;
}
