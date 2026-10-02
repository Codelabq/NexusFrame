import type { TemplateDefinition } from "../../types";


export const Restaurants02Definition = {
  fields: [
    // ── Combo Promo ──────────────────────────────────────────────────────────
    { name: "comboBadge", type: "string", required: true },
    { name: "comboImageUrl", type: "string", required: true },
    { name: "comboImageAlt", type: "string", required: true },
    { name: "comboOverlayTitle", type: "string", required: true },
    { name: "comboExclusiveBadge", type: "string", required: true },
    { name: "comboTitle", type: "string", required: true },
    { name: "comboSaveBadge", type: "string", required: true },
    { name: "comboPrice", type: "string", required: true },
    { name: "comboOriginalPrice", type: "string", required: true },
    { name: "comboFeatures", type: "array", required: true },
    { name: "comboFeature", type: "string", required: true },
    { name: "comboScarcityLabel", type: "string", required: true },
    { name: "comboCtaPrice", type: "string", required: true },

    // ── Products ─────────────────────────────────────────────────────────────
    { name: "products", type: "array", required: true },
    { name: "productId", type: "string", required: true },
    { name: "productName", type: "string", required: true },
    { name: "productCategory", type: "string", required: true },
    { name: "productPrice", type: "number", required: true },
    { name: "productDescription", type: "string", required: true },
    { name: "productTags", type: "array", required: true },
    { name: "productTag", type: "string", required: true },
    { name: "productStock", type: "string", required: true },
    { name: "productBadge", type: "string", required: false },
    { name: "productBadgeTone", type: "string", required: false },
    { name: "productCode", type: "string", required: true },
    { name: "productImageUrl", type: "string", required: true },
    { name: "productImageAlt", type: "string", required: true },
  ],
} satisfies TemplateDefinition;
