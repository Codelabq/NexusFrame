import type { TemplateDefinition } from "@/types/index";

export const luxuryAtelierECommerceTemplateDefinition = {
  fields: [
    // ── Brand ────────────────────────────────────────────────────────────────
    { name: "brandName", type: "string", required: true },

    // ── Hero / Catalogue Header ──────────────────────────────────────────────
    { name: "heroTitle", type: "string", required: true },
    { name: "heroDescription", type: "string", required: true },

    // ── Products ─────────────────────────────────────────────────────────────
    { name: "products", type: "array", required: true },
    { name: "productTitle", type: "string", required: true },
    { name: "productPrice", type: "string", required: true },
    { name: "productSubtitle", type: "string", required: true },
    { name: "productCategory", type: "string", required: true },
    { name: "productPrimaryImage", type: "string", required: true },
    { name: "productHoverImage", type: "string", required: true },
    { name: "productBadgeText", type: "string", required: false },
  ],
} satisfies TemplateDefinition;
