import { Minimize2, X } from "lucide-react";
import ComputingStageHeader from "./Computing Stage Components/computingStageHeader";
import PipelineStages from "./Computing Stage Components/piplineStages";
import TemplateMappingApiJsonContainer from "./Computing Stage Components/TemplateMapping&APIJSONContaner";
import {
  ApprovalExperience,
  FetchingExperience,
  ResolveExperience,
  StageErrorExperience,
  ValidationExperience,
} from "./Computing Stage Components/stagePresentations";
import type { DataFillingMode } from "@/types/filling";
import type { PreviewField } from "./Computing Stage Components/Template Mapping/templateMappingForm";
import type { ValidationResult } from "@/types/validation";
import type { PipelineStage } from "@/types/preview";
import type { ResolveResult } from "@/types/resolve";
import type { ResponseMetadata } from "@/types/fetching";

type ComputingStageProps = {
  showComputing: boolean;
  handleCloseComputing: () => void;
  apiUrl: string;
  mode: DataFillingMode;
  fields: PreviewField[];
  rootPath: string;
  onRootPathChange: (rootPath: string) => void;
  onFieldChange: (
    name: string,
    change: { data?: string; fillingMethod?: "API" | "Direct" },
  ) => void;
  apiResponse: unknown;
  onSubmitMapping: () => void;
  onValidationComplete: () => void;
  onResolveComplete: () => void;
  onBackToMapping: () => void;
  onInject: () => void;
  onRetryFetch: () => void;
  stage: PipelineStage;
  runtimeError?: string;
  errorAt?: PipelineStage;
  validation?: ValidationResult;
  validationFields: string[];
  resolveResult?: ResolveResult;
  responseMetadata?: ResponseMetadata;
};

export default function ComputingStage({
  showComputing,
  handleCloseComputing,
  apiUrl,
  mode,
  fields,
  onFieldChange,
  rootPath,
  onRootPathChange,
  apiResponse,
  onSubmitMapping,
  onValidationComplete,
  onResolveComplete,
  onBackToMapping,
  onInject,
  onRetryFetch,
  stage,
  runtimeError,
  errorAt,
  validation,
  validationFields,
  resolveResult,
  responseMetadata,
}: ComputingStageProps) {
  if (!showComputing) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-[3vh] backdrop-blur-xs">
      <div className="relative flex h-full w-full max-w-[1720px] flex-col overflow-hidden rounded-2xl border border-stroke-cyan bg-glass-fill shadow-2xl">
        <style>{`
          @keyframes computing-stage-enter {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        <ComputingStageHeader>
          <div className="flex items-center gap-3">
            <PipelineStages
              mode={mode}
              stage={stage}
              errorAt={errorAt}
              validationFailed={validation?.valid === false}
              responseStatus={responseMetadata?.status}
            />
            <div className="hidden h-4 w-px bg-outline-variant sm:block" />
            <button
              type="button"
              onClick={handleCloseComputing}
              className="rounded-lg p-1.5 text-outline transition-colors hover:bg-surface-container-high hover:text-on-surface"
              title="Close Computing Stage"
              aria-label="Close Computing Stage"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </ComputingStageHeader>

        <main
          key={stage}
          className="flex min-h-0 flex-1 flex-col overflow-hidden"
          style={{ animation: "computing-stage-enter 380ms ease-out both" }}
        >
          {stage === "fetching" && <FetchingExperience apiUrl={apiUrl} />}

          {stage === "mapping" && (
            <TemplateMappingApiJsonContainer
              mode={mode}
              fields={fields}
              onFieldChange={onFieldChange}
              onSubmitMapping={onSubmitMapping}
              apiResponse={apiResponse}
              responseMetadata={responseMetadata}
              rootPath={rootPath}
              onRootPathChange={onRootPathChange}
            />
          )}

          {stage === "validating" && validation && (
            <ValidationExperience
              fields={validationFields}
              result={validation}
              onComplete={onValidationComplete}
              onBackToMapping={onBackToMapping}
            />
          )}

          {stage === "resolving" && resolveResult && (
            <ResolveExperience
              result={resolveResult}
              onComplete={onResolveComplete}
            />
          )}

          {stage === "ready" && resolveResult && (
            <ApprovalExperience
              result={resolveResult}
              onInject={onInject}
              onBackToMapping={onBackToMapping}
            />
          )}

          {stage === "error" && (
            <StageErrorExperience
              message={runtimeError ?? "The pipeline could not continue."}
              errorAt={errorAt}
              onRetry={onRetryFetch}
              onBackToMapping={onBackToMapping}
            />
          )}
        </main>

        {stage === "mapping" && (
          <div className="flex flex-none items-center justify-between gap-4 border-t border-stroke-cyan bg-surface-dim px-5 py-3 text-xs font-label-mono text-on-surface-variant">
            <span>
              {fields.filter((field) => field.data.trim()).length} of{" "}
              {fields.length} fields configured
            </span>
            <span className="hidden sm:inline">
              Review the mapping, then submit the form to validate.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
