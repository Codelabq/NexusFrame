import { ArrowRight, PackageSearch } from "lucide-react";
import { relatedProducts } from "../data";
import BrutalistButton from "./BrutalistButton";

export default function CatalogArchive() {
  return (
    <section className="px-[16px] py-[48px] md:px-[32px]">
      <div className="flex items-end justify-between gap-[16px] border-b-[1px] border-[#353535] pb-[16px]">
        <div>
          <p className="text-[10px] font-[700] uppercase tracking-[0.12em] text-[#caf300]">[CATALOG_ARCHIVE // LEVEL-02 ALLOCATION]</p>
          <h2 className="mt-[8px] font-['Space_Grotesk'] text-[clamp(2.5rem,6vw,5rem)] font-[700] uppercase leading-[0.9] text-[#ffffff]">More from us <span className="text-[#caf300]">// stylish</span></h2>
        </div>
        <div className="hidden text-right text-[9px] uppercase tracking-[0.1em] text-[#777777] md:block">Status: 3 revealed // strict allocation protocol<br />Hash block verified: 0x99482...EE01</div>
      </div>

      <div className="grid grid-cols-1 gap-[24px] pt-[32px] md:grid-cols-3">
        {relatedProducts.map((product) => (
          <article key={product.id} className="group flex flex-col border-[2px] border-[#353535] bg-[#1b1b1b] p-[16px] transition-colors hover:border-[#caf300]">
            <div className="mb-[12px] flex items-center justify-between text-[9px] uppercase tracking-[0.1em] text-[#a0a0a0]"><span>{product.specimen}</span><span className="text-[#caf300]">{product.name}</span></div>
            <div className="border-[1px] border-[#353535] bg-[#1f1f1f] p-[8px]"><img src={product.image} alt={product.name} className="aspect-square w-full object-cover contrast-125" /></div>
            <div className="mt-[16px] flex flex-1 flex-col">
              <div className="mb-[12px] flex items-end justify-between gap-[8px]"><span className="font-['Space_Grotesk'] text-[24px] font-[700] text-[#ffffff]">${product.priceUSD} USD</span><span className="text-[10px] text-[#777777]">{product.priceETH}</span></div>
              <ul className="mb-[16px] flex flex-1 flex-col gap-[4px] text-[9px] uppercase text-[#c6c6c7]">{product.technicalBullets.map((bullet) => <li key={bullet} className="border-b-[1px] border-[#353535] py-[4px]">{bullet}</li>)}</ul>
              <BrutalistButton type="button" className="flex w-full items-center justify-between"><span>Enter queue // ${product.priceUSD}</span><ArrowRight className="h-[14px] w-[14px]" /></BrutalistButton>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-[32px] flex items-center gap-[8px] text-[10px] uppercase tracking-[0.1em] text-[#a0a0a0]"><PackageSearch className="h-[14px] w-[14px] text-[#caf300]" /> Manufacturing dossier &amp; air-restricted telemetry <span className="ml-auto">[+ Expand system logs]</span></div>
    </section>
  );
}
