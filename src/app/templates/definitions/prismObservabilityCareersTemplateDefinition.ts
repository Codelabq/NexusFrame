import type { TemplateDefinition } from "@/types/index";


export const prismObservabilityCareersTemplateDefinition = {
  fields: [
    // ── Brand ────────────────────────────────────────────────────────────────
    { name: "brandName", type: "string", required: true },

    // ── Status Banner ────────────────────────────────────────────────────────
    { name: "bannerText", type: "string", required: true },

    // ── Hero ─────────────────────────────────────────────────────────────────
    { name: "heroTitle", type: "string", required: true },
    { name: "heroTitleAccent", type: "string", required: false },
    { name: "heroDescription", type: "string", required: true },
    { name: "heroPillars", type: "array of Objects", required: false },
    { name: "heroPillarLabel", type: "string", required: false },
    { name: "heroPillarValue", type: "string", required: false },

    // ── Metrics ──────────────────────────────────────────────────────────────
    { name: "metrics", type: "array of Objects", required: false },
    { name: "metricValue", type: "string", required: false },
    { name: "metricSub", type: "string", required: false },
    { name: "metricLabel", type: "string", required: false },
    { name: "metricDescription", type: "string", required: false },

    // ── Roles Feed ───────────────────────────────────────────────────────────
    { name: "rolesEyebrow", type: "string", required: true },
    { name: "rolesTitle", type: "string", required: true },
    { name: "rolesDescription", type: "string", required: true },

    // ── Roles ────────────────────────────────────────────────────────────────
    { name: "roles", type: "array of Objects", required: true },
    { name: "roleId", type: "string", required: true },
    { name: "roleTitle", type: "string", required: true },
    { name: "roleDiscipline", type: "string", required: true },
    { name: "roleDisciplineLabel", type: "string", required: true },
    { name: "roleBadge", type: "string", required: false },
    { name: "roleBadgeType", type: "string", required: false },
    { name: "roleTeam", type: "string", required: true },
    { name: "roleRefId", type: "string", required: true },
    { name: "roleLocation", type: "string", required: true },
    { name: "roleCompensation", type: "string", required: true },
    { name: "roleDescription", type: "string", required: true },
    { name: "roleRequirements", type: "array", required: true },
    { name: "roleRequirement", type: "string", required: true },
    { name: "roleTools", type: "array", required: true },
    { name: "roleTool", type: "string", required: true },
    { name: "roleStatusText", type: "string", required: false },

    // ── Engineering Codex Modal ──────────────────────────────────────────────
    { name: "codexTitle", type: "string", required: false },
    { name: "codexSubtitle", type: "string", required: false },
    { name: "codexSections", type: "array of Objects", required: false },
    { name: "codexSectionTitle", type: "string", required: false },
    { name: "codexSectionBody", type: "string", required: false },
  ],
} satisfies TemplateDefinition;
