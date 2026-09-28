import { Info, Wine } from "lucide-react";

interface FeaturedSpecialProps {
  imageUrl: string;
  imageAlt: string;
  badge: string;
  eyebrow: string;
  price: string;
  title: string;
  description: string;
  tags: string[];
  sommelierTitle: string;
  sommelierNote: string;
  addCtaLabel: string;
  dossierCtaLabel: string;
  onAdd: () => void;
  onDossier: () => void;
}

export default function FeaturedSpecial({ imageUrl, imageAlt, badge, eyebrow, price, title, description, tags, sommelierTitle, sommelierNote, addCtaLabel, dossierCtaLabel, onAdd, onDossier }: FeaturedSpecialProps) { return <section className="group overflow-hidden border border-[#d9c2b5]/60 bg-[#f8f3ed]"><div className="grid grid-cols-1 lg:grid-cols-12"><div className="relative min-h-[320px] overflow-hidden bg-[#f2ede7] lg:col-span-6"><img src={imageUrl} alt={imageAlt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute left-4 top-4 flex items-center gap-2 border border-[#d9c2b5]/40 bg-[#fef9f2]/95 px-2 py-1 font-['Hanken_Grotesk'] text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1d1b18]"><span className="h-2 w-2 animate-ping bg-[#a85d22]" />{badge}</div></div><div className="flex flex-col justify-between gap-6 p-5 sm:p-8 lg:col-span-6"><div className="space-y-3"><div className="flex items-center justify-between border-b border-[#d9c2b5]/50 pb-2 font-['Hanken_Grotesk'] text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8a4509]"><span>{eyebrow}</span><span className="text-[14px] text-[#1d1b18]">{price}</span></div><h2 className="font-['Bodoni_Moda'] text-[clamp(2rem,4vw,2.8rem)] leading-[1.05] text-[#1d1b18]">{title}</h2><p className="font-['Hanken_Grotesk'] text-[13px] leading-5 text-[#544339]">{description}</p><div className="flex flex-wrap gap-1.5 font-['Hanken_Grotesk'] text-[10px] font-semibold uppercase tracking-[0.1em]">{tags.map((tag, index) => <span key={tag} className={index === tags.length - 1 ? "bg-[#f6decd] px-2 py-1" : "border border-[#d9c2b5] bg-[#f2ede7] px-2 py-1"}>{tag}</span>)}</div></div><div className="space-y-3 border-t border-[#d9c2b5]/50 pt-4"><div className="flex items-start gap-2 border border-[#d9c2b5]/40 bg-[#fef9f2] p-3"><Wine className="mt-0.5 h-5 w-5 shrink-0 text-[#8a4509]" /><div><div className="font-['Hanken_Grotesk'] text-[10px] font-semibold uppercase tracking-[0.12em]">{sommelierTitle}</div><p className="mt-1 font-['Hanken_Grotesk'] text-[12px] leading-5 text-[#544339]">{sommelierNote}</p></div></div><div className="flex flex-col gap-2 sm:flex-row"><button type="button" onClick={onAdd} className="flex-1 bg-[#32302c] px-4 py-3 font-['Hanken_Grotesk'] text-[10px] font-semibold uppercase tracking-[0.13em] text-[#f5f0ea] transition-colors hover:bg-[#8a4509]">{addCtaLabel}</button><button type="button" onClick={onDossier} className="border border-[#d9c2b5] bg-[#f2ede7] px-4 py-3 font-['Hanken_Grotesk'] text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1d1b18] hover:bg-[#ece7e1]"><Info className="mr-1 inline h-3.5 w-3.5" />{dossierCtaLabel}</button></div></div></div></div></section>; }
