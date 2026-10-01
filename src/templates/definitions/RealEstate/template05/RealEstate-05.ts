import type { TemplateDefinition } from "../../types";

export const RealEstate05Definition = {
 fields: [
    // Core Branding & Search Hint
    { name: "companyName", type: "string", required: true },
    { name: "searchLocationPlaceholder", type: "string", required: false },
    { name: "savedHomesCount", type: "string", required: false },

    // Hero Section
    { name: "heroBadge", type: "string", required: false },
    { name: "heroTitle", type: "string", required: true },
    { name: "heroTitleHighlight", type: "string", required: false },
    { name: "heroDescription", type: "string", required: false },
    { name: "heroImage", type: "string", required: false },
    { name: "heroTickerText", type: "string", required: false },

    // Properties Feed
    { name: "properties", type: "array", required: true },

    // Amenities (Feature Group F)
    { name: "amenities", type: "array", required: false },

    // Neighborhoods & Enclaves (Feature Group H)
    { name: "neighborhoods", type: "array", required: false },

    // Core Map & Spatial Pins (Feature Group B)
    { name: "mapImage", type: "string", required: false },
    { name: "mapPins", type: "array", required: false },

    // Saved Homes Tray & Alerts (Feature Group C)
    { name: "savedHomes", type: "array", required: false },

    // Concierge & Viewing Lead Gen (Feature Group K)
    { name: "conciergeName", type: "string", required: false },
    { name: "conciergeRole", type: "string", required: false },
    { name: "conciergeResponseTime", type: "string", required: false },
    { name: "conciergePhoto", type: "string", required: false },
  ],
} satisfies TemplateDefinition;
