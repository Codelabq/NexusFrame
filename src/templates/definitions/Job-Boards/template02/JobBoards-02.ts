import type { TemplateDefinition } from "../../types";


export const JobBoards02Definition = {
  fields: [
    // ── Page Labels ──────────────────────────────────────────────────────────
    { name: "defaultOpenGroups", type: "array", required: true },

    // ── Requisitions ─────────────────────────────────────────────────────────
    { name: "requisitions", type: "array", required: true },
    { name: "requisitionId", type: "string", required: true },
    { name: "requisitionTitle", type: "string", required: true },
    { name: "requisitionBadge", type: "string", required: true },
    { name: "requisitionDepartment", type: "string", required: true },
    { name: "requisitionDepartmentLabel", type: "string", required: true },
    { name: "requisitionLocation", type: "string", required: true },
    { name: "requisitionWorkplace", type: "string", required: true },
    { name: "requisitionWorkplaceLabel", type: "string", required: true },
    { name: "requisitionCompensation", type: "string", required: true },
    { name: "requisitionCompensationValue", type: "number", required: true },
    { name: "requisitionEmploymentType", type: "string", required: true },
    { name: "requisitionEmploymentLabel", type: "string", required: true },
    { name: "requisitionPostedDays", type: "number", required: true },
    { name: "requisitionPostedLabel", type: "string", required: true },
    { name: "requisitionSeniority", type: "string", required: true },
    { name: "requisitionSeniorityLabel", type: "string", required: true },
    { name: "requisitionIcon", type: "string", required: false },
    { name: "requisitionIconTone", type: "string", required: false },
    { name: "requisitionQualifications", type: "array", required: true },
    { name: "requisitionQualification", type: "string", required: true },
    { name: "requisitionStatus", type: "string", required: true },
    { name: "requisitionCandidateCount", type: "number", required: false },

    // ── Requisition Card ─────────────────────────────────────────────────────
    { name: "cardLabels", type: "array", required: true },
    { name: "cardReqIdPrefix", type: "string", required: true },
    { name: "cardQualificationsHeading", type: "string", required: true },
    { name: "cardCandidateCountSuffix", type: "string", required: true },
    { name: "cardViewDetailsLabel", type: "string", required: true },
    { name: "cardQuickApplyLabel", type: "string", required: true },
    { name: "cardExecutiveApplyLabel", type: "string", required: true },
    { name: "cardSaveLabel", type: "string", required: true },
    { name: "cardUnsaveLabel", type: "string", required: true },
    { name: "cardShareLabel", type: "string", required: true },
  ],
} satisfies TemplateDefinition;
