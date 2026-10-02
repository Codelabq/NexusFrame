/* -------------------------------------------------------------------------- */
/*  Template 06 — N-Vault drop terminal types                                  */
/* -------------------------------------------------------------------------- */

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

export type ECommerce06Data = {
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
