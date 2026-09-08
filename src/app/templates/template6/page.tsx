import { ChevronDown, LockKeyhole, Radio } from "lucide-react";
import Crosshair from "./components/Crosshair";
import CatalogArchive from "./components/CatalogArchive";
import DiagnosticFooter from "./components/DiagnosticFooter";
import EnginePropsBar from "./components/EnginePropsBar";
import MarqueeTicker from "./components/MarqueeTicker";
import ProductCanvas from "./components/ProductCanvas";
import PurchaseTerminal from "./components/PurchaseTerminal";
import TerminalHeader from "./components/TerminalHeader";
import TerminalStyles from "./components/TerminalStyles";

export default function Template6Page() {
  return (
    <>
      <TerminalStyles />
      <TerminalHeader />
      <Crosshair />
      <main className="relative flex min-h-screen w-full flex-col bg-[#131313] font-['JetBrains_Mono'] text-[#e2e2e2]">
        <div className="scanlines-overlay" />
        <div className="mt-[108px]">
          <MarqueeTicker />
          <div className="border-b-[1px] border-[#caf300] bg-[#131313] px-[32px] py-[8px] text-[9px] uppercase tracking-[0.12em] text-[#caf300]"><span className="mr-[8px] inline-block h-[7px] w-[7px] bg-[#caf300]" />Secure enclave active <span className="ml-[16px] text-[#777777]">NODE: NYKEE-01 // <LockKeyhole className="inline h-[11px] w-[11px]" /> ENCRYPTED ALLOCATION PIPELINE</span></div>
          <MarqueeTicker reverse />
        </div>

        <section className="relative grid w-full grid-cols-1 gap-0 overflow-hidden px-[32px] py-[64px] lg:grid-cols-12">
          <div className="flex min-h-[460px] flex-col justify-center border-[1px] border-[#353535] bg-[#0e0e0e] p-[32px] lg:col-span-6">
            <div className="flex items-center gap-[8px] text-[10px] uppercase tracking-[0.12em] text-[#caf300]"><Radio className="h-[14px] w-[14px]" /> Template 06 // Terminal initialized</div>
            <h1 className="mt-[16px] font-['Space_Grotesk'] text-[clamp(3rem,8vw,7rem)] font-[700] uppercase leading-[0.9] text-[#ffffff]">SHO<span className="text-[#caf300]">{"//"}</span>VOLT-00</h1>
            <p className="mt-[20px] max-w-[520px] text-[11px] uppercase tracking-[0.12em] text-[#777777]">GEN-IV CYBER KINETIC SILHOUETTE // ALLOCATION INTERFACE ONLINE</p>
            <div className="mt-[32px] flex items-center gap-[8px] text-[10px] uppercase text-[#a0a0a0]"><span className="h-[6px] w-[6px] animate-pulse bg-[#caf300]" /> Verified specification run: CYBER-RUNNER MK.IV</div>
            <ChevronDown className="mt-[32px] h-[20px] w-[20px] animate-bounce text-[#caf300]" />
          </div>
          <ProductCanvas />
          <EnginePropsBar />
        </section>

        <PurchaseTerminal />
        <CatalogArchive />
      </main>
      <DiagnosticFooter />
    </>
  );
}
