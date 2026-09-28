import KromaRoster from "./components/KromaRoster";
import type { KromaRosterTemplateData, kromaDiscipline, kromaRole } from "@/types/index";
import { placeholder } from "./data";

/* Discipline labels are display text; the value set is derived from `roles`. */
const disciplineLabels: Record<string, string> = {
  "3d-motion": "3D & Motion",
  cinematography: "Cinematography & Lighting",
  "editorial-vfx": "Editorial & VFX",
  "art-direction": "Art & Creative Direction",
};

/** Disciplines derived from the union of every role's discipline. */
function getDisciplines(allId: string, roles: kromaRole[]): kromaDiscipline[] {
  const present = [...new Set(roles.map((role) => role.roleDiscipline))];
  const known = Object.keys(disciplineLabels);
  const ordered = [
    ...known.filter((id) => present.includes(id)),
    ...present.filter((id) => !known.includes(id)),
  ];
  return [
    { disciplineId: allId, disciplineLabel: "All Disciplines" },
    ...ordered.map((id) => ({ disciplineId: id, disciplineLabel: disciplineLabels[id] ?? id })),
  ];
}

export default function TemplateNinePage({
  resolvedObject = {},
}: {
  resolvedObject?: Partial<KromaRosterTemplateData>;
}) {
  // Static template copy (not resolved from the caller).
  const heroImageAlt = " production set";
  const heroStatusLeft = "Live roster engine // 2027 dispatch";
  const heroTickerItems = [
    "Global latency: 14ms",
    "Client capacity: metrics met",
    "Contracts: direct execution",
  ];
  const heroCodeLabel = "[code: creative_roster_v4] meta · luxury · automotive · vfx";
  const heroSoundOnLabel = "Sound active // stereo";
  const heroSoundOffLabel = "Sound off";
  const heroFpsBadge = "Realtime 24.000 FPS";
  const heroRatioBadge = "Ratio 2.39:1 Anamorphic";
  const heroTimecodeLabel = "Timecode";
  const allDisciplineId = "all";
  const immediateShootsLabel = "Immediate Shoots";
  const immediateShootsCount = "4";
  const avgDayRateLabel = "Avg Day Rate";
  const avgDayRateValue = "$1,150";
  const gridEyebrow = "Commission dispatch // open manifest";
  const gridTitle = "The active roster";
  const gridShowingLabel = "active client slots";
  const gridEmptyLabel = "No active slots in this discipline.";
  const roleCardLabels = {
    roleCardLabelPrefix: "Role //",
    roleCardCompensationLabel: "Compensation",
    roleCardTimelineLabel: "Timeline / Package",
    roleCardCtaLabel: "Apply for roster / send reel",
  };
  const drawerLabels = {
    drawerEyebrow: "Roster application //",
    drawerSuccessTitle: "Dispatch received",
    drawerSuccessBody:
      "Your reel and application are queued for the KROMA roster review team. Expect a response within 48 hours.",
    drawerCloseLabel: "Close dispatch",
    drawerNotesPlaceholder: "Tell us about your fit for this dispatch...",
    drawerConsentLabel:
      "I understand this submission may be shared with the named client production team under NDA.",
    drawerSubmitLabel: "Send reel / enter dispatch",
    drawerFootnote: "KROMA roster API // encrypted submission channel",
  };

  // Fill anything the caller omitted from the placeholder, then derive dynamic lists.
  const merged = { ...placeholder, ...resolvedObject } as typeof placeholder;
  const data = {
    ...merged,
    heroImageAlt,
    heroStatusLeft,
    heroTickerItems,
    heroCodeLabel,
    heroSoundOnLabel,
    heroSoundOffLabel,
    heroFpsBadge,
    heroRatioBadge,
    heroTimecodeLabel,
    allDisciplineId,
    immediateShootsLabel,
    immediateShootsCount,
    avgDayRateLabel,
    avgDayRateValue,
    gridEyebrow,
    gridTitle,
    gridShowingLabel,
    gridEmptyLabel,
    roleCardLabels,
    drawerLabels: { ...drawerLabels, drawerFields: merged.drawerLabels.drawerFields },
    disciplines: getDisciplines(allDisciplineId, merged.roles),
  };

  return <KromaRoster resolvedObject={data} />;
}
