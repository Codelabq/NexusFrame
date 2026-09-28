"use client";

import { useEffect, useMemo, useState } from "react";
import { requisitions, totalRequisitions, type Requisition } from "./data";
import DetailsDialog from "./components/DetailsDialog";
import FilterSidebar from "./components/FilterSidebar";
import PaginationBar from "./components/PaginationBar";
import RequisitionList from "./components/RequisitionList";
import SearchPanel from "./components/SearchPanel";
import ShareToast from "./components/ShareToast";

const defaultOpenGroups: Record<string, boolean> = { seniority: true, workplace: true, department: true, employment: true, date: true };
const seniorityOrder = { internship: 1, entry: 2, mid: 3, lead: 4, director: 5 };

export default function TemplateEight() {
  const [query, setQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [sort, setSort] = useState("relevant");
  const [selections, setSelections] = useState<Record<string, string[]>>({ seniority: [], workplace: [], department: [], employment: [], date: [] });
  const [openGroups, setOpenGroups] = useState(defaultOpenGroups);
  const [alertsEnabled, setAlertsEnabled] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [toast, setToast] = useState("");
  const [dialog, setDialog] = useState<{ requisition: Requisition; mode: "details" | "apply" } | null>(null);

  const filteredRequisitions = useMemo(() => { const normalizedQuery = query.trim().toLowerCase(); const normalizedLocation = locationQuery.trim().toLowerCase(); const result = requisitions.filter((requisition) => { const searchable = `${requisition.title} ${requisition.reqId} ${requisition.departmentLabel} ${requisition.qualifications.join(" ")}`.toLowerCase(); const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery); const matchesLocation = !normalizedLocation || `${requisition.location} ${requisition.workplaceLabel}`.toLowerCase().includes(normalizedLocation); const matchesGroup = (group: string, value: string) => selections[group].length === 0 || selections[group].includes(value); const matchesDate = selections.date.length === 0 || selections.date[0] === "any" || (selections.date[0] === "today" ? requisition.postedDays <= 1 : selections.date[0] === "week" ? requisition.postedDays <= 7 : requisition.postedDays <= 30); return matchesQuery && matchesLocation && matchesGroup("seniority", requisition.seniority) && matchesGroup("workplace", requisition.workplace) && matchesGroup("department", requisition.department) && matchesGroup("employment", requisition.employmentType) && matchesDate; }); return [...result].sort((a, b) => sort === "recent" ? a.postedDays - b.postedDays : sort === "compensation" ? b.compensationValue - a.compensationValue : sort === "seniority" ? seniorityOrder[b.seniority] - seniorityOrder[a.seniority] : a.title.localeCompare(b.title)); }, [locationQuery, query, selections, sort]);
  const pageCount = Math.max(1, Math.ceil(filteredRequisitions.length / pageSize));
  const visiblePage = Math.min(page, pageCount);
  const visibleRequisitions = filteredRequisitions.slice((visiblePage - 1) * pageSize, visiblePage * pageSize);
  const activeFilterCount = Object.values(selections).reduce((count, values) => count + values.length, 0) + (locationQuery.trim() ? 1 : 0);

  useEffect(() => { if (!toast) return; const timeout = window.setTimeout(() => setToast(""), 2600); return () => window.clearTimeout(timeout); }, [toast]);

  const changeFilter = (group: string, value: string, type: "checkbox" | "radio") => { setPage(1); setSelections((current) => ({ ...current, [group]: type === "radio" ? [value] : current[group].includes(value) ? current[group].filter((item) => item !== value) : [...current[group], value] })); };
  const resetFilters = () => { setPage(1); setQuery(""); setLocationQuery(""); setSort("relevant"); setSelections({ seniority: [], workplace: [], department: [], employment: [], date: [] }); };
  const updateQuery = (value: string) => { setPage(1); setQuery(value); };
  const updateLocation = (value: string) => { setPage(1); setLocationQuery(value); };
  const updateSort = (value: string) => { setPage(1); setSort(value); };
  const clearFilterSelections = () => { setPage(1); setSelections({ seniority: [], workplace: [], department: [], employment: [], date: [] }); };
  const updatePageSize = (size: number) => { setPage(1); setPageSize(size); };
  const toggleSave = (id: string) => setSavedIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const share = async (requisition: Requisition) => { try { await navigator.clipboard?.writeText(window.location.href); setToast(`Requisition link copied: “${requisition.title.slice(0, 26)}...”`); } catch { setToast("Requisition link ready to share"); } };

  return <main className="min-h-screen bg-[#f8f9ff] font-['Public_Sans'] text-[#0b1c30]">
    <SearchPanel query={query} location={locationQuery} sort={sort} activeFilterCount={activeFilterCount} onQueryChange={updateQuery} onLocationChange={updateLocation} onSortChange={updateSort} onReset={resetFilters} />
    <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-start gap-6 px-4 py-8 sm:px-6 lg:grid-cols-12 lg:px-8"><div className="lg:col-span-4 xl:col-span-3"><FilterSidebar openGroups={openGroups} selections={selections} alertsEnabled={alertsEnabled} onToggleGroup={(id) => setOpenGroups((groups) => ({ ...groups, [id]: !groups[id] }))} onChange={changeFilter} onClear={clearFilterSelections} onAlertsToggle={() => setAlertsEnabled((value) => !value)} /></div><section className="flex min-w-0 flex-col gap-4 lg:col-span-8 xl:col-span-9"><div className="flex items-center justify-between text-[12px] text-[#434655]"><span>Displaying <strong className="text-[#0b1c30]">{filteredRequisitions.length}</strong> verified local roles</span><span className="font-['JetBrains_Mono'] text-[10px]">Saved Roles ({savedIds.length})</span></div><RequisitionList requisitions={visibleRequisitions} savedIds={savedIds} onSave={toggleSave} onShare={share} onDetails={(requisition) => setDialog({ requisition, mode: "details" })} onApply={(requisition) => setDialog({ requisition, mode: "apply" })} /><PaginationBar total={filteredRequisitions.length || totalRequisitions} start={filteredRequisitions.length ? (visiblePage - 1) * pageSize + 1 : 0} end={Math.min(visiblePage * pageSize, filteredRequisitions.length)} page={visiblePage} pageCount={pageCount} pageSize={pageSize} onPage={setPage} onPageSize={updatePageSize} /></section></div>{toast && <ShareToast message={toast} onClose={() => setToast("")} />}{dialog && <DetailsDialog requisition={dialog.requisition} mode={dialog.mode} onClose={() => setDialog(null)} onApply={() => setDialog({ requisition: dialog.requisition, mode: "apply" })} />}</main>;
}