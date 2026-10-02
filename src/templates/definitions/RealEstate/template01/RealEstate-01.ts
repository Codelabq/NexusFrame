import type { TemplateDefinition } from "../../types";

export const RealEstate01Definition = {
  fields: [
    // Core Branding & Meta
    { name: "companyName", type: "string", required: true },
    { name: "companyTagline", type: "string", required: false },
    { name: "phone", type: "string", required: false },
    { name: "email", type: "string", required: false },
    { name: "address", type: "string", required: false },

    // Hero Section
    { name: "heroBadge", type: "string", required: false },
    { name: "heroTitle", type: "string", required: true },
    { name: "heroDescription", type: "string", required: false },
    { name: "heroImage", type: "string", required: false },

    // Property Types / Classifications
    { name: "propertyTypes", type: "array", required: false },

    // Core Listings Grid
    { name: "properties", type: "array", required: true },

    // Geographic Locations & Map
    { name: "locations", type: "array", required: false },
    { name: "mapImage", type: "string", required: false },
    { name: "mapPins", type: "array", required: false },

    // Trust Indicators
    { name: "trustFeatures", type: "array", required: false },

    // Direct Inquiry CTA
    { name: "ctaTitle", type: "string", required: false },
    { name: "ctaDescription", type: "string", required: false },
  ],
} satisfies TemplateDefinition;
