"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type {
  JobBoards01Data,
  nexusDepartmentFilter,
  nexusLocationFilter,
  nexusRole,
} from "./types";
import { JobBoards01placeHolder } from "./data";
import BenefitsGrid from "./components/BenefitsGrid";
import CareersHero from "./components/CareersHero";
import FilterBar from "./components/FilterBar";
import JobList from "./components/JobList";
import RoleDrawer from "./components/RoleDrawer";
import StackHighlights from "./components/StackHighlights";

/* Location labels are display text; the value set itself is derived from `roles`. */
const locationLabels: Record<string, string> = {
  remote: "Remote",
  sf: "San Francisco, CA",
  nyc: "New York, NY",
};

/** Department filters derived from the roles board, prefixed with the "All" filter. */
function getDepartmentFilters(allLabel: string, roles: nexusRole[]): nexusDepartmentFilter[] {
  const labels = new Map<string, string>();
  for (const role of roles) {
    if (!labels.has(role.roleDept)) labels.set(role.roleDept, role.roleDeptLabel);
  }
  return [
    { departmentFilterLabel: allLabel, departmentFilterValue: "all" },
    ...Array.from(labels, ([value, label]) => ({
      departmentFilterLabel: label,
      departmentFilterValue: value,
    })),
  ];
}

/** Location filters derived from the roles board. */
function getLocationFilters(roles: nexusRole[]): nexusLocationFilter[] {
  const values = [...new Set(roles.map((role) => role.roleLocation))];
  return values.map((value) => ({
    locationFilterValue: value,
    locationFilterLabel: locationLabels[value] ?? value,
  }));
}

export default function JobBoards01({
  resolvedData = {},
}: {
  resolvedData?: Record<string, unknown>;
}) {
  // Static template copy (not resolved from the caller).
  const heroTitleAccent = "Engineered for high-impact minds.";
  const heroSearchPlaceholder = "Filter open roles across engineering, design & product...";
  const heroSearchShortcut = "⌘K";
  const countLabel = "Positions";
  const allFilterLabel = "All";
  const jobListColumns = ["Role & Discipline", "Domain", "Location & Compensation", "Details"];
  const jobListEmptyTitle = "No matching positions found";
  const jobListEmptyBody =
    "Try expanding your department filter or resetting your search keywords.";
  const jobListResetLabel = "Reset All Filters";
  const drawerOverviewLabel = "Overview & Mission";
  const drawerDeliverablesLabel = "What You'll Architect & Ship";
  const drawerSkillsLabel = "Core Engineering Primitives";
  const drawerApplyHeading = "Ready to apply?";
  const drawerApplySubtext = "Direct review by the founding team.";
  const drawerResponseBadge = "48h response";
  const applicationFields = [
    { applicationFieldLabel: "Full Legal Name", applicationFieldPlaceholder: "Ada Lovelace", applicationFieldName: "name", applicationFieldType: "text" },
    { applicationFieldLabel: "Work Email", applicationFieldPlaceholder: "ada@domain.io", applicationFieldName: "email", applicationFieldType: "email" },
    { applicationFieldLabel: "GitHub / Portfolio / LinkedIn", applicationFieldPlaceholder: "https://github.com/...", applicationFieldName: "portfolio", applicationFieldType: "url" },
  ];
  const applicationUploadLabel = "Resume / CV";
  const applicationUploadErrorType = "Please upload a PDF resume.";
  const applicationUploadErrorSize = "Resume must be smaller than 8MB.";
  const applicationSubmitLabel = "Submit Application";
  const applicationSuccessMessage =
    "Application received. Our team will review your materials within 48 hours.";

  // Fill anything the caller omitted from the placeholder, then derive dynamic lists.
  const merged = { ...JobBoards01placeHolder, ...resolvedData } as typeof JobBoards01placeHolder;
  const data: JobBoards01Data = {
    ...merged,
    departmentFilters: getDepartmentFilters(allFilterLabel, merged.roles),
    locationFilters: getLocationFilters(merged.roles),
  };
  const {
    heroBadgeText,
    heroTitle,
    heroDescription,
    departmentFilters,
    locationFilters,
    stackHighlights,
    roles,
    benefits,
  } = data;

  const [department, setDepartment] = useState("all");
  const [location, setLocation] = useState("all");
  const [query, setQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState<nexusRole | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const filteredRoles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return roles.filter((role) => {
      const matchesDepartment = department === "all" || role.roleDept === department;
      const matchesLocation = location === "all" || role.roleLocation === location;
      const searchable = `${role.roleTitle} ${role.roleDeptLabel} ${role.roleSkills.join(" ")}`.toLowerCase();
      return matchesDepartment && matchesLocation && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [department, location, query, roles]);

  const departmentCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    departmentFilters.forEach((filter) => {
      counts[filter.departmentFilterValue] =
        filter.departmentFilterValue === "all"
          ? roles.length
          : roles.filter((role) => role.roleDept === filter.departmentFilterValue).length;
    });
    return counts;
  }, [departmentFilters, roles]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
      if (event.key === "Escape") setSelectedRole(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedRole ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedRole]);

  const resetFilters = () => {
    setDepartment("all");
    setLocation("all");
    setQuery("");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f9f9f9] font-['Geist'] text-[#1a1c1c]">
      <div className="pointer-events-none absolute left-1/2 top-[-128px] h-64 w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#e2e2e2]/50 to-transparent blur-3xl" />
      <CareersHero
        badgeText={heroBadgeText}
        title={heroTitle}
        titleAccent={heroTitleAccent}
        description={heroDescription}
        searchPlaceholder={heroSearchPlaceholder}
        searchShortcut={heroSearchShortcut}
        query={query}
        searchRef={searchRef}
        onQueryChange={setQuery}
      />
      <FilterBar
        department={department}
        location={location}
        count={filteredRoles.length}
        departmentCounts={departmentCounts}
        departmentFilters={departmentFilters}
        locationFilters={locationFilters}
        countLabel={countLabel}
        onDepartmentChange={setDepartment}
        onLocationChange={setLocation}
      />
      <StackHighlights items={stackHighlights} />
      <JobList
        roles={filteredRoles}
        columns={jobListColumns}
        emptyTitle={jobListEmptyTitle}
        emptyBody={jobListEmptyBody}
        resetLabel={jobListResetLabel}
        onSelectRole={setSelectedRole}
        onReset={resetFilters}
      />
      <BenefitsGrid benefits={benefits} />
      {selectedRole && (
        <RoleDrawer
          role={selectedRole}
          onClose={() => setSelectedRole(null)}
          overviewLabel={drawerOverviewLabel}
          deliverablesLabel={drawerDeliverablesLabel}
          skillsLabel={drawerSkillsLabel}
          applyHeading={drawerApplyHeading}
          applySubtext={drawerApplySubtext}
          responseBadge={drawerResponseBadge}
          applicationFields={applicationFields}
          applicationUploadLabel={applicationUploadLabel}
          applicationUploadErrorType={applicationUploadErrorType}
          applicationUploadErrorSize={applicationUploadErrorSize}
          applicationSubmitLabel={applicationSubmitLabel}
          applicationSuccessMessage={applicationSuccessMessage}
        />
      )}
    </main>
  );
}
