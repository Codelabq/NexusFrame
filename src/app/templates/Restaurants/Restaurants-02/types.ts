/* -------------------------------------------------------------------------- */
/*  Template 13 — Tokyo Street Food POS types                                  */
/* -------------------------------------------------------------------------- */

export type Restaurants02Product = {
  productId: string;
  productName: string;
  productCategory: string;
  productPrice: number;
  productDescription: string;
  productTags: string[];
  productStock: string;
  productBadge?: string;
  productBadgeTone?: string;
  productCode: string;
  productImageUrl: string;
  productImageAlt: string;
};

export type Restaurants02Category = {
  categoryId: string;
  categoryLabel: string;
};

export type Restaurants02TagFilter = {
  tagFilterId: string;
  tagFilterLabel: string;
};
