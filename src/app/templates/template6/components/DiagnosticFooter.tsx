import { Shield, Terminal } from "lucide-react";
import { authenticityHash, gasTelemetry, systemDiagnostics } from "../data";

function DiagnosticColumn({ title, rows }: { title: string; rows: { label: string; value: string }[] }) {
  return (
    <div>
      <h3 className="flex items-center gap-[8px] border-b-[1px] border-[#444932] pb-[8px] font-['JetBrains_Mono'] text-[11px] font-[700] uppercase text-[#ffffff]"><Terminal className="h-[14px] w-[14px] text-[#caf300]" />{title}</h3>
      <dl className="mt-[12px] flex flex-col gap-[8px] text-[10px] uppercase">
        {rows.map((row) => <div key={row.label} className="flex justify-between gap-[12px]"><dt className="text-[#a0a0a0]">{row.label}:</dt><dd className="text-right font-[700] text-[#e2e2e2]">{row.value}</dd></div>)}
      </dl>
    </div>
  );
}

export default function DiagnosticFooter() {
  return (
    <footer className="w-full border-t-[2px] border-[#caf300] bg-[#0e0e0e] px-[16px] pb-[48px] pt-[32px] font-['JetBrains_Mono'] text-[14px] text-[#e2e2e2]">
      <div className="grid grid-cols-1 gap-[32px] md:grid-cols-4">
        <div><h2 className="font-['Space_Grotesk'] text-[20px] font-[700] uppercase text-[#ffffff]">Vault // Protocol</h2><p className="mt-[12px] text-[10px] uppercase leading-[1.6] text-[#a0a0a0]">High-velocity cryptographic merchandise dispatch. Zero latency allocation under continuous decap curve.</p><p className="mt-[12px] text-[9px] text-[#caf300]">[HASH: {authenticityHash}]</p></div>
        <DiagnosticColumn title="System diagnostic" rows={systemDiagnostics} />
        <DiagnosticColumn title="Gas & allocation telemetry" rows={gasTelemetry} />
        <div>
          <h3 className="flex items-center gap-[8px] border-b-[1px] border-[#444932] pb-[8px] font-['JetBrains_Mono'] text-[11px] font-[700] uppercase text-[#ffffff]"><Shield className="h-[14px] w-[14px] text-[#caf300]" />Authenticity verification</h3>
          <div className="mt-[12px] border-[1px] border-[#353535] bg-[#1b1b1b] p-[8px] text-[9px] uppercase text-[#777777]">ID: 9948-9921-XX<br />SIG: SHA256:5A2F64B0C1842<br /><span className="mt-[8px] block bg-[#caf300] px-[4px] py-[2px] text-[#596c00]">VERIFIED // OFF-SPEC</span></div>
        </div>
      </div>
      <div className="mt-[48px] flex flex-col justify-between gap-[8px] border-t-[1px] border-[#353535] pt-[16px] text-[9px] uppercase text-[#777777] md:flex-row"><span>© 2025 N_VAULT INDUSTRIAL CORP. ALL RIGHTS RESERVED. CODE IS LAW.</span><span>SYS_STATE: [STANDBY_OPEN] // TERMINAL ID: 994-ALPHA</span></div>
    </footer>
  );
}
