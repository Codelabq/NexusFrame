/* -------------------------------------------------------------------------- */
/*  JobBoards template 11 — Gazette editorial journal types                    */
/* -------------------------------------------------------------------------- */

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

export type Articles01Data = {
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
