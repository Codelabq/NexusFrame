/* -------------------------------------------------------------------------- */
/*  JobBoards template 8 — OmniCorp requisitions board types                   */
/* -------------------------------------------------------------------------- */

export type omniEmploymentType = "fte" | "contract" | "executive";

export type omniRequisition = {
  requisitionId: string;
  requisitionTitle: string;
  requisitionBadge: string;
  requisitionDepartment: string;
  requisitionDepartmentLabel: string;
  requisitionLocation: string;
  requisitionWorkplace: string;
  requisitionWorkplaceLabel: string;
  requisitionCompensation: string;
  requisitionCompensationValue: number;
  requisitionEmploymentType: omniEmploymentType;
  requisitionEmploymentLabel: string;
  requisitionPostedDays: number;
  requisitionPostedLabel: string;
  requisitionSeniority: string;
  requisitionSeniorityLabel: string;
  requisitionIcon?: string;
  requisitionIconTone?: string;
  requisitionQualifications: string[];
  requisitionStatus: string;
  requisitionCandidateCount?: number;
};

export type omniFilterOption = {
  filterOptionId: string;
  filterOptionLabel: string;
  filterOptionCount: number;
};

export type omniFilterGroup = {
  filterGroupId: string;
  filterGroupLabel: string;
  filterGroupType: string;
  filterGroupOptions: omniFilterOption[];
};

export type omniSortOption = {
  sortOptionValue: string;
  sortOptionLabel: string;
};

export type omniDialogApplyField = {
  dialogApplyFieldLabel: string;
  dialogApplyFieldType: string;
  dialogApplyFieldPlaceholder: string;
};

export type omniCardLabels = {
  cardReqIdPrefix: string;
  cardQualificationsHeading: string;
  cardCandidateCountSuffix: string;
  cardViewDetailsLabel: string;
  cardQuickApplyLabel: string;
  cardExecutiveApplyLabel: string;
  cardSaveLabel: string;
  cardUnsaveLabel: string;
  cardShareLabel: string;
};

export type omniDialogLabels = {
  dialogDetailsEyebrow: string;
  dialogApplyEyebrow: string;
  dialogOverviewHeading: string;
  dialogOverviewBody: string;
  dialogQualificationsHeading: string;
  dialogStartApplyLabel: string;
  dialogApplyIntro: string;
  dialogSubmitLabel: string;
  dialogApplyFields: omniDialogApplyField[];
};

export type JobBoards02Data = {
  defaultOpenGroups: Record<string, boolean>;

  requisitions: omniRequisition[];

  cardLabels: omniCardLabels;

  filterGroups: omniFilterGroup[];
  totalRequisitions: number;
};
