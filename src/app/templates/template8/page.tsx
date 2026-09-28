"use client";

import { useEffect, useMemo, useState } from "react";
import type {
  OmniCorpRequisitionsTemplateData,
  omniFilterGroup,
  omniFilterOption,
  omniRequisition,
} from "@/types/index";
import { placeholder } from "./data";
import DetailsDialog from "./components/DetailsDialog";
import FilterSidebar from "./components/FilterSidebar";
import PaginationBar from "./components/PaginationBar";
import RequisitionList from "./components/RequisitionList";
import SearchPanel from "./components/SearchPanel";
import ShareToast from "./components/ShareToast";

const seniorityOrder: Record<string, number> = { internship: 1, entry: 2, mid: 3, lead: 4, director: 5 };

/* -------------------------------------------------------------------------- */
/*  Derived filter data                                                        */
/* -------------------------------------------------------------------------- */

const seniorityLabels: Record<string, string> = {
  entry: "Entry Level",
  mid: "Mid-Senior Level",
  lead: "Lead / Principal",
  director: "Director / Executive",
  internship: "Internship / Campus",
};

const workplaceLabels: Record<string, string> = {
  hybrid: "Hybrid - 3 Days Onsite",
  onsite: "On-site Headquarters",
  remote: "Fully Remote - US",
  global: "Global Remote (EMEA/APAC)",
};

const departmentLabels: Record<string, string> = {
  cloud: "Cloud & Systems Architecture",
  fintech: "Enterprise FinTech",
  healthcare: "Healthcare & Life Sciences",
  "supply-chain": "Global Supply Chain",
  legal: "Legal, Risk & Compliance",
};

const employmentLabels: Record<string, string> = {
  fte: "Regular Full-Time (FTE)",
  contract: "Direct Contract (W2)",
  executive: "Executive Retained",
};

const dateBuckets: { id: string; label: string; test: (days: number) => boolean }[] = [
  { id: "today", label: "Past 24 Hours", test: (days: number) => days <= 0 },
  { id: "week", label: "Past Week", test: (days: number) => days <= 7 },
  { id: "month", label: "Past 30 Days", test: (days: number) => days <= 30 },
  { id: "any", label: "Any Time", test: () => true },
];

function countValues(values: string[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return counts;
}

function facetOptions(
  items: omniRequisition[],
  select: (item: omniRequisition) => string,
  labels: Record<string, string>,
): omniFilterOption[] {
  const counts = countValues(items.map(select));
  const known = Object.keys(labels);
  const ordered = [
    ...known.filter((value) => counts.has(value)),
    ...Array.from(counts.keys()).filter((value) => !known.includes(value)),
  ];
  return ordered.map((value) => ({
    filterOptionId: value,
    filterOptionLabel: labels[value] ?? value,
    filterOptionCount: counts.get(value) ?? 0,
  }));
}

/** Filter groups derived from the requisitions collection. */
function getFilterGroups(items: omniRequisition[]): omniFilterGroup[] {
  return [
    {
      filterGroupId: "seniority",
      filterGroupLabel: "Seniority Level",
      filterGroupType: "checkbox",
      filterGroupOptions: facetOptions(items, (item) => item.requisitionSeniority, seniorityLabels),
    },
    {
      filterGroupId: "workplace",
      filterGroupLabel: "Remote Workplace Status",
      filterGroupType: "checkbox",
      filterGroupOptions: facetOptions(items, (item) => item.requisitionWorkplace, workplaceLabels),
    },
    {
      filterGroupId: "department",
      filterGroupLabel: "Department & Unit",
      filterGroupType: "checkbox",
      filterGroupOptions: facetOptions(items, (item) => item.requisitionDepartment, departmentLabels),
    },
    {
      filterGroupId: "employment",
      filterGroupLabel: "Employment Type",
      filterGroupType: "checkbox",
      filterGroupOptions: facetOptions(items, (item) => item.requisitionEmploymentType, employmentLabels),
    },
    {
      filterGroupId: "date",
      filterGroupLabel: "Date Posted",
      filterGroupType: "radio",
      filterGroupOptions: dateBuckets.map((bucket) => ({
        filterOptionId: bucket.id,
        filterOptionLabel: bucket.label,
        filterOptionCount: items.filter((item) => bucket.test(item.requisitionPostedDays)).length,
      })),
    },
  ];
}

export default function TemplateEight({
  resolvedObject = {},
}: {
  resolvedObject?: Partial<OmniCorpRequisitionsTemplateData>;
}) {
  // Static template copy (not resolved from the caller).
  const displayCountLabel = "verified local roles";
  const savedRolesLabel = "Saved Roles";
  const defaultPageSize = 10;
  const searchPlaceholder = "Search by title, skill, or req ID, e.g. 84920";
  const locationPlaceholder = "City, State, or Country";
  const searchCtaLabel = "Find Openings";
  const openRequisitionsLabel = "open requisitions";
  const verifiedRolesLabel = "Displaying verified global roles";
  const activeFilterLabel = "active filter";
  const sortLabel = "Sort by:";
  const sortOptions = [
    { sortOptionValue: "relevant", sortOptionLabel: "Most Relevant" },
    { sortOptionValue: "recent", sortOptionLabel: "Most Recent Posting" },
    { sortOptionValue: "compensation", sortOptionLabel: "Base Compensation: High to Low" },
    { sortOptionValue: "seniority", sortOptionLabel: "Executive / Seniority Ascending" },
  ];
  const defaultSort = "relevant";
  const resetLabel = "Reset All";
  const filterTitle = "Filter Requisitions";
  const filterClearAllLabel = "Clear all";
  const alertsTitle = "Requisition Alerts";
  const alertsEnabledLabel = "Daily matches enabled";
  const alertsDisabledLabel = "Notify me daily for new matches";
  const complianceLabel = "OFCCP & EEOC Compliant";
  const securityRefLabel = "SEC Ref #492";
  const listEmptyTitle = "No requisitions match these filters";
  const listEmptyBody = "Try clearing one or more filters or broadening your search.";
  const paginationSummaryLabel = "open jobs";
  const pageSizeLabel = "Jobs Per Page:";
  const pageSizeOptions = [10, 25, 50];
  const previousLabel = "Previous";
  const nextLabel = "Next";
  const dialogLabels = {
    dialogDetailsEyebrow: "Requisition dossier",
    dialogApplyEyebrow: "Quick application",
    dialogOverviewHeading: "Role overview",
    dialogOverviewBody:
      "This enterprise requisition is managed through OmniCorp's verified talent acquisition workflow. Review the qualification thresholds and employment details before beginning an application.",
    dialogQualificationsHeading: "Key qualifications",
    dialogStartApplyLabel: "Start Quick Apply",
    dialogApplyIntro:
      "Submit your profile for review by the OmniCorp talent team. This demo form does not send data to an external service.",
    dialogSubmitLabel: "Submit Application",
    dialogApplyFields: [
      { dialogApplyFieldLabel: "Full name", dialogApplyFieldType: "text", dialogApplyFieldPlaceholder: "Ada Lovelace" },
      { dialogApplyFieldLabel: "Work email", dialogApplyFieldType: "email", dialogApplyFieldPlaceholder: "ada@domain.io" },
      { dialogApplyFieldLabel: "Resume or profile URL", dialogApplyFieldType: "url", dialogApplyFieldPlaceholder: "https://linkedin.com/in/..." },
    ],
  };
  const shareToastMessage = "Requisition link copied: “{title}...”";
  const shareToastFallbackMessage = "Requisition link ready to share";

  // Fill anything the caller omitted from the placeholder, then derive dynamic filters.
  const merged = { ...placeholder, ...resolvedObject } as typeof placeholder;
  const data: OmniCorpRequisitionsTemplateData = {
    ...merged,
    filterGroups: getFilterGroups(merged.requisitions),
    totalRequisitions: merged.requisitions.length,
  };
  const {
    defaultOpenGroups,
    filterGroups,
    requisitions,
    totalRequisitions,
    cardLabels,
  } = data;

  const [query, setQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [sort, setSort] = useState(defaultSort);
  const [selections, setSelections] = useState<Record<string, string[]>>({ seniority: [], workplace: [], department: [], employment: [], date: [] });
  const [openGroups, setOpenGroups] = useState(defaultOpenGroups);
  const [alertsEnabled, setAlertsEnabled] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [toast, setToast] = useState("");
  const [dialog, setDialog] = useState<{ requisition: omniRequisition; mode: "details" | "apply" } | null>(null);

  const filteredRequisitions = useMemo(() => { const normalizedQuery = query.trim().toLowerCase(); const normalizedLocation = locationQuery.trim().toLowerCase(); const result = requisitions.filter((requisition) => { const searchable = `${requisition.requisitionTitle} ${requisition.requisitionId.toUpperCase()} ${requisition.requisitionDepartmentLabel} ${requisition.requisitionQualifications.join(" ")}`.toLowerCase(); const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery); const matchesLocation = !normalizedLocation || `${requisition.requisitionLocation} ${requisition.requisitionWorkplaceLabel}`.toLowerCase().includes(normalizedLocation); const matchesGroup = (group: string, value: string) => selections[group].length === 0 || selections[group].includes(value); const matchesDate = selections.date.length === 0 || selections.date[0] === "any" || (selections.date[0] === "today" ? requisition.requisitionPostedDays <= 1 : selections.date[0] === "week" ? requisition.requisitionPostedDays <= 7 : requisition.requisitionPostedDays <= 30); return matchesQuery && matchesLocation && matchesGroup("seniority", requisition.requisitionSeniority) && matchesGroup("workplace", requisition.requisitionWorkplace) && matchesGroup("department", requisition.requisitionDepartment) && matchesGroup("employment", requisition.requisitionEmploymentType) && matchesDate; }); return [...result].sort((a, b) => sort === "recent" ? a.requisitionPostedDays - b.requisitionPostedDays : sort === "compensation" ? b.requisitionCompensationValue - a.requisitionCompensationValue : sort === "seniority" ? seniorityOrder[b.requisitionSeniority] - seniorityOrder[a.requisitionSeniority] : a.requisitionTitle.localeCompare(b.requisitionTitle)); }, [locationQuery, query, selections, sort, requisitions]);
  const pageCount = Math.max(1, Math.ceil(filteredRequisitions.length / pageSize));
  const visiblePage = Math.min(page, pageCount);
  const visibleRequisitions = filteredRequisitions.slice((visiblePage - 1) * pageSize, visiblePage * pageSize);
  const activeFilterCount = Object.values(selections).reduce((count, values) => count + values.length, 0) + (locationQuery.trim() ? 1 : 0);

  useEffect(() => { if (!toast) return; const timeout = window.setTimeout(() => setToast(""), 2600); return () => window.clearTimeout(timeout); }, [toast]);

  const changeFilter = (group: string, value: string, type: "checkbox" | "radio") => { setPage(1); setSelections((current) => ({ ...current, [group]: type === "radio" ? [value] : current[group].includes(value) ? current[group].filter((item) => item !== value) : [...current[group], value] })); };
  const resetFilters = () => { setPage(1); setQuery(""); setLocationQuery(""); setSort(defaultSort); setSelections({ seniority: [], workplace: [], department: [], employment: [], date: [] }); };
  const updateQuery = (value: string) => { setPage(1); setQuery(value); };
  const updateLocation = (value: string) => { setPage(1); setLocationQuery(value); };
  const updateSort = (value: string) => { setPage(1); setSort(value); };
  const clearFilterSelections = () => { setPage(1); setSelections({ seniority: [], workplace: [], department: [], employment: [], date: [] }); };
  const updatePageSize = (size: number) => { setPage(1); setPageSize(size); };
  const toggleSave = (id: string) => setSavedIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const share = async (requisition: omniRequisition) => { try { await navigator.clipboard?.writeText(window.location.href); setToast(shareToastMessage.replace("{title}", requisition.requisitionTitle.slice(0, 26))); } catch { setToast(shareToastFallbackMessage); } };

  return (
    <main className="min-h-screen bg-[#f8f9ff] font-['Public_Sans'] text-[#0b1c30]">
      <SearchPanel
        query={query}
        location={locationQuery}
        sort={sort}
        activeFilterCount={activeFilterCount}
        openRequisitionsCount={totalRequisitions}
        searchPlaceholder={searchPlaceholder}
        locationPlaceholder={locationPlaceholder}
        searchCtaLabel={searchCtaLabel}
        openRequisitionsLabel={openRequisitionsLabel}
        verifiedRolesLabel={verifiedRolesLabel}
        activeFilterLabel={activeFilterLabel}
        sortLabel={sortLabel}
        sortOptionList={sortOptions}
        resetLabel={resetLabel}
        onQueryChange={updateQuery}
        onLocationChange={updateLocation}
        onSortChange={updateSort}
        onReset={resetFilters}
      />
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-start gap-6 px-4 py-8 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4 xl:col-span-3">
          <FilterSidebar
            filterGroups={filterGroups}
            openGroups={openGroups}
            selections={selections}
            alertsEnabled={alertsEnabled}
            filterTitle={filterTitle}
            clearAllLabel={filterClearAllLabel}
            alertsTitle={alertsTitle}
            alertsEnabledLabel={alertsEnabledLabel}
            alertsDisabledLabel={alertsDisabledLabel}
            complianceLabel={complianceLabel}
            securityRefLabel={securityRefLabel}
            onToggleGroup={(id) => setOpenGroups((groups) => ({ ...groups, [id]: !groups[id] }))}
            onChange={changeFilter}
            onClear={clearFilterSelections}
            onAlertsToggle={() => setAlertsEnabled((value) => !value)}
          />
        </div>
        <section className="flex min-w-0 flex-col gap-4 lg:col-span-8 xl:col-span-9">
          <div className="flex items-center justify-between text-[12px] text-[#434655]">
            <span>Displaying <strong className="text-[#0b1c30]">{filteredRequisitions.length}</strong> {displayCountLabel}</span>
            <span className="font-['JetBrains_Mono'] text-[10px]">{savedRolesLabel} ({savedIds.length})</span>
          </div>
          <RequisitionList
            requisitions={visibleRequisitions}
            savedIds={savedIds}
            emptyTitle={listEmptyTitle}
            emptyBody={listEmptyBody}
            cardLabels={cardLabels}
            onSave={toggleSave}
            onShare={share}
            onDetails={(requisition) => setDialog({ requisition, mode: "details" })}
            onApply={(requisition) => setDialog({ requisition, mode: "apply" })}
          />
          <PaginationBar
            total={filteredRequisitions.length || totalRequisitions}
            start={filteredRequisitions.length ? (visiblePage - 1) * pageSize + 1 : 0}
            end={Math.min(visiblePage * pageSize, filteredRequisitions.length)}
            page={visiblePage}
            pageCount={pageCount}
            pageSize={pageSize}
            summaryLabel={paginationSummaryLabel}
            pageSizeLabel={pageSizeLabel}
            pageSizeOptions={pageSizeOptions}
            previousLabel={previousLabel}
            nextLabel={nextLabel}
            onPage={setPage}
            onPageSize={updatePageSize}
          />
        </section>
      </div>
      {toast && <ShareToast message={toast} onClose={() => setToast("")} />}
      {dialog && <DetailsDialog requisition={dialog.requisition} mode={dialog.mode} labels={dialogLabels} onClose={() => setDialog(null)} onApply={() => setDialog({ requisition: dialog.requisition, mode: "apply" })} />}
    </main>
  );
}
