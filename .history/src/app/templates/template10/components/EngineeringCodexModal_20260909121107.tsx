

import { CheckCircle2, ShieldAlert, Terminal, X } from "lucide-react";

export default function EngineeringCodexModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-2xl border border-violet-500/30 bg-[#0f131c] p-6 sm:p-8 text-[#dfe2ee] shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
            <Terminal className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white">Prism Engineering Codex v4.2</h2>
            <p className="text-xs text-gray-400 font-mono">Core primitives & architectural standards</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-gray-300 max-h-[60vh] overflow-y-auto pr-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400" /> 1. Zero-Allocation Streaming Hot-Paths
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              All real-time ingest daemons written in Rust must bypass garbage collection boundaries and operate on strict arena allocators or static memory pools. Unbounded allocations inside core packet loops trigger automated PR rejections.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400" /> 2. Async-First Autonomous Execution
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              We operate across 14 timezones with zero synchronous status meetings. Pull requests require two codeowners approval, automated fuzz testing, and deterministic replay benchmarks before merging.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-amber-400" /> 3. SOC-2 Type II & eBPF Safety Protocols
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Kernel verifier bounds checking is mandatory for all eBPF bytecode loaded into production nodes. Telemetry payloads must adhere strictly to OpenTelemetry semantic conventions without exception.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-violet-600 hover:bg-violet-500 px-5 py-2.5 text-xs font-semibold text-white transition-all shadow-lg shadow-violet-600/20"
          >
            Acknowledge & Return
          </button>
        </div>
      </div>
    </div>
  );
}
