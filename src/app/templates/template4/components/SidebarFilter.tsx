import { ChevronDown, Truck } from "lucide-react";
import { brands, departments } from "../data";

interface FilterGroupProps {
  title: string;
  options: readonly string[];
}

function FilterGroup({ title, options }: FilterGroupProps) {
  return (
    <fieldset className="border-t border-[#e5e7eb] pt-[1rem]">
      <legend className="w-full flex items-center justify-between font-['Inter'] text-[14px] font-[700] text-[#141b2b] mb-[0.75rem]">
        {title}
        <ChevronDown aria-hidden="true" className="text-[#737686]" size={16} />
      </legend>
      <div className="flex flex-col gap-[0.5rem]">
        {options.map((option) => (
          <label className="flex items-start gap-[0.5rem] font-['Inter'] text-[13px] text-[#434655] cursor-pointer" key={option}>
            <input className="mt-[0.125rem] w-[1rem] h-[1rem] accent-[#2563eb]" type="checkbox" />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function SidebarFilter() {
  return (
    <aside className="hidden lg:block w-[256px] sticky top-[120px] bg-[#ffffff] p-[1rem] border border-[#e5e7eb] rounded-[0.5rem]">
      <div className="flex flex-col gap-[1.5rem]">
        <div className="bg-[#f1f3ff] p-[0.75rem] rounded-[0.25rem]">
          <h2 className="font-['Inter'] text-[14px] font-[700] text-[#141b2b] flex items-center gap-[0.5rem] mb-[0.75rem]">
            <Truck aria-hidden="true" className="text-[#2563eb]" size={18} />
            Prime Delivery
          </h2>
          <label className="flex items-start gap-[0.5rem] font-['Inter'] text-[13px] text-[#434655] cursor-pointer">
            <input defaultChecked className="mt-[0.125rem] w-[1rem] h-[1rem] accent-[#2563eb]" type="checkbox" />
            <span>Prime / Next-Day Delivery</span>
          </label>
        </div>
        <FilterGroup title="Departments" options={departments} />
        <FilterGroup title="Brands" options={brands} />
      </div>
    </aside>
  );
}
