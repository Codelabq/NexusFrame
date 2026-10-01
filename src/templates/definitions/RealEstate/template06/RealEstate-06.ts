import type { TemplateDefinition } from "../../types";

export const RealEstate06Definition = {
  fields: [
    // Project Identification & Overview
    { name: "companyName", type: "string", required: true },
    { name: "projectNumber", type: "string", required: false },
    { name: "developmentCategory", type: "string", required: false },
    { name: "architectPartner", type: "string", required: false },
    { name: "developmentTitle", type: "string", required: true },
    { name: "developmentSubtitle", type: "string", required: false },
    { name: "developmentDescription", type: "string", required: false },
    { name: "heroImage", type: "string", required: false },
    { name: "targetOccupancy", type: "string", required: false },
    { name: "elevationScale", type: "string", required: false },
    { name: "residencesCount", type: "string", required: false },
    { name: "designArchitect", type: "string", required: false },

    // Masterplan & Strata (Feature Group I)
    { name: "masterplanImage", type: "string", required: false },
    { name: "masterplanStrata", type: "array", required: false },

    // Residences & Unit Inventory (Core & Feature Group I)
    { name: "featuredUnits", type: "array", required: false },
    { name: "units", type: "array", required: true },

    // CAD Floor Plan Viewer (Feature Group G & I)
    { name: "activePlanImage", type: "string", required: false },
    { name: "activePlanTitle", type: "string", required: false },
    { name: "activePlanDimensions", type: "array", required: false },
    { name: "activePlanFinishes", type: "string", required: false },

    // Architectural Amenities (Feature Group F)
    { name: "amenities", type: "array", required: false },

    // Construction Chronology (Timeline)
    { name: "timelineMilestones", type: "array", required: false },

    // Location & Environs (Feature Group B & H)
    { name: "mapImage", type: "string", required: false },
    { name: "districtTitle", type: "string", required: false },
    { name: "districtDescription", type: "string", required: false },

    // Sales Directors & Gallery (Feature Group E)
    { name: "galleryTitle", type: "string", required: false },
    { name: "galleryDescription", type: "string", required: false },
    { name: "galleryAddress", type: "string", required: false },
    { name: "galleryHours", type: "string", required: false },
    { name: "galleryContact", type: "string", required: false },
    { name: "salesDirectors", type: "array", required: false },

    // VIP Registration
    { name: "vipRegistrationTitle", type: "string", required: false },
    { name: "vipRegistrationDescription", type: "string", required: false },

    // Footer
    { name: "developmentCode", type: "string", required: false },
  ],
} satisfies TemplateDefinition;
