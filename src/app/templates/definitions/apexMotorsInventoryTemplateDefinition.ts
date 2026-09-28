import type { TemplateDefinition } from "@/types/index";

export const apexMotorsInventoryTemplateDefinition = {
  fields: [
    // ── Hero ─────────────────────────────────────────────────────────────────
    { name: "heroHeadline", type: "string", required: true },
    { name: "heroSubheadline", type: "string", required: true },

    // ── Filter Bar ───────────────────────────────────────────────────────────
    { name: "priceOptions", type: "array of Objects", required: false },
    { name: "optionValue", type: "string", required: false },
    { name: "optionLabel", type: "string", required: false },

    // ── Vehicles ─────────────────────────────────────────────────────────────
    { name: "vehicles", type: "array of Objects", required: true },
    { name: "vehicleId", type: "string", required: true },
    { name: "vehicleYear", type: "number", required: true },
    { name: "vehicleName", type: "string", required: true },
    { name: "vehicleMake", type: "string", required: true },
    { name: "vehicleModelKey", type: "string", required: true },
    { name: "vehicleBodyStyle", type: "string", required: true },
    { name: "vehicleMileage", type: "number", required: true },
    { name: "vehiclePrice", type: "number", required: true },
    { name: "vehicleStock", type: "string", required: true },
    { name: "vehicleVin", type: "string", required: true },
    { name: "vehicleImage", type: "string", required: true },
    { name: "vehicleImageAlt", type: "string", required: true },
    { name: "vehicleBadge", type: "object", required: true },
    { name: "vehicleBadgeText", type: "string", required: true },
    { name: "vehicleBadgeIcon", type: "string", required: true },
    { name: "vehicleBadgeTone", type: "string", required: true },
    { name: "vehicleFloorBadge", type: "string", required: true },
    { name: "vehicleSpecs", type: "array of Objects", required: true },
    { name: "vehicleSpecLabel", type: "string", required: true },
    { name: "vehicleSpecValue", type: "string", required: true },
    { name: "vehicleMonthly", type: "string", required: true },
    { name: "vehicleDownPayment", type: "string", required: true },
    { name: "vehicleExterior", type: "string", required: true },
    { name: "vehicleDescription", type: "string", required: true },
    { name: "vehicleFeatures", type: "array", required: true },
    { name: "vehicleFeature", type: "string", required: true },
    { name: "defaultSavedVehicleIds", type: "array", required: true },

    // ── Trust Section ────────────────────────────────────────────────────────
    { name: "trustOverline", type: "string", required: false },
    { name: "trustTitle", type: "string", required: false },
    { name: "trustBody", type: "string", required: false },
    { name: "trustPillars", type: "array of Objects", required: false },
    { name: "trustPillarId", type: "string", required: false },
    { name: "trustPillarTitle", type: "string", required: false },
    { name: "trustPillarDescription", type: "string", required: false },
    { name: "trustPillarCta", type: "string", required: false },
  ],
} satisfies TemplateDefinition;
