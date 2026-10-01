/* -------------------------------------------------------------------------- */
/*  Template 15 — Apex Motors inventory store types                            */
/* -------------------------------------------------------------------------- */

export type Vehicle = {
  vehicleId: string;
  vehicleYear: number;
  vehicleName: string;
  vehicleMake: string;
  vehicleModelKey: string;
  vehicleBodyStyle: string;
  vehicleMileage: number;
  vehiclePrice: number;
  vehicleStock: string;
  vehicleVin: string;
  vehicleImage: string;
  vehicleImageAlt: string;
  vehicleBadge: {
    vehicleBadgeText: string;
    vehicleBadgeIcon: string;
    vehicleBadgeTone: string;
  };
  vehicleFloorBadge: string;
  vehicleSpecs: { vehicleSpecLabel: string; vehicleSpecValue: string }[];
  vehicleMonthly: string;
  vehicleDownPayment: string;
  vehicleExterior: string;
  vehicleDescription: string;
  vehicleFeatures: string[];
};

export type TrustPillar = {
  trustPillarId: string;
  trustPillarTitle: string;
  trustPillarDescription: string;
  trustPillarCta: string;
};

export type FilterOption = {
  optionValue: string;
  optionLabel: string;
};

export type BodyStyleOption = {
  bodyStyleOptionId: string;
  bodyStyleOptionLabel: string;
};

export type SortOption = {
  sortOptionValue: string;
  sortOptionLabel: string;
};

export type QuickStat = {
  quickStatLabel: string;
  quickStatValue: string;
  quickStatHighlight?: boolean;
};

export type MileageRange = {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
};

/** The subset of template content supplied by `data.ts`. */
export type Content = {
  heroHeadline: string;
  heroSubheadline: string;
  priceOptions?: { optionValue: string; optionLabel: string }[];
  vehicles: Vehicle[];
  defaultSavedVehicleIds: string[];
  trustOverline?: string;
  trustTitle?: string;
  trustBody?: string;
  trustPillars?: TrustPillar[];
};

/** Filter state driving the inventory grid. */
export type Filters = {
  make: string;
  model: string;
  budget: string;
  mileage: number;
};

/** Everything the workspace renders with: resolved content plus derived facets. */
export type CarShops01data = {
  heroLiveFeed: string;
  heroHeadline: string;
  heroSubheadline: string;
  quickStats: QuickStat[];
  makeOptions: FilterOption[];
  modelOptions: FilterOption[];
  priceOptions?: FilterOption[];
  bodyStyleOptions: BodyStyleOption[];
  mileageRange: MileageRange;
  inventoryTotal: number;
  inventoryLoadMoreLabel: string;
  toastLoadMoreDetail: string;
  vehicles: Vehicle[];
  defaultSavedVehicleIds: string[];
  trustOverline?: string;
  trustTitle?: string;
  trustBody?: string;
  trustPillars?: TrustPillar[];
};
