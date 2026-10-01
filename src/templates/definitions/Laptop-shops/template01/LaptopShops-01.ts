import type { TemplateDefinition } from "../../types";


export const LaptopShops01Definition = {
  fields: [
    // ── Products ─────────────────────────────────────────────────────────────
    { name: "products", type: "array", required: true },
    { name: "productId", type: "string", required: true },
    { name: "productCode", type: "string", required: true },
    { name: "productRev", type: "string", required: true },
    { name: "productTitle", type: "string", required: true },
    { name: "productDescription", type: "string", required: true },
    { name: "productLongDescription", type: "string", required: true },
    { name: "productImage", type: "string", required: true },
    { name: "productImageAlt", type: "string", required: true },
    { name: "productPrice", type: "number", required: true },
    { name: "productMonthly", type: "string", required: true },
    { name: "productSpecs", type: "array", required: true },
    { name: "productSpecLabel", type: "string", required: true },
    { name: "productSpecValue", type: "string", required: true },
    { name: "productSpecSub", type: "string", required: true },
    { name: "productSpecTone", type: "string", required: true },
    { name: "productStatusKind", type: "string", required: true },
    { name: "productStatusLabel", type: "string", required: true },
    { name: "productMetricLabel", type: "string", required: true },
    { name: "productMetricTone", type: "string", required: true },
    { name: "productGlow", type: "string", required: true },
    { name: "productBrand", type: "string", required: true },
    { name: "productFormFactor", type: "string", required: true },
    { name: "productCpuFamily", type: "string", required: true },
    { name: "productRamKey", type: "string", required: true },
    { name: "productGpuProfile", type: "string", required: true },
    { name: "productCondition", type: "string", required: true },
    { name: "productBenchmark", type: "number", required: true },
    { name: "productLeadTimeDays", type: "number", required: true },
    { name: "productHighlights", type: "array", required: true },
    { name: "productHighlight", type: "string", required: true },
    { name: "productDimensions", type: "string", required: true },
    { name: "productWeight", type: "string", required: true },
    { name: "productPower", type: "string", required: true },
    { name: "productWarranty", type: "string", required: true },

    // ── Product Details Modal ────────────────────────────────────────────────
    { name: "detailsAddToCartLabel", type: "string", required: true },
    { name: "detailsAddToCompareLabel", type: "string", required: true },
    { name: "detailsInCompareLabel", type: "string", required: true },
    { name: "detailsLeadTimeLabel", type: "string", required: true },
  ],
} satisfies TemplateDefinition;
