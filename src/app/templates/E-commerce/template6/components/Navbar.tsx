import { Menu, WalletCards } from "lucide-react";

interface NavigationLink {
  label: string;
  active: boolean;
}

interface NavbarProps {
  links: NavigationLink[];
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export default function Navbar({ links, isMenuOpen, onToggleMenu }: NavbarProps) {
  return (
    <>
      <div className="flex h-20 items-center justify-between border-b-[1px] border-[#353535] px-[32px]">
        <div className="flex items-center gap-[12px]">
          <div className="flex h-[28px] w-[28px] items-center justify-center border-[1px] border-[#ffffff] text-[10px] font-[700]">N//</div>
          <div>
            <p className="font-['Space_Grotesk'] text-[18px] font-[700] uppercase leading-none text-[#ffffff]">NYKEE</p>
            <p className="mt-[4px] text-[9px] font-[700] uppercase tracking-[0.12em] text-[#caf300]">[SYS_VER_0.4]</p>
          </div>
        </div>

        <nav className="hidden items-center gap-[8px] lg:flex" aria-label="Terminal navigation">
          {links.map((link) => (
            <button type="button" key={link.label} className={link.active ? "border-[1px] border-[#ffffff] bg-[#ffffff] px-[16px] py-[4px] font-['JetBrains_Mono'] text-[10px] font-[700] text-[#131313]" : "px-[16px] py-[4px] font-['JetBrains_Mono'] text-[10px] font-[500] text-[#a0a0a0] transition-colors hover:text-[#caf300]"}>
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-[16px] xl:flex">
          <div className="text-right text-[9px] uppercase tracking-[0.08em] text-[#a0a0a0]"><span className="block text-[#caf300]">SECURE ENCLAVE ACTIVE</span><span>GAS: 18.42 GWEI // BASE</span></div>
          <button type="button" className="flex items-center gap-[8px] border-[1px] border-[#caf300] bg-[#caf300] px-[16px] py-[8px] text-[10px] font-[700] uppercase text-[#131313] transition-colors hover:bg-[#ffffff]"><WalletCards className="h-[14px] w-[14px]" /> Connect wallet</button>
        </div>

        <button type="button" onClick={onToggleMenu} aria-label="Toggle terminal navigation" className="border-[1px] border-[#ffffff] p-[8px] text-[#ffffff] lg:hidden">
          <Menu className="h-[18px] w-[18px]" />
        </button>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col border-b-[1px] border-[#353535] bg-[#131313] px-[32px] py-[12px] lg:hidden" aria-label="Mobile terminal navigation">
          {links.map((link) => (
            <button type="button" key={link.label} className={link.active ? "border-b-[1px] border-[#caf300] py-[12px] text-left text-[11px] font-[700] text-[#caf300]" : "border-b-[1px] border-[#353535] py-[12px] text-left text-[11px] text-[#a0a0a0]"}>{link.label}</button>
          ))}
        </nav>
      )}
    </>
  );
}
