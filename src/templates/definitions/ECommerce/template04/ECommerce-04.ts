import type { TemplateDefinition } from "../../types";


export const ECommerce04Definition = {
  fields: [
    // ── Brand ────────────────────────────────────────────────────────────────
    { name: "brandName", type: "string", required: true },

    // ── Filters ──────────────────────────────────────────────────────────────
    { name: "departments", type: "array", required: true },
    { name: "departmentLabel", type: "string", required: true },
    { name: "brands", type: "array", required: true },
    { name: "brandLabel", type: "string", required: true },

    // ── Products ─────────────────────────────────────────────────────────────
    { name: "products", type: "array", required: true },
    { name: "productId", type: "string", required: true },
    { name: "productTitle", type: "string", required: true },
    { name: "productListPrice", type: "string", required: false },
    { name: "productCurrentPrice", type: "string", required: true },
    { name: "productDiscount", type: "string", required: false },
    { name: "productRating", type: "number", required: false },
    { name: "productReviewsCount", type: "number", required: false },
    { name: "productSalesVolume", type: "string", required: false },
    { name: "productDeliveryDate", type: "string", required: false },
    { name: "productBadgeText", type: "string", required: false },
    { name: "productPrimaryImage", type: "string", required: true },
    { name: "productColorSwatches", type: "array", required: false },
    { name: "productKeySpecs", type: "array", required: true },
    { name: "productKeySpec", type: "string", required: true },
  ],
} satisfies TemplateDefinition;
