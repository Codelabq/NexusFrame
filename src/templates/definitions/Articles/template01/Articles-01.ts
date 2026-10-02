import type { TemplateDefinition } from "../../types";


export const Article01Definition = {
  fields: [
    // ── Brand ────────────────────────────────────────────────────────────────
    { name: "brandName", type: "string", required: true },

    // ── Lead Article ─────────────────────────────────────────────────────────
    { name: "leadEyebrow", type: "string", required: true },
    { name: "leadArticle", type: "array", required: true },
    { name: "leadArticle.articleId", type: "string", required: true },
    { name: "leadArticle.articleCategory", type: "string", required: true },
    { name: "leadArticle.articleCategoryLabel", type: "string", required: true },
    { name: "leadArticle.articleTitle", type: "string", required: true },
    { name: "leadArticle.articleExcerpt", type: "string", required: true },
    { name: "leadArticle.articleByline", type: "string", required: true },
    { name: "leadArticle.readTime", type: "string", required: true },
    { name: "leadArticle.articleReadTime", type: "string", required: true },
    { name: "leadArticle.articleIssue", type: "string", required: true },
    { name: "leadArticle.articleImageUrl", type: "string", required: true },
    { name: "leadArticle.articleImageAlt", type: "string", required: true },
    { name: "leadArticle.articlecaption", type: "string", required: true },
    { name: "leadPullQuote", type: "string", required: true },

    // ── Articles ─────────────────────────────────────────────────────────────
    { name: "articles", type: "array", required: true },
    { name: "articleId", type: "string", required: true },
    { name: "articleCategory", type: "string", required: true },
    { name: "articleCategoryLabel", type: "string", required: true },
    { name: "articleTitle", type: "string", required: true },
    { name: "articleExcerpt", type: "string", required: true },
    { name: "articleByline", type: "string", required: true },
    { name: "articleReadTime", type: "string", required: true },
    { name: "articleDate", type: "string", required: true },
    { name: "articleIssue", type: "string", required: true },
    { name: "articleImageUrl", type: "string", required: true },
    { name: "articleImageAlt", type: "string", required: true },
    { name: "articleFeatured", type: "string", required: false },

    // ── Broadside Promotion ──────────────────────────────────────────────────
    { name: "broadsideEyebrow", type: "string", required: false },
    { name: "broadsideTitle", type: "string", required: false },
    { name: "broadsideDescription", type: "string", required: false },
    { name: "broadsideBuyLabel", type: "string", required: false },
    { name: "broadsideSpecsLabel", type: "string", required: false },
  ],
} satisfies TemplateDefinition;
