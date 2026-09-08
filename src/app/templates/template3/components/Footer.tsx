import { CheckCircle2, Leaf, PackageCheck, ShieldCheck } from "lucide-react";
import { footerContent } from "../data";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f9f1f6] pt-[4.5rem] pb-[3rem] shadow-[0_-4px_24px_rgba(244,114,182,0.03)]">
      <div className="max-w-[80rem] mx-auto px-[1rem] md:px-[1.5rem] lg:px-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[2rem] lg:gap-[4rem] pb-[3rem]">
          <div className="lg:col-span-4 flex flex-col gap-[1rem]">
            <h2 className="font-['Plus_Jakarta_Sans'] text-[20px] font-[600] text-[#1e1b1e] tracking-tight">
              {footerContent.brand}
            </h2>
            <p className="font-['Inter'] text-[15px] leading-[24px] text-[#544249] max-w-[24rem]">
              {footerContent.description}
            </p>
            <span className="inline-flex items-center gap-[0.25rem] font-['Inter'] text-[12px] font-[600] text-[#a43073] bg-[#ffd8e7]/50 px-[1rem] py-[0.5rem] rounded-full w-fit">
              <CheckCircle2 aria-hidden="true" size={14} />
              {footerContent.status}
            </span>
          </div>
          {footerContent.sections.map((section) => (
            <div className="lg:col-span-2 flex flex-col gap-[0.75rem]" key={section.title}>
              <h3 className="font-['Inter'] text-[14px] font-[600] text-[#1e1b1e] uppercase tracking-[0.08em]">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-[0.5rem] font-['Inter'] text-[15px] text-[#544249]">
                {section.links.map((link) => (
                  <li key={link}>
                    <a className="hover:text-[#a43073] transition-colors" href="#catalog">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-4 flex flex-col gap-[1rem]">
            <h3 className="font-['Inter'] text-[14px] font-[600] text-[#1e1b1e] uppercase tracking-[0.08em]">
              {footerContent.newsletter.title}
            </h3>
            <p className="font-['Inter'] text-[13px] leading-[18px] text-[#544249]">
              {footerContent.newsletter.description}
            </p>
            <form className="flex flex-col sm:flex-row gap-[0.5rem]">
              <input
                className="flex-1 min-w-0 h-[48px] px-[1rem] rounded-full bg-[#ffffff] text-[#1e1b1e] font-['Inter'] text-[14px] placeholder:text-[#87717a] focus:outline-none focus:ring-2 focus:ring-[#f472b6] shadow-[0_2px_8px_rgba(244,114,182,0.06)]"
                placeholder={footerContent.newsletter.placeholder}
                type="email"
              />
              <button className="h-[48px] px-[1.5rem] rounded-full bg-[#a43073] hover:bg-[#85145a] text-[#ffffff] font-['Inter'] text-[14px] font-[600] transition-all" type="submit">
                {footerContent.newsletter.action}
              </button>
            </form>
          </div>
        </div>
        <div className="pt-[1.5rem] border-t border-[#dac0c9] flex flex-col md:flex-row items-center justify-between gap-[1rem]">
          <p className="font-['Inter'] text-[13px] text-[#544249] text-center md:text-left">
            {footerContent.copyright}
          </p>
          <div className="flex items-center gap-[0.5rem]">
            {[
              ["Carbon neutral", Leaf],
              ["Protected checkout", ShieldCheck],
              ["Safe delivery", PackageCheck],
            ].map(([label, Icon]) => (
              <span className="flex items-center gap-[0.25rem] font-['Inter'] text-[11px] text-[#79576c]" key={label as string}>
                <Icon aria-hidden="true" size={14} />
                {label as string}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
