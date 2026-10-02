type FilterBarProps = {
  department: string;
  location: string;
  count: number;
  departmentCounts: Record<string, number>;
  departmentFilters: { departmentFilterLabel: string; departmentFilterValue: string }[];
  locationFilters: { locationFilterLabel: string; locationFilterValue: string }[];
  countLabel: string;
  onDepartmentChange: (value: string) => void;
  onLocationChange: (value: string) => void;
};

export default function FilterBar({ department, location, count, departmentCounts, departmentFilters, locationFilters, countLabel, onDepartmentChange, onLocationChange }: FilterBarProps) { return <section className="sticky top-0 z-30 border-y border-[#eeeeee] bg-white/80 backdrop-blur-md"><div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-6"><div className="flex w-full items-center gap-1.5 overflow-x-auto pb-1 md:w-auto md:pb-0">{departmentFilters.map((filter) => <FilterChip key={filter.departmentFilterValue} active={department === filter.departmentFilterValue} label={`${filter.departmentFilterLabel} (${departmentCounts[filter.departmentFilterValue] ?? 0})`} onClick={() => onDepartmentChange(filter.departmentFilterValue)} />)}<span className="mx-1 hidden h-4 w-px bg-[#e2e2e2] sm:block" />{locationFilters.map((filter) => <FilterChip key={filter.locationFilterValue} active={location === filter.locationFilterValue} label={filter.locationFilterLabel} onClick={() => onLocationChange(location === filter.locationFilterValue ? "all" : filter.locationFilterValue)} />)}</div><span className="shrink-0 font-['JetBrains_Mono'] text-[11px] text-[#47464a]">Displaying <strong className="text-black">{count}</strong> {countLabel}</span></div></section>; }
function FilterChip({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) { return <button type="button" onClick={onClick} className={`shrink-0 rounded-full px-3 py-1.5 font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-[0.04em] transition-colors ${active ? "bg-black text-white" : "bg-[#f3f3f3] text-[#47464a] hover:bg-[#e8e8e8]"}`}>{label}</button>; }
