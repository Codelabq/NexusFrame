import { MapPin, Search, SlidersHorizontal, X } from "lucide-react";

interface SortOption {
  sortOptionValue: string;
  sortOptionLabel: string;
}

type SearchPanelProps = {
  query: string;
  location: string;
  sort: string;
  activeFilterCount: number;
  openRequisitionsCount: number;
  searchPlaceholder: string;
  locationPlaceholder: string;
  searchCtaLabel: string;
  openRequisitionsLabel: string;
  verifiedRolesLabel: string;
  activeFilterLabel: string;
  sortLabel: string;
  sortOptionList: SortOption[];
  resetLabel: string;
  onQueryChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onReset: () => void;
};

export default function SearchPanel({ query, location, sort, activeFilterCount, openRequisitionsCount, searchPlaceholder, locationPlaceholder, searchCtaLabel, openRequisitionsLabel, verifiedRolesLabel, activeFilterLabel, sortLabel, sortOptionList, resetLabel, onQueryChange, onLocationChange, onSortChange, onReset }: SearchPanelProps) {
  return <section className="border-b border-[#c4c5d7]/60 bg-[#eff4ff] py-5"><div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8"><div className="rounded-lg border border-[#c4c5d7]/50 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.05)]"><div className="grid grid-cols-1 gap-2 md:grid-cols-12"><label className="flex items-center gap-2 rounded border border-transparent bg-[#eff4ff] px-3 py-2 transition-colors focus-within:border-[#1d4ed8]/50 focus-within:bg-white md:col-span-5"><Search className="h-4 w-4 text-[#747686]" /><input value={query} onChange={(event) => onQueryChange(event.target.value)} className="min-w-0 w-full bg-transparent text-[13px] text-[#0b1c30] outline-none placeholder:text-[#747686]" placeholder={searchPlaceholder} aria-label="Search requisitions" /></label><label className="flex items-center gap-2 rounded border border-transparent bg-[#eff4ff] px-3 py-2 transition-colors focus-within:border-[#1d4ed8]/50 focus-within:bg-white md:col-span-4"><MapPin className="h-4 w-4 text-[#747686]" /><input value={location} onChange={(event) => onLocationChange(event.target.value)} className="min-w-0 w-full bg-transparent text-[13px] text-[#0b1c30] outline-none placeholder:text-[#747686]" placeholder={locationPlaceholder} aria-label="Search by location" /></label><button type="button" className="flex items-center justify-center gap-2 rounded bg-[#1d4ed8] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#0037b0] md:col-span-3"><SlidersHorizontal className="h-4 w-4" />{searchCtaLabel}</button></div><div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div className="flex flex-wrap items-center gap-2 text-[12px] text-[#434655]"><strong className="text-[#0b1c30]">{openRequisitionsCount.toLocaleString()} {openRequisitionsLabel}</strong><span>•</span><span>{verifiedRolesLabel}</span>{activeFilterCount > 0 && <span className="inline-flex items-center gap-1 rounded-full border border-[#bfdbfe] bg-[#eff6ff] px-2 py-1 text-[11px] font-semibold text-[#1d4ed8]"><span>{activeFilterCount} {activeFilterLabel}{activeFilterCount === 1 ? "" : "s"}</span><button type="button" onClick={onReset} aria-label="Clear active filters"><X className="h-3 w-3" /></button></span>}</div><div className="flex items-center gap-2"><label className="flex items-center gap-2 rounded border border-[#c4c5d7] bg-[#eff4ff] px-2 py-1"><span className="font-['JetBrains_Mono'] text-[9px] uppercase text-[#434655]">{sortLabel}</span><select value={sort} onChange={(event) => onSortChange(event.target.value)} className="bg-transparent text-[12px] text-[#0b1c30] outline-none">{sortOptionList.map((option) => <option key={option.sortOptionValue} value={option.sortOptionValue}>{option.sortOptionLabel}</option>)}</select></label><button type="button" onClick={onReset} className="text-[11px] font-semibold text-[#1d4ed8] hover:underline">{resetLabel}</button></div></div></div></div></section>;
}
