import {Plus} from 'lucide-react'

interface ProductCardProps {
  title: string;
  price: string;
  subtitle: string;
  primaryImage: string;
  hoverImage: string;
  badgeText?: string;
  category: string;
  onQuickAdd: (title: string) => void;
}

export default function ProductCard({
  title,
  price,
  subtitle,
  primaryImage,
  hoverImage,
  badgeText,
  category,
  onQuickAdd,
}: ProductCardProps) {
  return (
    <article className="group relative w-full aspect-[3/4] bg-[#eeeeee] overflow-hidden group cursor-pointer flex flex-col">
      <div className="relative w-full aspect-[3/4] bg-[#eeeeee] overflow-hidden">
        <img
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
          src={primaryImage}
        />
        <img
          alt={`${title} - hover`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
          src={hoverImage}
        />
        {badgeText && (
          <span className="absolute top-[1rem] left-[1rem] text-[11px] leading-[16px] tracking-[0.15em] uppercase text-[#000000]/80 bg-[#ffffff]/80 backdrop-blur-sm px-[0.5rem] py-[0.25rem] font-['Inter']">
            {badgeText}
          </span>
        )}
        <button
          className="absolute bottom-0 inset-x-0 w-full bg-[#000000] text-[#ffffff] py-[1rem] text-[11px] tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-500 ease-out hover:bg-[#5e5e5e] flex items-center justify-center gap-[0.25rem] font-['Inter']"
          onClick={() => onQuickAdd(title)}
          type="button"
        >
          <span className="material-symbols-outlined text-[16px]"> <Plus/></span>
          <span>Quick Add</span>
        </button>
      </div>
      <div className="mt-[1.25rem] flex flex-col space-y-[0.25rem] p-2.5">
        <div className="flex items-baseline justify-between gap-[0.5rem]">
          <h2 className="font-['Playfair_Display'] text-[22px] leading-[30px] text-[#000000] tracking-tight font-normal">
            {title}
          </h2>
          <span className="font-['Inter'] text-[13px] tracking-[0.05em] text-[#1a1c1c] font-light">
            {price}
          </span>
        </div>
        <span className="font-['Inter'] text-[12px] leading-[18px] text-[#5e5e5e]">
          {subtitle}
        </span>
      </div>
    </article>
  );
}
