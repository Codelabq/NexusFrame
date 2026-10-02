

import { CheckCircle2, ShieldAlert, Terminal, X } from "lucide-react";

interface CodexSection {
  codexSectionTitle: string;
  codexSectionBody: string;
}

interface EngineeringCodexModalProps {
  title?: string;
  subtitle?: string;
  sections?: CodexSection[];
  acknowledgeLabel: string;
  onClose: () => void;
}

const sectionIcons = [CheckCircle2, CheckCircle2, ShieldAlert];

export default function EngineeringCodexModal({ title, subtitle, sections, acknowledgeLabel, onClose }: EngineeringCodexModalProps) {
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

        {(title || subtitle) && (
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
              <Terminal className="h-5 w-5" />
            </div>
            <div>
              {title && <h2 className="text-xl font-bold tracking-tight text-white">{title}</h2>}
              {subtitle && <p className="text-xs text-gray-400 font-mono">{subtitle}</p>}
            </div>
          </div>
        )}

        {sections && sections.length > 0 && (
          <div className="space-y-4 text-sm text-gray-300 max-h-[60vh] overflow-y-auto pr-2">
            {sections.map((section, index) => {
              const Icon = sectionIcons[index] ?? CheckCircle2;
              const iconClass = index === sections.length - 1 ? "text-amber-400" : "text-cyan-400";
              return (
                <div className="rounded-xl border border-white/10 bg-white/5 p-4" key={section.codexSectionTitle}>
                  <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${iconClass}`} /> {section.codexSectionTitle}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {section.codexSectionBody}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-violet-600 hover:bg-violet-500 px-5 py-2.5 text-xs font-semibold text-white transition-all shadow-lg shadow-violet-600/20"
          >
            {acknowledgeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
