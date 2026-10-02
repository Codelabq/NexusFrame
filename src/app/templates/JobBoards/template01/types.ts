/* -------------------------------------------------------------------------- */
/*  JobBoards 01 — NexusFrame careers board types                              */
/* -------------------------------------------------------------------------- */

export type nexusRole = {
  roleId: string;
  roleTitle: string;
  roleDept: string;
  roleDeptLabel: string;
  roleLocation: string;
  roleLocationLabel: string;
  roleCompensation: string;
  roleDescription: string;
  roleDeliverables: string[];
  roleSkills: string[];
};

export type nexusBenefit = {
  benefitTitle: string;
  benefitDetail: string;
  benefitNote: string;
};

export type nexusStackHighlight = {
  stackHighlightTitle: string;
  stackHighlightDetail: string;
};

export type nexusDepartmentFilter = {
  departmentFilterLabel: string;
  departmentFilterValue: string;
};

export type nexusLocationFilter = {
  locationFilterLabel: string;
  locationFilterValue: string;
};

export type nexusApplicationField = {
  applicationFieldLabel: string;
  applicationFieldPlaceholder: string;
  applicationFieldName: string;
  applicationFieldType: string;
};

export type JobBoards01Data = {
  heroBadgeText: string;
  heroTitle: string;
  heroDescription: string;
  stackHighlights: nexusStackHighlight[];
  roles: nexusRole[];
  benefits: nexusBenefit[];
  departmentFilters: nexusDepartmentFilter[];
  locationFilters: nexusLocationFilter[];
};
