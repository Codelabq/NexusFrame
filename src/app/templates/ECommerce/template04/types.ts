/* -------------------------------------------------------------------------- */
/*  Template 04 — Prime Mart marketplace types                                 */
/* -------------------------------------------------------------------------- */

export type ECommerce04Product = {
  productId: string;
  productTitle: string;
  productListPrice?: string;
  productCurrentPrice: string;
  productDiscount?: string;
  productRating?: number;
  productReviewsCount?: number;
  productSalesVolume?: string;
  productDeliveryDate?: string;
  productBadgeText?: string;
  productPrimaryImage: string;
  productColorSwatches?: string[];
  productKeySpecs: string[];
};

export type primeMartDepartment = {
  departmentLabel: string;
};

export type primeMartBrand = {
  brandLabel: string;
};

export type ECommerce04Data = {
  brandName: string;
  departments: primeMartDepartment[];
  brands: primeMartBrand[];
  products: ECommerce04Product[];
};
