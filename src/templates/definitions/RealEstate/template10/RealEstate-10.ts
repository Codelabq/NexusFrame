import type { TemplateDefinition } from "../../types";

export const RealEstate10Definition = {
  fields: [
    // Branding & Navigation
    { name: "companyName", type: "string", required: true },
    { name: "companyTagline", type: "string", required: false },
    { name: "companyInitials", type: "string", required: false },
    { name: "searchLocationPlaceholder", type: "string", required: false },
    { name: "favoritesCount", type: "number", required: false },
    { name: "compareCount", type: "number", required: false },

    // Hero Section & Search Console
    { name: "heroBadge", type: "string", required: false },
    { name: "heroTitle", type: "string", required: true },
    { name: "heroTitleHighlight", type: "string", required: false },
    { name: "heroDescription", type: "string", required: false },

    // Interactive Map Section (Feature Group B)
    { name: "mapPins", type: "array", required: false },
    { name: "activePinSnapshot", type: "array", required: false },

    // Signature Estate Portfolios (Core Listings)
    { name: "properties", type: "array", required: true },

    // Property Comparison Matrix (Feature Group D)
    { name: "comparisonProperties", type: "array", required: false },

    // Master Development Showcase (Feature Group I)
    { name: "developmentTitle", type: "string", required: false },
    { name: "developmentDescription", type: "string", required: false },
    { name: "developmentCompletion", type: "string", required: false },
    { name: "developmentLevels", type: "string", required: false },
    { name: "developmentUnitsCount", type: "string", required: false },
    { name: "developmentPreSoldPercent", type: "string", required: false },
    { name: "developmentImage", type: "string", required: false },
    { name: "developmentCaption", type: "string", required: false },
    { name: "developmentInventory", type: "array", required: false },

    // Cinematic Walkthrough & Virtual Media (Feature Group G)
    { name: "virtualTourTitle", type: "string", required: false },
    { name: "virtualTourRuntime", type: "string", required: false },
    { name: "virtualTourAudio", type: "string", required: false },
    { name: "virtualTourImage", type: "string", required: false },

    // Neighborhood Intelligence (Feature Group H)
    { name: "neighborhoods", type: "array", required: false },

    // Financial Tools: Mortgage Calculator Defaults (Feature Group L)
    { name: "defaultPropertyPrice", type: "number", required: false },
    { name: "defaultDownPaymentPercent", type: "number", required: false },
    { name: "defaultInterestRate", type: "string", required: false },

    // Advisory Directorate (Feature Group E)
    { name: "advisors", type: "array", required: false },

    // Research & Macroeconomic Essays (Feature Group J)
    { name: "articles", type: "array", required: false },

    // Compliance & Global Footer
    { name: "companyDescription", type: "string", required: false },
    { name: "complianceDisclaimer", type: "string", required: false },
  ],
} satisfies TemplateDefinition;
