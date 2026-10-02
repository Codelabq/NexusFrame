import type { ECommerce03Data } from "./types";

/** Raw template content. Derived fields (categories, catalogLoadMoreLabel) are computed in `page.tsx`. */
export const ECommerce03placeHolder: Omit<ECommerce03Data, "categories" | "catalogLoadMoreLabel"> = {
  brandName: "LUMEN",

  heroTitle: "Objects for elevated everyday living.",
  heroDescription:
    "Curated tactile hardware, sensory desk sculptures, and limited edition studio essentials. Precision-engineered with anodized aluminum, acoustic wool, and frosted borosilicate.",
  heroMetrics: [
    { heroMetricValue: "0.05mm", heroMetricLabel: "CNC Tolerance" },
    { heroMetricValue: "100%", heroMetricLabel: "Recyclable Shell" },
    { heroMetricValue: "3-Year", heroMetricLabel: "Global Guarantee" },
  ],
  heroProduct: {
    title: "Lumen Horizon Diffuser",
    description: "Ultrasonic desk sculpture with dual mood lighting",
    price: "$145.00",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCiWEFn1QmSX4qUdx5Qs08GhE_mw2CXPynf3D68CfxUEHMSRlgO-vMjsrcbNj1f3plVlXkRKGntysncNZjphgVJZDCkCbvp33IJe4dg7a01F1fqF9ctSfjDPon9fdEYSDWIL1UG745-AMQdXKm17OYN2DuJM3XRbk-zgAlyMn1RWWsK4e6ZFx-xp4fkVVPEEhlxM5nRFUTmTAv5AB6AJPDXEmw4STPToqQKhuMb1GjKV7QtEV7jCBVBRw",
  },

  publicationSectionLabel: "Featured across global design & culture publications",
  publicationLogos: [
    { publicationLogoName: "VOGUE LIVING" },
    { publicationLogoName: "WIRED DESIGN" },
    { publicationLogoName: "WALLPAPER*" },
    { publicationLogoName: "HYPEBEAST" },
    { publicationLogoName: "FAST COMPANY" },
    { publicationLogoName: "MONOCLE" },
    { publicationLogoName: "DEZEEN" },
  ],

  catalogTitle: "Curated Studio Hardware",

  testimonialEyebrow: "Living with Lumen",
  testimonialTitle: "Beloved by creators worldwide.",
  featuredReview: {
    quote:
      "The finish on the Horizon Diffuser is unparalleled. It completely redefined my studio atmosphere.",
    detail:
      "The gentle mist output along with the ambient ring creates an almost meditative ritual before I begin working every morning. The tactile aluminum weight feels incredible.",
    name: "Elena Lindqvist",
    role: "Architectural Designer · Stockholm",
    product: "Lumen Horizon #0482",
  },
  spotlightTestimonial: {
    quote:
      "Tactile objects that feel like art pieces on your desk. Worth every single penny.",
    name: "Maya Chen",
    role: "Creative Director · San Francisco",
  },
  performanceMetrics: [
    { performanceMetricLabel: "Craftsmanship", performanceMetricValue: "99.4%" },
    { performanceMetricLabel: "Unboxing & Packaging", performanceMetricValue: "98.8%" },
    { performanceMetricLabel: "Longevity", performanceMetricValue: "99.1%" },
  ],

  trustItems: [
    { trustItemTitle: "Carbon Neutral", trustItemCopy: "Every shipment 100% offset globally", trustItemIcon: "leaf" },
    { trustItemTitle: "Aerospace Grade", trustItemCopy: "6063-T6 CNC anodized aluminum", trustItemIcon: "packageCheck" },
    { trustItemTitle: "Plastic-Free Packaging", trustItemCopy: "Molded mycelium and soy inks", trustItemIcon: "checkCircle2" },
    { trustItemTitle: "3-Year Guarantee", trustItemCopy: "Direct hardware replacement coverage", trustItemIcon: "shieldCheck" },
  ],

  products: [
    {
      productId: "lumen-horizon-diffuser",
      productTitle: "Lumen Horizon Diffuser",
      productDescription: "Aroma sculpting with soft diffused light halo",
      productPrice: "$145",
      productRating: 4.9,
      productReviewsCount: 1240,
      productBadgeText: "Best Seller",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDv-GnRnNGWu4Oh3p365jL5kczlks0rAtX0dL9rwX-gmRaqcuJgD31IiTDy_fJtsDOspnghOK4brOq-0ZakHd73AgFOUQ_XG6ILk9MlVe7c07kTUcCRpmReqNm_Tpb2yK7mMao3ousLn2Eh5suxXhODTlcNszJrRZk2EOr73A1atHtGoPAOhhTSLChxZY7pQcOXrr3gi07sn-kVhW69e2U6qWZwDdwgiE2fGNvuKt5X137TJS6uhv32ng",
      productColorSwatches: ["#18181b", "#e4d5c7", "#d8b4e2"],
      productSizes: ["Standard", "Grande"],
      productCategory: "Sensory & Light",
    },
    {
      productId: "mag-touch-keypad",
      productTitle: "Mag-Touch Keypad",
      productDescription: "Hot-swappable magnetic macro pad",
      productPrice: "$190",
      productRating: 5.0,
      productReviewsCount: 412,
      productBadgeText: "New Drop",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAdqj6RNBltCdEVtTCYahwNoKjm6PxZcKgwfFvYlXozn4RiMrfRnfpWEWN0d7Wnb6mmZFeAjRr1Bv9I0g87-7Dp_XHnhMywaIehtm-Zwb7TjleMC1i7aFXiezqEuCe_QeMpfRLNJ07AS6UfrNaXDsxSh8WbbxpwUU4HArIGeiyedvYcC7Ww8d5rzMjzSCdg1J-bCyae-7UyNu0su0-T0j2Bi0GGY265xINIRivg-WGC62H4lRkj6OuH0Q",
      productColorSwatches: ["#f472b6", "#38bdf8", "#f5f5f4"],
      productSizes: ["Linear", "Tactile"],
      productCategory: "Tactile Hardware",
    },
    {
      productId: "prism-monolith-speaker",
      productTitle: "Prism Monolith Speaker",
      productDescription: "Lossless spatial audio acoustic sculpture",
      productPrice: "$320",
      productRating: 4.8,
      productReviewsCount: 89,
      productBadgeText: "Limited 100",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC-37Ut1Z69sST6vfjGhY8AMIUwYH7q--PnofWRzOz3BXuesBf51qLS0iP46GVhNeO24MXEijMJStFf4zo0xIrQqk8TMfy1g7bBRzqtdEzEQja14G9oi2Rtfcxwb4PTsJqCmXov0Rysc6QB1mmYeyp3WNqdhvpa9EWLuHOt32eSrinjGR_WNElddnLlDtEPt4dmOS0KqUkBnT956XGAMcMwdx6v8dsiidDSM1Cx_u8j6f9y5yZx2hur_A",
      productColorSwatches: ["#27272a", "#fbcfe8", "#cbd5e1"],
      productSizes: ["Desktop", "Studio"],
      productCategory: "Desk Sculptures",
    },
    {
      productId: "aer-form-wrist-rest",
      productTitle: "Aer-Form Wrist Rest",
      productDescription: "Ultra-soft medical grade cooling silicone",
      productPrice: "$65",
      productRating: 4.9,
      productReviewsCount: 650,
      productBadgeText: "Trending",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDIw7KZdNFOXrsJoN6ohl6hjO2Xp056eH5RQkV9E1qGy2fsbTooZyhjUEDPyq_u9pNlVlmghTDeoH3puftWSXfeC3GNjzYrfx6WP-Id2DP7wrnmhsfoDk8DmwE8i2wdP-d-auaj_rM7fOUsm2gQQa2jkB7VdAavxusymHPrV9ELVufxt2OX9_HvAKeT9PFoNqpQztGclU_OivdzVtGLnDxr8gLZbKuOCwZbXea4ixIoC3LuDCY0Vosf6g",
      productColorSwatches: ["#fed7aa", "#e0e7ff", "#fce7f3"],
      productSizes: ["Compact", "Full"],
      productCategory: "Tactile Hardware",
    },
    {
      productId: "solarium-pour-over",
      productTitle: "Solarium Ceramic Pour-Over",
      productDescription: "Dual-wall heat retaining artisanal dripper",
      productPrice: "$88",
      productRating: 4.9,
      productReviewsCount: 210,
      productBadgeText: "Staff Pick",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDg4Fz2a4DxUp2PhO5x-lA-Rh2ufQwPQheBMUtHdNT1Vvo6Gfr4OJWXuXcLJYK7wFy3ffYszs206qWNJRWDabqy6uzU6a-OoAlvlj23zn_O8dtrBBJdh9XfDC8CxhKjS0GzftmzKIP5x5IFcuIJWrWyURscCGa_SWtZ6zNoST8052S5cFLu590p6F5oqLBnhtjhaSD0FxsdeIgpHyHkjrM-M4U4-1cSnlip84LYfE0ZNBOa89RNI96AfA",
      productColorSwatches: ["#fef08a", "#f43f5e", "#f3f4f6"],
      productSizes: ["300ml", "600ml"],
      productCategory: "Sensory & Light",
    },
    {
      productId: "orbit-pen-stand",
      productTitle: "Orbit Pen & Stand",
      productDescription: "Balanced magnetic gravity docking pen",
      productPrice: "$110",
      productRating: 5.0,
      productReviewsCount: 520,
      productBadgeText: "Back in Stock",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDcWnpXKgUcCO2oKGCMa9IbFOc3JtLe4FAYAQXL7YllfUMpZQoT0_Lz_M3XtNUGJtzPmNQFb93iNYu_i6Vfdfwcq5oTlUOy-MjI0XJ4aOndGNvlJsmP3fi-FKlmYyb331Yr_gxhiCvqi5J_jFx7Rf2VDdY2v41BBIJNIAAd3ro5D9XdZS4v-cAuPZNabxtvRxj6QqzJZ3AJuX9kX0BGRKWSCuT9LzNiWFdkszelquAUpHc-qcGYxpG1UA",
      productColorSwatches: ["#1e293b", "#a78bfa", "#fbcfe8"],
      productSizes: ["0.5mm", "0.7mm"],
      productCategory: "Tactile Hardware",
    },
    {
      productId: "tactile-desk-mat",
      productTitle: "Tactile Desk Mat",
      productDescription: "High-density anti-fray micro-weave",
      productPrice: "$54",
      productRating: 4.7,
      productReviewsCount: 890,
      productBadgeText: "Essential",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAemfoSgfKj345l7nzuxQtG8ximthz-NoeH8XcbGJ5WOhMBC1DdsB3GLZZxrUhdmT5spN9ZGzP0onnlqfG0l0dibfU2Tr0hy55uComm8pBmIIHJ16XfycH690NlQxWzF2es-N0jRbQOHDh6HdOAgg_QcUtMb6q2aOzp86Js3FrPGzhh-d1uDJBsWHsIAJOsN924I7BfXdNLlnrKwq8d-X1R8uB4VXqTmS3D8uHEanuvvOWENO6LNwwELQ",
      productColorSwatches: ["#e2e8f0", "#f472b6", "#334155"],
      productSizes: ["M (80x40)", "XL"],
      productCategory: "Desk Sculptures",
    },
    {
      productId: "luminescence-light-bar",
      productTitle: "Luminescence Light Bar",
      productDescription: "Circadian smart bar with wireless puck",
      productPrice: "$215",
      productRating: 4.9,
      productReviewsCount: 340,
      productBadgeText: "Series 02",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDPWLAL4BCvz_eH0Qiu6cVR2bqj81QKv6Osz3AQegZ4iIpyRP_zQU5UtdHQ1_NEPxyGZH_5jLZmDpgboO4Qksk6jv6ZAR8tdvFh4nHdsQlieqZEDGdq0v6Hkbd3nwffPpOhOyQw8gq01xze41oDRajDPXHnFDVmUyevxVY7wUe1IzdWCrTkqSqobDeg3kB-dTseJXudYlUBFatWuYK14GebTeCmkJ2Hyts3Ck6NCYjGssXAJrPmFgYS5A",
      productColorSwatches: ["#0f172a", "#fecdd3", "#ffffff"],
      productSizes: ["18-inch", "24-inch"],
      productCategory: "Sensory & Light",
    },
  ],
};
