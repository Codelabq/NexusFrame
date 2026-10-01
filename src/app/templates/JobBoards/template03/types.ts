/* -------------------------------------------------------------------------- */
/*  JobBoards template 9 — Kroma creative roster types                         */
/* -------------------------------------------------------------------------- */

export type kromaRole = {
  roleId: string;
  roleDiscipline: string;
  roleTitle: string;
  roleCampaign: string;
  roleStatus: string;
  roleCompensation: string;
  roleTimeline: string;
  roleRequirement: string;
  roleDeliverable: string;
  roleTools: string[];
  roleImageUrl: string;
  roleImageAlt: string;
};

export type kromaDiscipline = {
  disciplineId: string;
  disciplineLabel: string;
};

export type kromaMetric = {
  metricValue: string;
  metricLabel: string;
};

export type kromaDrawerField = {
  drawerFieldLabel: string;
  drawerFieldName: string;
  drawerFieldType: string;
  drawerFieldPlaceholder: string;
};

export type kromaRoleCardLabels = {
  roleCardLabelPrefix: string;
  roleCardCompensationLabel: string;
  roleCardTimelineLabel: string;
  roleCardCtaLabel: string;
};

export type kromaDrawerLabels = {
  drawerFields: kromaDrawerField[];
};

export type JobBoards03Data = {
  brandName: string;
  heroImageUrl: string;
  heroTitle: string;
  heroDescription: string;
  roles: kromaRole[];
  metrics: kromaMetric[];
  drawerLabels: kromaDrawerLabels;
};
