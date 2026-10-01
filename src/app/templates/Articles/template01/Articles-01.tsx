import GazetteWorkspace from "./components/GazetteWorkspace";
import type {
  Articles01Data,
  gazetteArticle,
  gazetteCategory,
} from "./types";
import { Articles01placeHolder } from "./data";

function countValues(values: string[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return counts;
}

/** Categories derived from the article feed, each labelled with its article count. */
function getCategories(allId: string, articles: gazetteArticle[]): gazetteCategory[] {
  const counts = countValues(articles.map((article) => article.articleCategory));
  const labels = new Map<string, string>();
  for (const article of articles) {
    if (!labels.has(article.articleCategory)) {
      labels.set(article.articleCategory, article.articleCategoryLabel);
    }
  }
  return [
    { categoryId: allId, categoryLabel: `All Folios (${articles.length})` },
    ...Array.from(counts.keys()).map((id) => ({
      categoryId: id,
      categoryLabel: `${labels.get(id) ?? id} (${counts.get(id) ?? 0})`,
    })),
  ];
}

export default function Articles01({
  resolvedObject = {},
}: {
  resolvedObject?: Record<string, unknown>;
}) {
  // Static template copy (not resolved from the caller).
  const brandVolumeLabel = "Vol. XLIV";
  const mastheadEditionLabel = "Autumnal Folio";
  const mastheadCtaLabel = "Dispatch";
  const tickerLabel = "Dispatch Telemetry";
  const tickerEditionText = "Autumn Equinox Cycle · Monograph Series Folio Nº 142";
  const acousticModeLabel = "Acoustic Reading Mode";
  const syncStatusLabel = "Sync: 390 OK | 0.14s";
  const leadReadCtaLabel = "Read Full Feature";
  const leadEditionRef = "Ed. 142.1";
  const feedEyebrow = "Broadsheet Chronicle";
  const feedTitle = "Dispatches & Critical Inquiries";
  const feedReadCtaLabel = "Read Dispatch";
  const allCategoryId = "all";
  const footerTitle = "The Gazette Journal";
  const footerDescription =
    "A curated broadsheet devoted to classical critical commentary, material architecture, and tactile literary monographs. Published triannually in print and continuous digital dispatch.";
  const newsletterPlaceholder = "Enter your correspondence email";
  const newsletterCtaLabel = "Enroll";
  const newsletterSuccessLabel = "Thank you for subscribing to the Gazette dispatch.";
  const footerLinkGroups = [
    { footerLinkGroupTitle: "Departments", footerLinkGroupLinks: [{ footerLinkLabel: "Dispatches" }, { footerLinkLabel: "Cultural Reviews" }, { footerLinkLabel: "Spatial Studies" }, { footerLinkLabel: "Longform Essays" }, { footerLinkLabel: "The Anthology" }] },
    { footerLinkGroupTitle: "Folio & Press", footerLinkGroupLinks: [{ footerLinkLabel: "Print Editions" }, { footerLinkLabel: "Colophon" }, { footerLinkLabel: "Archival Index" }, { footerLinkLabel: "Manuscript Submissions" }, { footerLinkLabel: "Institutional Access" }] },
  ];
  const colophonText =
    "Typeset in EB Garamond & Plus Jakarta Sans. Printed on archival stock by Gazette Press.";
  const brandCopyright = "© 2026 GAZETTE MONOGRAPHS & CRITIQUE. ALL RIGHTS RESERVED.";
  const footerBottomLinks = [{ footerBottomLinkLabel: "Privacy Policy" }, { footerBottomLinkLabel: "Terms of Dispatch" }, { footerBottomLinkLabel: "Syndication" }];
  const modalCloseLabel = "[Close X]";
  const modalFooterCloseLabel = "Close Monograph";
  const modalBodyParagraphs = [
    "In an era dominated by hyper-accelerated digital streams, the physical and tactile dimensions of spatial architecture offer a necessary counterweight. By returning to unadorned tectonic volumes, we allow the human sensorium to recalibrate against acoustic noise and visual saturation.",
    "The monograph explores how light carves through monolithic masonry over diurnal cycles, creating inhabited shadows that foster contemplation. This synthesis of material honesty and temporal restraint forms the cornerstone of our contemporary spatial inquiry.",
  ];
  const toastSavedMessage = "Saved to folio archive";
  const toastRemovedMessage = "Removed from saved folios";
  const toastShareMessage = 'Copied link to clipboard: "{title}..."';
  const toastAddFolioMessage = "Added Folio 142 to acquisitions cart";
  const toastColophonMessage = "Opening colophon specifications...";
  const toastDurationMs = 3000;

  // Fill anything the caller omitted from the placeholder, then derive dynamic lists.
  const merged = { ...Articles01placeHolder, ...resolvedObject } as typeof Articles01placeHolder;
  const data = {
    ...merged,
    brandVolumeLabel,
    mastheadEditionLabel,
    mastheadCtaLabel,
    tickerLabel,
    tickerEditionText,
    acousticModeLabel,
    syncStatusLabel,
    leadReadCtaLabel,
    leadEditionRef,
    feedEyebrow,
    feedTitle,
    feedReadCtaLabel,
    allCategoryId,
    footerTitle,
    footerDescription,
    newsletterPlaceholder,
    newsletterCtaLabel,
    newsletterSuccessLabel,
    footerLinkGroups,
    colophonText,
    brandCopyright,
    footerBottomLinks,
    modalCloseLabel,
    modalFooterCloseLabel,
    modalBodyParagraphs,
    toastSavedMessage,
    toastRemovedMessage,
    toastShareMessage,
    toastAddFolioMessage,
    toastColophonMessage,
    toastDurationMs,
    categories: getCategories(allCategoryId, merged.articles),
  };

  return <GazetteWorkspace resolvedObject={data} />;
}
