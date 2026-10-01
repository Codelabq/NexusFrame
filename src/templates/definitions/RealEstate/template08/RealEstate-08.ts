import type { TemplateDefinition } from "../../types";

export const RealEstate08Definition = {
  fields: [
    // Masthead & Publication Metadata
    { name: "companyName", type: "string", required: true },
    { name: "issueNumber", type: "string", required: false },
    { name: "globalBureaus", type: "string", required: false },
    { name: "marketTickerText", type: "string", required: false },

    // Cover Broadsheet Story (Feature Group J)
    { name: "coverCategory", type: "string", required: false },
    { name: "coverReadTime", type: "string", required: false },
    { name: "coverTitle", type: "string", required: true },
    { name: "coverDescription", type: "string", required: false },
    { name: "coverAuthorName", type: "string", required: false },
    { name: "coverAuthorRole", type: "string", required: false },
    { name: "coverAuthorInitials", type: "string", required: false },
    { name: "coverImage", type: "string", required: false },
    { name: "coverPlateCaption", type: "string", required: false },
    { name: "coverRecordNumber", type: "string", required: false },

    // Featured Curated Estates (Core Listings)
    { name: "properties", type: "array", required: true },

    // Market Insights & Yield Macroeconomics (Feature Group J)
    { name: "marketReportTitle", type: "string", required: false },
    { name: "marketReportLeadParagraph", type: "string", required: false },
    { name: "marketReportBodyParagraph", type: "string", required: false },
    { name: "marketPullQuote", type: "string", required: false },
    { name: "marketMetrics", type: "array", required: false },
    { name: "districtYields", type: "array", required: false },

    // Neighborhood Guides & Area Monographs (Feature Group H)
    { name: "neighborhoods", type: "array", required: false },

    // Critical Discourse / Journal Articles (Feature Group J)
    { name: "articles", type: "array", required: false },

    // Advisory Directorate / Principals (Feature Group E)
    { name: "advisors", type: "array", required: false },

    // Weekly Dispatch Newsletter (Feature Group K)
    { name: "newsletterTitle", type: "string", required: false },
    { name: "newsletterDescription", type: "string", required: false },

    // Confidential Client Consultation Office (Feature Group K)
    { name: "officeAddress", type: "string", required: false },
    { name: "advisoryEmail", type: "string", required: false },

    // Footer Attribution
    { name: "issnNumber", type: "string", required: false },
    { name: "catalogNumber", type: "string", required: false },
  ],
} satisfies TemplateDefinition;
