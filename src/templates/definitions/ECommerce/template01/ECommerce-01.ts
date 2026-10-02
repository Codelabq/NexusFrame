import type { TemplateDefinition } from "../../types";

export const ECommerce01Definition = {
  fields: [
    // ── Brand ────────────────────────────────────────────────────────────────
    { name: "brandName", type: "string", required: true },
    // ── Hero ─────────────────────────────────────────────────────────────────
    { name: "heroTitle", type: "string", required: true },
    { name: "heroDescription", type: "string", required: true },
    { name: "heroStats", type: "array", required: true },
      { name: "heroStatValue", type: "string", required: true },
      { name: "heroStatLabel", type: "string", required: true },

    // ── Spotlight ────────────────────────────────────────────────────────────
    { name: "spotlight", type: "array", required: true },
    { name: "spotlight.title", type: "string", required: true },
    { name: "spotlight.subtitle", type: "string", required: true },
    { name: "spotlight.description", type: "string", required: true },
    { name: "spotlight.badgeText", type: "string", required: true },
    { name: "spotlight.price", type: "string", required: true },
    { name: "spotlight.imageUrl", type: "string", required: true },
    { name: "spotlight.imageLabel", type: "string", required: true },

    // ── Products ─────────────────────────────────────────────────────────────
    { name: "products", type: "array", required: true },
    { name: "productId", type: "string", required: true },
    { name: "productTitle", type: "string", required: true },
    { name: "productDescription", type: "string", required: true },
    { name: "productPrice", type: "string", required: true },
    { name: "productCategory", type: "string", required: true },
    { name: "productBadgeText", type: "string", required: false },
    { name: "productImageUrl", type: "string", required: true },
  ],
} satisfies TemplateDefinition;
