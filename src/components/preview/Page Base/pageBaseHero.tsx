import { PencilSparkles, Link, X, Zap } from "lucide-react";
import type { DataFillingMode } from "@/types/filling";

export default function PageBaseHero({
  handleGenerate,
  isGenerating,
  mode,
  onModeChange,
  apiUrl,
  onApiUrlChange,
}: {
  handleGenerate: () => void;
  isGenerating: boolean;
  mode: DataFillingMode;
  onModeChange: (mode: DataFillingMode) => void;
  apiUrl: string;
  onApiUrlChange: (value: string) => void;
}) {
  return (
    <div>
      {/* Hero Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 text-lg">
        <div>
          <div className="inline-flex items-center space-x-2 mb-6 px-2.5 py-1 rounded-full bg-surface-container border border-stroke-cyan text-electric-cyan">
            <PencilSparkles className="small-icon" />
            <span className="font-label-mono text-xs text-primary tracking-wide uppercase">
              API-to-UI Direct Hydration
            </span>
          </div>
          <h1 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
            Preview Page
          </h1>
          <p className="font-body-md text-on-surface-variant mt-1.5 max-w-2xl">
            Connect arbitrary backend API endpoints directly into predefined UI
            components with zero glue code. Live map JSON responses into rich
            SaaS layouts.
          </p>
        </div>
      </div>

      {/* API Configuration Bar */}
      <div className="p-2 md:p-3 rounded-xl bg-glass-fill backdrop-blur-md border border-stroke-cyan glow-cyan-subtle mb-10">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <div className="flex items-center px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant focus-within:border-electric-cyan focus-within:ring-2 focus-within:ring-electric-cyan/20 transition-all flex-1">
            <Link className="text-outline hover:text-on-surface mr-2" />
            <span className="font-label-mono text-xs px-2 py-0.5 rounded bg-surface-container-high text-secondary mr-2 uppercase tracking-wide">
              GET
            </span>
            <input
              className="bg-transparent border-none outline-none font-code-block text-code-block text-on-surface w-full focus:ring-0 placeholder:text-outline p-0"
              placeholder="Enter production API endpoint..."
              type="text"
              value={apiUrl}
              onChange={(event) => onApiUrlChange(event.target.value)}
            />
            <button
              type="button"
              onClick={() => onApiUrlChange("")}
              className="text-outline hover:text-on-surface px-1"
              title="Clear"
              aria-label="Clear API URL"
            >
              <X className="small-icon" />
            </button>
          </div>
          <div className="flex items-center gap-1 rounded-lg bg-surface-container border border-outline-variant p-1 font-label-mono text-xs">
            {(["Hybrid", "API", "Direct"] as DataFillingMode[]).map(
              (option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => onModeChange(option)}
                  disabled={option === "Direct"}
                  className={`rounded-md px-3 py-2 transition-colors ${option === "Direct" ? "opacity-50" : ""} ${mode === option ? "bg-electric-cyan text-on-primary" : "text-on-surface-variant hover:text-on-surface"}`}
                >
                  {option}
                </button>
              ),
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleGenerate}
              className={`px-5 py-2.5 rounded-lg bg-electric-cyan text-on-primary font-headline-sm text-sm font-semibold tracking-wide flex items-center justify-center space-x-2 glow-cyan-intense hover:bg-primary-container active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap ${
                isGenerating ? "scale-95" : ""
              }`}
              id="btn-trigger-compute"
            >
              <Zap strokeWidth={3} className="small-icon" />
              <span>Generate UI</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
