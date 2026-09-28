import type { TemplateDefinition } from "@/types/index";


export const nvaultDropTerminalTemplateDefinition = {
  fields: [
    // ── Hero ─────────────────────────────────────────────────────────────────
    { name: "heroEyebrow", type: "string", required: true },
    { name: "heroSubtitle", type: "string", required: true },

    // ── Product Canvas ───────────────────────────────────────────────────────
    { name: "productImageUrl", type: "string", required: true },
    { name: "canvasWatermark", type: "string", required: false },
    { name: "modelId", type: "string", required: false },

    // ── Purchase Terminal ────────────────────────────────────────────────────
    { name: "mintTitle", type: "string", required: true },
    { name: "mintSubtitle", type: "string", required: true },
    { name: "mintPrice", type: "string", required: true },
    { name: "mintPriceCrypto", type: "string", required: false },

    // ── Sizes ────────────────────────────────────────────────────────────────
    { name: "shoeSizes", type: "array of Objects", required: true },
    { name: "shoeSizeLabel", type: "string", required: true },
    { name: "shoeSizeStock", type: "string", required: true },
    { name: "shoeSizeSoldOut", type: "boolean", required: true },

    // ── Hardware Specs ───────────────────────────────────────────────────────
    { name: "hardwareSpecs", type: "array of Objects", required: true },
    { name: "hardwareSpecLabel", type: "string", required: true },
    { name: "hardwareSpecValue", type: "string", required: true },

    // ── Catalog Archive ──────────────────────────────────────────────────────
    { name: "relatedProducts", type: "array of Objects", required: true },
    { name: "relatedProductId", type: "string", required: true },
    { name: "relatedProductName", type: "string", required: true },
    { name: "relatedProductSpecimen", type: "string", required: false },
    { name: "relatedProductPriceUSD", type: "number", required: true },
    { name: "relatedProductPriceETH", type: "string", required: false },
    { name: "relatedProductImage", type: "string", required: true },
    { name: "relatedProductTechnicalBullets", type: "array", required: true },
    { name: "relatedProductTechnicalBullet", type: "string", required: true },
  ],
} satisfies TemplateDefinition;
