import { ArrowRight, PackageSearch } from "lucide-react";
import BrutalistButton from "./BrutalistButton";

interface RelatedProduct {
  relatedProductId: string;
  relatedProductName: string;
  relatedProductSpecimen?: string;
  relatedProductPriceUSD: number;
  relatedProductPriceETH?: string;
  relatedProductImage: string;
  relatedProductTechnicalBullets: string[];
}

interface CatalogArchiveProps {
  catalogEyebrow?: string;
  catalogTitle: string;
  catalogTitleAccent?: string;
  catalogStatusText?: string;
  catalogHashText?: string;
  catalogQueueCtaLabel?: string;
  catalogFooterNote?: string;
  catalogExpandLabel?: string;
  relatedProducts: RelatedProduct[];
}

export default function CatalogArchive({
  catalogEyebrow,
  catalogTitle,
  catalogTitleAccent,
  catalogStatusText,
  catalogHashText,
  catalogQueueCtaLabel,
  catalogFooterNote,
  catalogExpandLabel,
  relatedProducts,
}: CatalogArchiveProps) {
  return (
    <section className="px-[16px] py-[48px] md:px-[32px]">
      <div className="flex items-end justify-between gap-[16px] border-b-[1px] border-[#353535] pb-[16px]">
        <div>
          {catalogEyebrow && (
            <p className="text-[10px] font-[700] uppercase tracking-[0.12em] text-[#caf300]">{catalogEyebrow}</p>
          )}
          <h2 className="mt-[8px] font-['Space_Grotesk'] text-[clamp(2.5rem,6vw,5rem)] font-[700] uppercase leading-[0.9] text-[#ffffff]">{catalogTitle} {catalogTitleAccent && <span className="text-[#caf300]">{catalogTitleAccent}</span>}</h2>
        </div>
        {(catalogStatusText || catalogHashText) && (
          <div className="hidden text-right text-[9px] uppercase tracking-[0.1em] text-[#777777] md:block">{catalogStatusText}<br />{catalogHashText}</div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-[24px] pt-[32px] md:grid-cols-3">
        {relatedProducts.map((product) => (
          <article key={product.relatedProductId} className="group flex flex-col border-[2px] border-[#353535] bg-[#1b1b1b] p-[16px] transition-colors hover:border-[#caf300]">
            <div className="mb-[12px] flex items-center justify-between text-[9px] uppercase tracking-[0.1em] text-[#a0a0a0]">{product.relatedProductSpecimen && <span>{product.relatedProductSpecimen}</span>}<span className="text-[#caf300]">{product.relatedProductName}</span></div>
            <div className="border-[1px] border-[#353535] bg-[#1f1f1f] p-[8px]"><img src={product.relatedProductImage} alt={product.relatedProductName} className="aspect-square w-full object-cover contrast-125" /></div>
            <div className="mt-[16px] flex flex-1 flex-col">
              <div className="mb-[12px] flex items-end justify-between gap-[8px]"><span className="font-['Space_Grotesk'] text-[24px] font-[700] text-[#ffffff]">${product.relatedProductPriceUSD} USD</span>{product.relatedProductPriceETH && <span className="text-[10px] text-[#777777]">{product.relatedProductPriceETH}</span>}</div>
              <ul className="mb-[16px] flex flex-1 flex-col gap-[4px] text-[9px] uppercase text-[#c6c6c7]">{product.relatedProductTechnicalBullets.map((bullet) => <li key={bullet} className="border-b-[1px] border-[#353535] py-[4px]">{bullet}</li>)}</ul>
              {catalogQueueCtaLabel && (
                <BrutalistButton type="button" className="flex w-full items-center justify-between"><span>{catalogQueueCtaLabel}  ${product.relatedProductPriceUSD}</span><ArrowRight className="h-[14px] w-[14px]" /></BrutalistButton>
              )}
            </div>
          </article>
        ))}
      </div>
      {(catalogFooterNote || catalogExpandLabel) && (
        <div className="mt-[32px] flex items-center gap-[8px] text-[10px] uppercase tracking-[0.1em] text-[#a0a0a0]"><PackageSearch className="h-[14px] w-[14px] text-[#caf300]" /> {catalogFooterNote} {catalogExpandLabel && <span className="ml-auto">{catalogExpandLabel}</span>}</div>
      )}
    </section>
  );
}
