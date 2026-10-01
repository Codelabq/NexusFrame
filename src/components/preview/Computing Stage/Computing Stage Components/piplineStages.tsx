import { Check, CircleX, LoaderCircle } from "lucide-react";
import type { DataFillingMode } from "@/types/filling";
import type { PipelineStage } from "@/types/preview";

export default function PipelineStages({
  mode,
  stage,
  errorAt,
  validationFailed,
  responseStatus,
}: {
  mode: DataFillingMode;
  stage: PipelineStage;
  errorAt?: PipelineStage;
  validationFailed: boolean;
  responseStatus?: number;
}) {
  const steps: { id: PipelineStage; label: string }[] = [
    ...(mode === "Direct"
      ? []
      : [{ id: "fetching" as const, label: "Fetching" }]),
    { id: "mapping", label: mode === "Direct" ? "Direct Data" : "Mapping" },
    { id: "validating", label: "Validation" },
    { id: "resolving", label: "Resolve" },
    { id: "ready", label: "Approval" },
  ];
  const activeStage = stage === "error" ? errorAt : stage;
  const activeIndex = steps.findIndex((step) => step.id === activeStage);

  return (
    <div className="max-w-full overflow-x-auto rounded-xl border border-outline-variant bg-surface-container-lowest/80 px-3 py-2">
      <div className="flex min-w-max items-center gap-2 font-label-mono text-xs">
        {steps.map((step, index) => {
          const isFailed =
            (stage === "error" && step.id === errorAt) ||
            (validationFailed && step.id === "validating");
          const isComplete =
            !isFailed &&
            ((stage === "ready" && step.id !== "ready") ||
              (activeIndex >= 0 && index < activeIndex));
          const isActive = !isFailed && !isComplete && index === activeIndex;
          const color = isFailed
            ? "text-red-300 border-red-400/50 bg-red-500/10"
            : isComplete
              ? "text-secondary border-secondary/30 bg-secondary/5"
              : isActive
                ? "text-electric-cyan border-electric-cyan/50 bg-electric-cyan/10 shadow-[0_0_18px_rgba(0,220,230,0.12)]"
                : "text-on-surface-variant border-outline-variant bg-surface-container-lowest";

          return (
            <div key={step.id} className="flex items-center gap-2">
              <div
                aria-current={isActive ? "step" : undefined}
                className={`flex items-center gap-2 whitespace-nowrap rounded-lg border px-2.5 py-2 transition-all duration-500 ${color}`}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current/40">
                  {isFailed ? (
                    <CircleX className="h-3.5 w-3.5" />
                  ) : isComplete ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : isActive ? (
                    <LoaderCircle className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  )}
                </span>
                <span>{step.label}</span>
                {isActive && (
                  <span className="text-[9px] uppercase tracking-wide">
                    Active
                  </span>
                )}
                {step.id === "fetching" && responseStatus !== undefined && (
                  <span className="text-[10px] opacity-80">
                    {responseStatus}
                  </span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className="h-0.5 w-5 overflow-hidden rounded-full bg-outline-variant sm:w-8">
                  <div
                    className={`h-full bg-electric-cyan transition-[width] duration-700 ${isComplete ? "w-full" : isActive ? "w-1/2" : "w-0"}`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
