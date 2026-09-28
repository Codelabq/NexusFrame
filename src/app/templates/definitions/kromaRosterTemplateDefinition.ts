import type { TemplateDefinition } from "@/types/index";

export const kromaRosterTemplateDefinition = {
  fields: [
    // ── Brand ────────────────────────────────────────────────────────────────
    { name: "brandName", type: "string", required: true },

    // ── Hero ─────────────────────────────────────────────────────────────────
    { name: "heroImageUrl", type: "string", required: true },
    { name: "heroTitle", type: "string", required: true },
    { name: "heroDescription", type: "string", required: true },

    // ── Roles ────────────────────────────────────────────────────────────────
    { name: "roles", type: "array of Objects", required: true },
    { name: "roleId", type: "string", required: true },
    { name: "roleDiscipline", type: "string", required: true },
    { name: "roleTitle", type: "string", required: true },
    { name: "roleCampaign", type: "string", required: true },
    { name: "roleStatus", type: "string", required: true },
    { name: "roleCompensation", type: "string", required: true },
    { name: "roleTimeline", type: "string", required: true },
    { name: "roleRequirement", type: "string", required: true },
    { name: "roleDeliverable", type: "string", required: true },
    { name: "roleTools", type: "array", required: true },
    { name: "roleTool", type: "string", required: true },
    { name: "roleImageUrl", type: "string", required: true },
    { name: "roleImageAlt", type: "string", required: true },

    // ── Metrics ──────────────────────────────────────────────────────────────
    { name: "metrics", type: "array of Objects", required: true },
    { name: "metricValue", type: "string", required: true },
    { name: "metricLabel", type: "string", required: true },

    // ── Application Drawer ───────────────────────────────────────────────────
    { name: "drawerLabels", type: "object", required: true },
    { name: "drawerFields", type: "array of Objects", required: true },
    { name: "drawerFieldLabel", type: "string", required: true },
    { name: "drawerFieldName", type: "string", required: true },
    { name: "drawerFieldType", type: "string", required: true },
    { name: "drawerFieldPlaceholder", type: "string", required: true },
  ],
} satisfies TemplateDefinition;
