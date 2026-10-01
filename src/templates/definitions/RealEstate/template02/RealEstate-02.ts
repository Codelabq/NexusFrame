import type { TemplateDefinition } from "../../types";

export const RealEstate02Definition = {
fields: [
    // Branding & Header Meta
    { name: "companyName", type: "string", required: true },
    { name: "companyTagline", type: "string", required: false },

    // Search Console & Filter Strip
    { name: "activeLocations", type: "array", required: false },
    { name: "quickFilters", type: "array", required: false },
    { name: "submarkets", type: "array", required: false },

    // Discovery Toolbar Counters
    { name: "totalListingsCount", type: "string", required: false },
    { name: "marketRegionLabel", type: "string", required: false },
    { name: "mlsStatusLabel", type: "string", required: false },

    // Main Discovery Listings Grid
    { name: "properties", type: "array", required: true },

    // Split Map Canvas & Pins
    { name: "mapPins", type: "array", required: false },
    { name: "activePinCallout", type: "array", required: false },

    // Regional Market Intelligence
    { name: "marketIntelligenceTitle", type: "string", required: false },
    { name: "marketIntelligenceSubtitle", type: "string", required: false },
    { name: "marketStats", type: "array", required: false },
  ],
} satisfies TemplateDefinition;