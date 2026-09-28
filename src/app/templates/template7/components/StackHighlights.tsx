import { Globe2, Sparkles, Zap } from "lucide-react";
const icons = [Zap, Sparkles, Globe2];

interface StackHighlightsProps {
  items: { stackHighlightTitle: string; stackHighlightDetail: string }[];
}

export default function StackHighlights({ items }: StackHighlightsProps) { return <section className="mx-auto w-full max-w-[1280px] px-4 pb-2 pt-6 sm:px-6 lg:px-6"><div className="grid grid-cols-1 gap-3 rounded-md border border-[#eeeeee] bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">{items.map((item, index) => { const Icon = icons[index] ?? Zap; return <article key={item.stackHighlightTitle} className="flex items-center gap-3 p-2"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#f3f3f3] text-black"><Icon className="h-5 w-5" /></div><div><h2 className="text-[15px] font-medium">{item.stackHighlightTitle}</h2><p className="text-[12px] leading-5 text-[#47464a]">{item.stackHighlightDetail}</p></div></article>; })}</div></section>; }
