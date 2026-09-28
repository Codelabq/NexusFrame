//templates object form typing
export type TemplateDefinition = {
  fields : {name:string, type:string, required: boolean}[]
}
//template1 : DigitalAssites E commerce
export type template1Product = {
	productId : string;
	productTitle : string;
	productDescription : string;
  productPrice: number;
  productCategory: string;
	productBadgeText? : string;
	productImageUrl : string;
}

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

	export type DigitalAssistantTemplateData = {

  heroTitle: string;
  heroDescription: string;
  heroStats: HeroStat[];
  spotlight: Spotlight;
  products: template1Product[];
};

//template2 : Luxury Atelier E commerce
export type luxuryAtelierProduct = {
  productTitle: string;
  productPrice: string;
  productSubtitle: string;
  productCategory: string;
  productPrimaryImage: string;
  productHoverImage: string;
  productBadgeText?: string;
};

export type luxuryAtelierCategory = {
  categoryLabel: string;
};

export type LuxuryAtelierTemplateData = {
  brandName: string;
  heroTitle: string;
  heroDescription: string;
  categories: luxuryAtelierCategory[];
  products: luxuryAtelierProduct[];
};

//template3 : Lumen Goods E commerce
export type lumenProduct = {
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

//template14 : Silicon Craft workstation store
export type siliconCraftFilterOption = {
  filterOptionValue: string;
  filterOptionLabel: string;
  filterOptionShort?: string;
};

export type siliconCraftFilterGroup = {
  filterGroupId: string;
  filterGroupLabel: string;
  filterGroupTone: string;
  filterGroupMenuWidthClass?: string;
  filterGroupOptions: siliconCraftFilterOption[];
};

export type siliconCraftProductSpec = {
  productSpecLabel: string;
  productSpecValue: string;
  productSpecSub: string;
  productSpecTone: string;
};

export type siliconCraftProduct = {
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
  productSpecs: siliconCraftProductSpec[];
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

export type siliconCraftOption = {
  optionValue: string;
  optionLabel: string;
};

export type siliconCraftEnterpriseChecklistItem = {
  enterpriseChecklistLabel: string;
  enterpriseChecklistTone: string;
};

export type siliconCraftTechSheetRow = {
  detailsTechSheetLabel: string;
};

export type SiliconCraftWorkstationStoreTemplateData = {
  topFilterGroups: siliconCraftFilterGroup[];
  gpuFilterGroup: siliconCraftFilterGroup;
  conditionOptions: siliconCraftOption[];
  products: siliconCraftProduct[];
  detailsAddToCartLabel: string;
  detailsAddToCompareLabel: string;
  detailsInCompareLabel: string;
  detailsLeadTimeLabel: string;
};

//template13 : Tokyo Street Food POS
export type posProduct = {
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

export type posCategory = {
  categoryId: string;
  categoryLabel: string;
};

export type posTagFilter = {
  tagFilterId: string;
  tagFilterLabel: string;
};

export type PosTemplateData = {
  comboBadge: string;
  comboImageUrl: string;
  comboImageAlt: string;
  comboOverlayTitle: string;
  comboExclusiveBadge: string;
  comboTitle: string;
  comboSaveBadge: string;
  comboPrice: string;
  comboOriginalPrice: string;
  comboFeatures: string[];
  comboScarcityLabel: string;
  comboCtaPrice: string;
  categories: posCategory[];
  tagFilters: posTagFilter[];
  products: posProduct[];
};

//template12 : Atelier & Hearth restaurant menu
export type atelierDish = {
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

export type atelierCellarPour = {
  cellarPourId: string;
  cellarPourType: string;
  cellarPourName: string;
  cellarPourOrigin: string;
  cellarPourPrice: string;
  cellarPourNote: string;
};

export type atelierCategory = {
  categoryId: string;
  categoryLabel: string;
};

export type atelierCategorySection = {
  categorySectionId: string;
  categorySectionIndex: string;
  categorySectionTitle: string;
  categorySectionNote: string;
};

export type atelierDietaryFilter = {
  dietaryFilterId: string;
  dietaryFilterLabel: string;
};

export type AtelierHearthRestaurantMenuTemplateData = {
  brandName: string;
  headerEyebrow: string;
  headerTitle: string;
  headerDescription: string;
  categories: atelierCategory[];
  dietaryFilters: atelierDietaryFilter[];
  featuredImageUrl: string;
  featuredBadge: string;
  featuredEyebrow: string;
  featuredPrice: string;
  featuredTitle: string;
  featuredDescription: string;
  featuredTags: string[];
  sommelierTitle: string;
  sommelierNote: string;
  featuredAddCtaLabel: string;
  featuredDossierCtaLabel: string;
  categorySections: atelierCategorySection[];
  dishes: atelierDish[];
  cellarPours?: atelierCellarPour[];
};

//template11 : Gazette editorial journal
export type gazetteCategory = {
  categoryId: string;
  categoryLabel: string;
};

export type gazetteArticle = {
  articleId: string;
  articleCategory: string;
  articleCategoryLabel: string;
  articleTitle: string;
  articleExcerpt: string;
  articleByline: string;
  articleReadTime: string;
  articleDate: string;
  articleIssue: string;
  articleImageUrl: string;
  articleImageAlt: string;
  articleFeatured?: boolean;
  articlecaption?: string;
};

export type gazetteFooterLinkGroup = {
  footerLinkGroupTitle: string;
  footerLinkGroupLinks: { footerLinkLabel: string }[];
};

export type GazetteEditorialJournalTemplateData = {
  brandName: string;
  leadEyebrow: string;
  leadArticle: gazetteArticle;
  leadPullQuote: string;
  articles: gazetteArticle[];
  broadsideEyebrow?: string;
  broadsideTitle?: string;
  broadsideDescription?: string;
  broadsideBuyLabel?: string;
  broadsideSpecsLabel?: string;
};

//template10 : Prism observability careers
export type prismMetric = {
  metricValue: string;
  metricSub?: string;
  metricLabel: string;
  metricDescription: string;
};

export type prismRole = {
  roleId: string;
  roleTitle: string;
  roleDiscipline: string;
  roleDisciplineLabel: string;
  roleBadge?: string;
  roleBadgeType?: string;
  roleTeam: string;
  roleRefId: string;
  roleLocation: string;
  roleCompensation: string;
  roleDescription: string;
  roleRequirements: string[];
  roleTools: string[];
  roleStatusText?: string;
};

export type prismDiscipline = {
  disciplineId: string;
  disciplineLabel: string;
};

export type prismHeroPillar = {
  heroPillarLabel: string;
  heroPillarValue: string;
};

export type prismLifestyleImage = {
  lifestyleImageTitle: string;
  lifestyleImageUrl: string;
};

export type prismDropzoneField = {
  dropzoneFieldLabel: string;
  dropzoneFieldPlaceholder: string;
  dropzoneFieldDefaultValue?: string;
};

export type prismApplicationField = {
  applicationFieldLabel: string;
  applicationFieldPlaceholder: string;
  applicationFieldDefaultValue?: string;
};

export type prismCodexSection = {
  codexSectionTitle: string;
  codexSectionBody: string;
};

export type PrismObservabilityCareersTemplateData = {
  brandName: string;
  bannerText: string;
  heroTitle: string;
  heroTitleAccent?: string;
  heroDescription: string;
  heroPillars?: prismHeroPillar[];
  metrics?: prismMetric[];
  rolesEyebrow: string;
  rolesTitle: string;
  rolesDescription: string;
  roles: prismRole[];
  codexTitle?: string;
  codexSubtitle?: string;
  codexSections?: prismCodexSection[];
};

//template9 : Kroma creative roster
export type kromaRole = {
  roleId: string;
  roleDiscipline: string;
  roleTitle: string;
  roleCampaign: string;
  roleStatus: string;
  roleCompensation: string;
  roleTimeline: string;
  roleRequirement: string;
  roleDeliverable: string;
  roleTools: string[];
  roleImageUrl: string;
  roleImageAlt: string;
};

export type kromaDiscipline = {
  disciplineId: string;
  disciplineLabel: string;
};

export type kromaMetric = {
  metricValue: string;
  metricLabel: string;
};

export type kromaDrawerField = {
  drawerFieldLabel: string;
  drawerFieldName: string;
  drawerFieldType: string;
  drawerFieldPlaceholder: string;
};

export type kromaRoleCardLabels = {
  roleCardLabelPrefix: string;
  roleCardCompensationLabel: string;
  roleCardTimelineLabel: string;
  roleCardCtaLabel: string;
};

export type kromaDrawerLabels = {
  drawerFields: kromaDrawerField[];
};

export type KromaRosterTemplateData = {
  brandName: string;
  heroImageUrl: string;
  heroTitle: string;
  heroDescription: string;
  roles: kromaRole[];
  metrics: kromaMetric[];
  drawerLabels: kromaDrawerLabels;
};

//template8 : OmniCorp requisitions board
export type omniEmploymentType = "fte" | "contract" | "executive";

export type omniRequisition = {
  requisitionId: string;
  requisitionTitle: string;
  requisitionBadge: string;
  requisitionDepartment: string;
  requisitionDepartmentLabel: string;
  requisitionLocation: string;
  requisitionWorkplace: string;
  requisitionWorkplaceLabel: string;
  requisitionCompensation: string;
  requisitionCompensationValue: number;
  requisitionEmploymentType: omniEmploymentType;
  requisitionEmploymentLabel: string;
  requisitionPostedDays: number;
  requisitionPostedLabel: string;
  requisitionSeniority: string;
  requisitionSeniorityLabel: string;
  requisitionIcon?: string;
  requisitionIconTone?: string;
  requisitionQualifications: string[];
  requisitionStatus: string;
  requisitionCandidateCount?: number;
};

export type omniFilterOption = {
  filterOptionId: string;
  filterOptionLabel: string;
  filterOptionCount: number;
};

export type omniFilterGroup = {
  filterGroupId: string;
  filterGroupLabel: string;
  filterGroupType: string;
  filterGroupOptions: omniFilterOption[];
};

export type omniSortOption = {
  sortOptionValue: string;
  sortOptionLabel: string;
};

export type omniDialogApplyField = {
  dialogApplyFieldLabel: string;
  dialogApplyFieldType: string;
  dialogApplyFieldPlaceholder: string;
};

export type omniCardLabels = {
  cardReqIdPrefix: string;
  cardQualificationsHeading: string;
  cardCandidateCountSuffix: string;
  cardViewDetailsLabel: string;
  cardQuickApplyLabel: string;
  cardExecutiveApplyLabel: string;
  cardSaveLabel: string;
  cardUnsaveLabel: string;
  cardShareLabel: string;
};

export type omniDialogLabels = {
  dialogDetailsEyebrow: string;
  dialogApplyEyebrow: string;
  dialogOverviewHeading: string;
  dialogOverviewBody: string;
  dialogQualificationsHeading: string;
  dialogStartApplyLabel: string;
  dialogApplyIntro: string;
  dialogSubmitLabel: string;
  dialogApplyFields: omniDialogApplyField[];
};

export type OmniCorpRequisitionsTemplateData = {
  defaultOpenGroups: Record<string, boolean>;

  requisitions: omniRequisition[];

  cardLabels: omniCardLabels;

  filterGroups: omniFilterGroup[];
  totalRequisitions: number;
};

//template7 : NexusFrame careers board
export type nexusRole = {
  roleId: string;
  roleTitle: string;
  roleDept: string;
  roleDeptLabel: string;
  roleLocation: string;
  roleLocationLabel: string;
  roleCompensation: string;
  roleDescription: string;
  roleDeliverables: string[];
  roleSkills: string[];
};

export type nexusBenefit = {
  benefitTitle: string;
  benefitDetail: string;
  benefitNote: string;
};

export type nexusStackHighlight = {
  stackHighlightTitle: string;
  stackHighlightDetail: string;
};

export type nexusDepartmentFilter = {
  departmentFilterLabel: string;
  departmentFilterValue: string;
};

export type nexusLocationFilter = {
  locationFilterLabel: string;
  locationFilterValue: string;
};

export type nexusApplicationField = {
  applicationFieldLabel: string;
  applicationFieldPlaceholder: string;
  applicationFieldName: string;
  applicationFieldType: string;
};

export type NexusCareersTemplateData = {
  heroBadgeText: string;
  heroTitle: string;
  heroDescription: string;
  stackHighlights: nexusStackHighlight[];
  roles: nexusRole[];
  benefits: nexusBenefit[];
  departmentFilters: nexusDepartmentFilter[];
  locationFilters: nexusLocationFilter[];
};

//template6 : N-Vault drop terminal
export type nvaultTelemetryItem = {
  telemetryItemLabel: string;
  telemetryItemValue: string;
  telemetryItemIcon?: string;
};

export type nvaultShoeSize = {
  shoeSizeLabel: string;
  shoeSizeStock: string;
  shoeSizeSoldOut: boolean;
};

export type nvaultHardwareSpec = {
  hardwareSpecLabel: string;
  hardwareSpecValue: string;
};

export type nvaultRelatedProduct = {
  relatedProductId: string;
  relatedProductName: string;
  relatedProductSpecimen?: string;
  relatedProductPriceUSD: number;
  relatedProductPriceETH?: string;
  relatedProductImage: string;
  relatedProductTechnicalBullets: string[];
};

export type NVaultTerminalTemplateData = {
  heroEyebrow: string;
  heroSubtitle: string;
  productImageUrl: string;
  canvasWatermark?: string;
  modelId?: string;
  mintTitle: string;
  mintSubtitle: string;
  mintPrice: string;
  mintPriceCrypto?: string;
  shoeSizes: nvaultShoeSize[];
  hardwareSpecs: nvaultHardwareSpec[];
  relatedProducts: nvaultRelatedProduct[];
};

//template5 : Kinetiq recovery store
export type kinetiqArsenalProduct = {
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

export type KinetiqTemplateData = {
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
  arsenalProducts: kinetiqArsenalProduct[];
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

//template4 : Prime Mart marketplace
export type primeMartProduct = {
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

export type PrimeMartTemplateData = {
  brandName: string;
  departments: primeMartDepartment[];
  brands: primeMartBrand[];
  products: primeMartProduct[];
};

export type LumenGoodsTemplateData = {
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
  products: lumenProduct[];
};

export type apexVehicleSpec = {
  vehicleSpecLabel: string;
  vehicleSpecValue: string;
};

export type apexVehicleBadgeTone = "primary" | "light";

export type apexVehicleBadge = {
  vehicleBadgeText: string;
  vehicleBadgeIcon: string;
  vehicleBadgeTone: apexVehicleBadgeTone;
};

export type apexBodyStyle = "sedan" | "coupe" | "suv" | "electric";

export type apexVehicle = {
  vehicleId: string;
  vehicleYear: number;
  vehicleName: string;
  vehicleMake: string;
  vehicleModelKey: string;
  vehicleBodyStyle: apexBodyStyle;
  vehicleMileage: number;
  vehiclePrice: number;
  vehicleStock: string;
  vehicleVin: string;
  vehicleImage: string;
  vehicleImageAlt: string;
  vehicleBadge: apexVehicleBadge;
  vehicleFloorBadge: string;
  vehicleSpecs: apexVehicleSpec[];
  vehicleMonthly: string;
  vehicleDownPayment: string;
  vehicleExterior: string;
  vehicleDescription: string;
  vehicleFeatures: string[];
};

export type apexOption = {
  optionValue: string;
  optionLabel: string;
};

export type apexBodyStyleOption = {
  bodyStyleOptionId: string;
  bodyStyleOptionLabel: string;
};

export type apexSortOption = {
  sortOptionValue: string;
  sortOptionLabel: string;
};

export type apexQuickStat = {
  quickStatLabel: string;
  quickStatValue: string;
  quickStatHighlight?: boolean;
};

export type apexMileageRange = {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
};

export type apexTrustPillar = {
  trustPillarId: string;
  trustPillarTitle: string;
  trustPillarDescription: string;
  trustPillarCta: string;
};

export type ApexMotorsInventoryTemplateData = {
  heroLiveFeed: string;
  heroHeadline: string;
  heroSubheadline: string;
  quickStats: apexQuickStat[];
  makeOptions: apexOption[];
  modelOptions: apexOption[];
  priceOptions?: apexOption[];
  bodyStyleOptions: apexBodyStyleOption[];
  mileageRange: apexMileageRange;
  inventoryTotal: number;
  inventoryLoadMoreLabel: string;
  toastLoadMoreDetail: string;
  vehicles: apexVehicle[];
  defaultSavedVehicleIds: string[];
  trustOverline?: string;
  trustTitle?: string;
  trustBody?: string;
  trustPillars?: apexTrustPillar[];
};
