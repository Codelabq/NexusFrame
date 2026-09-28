interface FilterStripProps {
  categories: { categoryId: string; categoryLabel: string }[];
  allCategoryId: string;
  tagFilters: { tagFilterId: string; tagFilterLabel: string }[];
  inStockOnlyLabel: string;
  activeCategory: string;
  inStockOnly: boolean;
  activeTags: string[];
  onCategory: (category: string) => void;
  onStock: () => void;
  onTag: (tag: string) => void;
}

export default function FilterStrip({ categories, tagFilters, inStockOnlyLabel, activeCategory, inStockOnly, activeTags, onCategory, onStock, onTag }: FilterStripProps) { return <section className="sticky top-0 z-30 mb-5 bg-[#f9f9f9] pb-3 pt-1"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 border-[3px] border-black bg-white p-2 shadow-[4px_4px_0_#1b1b1b] xl:flex-row xl:items-center"><div className="flex items-center gap-1 overflow-x-auto">{categories.map((category) => <button type="button" key={category.categoryId} onClick={() => onCategory(category.categoryId)} className={`whitespace-nowrap border-2 border-black px-3 py-1.5 font-['Space_Grotesk'] text-[10px] font-bold uppercase ${activeCategory === category.categoryId ? "bg-[#ffe600] shadow-[2px_2px_0_#1b1b1b]" : "bg-white hover:bg-[#eeeeee]"}`}>{category.categoryLabel}</button>)}</div><div className="flex flex-wrap items-center gap-1"><button type="button" onClick={onStock} className={`flex items-center gap-2 border-2 border-black px-2 py-1 font-['Space_Grotesk'] text-[10px] font-bold uppercase ${inStockOnly ? "bg-[#76ff9e]" : "bg-[#f3f3f3]"}`}><span className="h-2 w-2 animate-ping bg-[#00e575]" />{inStockOnlyLabel}</button>{tagFilters.map((tag) => <button type="button" key={tag.tagFilterId} onClick={() => onTag(tag.tagFilterId)} className={`border-2 border-black px-2 py-1 font-['Space_Grotesk'] text-[10px] font-bold uppercase ${activeTags.includes(tag.tagFilterId) ? "bg-[#ffe600] shadow-[2px_2px_0_#1b1b1b]" : "bg-white hover:bg-[#ffdbcf]"}`}>{tag.tagFilterLabel}</button>)}</div></div></section>; }
