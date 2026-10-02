/* -------------------------------------------------------------------------- */
/*  Template 05 — Kinetiq recovery store types                                 */
/* -------------------------------------------------------------------------- */

export type ECommerce05Product = {
  arsenalProductId: string;
  arsenalProductTitle: string;
  arsenalProductDescription: string;
  arsenalProductPrice: number;
  arsenalProductOriginalPrice?: number;
  arsenalProductRating?: number;
  arsenalProductReviewsCount?: number;
  arsenalProductBadgeText?: string;
  arsenalProductIconName?: string;
};

export type kinetiqBundle = {
  bundleId: string;
  bundleTitle: string;
  bundleDescription: string;
  bundlePrice: number;
  bundleOriginalPrice?: number;
  bundleIsMostPopular?: boolean;
};

export type kinetiqFinish = {
  finishId: string;
  finishLabel: string;
  finishColor: string;
};

export type kinetiqHookBullet = {
  heroHookBulletTitle: string;
  heroHookBulletText: string;
};

export type kinetiqUgcReview = {
  ugcReviewId: string;
  ugcReviewHandle: string;
  ugcReviewAvatarUrl: string;
  ugcReviewQuote: string;
  ugcReviewVerifiedTag?: string;
  ugcReviewGoal: string;
  ugcReviewResult: string;
};

export type kinetiqReviewStat = {
  reviewsStatValue: string;
  reviewsStatLabel: string;
};

export type ECommerce05Data = {
  brandName: string;
  heroVideoUrl: string;
  heroBadgePrimary: string;
  heroBadgeSecondary: string;
  heroDescription: string;
  heroLiveBadge?: string;
  heroHookBullets?: kinetiqHookBullet[];
  buyBoxTitle: string;
  buyBoxRatingLabel: string;
  finishSelectorLabel: string;
  finishes: kinetiqFinish[];
  bundles: kinetiqBundle[];
  arsenalEyebrow: string;
  arsenalTitle: string;
  arsenalDescription: string;
  arsenalProducts: ECommerce05Product[];
  reviewsEyebrow: string;
  reviewsTitle: string;
  reviewsStats: kinetiqReviewStat[];
  ugcReviews: kinetiqUgcReview[];
  comparisonEyebrow?: string;
  comparisonTitle?: string;
  comparisonBadge?: string;
  comparisonBaselineTitle?: string;
  comparisonBaselinePoints?: string[];
  comparisonProductTitle?: string;
  comparisonProductPoints?: string[];
};
