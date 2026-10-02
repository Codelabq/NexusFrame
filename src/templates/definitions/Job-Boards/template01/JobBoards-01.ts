import type { TemplateDefinition } from "../../types";


export const JobBoards01Definition = {
  fields: [
    // ── Hero ─────────────────────────────────────────────────────────────────
    { name: "heroBadgeText", type: "string", required: true },
    { name: "heroTitle", type: "string", required: true },
    { name: "heroDescription", type: "string", required: true },

    // ── Stack Highlights ─────────────────────────────────────────────────────
    { name: "stackHighlights", type: "array", required: true },
    { name: "stackHighlightTitle", type: "string", required: true },
    { name: "stackHighlightDetail", type: "string", required: true },

    // ── Roles ────────────────────────────────────────────────────────────────
    { name: "roles", type: "array", required: true },
    { name: "roleId", type: "string", required: true },
    { name: "roleTitle", type: "string", required: true },
    { name: "roleDept", type: "string", required: true },
    { name: "roleDeptLabel", type: "string", required: true },
    { name: "roleLocation", type: "string", required: true },
    { name: "roleLocationLabel", type: "string", required: true },
    { name: "roleCompensation", type: "string", required: true },
    { name: "roleDescription", type: "string", required: true },
    { name: "roleDeliverables", type: "array", required: true },
    { name: "roleDeliverable", type: "string", required: true },
    { name: "roleSkills", type: "array", required: true },
    { name: "roleSkill", type: "string", required: true },

    // ── Benefits ─────────────────────────────────────────────────────────────
    { name: "benefits", type: "array", required: true },
    { name: "benefitTitle", type: "string", required: true },
    { name: "benefitDetail", type: "string", required: true },
    { name: "benefitNote", type: "string", required: true },
  ],
} satisfies TemplateDefinition;
