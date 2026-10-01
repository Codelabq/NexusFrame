import type { TemplateDefinition } from "../../types";

export const RealEstate03Definition = {
fields: [
    // Core Agency & Branding
    { name: "companyName", type: "string", required: true },
    { name: "folioEdition", type: "string", required: false },
    { name: "folioSubtitle", type: "string", required: false },
    { name: "portfolioValuation", type: "string", required: false },
    { name: "portfolioHoldingsNote", type: "string", required: false },

    // Hero Section
    { name: "heroTitle", type: "string", required: true },
    { name: "heroItalicTitle", type: "string", required: false },
    { name: "heroDescription", type: "string", required: false },
    { name: "heroImage", type: "string", required: false },
    { name: "heroFeaturedTitle", type: "string", required: false },
    { name: "heroFeaturedDescription", type: "string", required: false },
    { name: "heroFeaturedPrice", type: "string", required: false },

    // Agency Ethos & Pillars (Chapter I)
    { name: "manifestoChapter", type: "string", required: false },
    { name: "manifestoTitle", type: "string", required: false },
    { name: "manifestoText", type: "string", required: false },
    { name: "retentionRate", type: "string", required: false },
    { name: "offMarketRate", type: "string", required: false },
    { name: "foundersImage", type: "string", required: false },
    { name: "foundersCaption", type: "string", required: false },
    { name: "pillars", type: "array", required: false },

    // Featured Curated Portfolio
    { name: "properties", type: "array", required: true },

    // Enclaves / Neighborhoods
    { name: "enclaves", type: "array", required: false },

    // Cartographic Overview & Map
    { name: "mapImage", type: "string", required: false },
    { name: "mapPins", type: "array", required: false },

    // Advisory Guild (Agents)
    { name: "advisorsTitle", type: "string", required: false },
    { name: "advisorsSubtitle", type: "string", required: false },
    { name: "advisors", type: "array", required: false },

    // Monograph Journal
    { name: "journalArticles", type: "array", required: false },

    // Direct Atelier Contacts
    { name: "atelierBoston", type: "string", required: false },
    { name: "atelierNewYork", type: "string", required: false },
    { name: "atelierSanFrancisco", type: "string", required: false },
  ],
} satisfies TemplateDefinition;