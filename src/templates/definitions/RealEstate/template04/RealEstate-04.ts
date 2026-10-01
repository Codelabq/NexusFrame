import type { TemplateDefinition } from "../../types";

export const RealEstate04Definition = {
  fields: [
    // Core Branding & Monograph Meta
    { name: "companyName", type: "string", required: true },
    { name: "companyTagline", type: "string", required: false },
    { name: "monographEdition", type: "string", required: false },

    // Hero Section
    { name: "heroTitle", type: "string", required: true },
    { name: "heroDescription", type: "string", required: false },
    { name: "heroImage", type: "string", required: false },

    // Curated Portfolio (Properties)
    { name: "properties", type: "array", required: true },

    // Media Experience & Diagnostics (Feature Group G)
    { name: "cinemaVignetteTitle", type: "string", required: false },
    { name: "cinemaVignetteSubtitle", type: "string", required: false },
    { name: "cinemaVignetteImage", type: "string", required: false },

    // Cartographic Portfolio & Enclave Diagnostics (Feature Group B)
    { name: "mapImage", type: "string", required: false },
    { name: "mapPins", type: "array", required: false },
    { name: "activeMandatesCount", type: "string", required: false },
    { name: "avgParcelFootprint", type: "string", required: false },

    // Managing Partners & Advisors (Feature Group E)
    { name: "advisors", type: "array", required: false },

    // Global Bureaus
    { name: "bureauLondon", type: "string", required: false },
    { name: "bureauNewYork", type: "string", required: false },
    { name: "bureauZurich", type: "string", required: false },
  ],
} satisfies TemplateDefinition;
