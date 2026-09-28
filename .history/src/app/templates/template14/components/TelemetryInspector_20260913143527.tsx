import { CheckCircle, Memory, Speed, Zap, AlertTriangle } from "lucide-react";
import type { Workstation } from "../data";

type TelemetryInspectorProps = {
  selectedIds: string[];
  workstations: Workstation[];
  onRemove: (id: string) => void;
};

export default function TelemetryInspector({ selectedIds, workstations, onRemove }: TelemetryInspectorProps) {
  const selected = workstations.filter((w) => selectedIds.includes(w.id));
  const totalPrice = selected.reduce((sum, w) => sum + w.price, 0);
  const totalTdp = selected.reduce((sum, w) => sum + (parseInt(w.tdp?.replace(/\D/g, "") ?? "0") || 0), 0);
  const maxTdp = 1000;

  return (
    <aside className="hidden xl:block w-80 bg-[#0d1c2d] rounded-xl border border-[#1f242d] p-4 sticky top-24 h-fit">
      <div className="mb-4 flex items-center justify-between border-b border-[#1f242d] pb-3">
        <h3 className="font-['Inter'] text-sm font-semibold uppercase tracking-wider text-[#94a3b8]">Telemetry Inspector</h3>
        <span className="font-['JetBrains_Mono'] text-[11px] text-[#38bdf8]">{selected.length} / 3</span>
      </div>

      {selected.length === 0 ? (
        <div className="text-center py-8 text-[#64748b] font-['Inter'] text-sm">
          Select up to 3 workstations<br />to compare telemetry
        </div>
      ) : (
        <>
          <div className="space-y-3 mb-4">
            {selected.map((ws) => (
              <div key={ws.id} className="flex items-center justify-between bg-[#12151b] rounded-lg p-3 border border-[#1f242d]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-['Inter'] text-sm font-medium text-[#f8fafc] truncate max-w-[140px]">{ws.name}</span>
                </div>
                <button onClick={() => onRemove(ws.id)} className="text-[#64748b] hover:text-[#ef4444]">
                  <CheckCircle className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="space-y-3 mb-4 border-t border-[#1f242d] pt-3">
            <div className="bg-[#12151b] rounded-lg p-3 border border-[#1f242d]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider text-[#94a3b8] flex items-center gap-1">
                  <Zap className="h-3 w-3 text-[#0284c7]" /> TDP
                </span>
                <span className="font-['JetBrains_Mono'] text-lg font-semibold text-[#f8fafc]">{totalTdp}W</span>
              </div>
              <div className="h-2 bg-[#1f242d] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    totalTdp > maxTdp ? "bg-[#ef4444]" : "bg-gradient-to-r from-[#0284c7] to-[#00e5ff]"
                  }`}
                  style={{ width: `${Math.min((totalTdp / maxTdp) * 100, 100)}%` }}
                />
              </div>
              <p className="mt-1 font-['Inter'] text-[11px] text-[#64748b]">
                {totalTdp > maxTdp ? "⚠ Exceeds recommended PSU headroom" : "Within thermal envelope"}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#12151b] rounded-lg p-3 border border-[#1f242d] text-center">
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider text-[#94a3b8]">Total Price</span>
                <div className="font-['JetBrains_Mono'] text-xl font-semibold text-[#f8fafc] mt-1">${totalPrice.toLocaleString()}</div>
              </div>
              <div className="bg-[#12151b] rounded-lg p-3 border border-[#1f242d] text-center">
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider text-[#94a3b8]">Monthly (0% APR)</span>
                <div className="font-['JetBrains_Mono'] text-xl font-semibold text-[#38bdf8] mt-1">${selected.reduce((s, w) => s + w.monthlyPrice, 0)}/mo</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <button className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-[#f8fafc] font-['Inter'] text-sm font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 shadow-sm">
              <span>Generate Spec Sheet</span>
              <Memory className="h-4 w-4" />
            </button>
            <button className="w-full border border-[#2d3442] bg-[#1e232f] text-[#f8fafc] font-['Inter'] text-sm font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 hover:border-[#38bdf8] hover:bg-[#282f3f]">
              <span>Export Configuration</span>
              <Speed className="h-4 w-4" />
            </button>
          </div>
        </>
      )}
    </aside>
  );
}