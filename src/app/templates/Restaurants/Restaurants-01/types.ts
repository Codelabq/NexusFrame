/* -------------------------------------------------------------------------- */
/*  Template 12 — Atelier & Hearth restaurant menu types                       */
/* -------------------------------------------------------------------------- */

export type Restaurants01Dish = {
  dishId: string;
  dishCategory: string;
  dishName: string;
  dishDescription: string;
  dishPrice: string;
  dishTags: string[];
  dishDietary: string[];
  dishProvenance: string;
  dishImageUrl: string;
  dishImageAlt: string;
};

export type Restaurants01CellarPour = {
  cellarPourId: string;
  cellarPourType: string;
  cellarPourName: string;
  cellarPourOrigin: string;
  cellarPourPrice: string;
  cellarPourNote: string;
};

export type Restaurants01Category = {
  categoryId: string;
  categoryLabel: string;
};

export type Restaurants01CategorySection = {
  categorySectionId: string;
  categorySectionIndex: string;
  categorySectionTitle: string;
  categorySectionNote: string;
};

export type Restaurants01DietaryFilter = {
  dietaryFilterId: string;
  dietaryFilterLabel: string;
};
