import type { TemplateDefinition } from "../../types";


export const ECommerce05Definition = {
  fields: [
    // ── Brand ────────────────────────────────────────────────────────────────
    { name: "brandName", type: "string", required: true },

    // ── Hero ─────────────────────────────────────────────────────────────────
    { name: "heroVideoUrl", type: "string", required: true },
    { name: "heroBadgePrimary", type: "string", required: true },
    { name: "heroBadgeSecondary", type: "string", required: true },
    { name: "heroDescription", type: "string", required: true },
    { name: "heroLiveBadge", type: "string", required: false },
    { name: "heroHookBullets", type: "array", required: false },
    { name: "heroHookBulletTitle", type: "string", required: false },
    { name: "heroHookBulletText", type: "string", required: false },

    // ── Buy Box ──────────────────────────────────────────────────────────────
    { name: "buyBoxTitle", type: "string", required: true },
    { name: "buyBoxRatingLabel", type: "string", required: true },
    { name: "finishSelectorLabel", type: "string", required: true },
    { name: "finishes", type: "array", required: true },
    { name: "finishId", type: "string", required: true },
    { name: "finishLabel", type: "string", required: true },
    { name: "finishColor", type: "string", required: true },

    // ── Bundles ──────────────────────────────────────────────────────────────
    { name: "bundles", type: "array", required: true },
    { name: "bundleId", type: "string", required: true },
    { name: "bundleTitle", type: "string", required: true },
    { name: "bundleDescription", type: "string", required: true },
    { name: "bundlePrice", type: "number", required: true },
    { name: "bundleOriginalPrice", type: "number", required: false },
    { name: "bundleIsMostPopular", type: "string", required: false },

    // ── Arsenal / Catalog ────────────────────────────────────────────────────
    { name: "arsenalEyebrow", type: "string", required: true },
    { name: "arsenalTitle", type: "string", required: true },
    { name: "arsenalDescription", type: "string", required: true },
    { name: "arsenalProducts", type: "array", required: true },
    { name: "arsenalProductId", type: "string", required: true },
    { name: "arsenalProductTitle", type: "string", required: true },
    { name: "arsenalProductDescription", type: "string", required: true },
    { name: "arsenalProductPrice", type: "number", required: true },
    { name: "arsenalProductOriginalPrice", type: "number", required: false },
    { name: "arsenalProductRating", type: "number", required: false },
    { name: "arsenalProductReviewsCount", type: "number", required: false },
    { name: "arsenalProductBadgeText", type: "string", required: false },
    { name: "arsenalProductIconName", type: "string", required: false },

    // ── Reviews ──────────────────────────────────────────────────────────────
    { name: "reviewsEyebrow", type: "string", required: true },
    { name: "reviewsTitle", type: "string", required: true },
    { name: "reviewsStats", type: "array", required: true },
    { name: "reviewsStatValue", type: "string", required: true },
    { name: "reviewsStatLabel", type: "string", required: true },
    { name: "ugcReviews", type: "array", required: true },
    { name: "ugcReviewId", type: "string", required: true },
    { name: "ugcReviewHandle", type: "string", required: true },
    { name: "ugcReviewAvatarUrl", type: "string", required: true },
    { name: "ugcReviewQuote", type: "string", required: true },
    { name: "ugcReviewVerifiedTag", type: "string", required: false },
    { name: "ugcReviewGoal", type: "string", required: true },
    { name: "ugcReviewResult", type: "string", required: true },

    // ── Comparison ───────────────────────────────────────────────────────────
    { name: "comparisonEyebrow", type: "string", required: false },
    { name: "comparisonTitle", type: "string", required: false },
    { name: "comparisonBadge", type: "string", required: false },
    { name: "comparisonBaselineTitle", type: "string", required: false },
    { name: "comparisonBaselinePoints", type: "array", required: false },
    { name: "comparisonBaselinePoint", type: "string", required: false },
    { name: "comparisonProductTitle", type: "string", required: false },
    { name: "comparisonProductPoints", type: "array", required: false },
    { name: "comparisonProductPoint", type: "string", required: false },
  ],
} satisfies TemplateDefinition;
