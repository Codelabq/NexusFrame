/* -------------------------------------------------------------------------- */
/*  Template 01 — Digital Assistant e-commerce types                           */
/* -------------------------------------------------------------------------- */

export type ECommerce01Product = {
  productId: string;
  productTitle: string;
  productDescription: string;
  productPrice: number;
  productCategory: string;
  productBadgeText?: string;
  productImageUrl: string;
};

export type HeroStat = {
  heroStatValue: string;
  heroStatLabel: string;
};

export type Spotlight = {
  title: string;
  subtitle: string;
  description: string;
  badgeText: string;
  price: string;
  imageUrl: string;
  imageLabel: string;
};

export type ECommerce01Data = {
  heroTitle: string;
  heroDescription: string;
  heroStats: HeroStat[];
  spotlight: Spotlight;
  products: ECommerce01Product[];
};
