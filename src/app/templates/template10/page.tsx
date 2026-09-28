import PrismWorkspace from "./components/PrismWorkspace";
import type {
  PrismObservabilityCareersTemplateData,
  prismDiscipline,
  prismRole,
} from "@/types/index";
import { placeholder } from "./data";

/* Discipline labels are display text; the value set is derived from `roles`. */
const disciplineLabels: Record<string, string> = {
  distributed: "Distributed Systems",
  product: "Product & Design",
  core: "Core Infra",
  ai: "AI & Research",
};

function countValues(values: string[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return counts;
}

/** Disciplines derived from the roles list, each labelled with its role count. */
function getDisciplines(allId: string, roles: prismRole[]): prismDiscipline[] {
  const counts = countValues(roles.map((role) => role.roleDiscipline));
  const known = Object.keys(disciplineLabels);
  const ordered = [
    ...known.filter((id) => counts.has(id)),
    ...Array.from(counts.keys()).filter((id) => !known.includes(id)),
  ];
  return [
    { disciplineId: allId, disciplineLabel: `All Roles (${roles.length})` },
    ...ordered.map((id) => ({
      disciplineId: id,
      disciplineLabel: `${disciplineLabels[id] ?? id} (${counts.get(id) ?? 0})`,
    })),
  ];
}

export default function TemplateTenPage({
  resolvedObject = {},
}: {
  resolvedObject?: Partial<PrismObservabilityCareersTemplateData>;
}) {
  // Static template copy (not resolved from the caller).
  const throughputLabel = "Throughput Load";
  const throughputValue = "14.2B events/sec";
  const heroPrimaryCtaLabel = "Explore Open Roles";
  const heroSecondaryCtaLabel = "Read Engineering Codex";
  const availabilityLabel = "Global Availability";
  const availabilityValue = "99.999% SLA";
  const rolesSearchPlaceholder = "Search title, tech, stack...";
  const rolesEmptyLabel = "No active openings found matching your search criteria.";
  const allDisciplineId = "all";
  const roleCardApplyLabel = "Quick Apply";
  const lifestyleEyebrow = "Engineering Lifestyle";
  const lifestyleTitle = "Work where you thrive, meet where you celebrate.";
  const lifestyleDescription =
    "Autonomous execution with full calendar ownership, async pull request reviews, and twice-yearly engineering summits in Lisbon, Tokyo, and Boulder.";
  const lifestyleImages = [
    { lifestyleImageTitle: "Hack Week Summit - Lisbon 2024", lifestyleImageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
    { lifestyleImageTitle: "Autonomous Deep Work Architecture", lifestyleImageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
    { lifestyleImageTitle: "Annual Systems Offsite - Alps", lifestyleImageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" },
  ];
  const dropzoneEyebrow = "Open Telemetry Pipeline";
  const dropzoneTitle = "Don't see your specific role? Drop your resume.";
  const dropzoneDescription =
    "We are perpetually seeking exceptional engineers, technical designers, and distributed systems builders. Share your GitHub, portfolio, or CV — our founders review open submissions weekly.";
  const dropzonePrompt = "Drag & drop your PDF / CV or click to browse";
  const dropzoneFormats = "Supported formats: PDF, DOCX (Max 15MB)";
  const dropzoneFields = [
    { dropzoneFieldLabel: "Full Legal Name", dropzoneFieldPlaceholder: "Linus Torvalds", dropzoneFieldDefaultValue: "Linus Torvalds" },
    { dropzoneFieldLabel: "Email or GitHub / Personal URL", dropzoneFieldPlaceholder: "github.com/username or email", dropzoneFieldDefaultValue: "github.com/torvalds" },
  ];
  const dropzoneMasteryLabel = "Area of Highest Mastery";
  const dropzoneMasteryOptions = [
    "Distributed Systems, Kernel & eBPF",
    "Real-Time Telemetry & Storage Engines",
    "Frontend Grafana / WebGL Canvas Workbenches",
    "AI Foundational Time-Series Models",
  ];
  const dropzoneSubmitLabel = "Submit Open Application";
  const dropzoneSuccessTitle = "Open Application Dispatched";
  const dropzoneSuccessBody =
    "Your general application has been successfully ingested into Prism's candidate registry. Founders review submissions every Monday.";
  const dropzoneBenefits = [
    "Direct founder review",
    "48-hour response guarantee",
    "100% confidential submission",
  ];
  const applicationModalTitlePrefix = "Apply for";
  const applicationFields = [
    { applicationFieldLabel: "Full Legal Name", applicationFieldPlaceholder: "Ada Lovelace", applicationFieldDefaultValue: "Linus Torvalds" },
    { applicationFieldLabel: "Email or GitHub / Personal URL", applicationFieldPlaceholder: "ada@domain.io", applicationFieldDefaultValue: "github.com/torvalds" },
  ];
  const applicationSubmitLabel = "Submit Application 🚀";
  const applicationSuccessTitle = "Application Received";
  const applicationSuccessBody = "has been queued for direct review by our founding engineering team.";
  const applicationSuccessCtaLabel = "Return to Openings";
  const codexAcknowledgeLabel = "Acknowledge & Return";

  // Fill anything the caller omitted from the placeholder, then derive dynamic lists.
  const merged = { ...placeholder, ...resolvedObject } as typeof placeholder;
  const data = {
    ...merged,
    throughputLabel,
    throughputValue,
    heroPrimaryCtaLabel,
    heroSecondaryCtaLabel,
    availabilityLabel,
    availabilityValue,
    rolesSearchPlaceholder,
    rolesEmptyLabel,
    allDisciplineId,
    roleCardApplyLabel,
    lifestyleEyebrow,
    lifestyleTitle,
    lifestyleDescription,
    lifestyleImages,
    dropzoneEyebrow,
    dropzoneTitle,
    dropzoneDescription,
    dropzonePrompt,
    dropzoneFormats,
    dropzoneFields,
    dropzoneMasteryLabel,
    dropzoneMasteryOptions,
    dropzoneSubmitLabel,
    dropzoneSuccessTitle,
    dropzoneSuccessBody,
    dropzoneBenefits,
    applicationModalTitlePrefix,
    applicationFields,
    applicationSubmitLabel,
    applicationSuccessTitle,
    applicationSuccessBody,
    applicationSuccessCtaLabel,
    codexAcknowledgeLabel,
    disciplines: getDisciplines(allDisciplineId, merged.roles),
  };

  return <PrismWorkspace resolvedObject={data} />;
}
