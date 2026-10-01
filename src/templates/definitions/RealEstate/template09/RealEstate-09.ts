import type { TemplateDefinition } from "../../types";

export const RealEstate09Definition = {
  fields: [
    // Core Branding & Search Hint
    { name: "companyName", type: "string", required: true },
    { name: "searchPlaceholder", type: "string", required: false },
    { name: "defaultLocation", type: "string", required: false },

    // Hero Section
    { name: "heroBadge", type: "string", required: false },
    { name: "heroTitle", type: "string", required: true },
    { name: "heroDescription", type: "string", required: false },
    { name: "verifiedListingsCount", type: "string", required: false },
    { name: "regionSubtext", type: "string", required: false },

    // Curated Properties (Core Listings)
    { name: "properties", type: "array", required: true },

    // Property Comparison Matrix (Feature Group D)
    { name: "comparisonProperties", type: "array", required: false },

    // Interactive Corridor Map (Feature Group B)
    { name: "mapPins", type: "array", required: false },
    { name: "activeMapProperty", type: "array", required: false },

    // Executive Advisors & Broker Directory (Feature Group E)
    { name: "advisors", type: "array", required: false },
    { name: "brokerDirectoryCount", type: "string", required: false },

    // Neighborhood Intelligence (Feature Group H)
    { name: "neighborhoods", type: "array", required: false },

    // Private Client Advisory Lead Capture (Feature Group K)
    { name: "advisoryLeadTitle", type: "string", required: false },
    { name: "advisoryLeadDescription", type: "string", required: false },

    // Footer & Licensing
    { name: "flagshipAddress", type: "string", required: false },
    { name: "brokerageLicenseNotice", type: "string", required: false },
    { name: "mlsIdCode", type: "string", required: false },
  ],
} satisfies TemplateDefinition;
