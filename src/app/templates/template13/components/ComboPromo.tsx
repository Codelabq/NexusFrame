import { Zap } from "lucide-react";

interface ComboPromoProps {
  badge: string;
  batchId: string;
  imageUrl: string;
  imageAlt: string;
  overlayTitle: string;
  captionLeft: string;
  captionRight: string;
  exclusiveBadge: string;
  title: string;
  saveBadge: string;
  price: string;
  originalPrice: string;
  syncedBadge: string;
  features: string[];
  scarcityLabel: string;
  ctaLabel: string;
  ctaPrice: string;
  onAdd: () => void;
}

export default function ComboPromo({ badge, batchId, imageUrl, imageAlt, overlayTitle, captionLeft, captionRight, exclusiveBadge, title, saveBadge, price, originalPrice, syncedBadge, features, scarcityLabel, ctaLabel, ctaPrice, onAdd }: ComboPromoProps) { return <section className="mb-8 border-[3px] border-black bg-white shadow-[6px_6px_0_#1b1b1b]"><div className="grid grid-cols-1 lg:grid-cols-12"><div className="relative flex flex-col justify-between gap-5 overflow-hidden border-b-[3px] border-black bg-[#d04400] p-4 lg:col-span-7 lg:border-b-0 lg:border-r-[3px] lg:p-6"><div className="flex flex-wrap items-center justify-between gap-2"><span className="flex items-center gap-1 border-2 border-black bg-[#ffe600] px-2 py-1 font-['Space_Grotesk'] text-[10px] font-bold uppercase"><Zap className="h-3.5 w-3.5" />{badge}</span><span className="border-2 border-black bg-white px-2 py-1 font-mono text-[10px] font-bold">{batchId}</span></div><div className="relative border-[3px] border-black bg-white shadow-[4px_4px_0_#1b1b1b]"><img src={imageUrl} alt={imageAlt} className="h-64 w-full object-cover sm:h-80" /><span className="absolute left-3 top-3 border border-black bg-black px-2 py-1 font-['Space_Grotesk'] text-lg font-bold uppercase text-[#ffe600]">{overlayTitle}</span></div><div className="flex items-center justify-between font-['Space_Grotesk'] text-[10px] font-bold uppercase text-white"><span>{captionLeft}</span><strong className="text-[#ffe600]">{captionRight}</strong></div></div><div className="flex flex-col justify-between gap-5 p-5 lg:col-span-5 lg:p-6"><div><div className="flex items-start justify-between border-b-2 border-black pb-3"><div><span className="bg-[#6a5f00] px-2 py-1 font-['Space_Grotesk'] text-[10px] font-bold uppercase text-white">{exclusiveBadge}</span><h2 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold uppercase leading-none">{title}</h2></div><span className="border border-black bg-[#ffdbcf] px-2 py-1 font-['Space_Grotesk'] text-[10px] font-bold uppercase text-[#a63500]">{saveBadge}</span></div><div className="my-4 flex items-baseline gap-3 border-2 border-black bg-[#f3f3f3] p-3 shadow-[2px_2px_0_#1b1b1b]"><span className="font-['Space_Grotesk'] text-3xl font-bold text-[#a63500]">{price}</span><del className="font-['Space_Grotesk'] text-lg text-[#7c775f]">{originalPrice}</del><span className="ml-auto border border-black bg-[#e2e2e2] px-1 text-[9px] font-bold uppercase">{syncedBadge}</span></div><ul className="space-y-2 font-['Work_Sans'] text-[13px]">{features.map((feature) => <li key={feature}>✅ <strong>{feature}</strong></li>)}</ul><div className="mt-4 border-2 border-black bg-[#a63500] p-2 font-['Space_Grotesk'] text-[11px] font-bold uppercase text-white">{scarcityLabel}</div></div><button type="button" onClick={onAdd} className="flex items-center justify-between border-[3px] border-black bg-[#ffe600] px-4 py-3 font-['Space_Grotesk'] text-lg font-bold uppercase shadow-[4px_4px_0_#1b1b1b] active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-[#ff5500]">{ctaLabel} <span>{ctaPrice}</span></button></div></div></section>; }
