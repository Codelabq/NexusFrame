import type { RefObject } from "react";
import { Search } from "lucide-react";

type CareersHeroProps = {
  badgeText: string;
  title: string;
  titleAccent: string;
  description: string;
  searchPlaceholder: string;
  searchShortcut: string;
  query: string;
  searchRef: RefObject<HTMLInputElement | null>;
  onQueryChange: (query: string) => void;
};

export default function CareersHero({ badgeText, title, titleAccent, description, searchPlaceholder, searchShortcut, query, searchRef, onQueryChange }: CareersHeroProps) {
  return <section className="relative z-10 mx-auto max-w-[1280px] px-4 pb-8 pt-20 text-center sm:px-6 lg:px-6 lg:pt-24"><div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#f3f3f3] px-3 py-1 font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-[0.06em] text-[#47464a]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black" />{badgeText}</div><h1 className="mx-auto max-w-3xl text-[clamp(2.1rem,5vw,3rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[#1a1c1c]">{title}<br /><span className="font-medium text-[#47464a]">{titleAccent}</span></h1><p className="mx-auto mt-4 max-w-2xl text-[14px] leading-6 text-[#47464a]">{description}</p><div className="mx-auto mt-8 flex max-w-2xl items-center rounded-md border border-[#eeeeee] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-shadow focus-within:shadow-[0_8px_28px_-8px_rgba(0,0,0,0.2)]"><Search className="ml-4 h-4 w-4 shrink-0 text-[#78767b]" /><input ref={searchRef} value={query} onChange={(event) => onQueryChange(event.target.value)} className="min-w-0 flex-1 bg-transparent px-2 py-3.5 text-[13px] outline-none placeholder:font-['JetBrains_Mono'] placeholder:text-[#78767b]" placeholder={searchPlaceholder} aria-label="Filter open roles" /><kbd className="mr-2 hidden rounded bg-[#f3f3f3] px-2 py-1 font-['JetBrains_Mono'] text-[11px] text-[#47464a] sm:inline-flex">{searchShortcut}</kbd></div></section>;
}
