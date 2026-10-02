/* -------------------------------------------------------------------------- */
/*  JobBoards template 10 — Prism observability careers types                  */
/* -------------------------------------------------------------------------- */

export type prismMetric = {
  metricValue: string;
  metricSub?: string;
  metricLabel: string;
  metricDescription: string;
};

export type prismRole = {
  roleId: string;
  roleTitle: string;
  roleDiscipline: string;
  roleDisciplineLabel: string;
  roleBadge?: string;
  roleBadgeType?: string;
  roleTeam: string;
  roleRefId: string;
  roleLocation: string;
  roleCompensation: string;
  roleDescription: string;
  roleRequirements: string[];
  roleTools: string[];
  roleStatusText?: string;
};

export type prismDiscipline = {
  disciplineId: string;
  disciplineLabel: string;
};

export type prismHeroPillar = {
  heroPillarLabel: string;
  heroPillarValue: string;
};

export type prismLifestyleImage = {
  lifestyleImageTitle: string;
  lifestyleImageUrl: string;
};

export type prismDropzoneField = {
  dropzoneFieldLabel: string;
  dropzoneFieldPlaceholder: string;
  dropzoneFieldDefaultValue?: string;
};

export type prismApplicationField = {
  applicationFieldLabel: string;
  applicationFieldPlaceholder: string;
  applicationFieldDefaultValue?: string;
};

export type prismCodexSection = {
  codexSectionTitle: string;
  codexSectionBody: string;
};

export type JobBoards04Data = {
  brandName: string;
  bannerText: string;
  heroTitle: string;
  heroTitleAccent?: string;
  heroDescription: string;
  heroPillars?: prismHeroPillar[];
  metrics?: prismMetric[];
  rolesEyebrow: string;
  rolesTitle: string;
  rolesDescription: string;
  roles: prismRole[];
  codexTitle?: string;
  codexSubtitle?: string;
  codexSections?: prismCodexSection[];
};
