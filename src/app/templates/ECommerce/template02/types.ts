/* -------------------------------------------------------------------------- */
/*  Template 02 — Luxury Atelier e-commerce types                              */
/* -------------------------------------------------------------------------- */

export type ECommerce02Product = {
  productTitle: string;
  productPrice: string;
  productSubtitle: string;
  productCategory: string;
  productPrimaryImage: string;
  productHoverImage: string;
  productBadgeText?: string;
};

export type ECommerce02Category = {
  categoryLabel: string;
};

export type ECommerce02Data = {
  brandName: string;
  heroTitle: string;
  heroDescription: string;
  categories: ECommerce02Category[];
  products: ECommerce02Product[];
};
