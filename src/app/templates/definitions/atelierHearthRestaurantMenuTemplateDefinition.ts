import type { TemplateDefinition } from "@/types/index";

export const atelierHearthRestaurantMenuTemplateDefinition = {
  fields: [
    // ── Brand ────────────────────────────────────────────────────────────────
    { name: "brandName", type: "string", required: true },

    // ── Header ───────────────────────────────────────────────────────────────
    { name: "headerEyebrow", type: "string", required: true },
    { name: "headerTitle", type: "string", required: true },
    { name: "headerDescription", type: "string", required: true },

    // ── Featured Special ─────────────────────────────────────────────────────
    { name: "featuredImageUrl", type: "string", required: true },
    { name: "featuredBadge", type: "string", required: true },
    { name: "featuredEyebrow", type: "string", required: true },
    { name: "featuredPrice", type: "string", required: true },
    { name: "featuredTitle", type: "string", required: true },
    { name: "featuredDescription", type: "string", required: true },
    { name: "featuredTags", type: "array", required: true },
    { name: "featuredTag", type: "string", required: true },
    { name: "sommelierTitle", type: "string", required: true },
    { name: "sommelierNote", type: "string", required: true },
    { name: "featuredAddCtaLabel", type: "string", required: true },
    { name: "featuredDossierCtaLabel", type: "string", required: true },

    // ── Menu Sections ────────────────────────────────────────────────────────
    { name: "categorySections", type: "array of Objects", required: true },
    { name: "categorySectionId", type: "string", required: true },
    { name: "categorySectionIndex", type: "string", required: true },
    { name: "categorySectionTitle", type: "string", required: true },
    { name: "categorySectionNote", type: "string", required: true },

    // ── Dishes ───────────────────────────────────────────────────────────────
    { name: "dishes", type: "array of Objects", required: true },
    { name: "dishId", type: "string", required: true },
    { name: "dishCategory", type: "string", required: true },
    { name: "dishName", type: "string", required: true },
    { name: "dishDescription", type: "string", required: true },
    { name: "dishPrice", type: "string", required: true },
    { name: "dishTags", type: "array", required: true },
    { name: "dishTag", type: "string", required: true },
    { name: "dishDietary", type: "array", required: true },
    { name: "dishDietaryTag", type: "string", required: true },
    { name: "dishProvenance", type: "string", required: true },
    { name: "dishImageUrl", type: "string", required: true },
    { name: "dishImageAlt", type: "string", required: true },

    // ── Cellar Section ───────────────────────────────────────────────────────
    { name: "cellarPours", type: "array of Objects", required: false },
    { name: "cellarPourId", type: "string", required: false },
    { name: "cellarPourType", type: "string", required: false },
    { name: "cellarPourName", type: "string", required: false },
    { name: "cellarPourOrigin", type: "string", required: false },
    { name: "cellarPourPrice", type: "string", required: false },
    { name: "cellarPourNote", type: "string", required: false },
  ],
} satisfies TemplateDefinition;
