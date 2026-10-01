import {
  ArrowRight,
  CircleCheck,
  Info,
  MousePointerClick,
  Scan,
} from "lucide-react";
import type { DataFillingMode } from "@/types/filling";
import type { FillingMethod } from "@/types/mapping";

export type PreviewField = {
  name: string;
  type: "string" | "number" | "array" | "null";
  required: boolean;
  data: string;
  fillingMethod?: FillingMethod;
};

type TemplateMappingFormProps = {
  mode: DataFillingMode;
  fields: PreviewField[];
  rootPath: string;
  onRootPathChange: (rootPath: string) => void;
  onSubmitMapping: () => void;
  onFieldChange: (
    name: string,
    change: { data?: string; fillingMethod?: FillingMethod },
  ) => void;
};

export default function TemplateMappingForm({
  mode,
  fields,
  rootPath,
  onRootPathChange,
  onSubmitMapping,
  onFieldChange,
}: TemplateMappingFormProps) {
  const hasMapping = mode !== "Direct";

  return (
    <div className="lg:col-span-6 p-5 sm:p-6 space-y-5 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-headline-sm text-base text-on-surface font-semibold flex items-center gap-2">
              <Scan className="w-4 h-4 text-cyan-400" />
              {hasMapping ? "Template Mapping Schema" : "Template Direct Data"}
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
              {hasMapping
                ? "Choose API paths or direct values for each template field."
                : "Provide the values that should fill each template field."}
            </p>
          </div>
          <span className="px-2 py-0.5 rounded text-[11px] font-label-mono bg-secondary/15 text-secondary border border-secondary/30">
            {fields.filter((field) => field.data.trim()).length} of{" "}
            {fields.length} Filled
          </span>
        </div>

        {hasMapping && (
          <label className="block space-y-1.5">
            <span className="text-xs font-label-mono text-outline">
              Root Path
            </span>
            <input
              type="text"
              value={rootPath}
              onChange={(event) => onRootPathChange(event.target.value)}
              className="w-full px-2 py-1.5 rounded bg-surface-container-lowest border border-stroke-cyan font-code-block text-xs text-secondary-fixed focus:outline-none"
              placeholder="products"
              aria-label="API root path"
            />
            <span className="block text-[11px] font-label-mono text-on-surface-variant">
              Use <code>item</code> for each repeated array level.
            </span>
          </label>
        )}

        <div className="space-y-3">
          {fields.map((field) => {
            const method =
              mode === "API"
                ? "API"
                : mode === "Direct"
                  ? undefined
                  : (field.fillingMethod ?? "API");
            return (
              <div
                key={field.name}
                className="p-3 rounded-lg bg-surface-container/70 border border-outline-variant hover:border-stroke-cyan transition-all"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-label-mono text-cyan-400 font-medium">
                      {field.name}
                    </span>
                    <span className="text-[12px] uppercase font-label-mono px-1.5 rounded bg-green-950 text-outline">
                      {field.type}
                    </span>
                    <span className="text-[12px] font-medium text-red-400">
                      {field.required ? "Required" : "Optional"}
                    </span>
                  </div>
                  {field.data.trim() && (
                    <CircleCheck className="w-4 h-4 text-green-400" />
                  )}
                </div>
                {mode === "Hybrid" && (
                  <div className="flex items-center gap-1 mb-2 font-label-mono text-[11px]">
                    {(["API", "Direct"] as FillingMethod[]).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          onFieldChange(field.name, { fillingMethod: option })
                        }
                        className={`rounded px-2 py-1 border ${method === option ? "border-electric-cyan text-electric-cyan bg-electric-cyan/10" : "border-outline-variant text-outline"}`}
                      >
                        {option === "API" ? "API Path" : "Direct Data"}
                      </button>
                    ))}
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-label-mono text-outline">
                    {method === "API" ? "Path:" : "Data:"}
                  </span>
                  <div className="flex-1 flex items-center px-2 py-1 rounded bg-surface-container-lowest border border-stroke-cyan font-code-block text-xs text-secondary-fixed">
                    {method === "API" && field.data !== "$" && (
                      <span className="text-outline mr-1">$response.</span>
                    )}
                    <input
                      type="text"
                      value={field.data}
                      onChange={(event) =>
                        onFieldChange(field.name, { data: event.target.value })
                      }
                      className="bg-transparent focus:outline-none w-full"
                      disabled={method === "API" && !rootPath.trim()}
                      placeholder={
                        method === "API"
                          ? rootPath.trim()
                            ? field.type === "array"
                              ? `${rootPath}.item.posts`
                              : `${rootPath}.item.title`
                            : "Set Root Path first"
                          : "Enter direct value"
                      }
                    />
                  </div>
                  {method === "API" && (
                    <button
                      type="button"
                      className="text-outline hover:text-electric-cyan p-1"
                      title="Pick node from tree"
                    >
                      <MousePointerClick className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-2.5 rounded bg-surface-container border border-outline-variant/60 flex items-center justify-between text-xs font-label-mono text-on-surface-variant mt-3">
        <div className="flex items-center space-x-2">
          <Info className="w-4 h-4" />
          <span>
            {hasMapping
              ? "Hybrid fields retain their filling method."
              : "Direct mode skips Mapping."}
          </span>
        </div>
        <span className="text-secondary font-semibold">Strict Types</span>
      </div>

      <button
        type="button"
        onClick={onSubmitMapping}
        className="w-full px-4 py-2.5 rounded-lg bg-electric-cyan text-on-primary font-headline-sm text-sm font-semibold flex items-center justify-center gap-2 glow-cyan-subtle hover:bg-primary-container transition-colors"
      >
        <span>Submit Form</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
