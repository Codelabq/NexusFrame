import type { TemplateDefinition } from "../../types";

export const RealEstate07Definition = {
 fields: [
    // Header & Global Search Bar
    { name: "companyName", type: "string", required: true },
    { name: "searchPlaceholder", type: "string", required: false },
    { name: "searchQuery", type: "string", required: false },
    { name: "searchBadge", type: "string", required: false },
    { name: "savedLocationsCount", type: "number", required: false },

    // Left Discovery Pane Telemetry
    { name: "regionTitle", type: "string", required: true },
    { name: "viewportCoordinates", type: "string", required: false },
    { name: "totalListingsLabel", type: "string", required: false },

    // Primary Properties Feed
    { name: "properties", type: "array", required: true },

    // Right Interactive Map Canvas (Feature Group B)
    { name: "mapPins", type: "array", required: false },
    { name: "activePinPreview", type: "array", required: false },
    { name: "mapClusters", type: "array", required: false },

    // Bottom Submarket Intelligence Bar (Feature Group H)
    { name: "submarkets", type: "array", required: false },
    { name: "mlsSyncTimestamp", type: "string", required: false },

    // Compliance & Legal Footer
    { name: "copyrightStatement", type: "string", required: false },
    { name: "mlsFeedVersion", type: "string", required: false },
  ],
} satisfies TemplateDefinition;
