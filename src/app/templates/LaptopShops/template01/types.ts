/* -------------------------------------------------------------------------- */
/*  Template 14 — Silicon Craft workstation store types                        */
/* -------------------------------------------------------------------------- */

export type Tone = "primary" | "secondary" | "tertiary" | "surface";

export type LaptopShops01ProductSpec = {
  productSpecLabel: string;
  productSpecValue: string;
  productSpecSub: string;
  productSpecTone: string;
};

export type LaptopShops01Product = {
  productId: string;
  productCode: string;
  productRev: string;
  productTitle: string;
  productDescription: string;
  productLongDescription: string;
  productImage: string;
  productImageAlt: string;
  productPrice: number;
  productMonthly: string;
  productSpecs: LaptopShops01ProductSpec[];
  productStatusKind: string;
  productStatusLabel: string;
  productMetricLabel: string;
  productMetricTone: string;
  productGlow: string;
  productBrand: string;
  productFormFactor: string;
  productCpuFamily: string;
  productRamKey: string;
  productGpuProfile: string;
  productCondition: string;
  productBenchmark: number;
  productLeadTimeDays: number;
  productHighlights: string[];
  productDimensions: string;
  productWeight: string;
  productPower: string;
  productWarranty: string;
};

export type FilterOption = {
  filterOptionValue: string;
  filterOptionLabel: string;
  filterOptionShort?: string;
};

export type FilterGroup = {
  filterGroupId: string;
  filterGroupLabel: string;
  filterGroupTone: string;
  filterGroupMenuWidthClass?: string;
  filterGroupOptions: FilterOption[];
};

export type Option = {
  optionValue: string;
  optionLabel: string;
};

export type EnterpriseChecklistItem = {
  enterpriseChecklistLabel: string;
  enterpriseChecklistTone: string;
};

export type TechSheetRow = {
  detailsTechSheetLabel: string;
};
