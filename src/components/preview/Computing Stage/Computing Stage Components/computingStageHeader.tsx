import type { ReactNode } from "react";

type ComputingStageHeaderProps = {
  children: ReactNode;
};

export default function ComputingStageHeader({
  children,
}: ComputingStageHeaderProps) {
  return (
    <div className="bg-surface-dim/95 border-b border-stroke-cyan px-5 py-3.5 flex flex-wrap items-center justify-between gap-4 flex-none">
      <div className="flex items-center space-x-3">
        <div className="w-2.5 h-2.5 rounded-full bg-electric-cyan animate-ping"></div>
        <div className="flex flex-col">
          <span className="font-headline-sm text-sm text-on-surface font-semibold flex items-center gap-1.5">
            Nexus Engine Pipeline
            <span className="text-[10px] px-2 py-0.5 rounded bg-surface-variant text-electric-cyan font-label-mono font-normal">
              COMPUTING STAGE
            </span>
          </span>
          <span className="text-xs text-outline font-label-mono">
            Trace ID: #nex-49910-live
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}
