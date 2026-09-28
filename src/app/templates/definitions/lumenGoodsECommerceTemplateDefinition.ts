import type { TemplateDefinition } from "@/types/index";


export const lumenGoodsECommerceTemplateDefinition = {
  fields: [
    // ── Brand ────────────────────────────────────────────────────────────────
    { name: "brandName", type: "string", required: true },

    // ── Hero ─────────────────────────────────────────────────────────────────
    { name: "heroTitle", type: "string", required: true },
    { name: "heroDescription", type: "string", required: true },
    { name: "heroMetrics", type: "array", required: true },
    { name: "heroMetricValue", type: "string", required: true },
    { name: "heroMetricLabel", type: "string", required: true },

    // ── Hero Product ─────────────────────────────────────────────────────────
    { name: "heroProduct", type: "object", required: true },
    { name: "heroProduct.title", type: "string", required: true },
    { name: "heroProduct.description", type: "string", required: true },
    { name: "heroProduct.price", type: "string", required: true },
    { name: "heroProduct.imageUrl", type: "string", required: true },

    // ── Publications ─────────────────────────────────────────────────────────
    { name: "publicationSectionLabel", type: "string", required: true },
    { name: "publicationLogos", type: "array", required: true },
    { name: "publicationLogoName", type: "string", required: true },

    // ── Catalog ──────────────────────────────────────────────────────────────
    { name: "catalogTitle", type: "string", required: true },

    // ── Products ─────────────────────────────────────────────────────────────
    { name: "products", type: "array", required: true },
    { name: "productId", type: "string", required: true },
    { name: "productTitle", type: "string", required: true },
    { name: "productDescription", type: "string", required: true },
    { name: "productPrice", type: "string", required: true },
    { name: "productRating", type: "number", required: true },
    { name: "productReviewsCount", type: "number", required: true },
    { name: "productBadgeText", type: "string", required: true },
    { name: "productPrimaryImage", type: "string", required: true },
    { name: "productColorSwatches", type: "array", required: true },
    { name: "productSizes", type: "array", required: true },
    { name: "productCategory", type: "string", required: true },

    // ── Testimonials ─────────────────────────────────────────────────────────
    { name: "testimonialEyebrow", type: "string", required: true },
    { name: "testimonialTitle", type: "string", required: true },
    { name: "featuredReview", type: "object", required: true },
    { name: "featuredReview.quote", type: "string", required: true },
    { name: "featuredReview.detail", type: "string", required: true },
    { name: "featuredReview.name", type: "string", required: true },
    { name: "featuredReview.role", type: "string", required: true },
    { name: "featuredReview.product", type: "string", required: true },
    { name: "spotlightTestimonial", type: "object", required: true },
    { name: "spotlightTestimonial.quote", type: "string", required: true },
    { name: "spotlightTestimonial.name", type: "string", required: true },
    { name: "spotlightTestimonial.role", type: "string", required: true },
    { name: "performanceMetrics", type: "array", required: true },
    { name: "performanceMetricLabel", type: "string", required: true },
    { name: "performanceMetricValue", type: "string", required: true },

    // ── Trust / Benefits ─────────────────────────────────────────────────────
    { name: "trustItems", type: "array", required: true },
    { name: "trustItemTitle", type: "string", required: true },
    { name: "trustItemCopy", type: "string", required: true },
    { name: "trustItemIcon", type: "string", required: false },
  ],
} satisfies TemplateDefinition;
