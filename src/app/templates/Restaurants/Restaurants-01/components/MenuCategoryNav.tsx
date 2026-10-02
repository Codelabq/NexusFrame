interface MenuCategoryNavProps {
  categories: { categoryId: string; categoryLabel: string }[];
  allCategoryId: string;
  dietaryLabel: string;
  dietaryFilters: { dietaryFilterId: string; dietaryFilterLabel: string }[];
  activeCategory: string;
  activeDiet: string | null;
  onCategoryChange: (category: string) => void;
  onDietChange: (diet: string) => void;
}

export default function MenuCategoryNav({ categories, dietaryLabel, dietaryFilters, activeCategory, activeDiet, onCategoryChange, onDietChange }: MenuCategoryNavProps) { return <nav className="sticky top-0 z-30 border-b border-[#d9c2b5]/50 bg-[#fef9f2]/95 px-5 py-2 backdrop-blur-md lg:px-16"><div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-2 lg:flex-row lg:items-center"><div className="flex items-center gap-1 overflow-x-auto py-1">{categories.map((category) => <button type="button" key={category.categoryId} onClick={() => onCategoryChange(category.categoryId)} className={`whitespace-nowrap px-3 py-1.5 font-['Hanken_Grotesk'] text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors ${activeCategory === category.categoryId ? "bg-[#32302c] text-[#f5f0ea]" : "bg-[#f2ede7] text-[#544339] hover:bg-[#ece7e1]"}`}>{category.categoryLabel}</button>)}</div><div className="flex items-center gap-1 overflow-x-auto py-1"><span className="hidden px-1 font-['Hanken_Grotesk'] text-[10px] uppercase tracking-[0.12em] text-[#655548] sm:inline">{dietaryLabel}</span>{dietaryFilters.map((diet) => <button type="button" key={diet.dietaryFilterId} onClick={() => onDietChange(diet.dietaryFilterId)} className={`flex shrink-0 items-center gap-1.5 px-2.5 py-1 font-['Hanken_Grotesk'] text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors ${activeDiet === diet.dietaryFilterId ? "bg-[#8a4509] text-white" : "bg-[#f2ede7] text-[#544339] hover:bg-[#ece7e1]"}`}><span className={`h-1.5 w-1.5 ${activeDiet === diet.dietaryFilterId ? "bg-white" : "bg-[#877368]"}`} />{diet.dietaryFilterLabel}</button>)}</div></div></nav>; }
