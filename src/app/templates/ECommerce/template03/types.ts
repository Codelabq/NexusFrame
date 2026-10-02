/* -------------------------------------------------------------------------- */
/*  Template 03 — Lumen Goods e-commerce types                                 */
/* -------------------------------------------------------------------------- */

export type ECommerce03Product = {
  productId: string;
  productTitle: string;
  productDescription: string;
  productPrice: string;
  productRating: number;
  productReviewsCount: number;
  productBadgeText: string;
  productPrimaryImage: string;
  productColorSwatches: string[];
  productSizes: string[];
  productCategory: string;
};

export type lumenHeroProduct = {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
};

export type lumenHeroMetric = {
  heroMetricValue: string;
  heroMetricLabel: string;
};

export type lumenCategory = {
  categoryLabel: string;
};

export type lumenPerformanceMetric = {
  performanceMetricLabel: string;
  performanceMetricValue: string;
};

export type lumenTrustItem = {
  trustItemTitle: string;
  trustItemCopy: string;
  trustItemIcon: string;
};

export type lumenPublicationLogo = {
  publicationLogoName: string;
};

export type lumenFeaturedReview = {
  quote: string;
  detail: string;
  name: string;
  role: string;
  product: string;
};

export type lumenSpotlightTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export type ECommerce03Data = {
  brandName: string;
  heroTitle: string;
  heroDescription: string;
  heroMetrics: lumenHeroMetric[];
  heroProduct: lumenHeroProduct;
  publicationSectionLabel: string;
  publicationLogos: lumenPublicationLogo[];
  catalogTitle: string;
  catalogLoadMoreLabel: string;
  categories: lumenCategory[];
  testimonialEyebrow: string;
  testimonialTitle: string;
  featuredReview: lumenFeaturedReview;
  spotlightTestimonial: lumenSpotlightTestimonial;
  performanceMetrics: lumenPerformanceMetric[];
  trustItems: lumenTrustItem[];
  products: ECommerce03Product[];
};
