interface CellarPour {
  cellarPourId: string;
  cellarPourType: string;
  cellarPourName: string;
  cellarPourOrigin: string;
  cellarPourPrice: string;
  cellarPourNote: string;
}

interface CellarSectionProps {
  pours: CellarPour[];
  eyebrow: string;
  title: string;
  description: string;
  addCtaLabel: string;
  onAdd: (pour: CellarPour) => void;
}

export default function CellarSection({ pours, eyebrow, title, description, addCtaLabel, onAdd }: CellarSectionProps) {
  return <section className="border border-[#d9c2b5]/50 bg-[#f8f3ed] p-5 sm:p-8"><div className="mb-6 flex flex-col justify-between gap-3 border-b border-[#d9c2b5]/50 pb-4 md:flex-row md:items-end"><div><span className="font-['Hanken_Grotesk'] text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8a4509]">{eyebrow}</span><h3 className="font-['Bodoni_Moda'] text-[clamp(2rem,4vw,2.8rem)] leading-tight text-[#1d1b18]">{title}</h3></div><p className=" font-['Hanken_Grotesk'] text-[12px] leading-5 text-[#544339]">{description}</p></div><div className="grid grid-cols-1 gap-5 md:grid-cols-3">{pours.map((pour) => <article key={pour.cellarPourId} className="flex flex-col justify-between gap-5 border border-[#d9c2b5]/40 bg-[#fef9f2] p-4 transition-colors hover:border-[#8a4509]"><div className="space-y-2"><div className="flex items-center justify-between gap-2"><span className="bg-[#f2ede7] px-2 py-1 font-['Hanken_Grotesk'] text-[9px] font-semibold uppercase tracking-[0.1em]">{pour.cellarPourType}</span><span className="font-['Hanken_Grotesk'] text-[11px] font-semibold text-[#8a4509]">{pour.cellarPourPrice}</span></div><h4 className="font-['Bodoni_Moda'] text-[20px] leading-6 text-[#1d1b18]">{pour.cellarPourName}</h4><p className="font-['Hanken_Grotesk'] text-[12px] text-[#544339]">{pour.cellarPourOrigin}</p><p className="pt-2 font-['Hanken_Grotesk'] text-[12px] italic leading-5 text-[#655548]">&quot;{pour.cellarPourNote}&quot;</p></div><button type="button" onClick={() => onAdd(pour)} className="border border-[#d9c2b5]/50 bg-[#f2ede7] py-2 font-['Hanken_Grotesk'] text-[10px] font-semibold uppercase tracking-[0.12em] hover:bg-[#ece7e1]">{addCtaLabel}</button></article>)}</div></section>;
}
