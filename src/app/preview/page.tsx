"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import NotFound from "@/app/not-found";
import PageBase from "@/components/preview/Page Base/pageBase";
import ComputingStage from "@/components/preview/Computing Stage/computingStage";
import {
  buildHybridMapping,
  buildMapping,
  fetchApi,
  resolve,
  resolveDirect,
  resolveHybrid,
  validate,
  validateDirect,
  validateHybrid,
} from "@/engine";
import type { DataFillingMode } from "@/types/filling";
import type { FillingMethod } from "@/types/mapping";
import type { PreviewField } from "@/components/preview/Computing Stage/Computing Stage Components/Template Mapping/templateMappingForm";
import type { FetchSuccess } from "@/types/fetching";
import type {
  ExpectedTypesObject,
  HybridMappingObject,
  MappingObject,
} from "@/types/mapping";
import type { ValidationResult } from "@/types/validation";
import type { ResolveResult } from "@/types/resolve";
import type { PipelineStage } from "@/types/preview";
import { getExpectedTypes, templateDefinitions } from "@/templates";

type PreviewRuntimeState = {
  stage: PipelineStage;
  fetch?: FetchSuccess;
  mapping?: MappingObject | HybridMappingObject;
  directData?: Record<string, unknown>;
  validationFields?: string[];
  validation?: ValidationResult;
  resolve?: ResolveResult;
  error?: string;
  errorAt?: PipelineStage;
};

export default function NexusFramePreview() {
  return (
    <Suspense fallback={null}>
      <PreviewContent />
    </Suspense>
  );
}

function PreviewContent() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("templateId") ?? "RealEstate-02";
  const templateMatch = /^(.+)-(\d+)$/.exec(templateId);
  const category = templateMatch?.[1] ?? "";
  const templateNumber = templateMatch?.[2] ?? "";
  const definition =
    templateDefinitions[
      `${category}${templateNumber}` as keyof typeof templateDefinitions
    ];

  const [isGenerating, setIsGenerating] = useState(false);
  const [showComputing, setShowComputing] = useState(false);
  const [mode, setMode] = useState<DataFillingMode>("Hybrid");
  const [rootPath, setRootPath] = useState("");
  const [apiUrl, setApiUrl] = useState("");
  const [apiResponse, setApiResponse] = useState<unknown>(null);
  const [fullApiResponse, setFullApiResponse] = useState<unknown>(null);
  const [fields, setFields] = useState<PreviewField[]>(() =>
    (definition?.fields ?? []).map((field) => ({
      ...field,
      data: "",
      fillingMethod: field.type === "array" ? "API" : "Direct",
    })),
  );
  const [resolvedData, setResolvedData] = useState<Record<string, unknown>>({});
  const [runtime, setRuntime] = useState<PreviewRuntimeState>({
    stage: "idle",
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFields(
      (definition?.fields ?? []).map((field) => ({
        ...field,
        data: "",
        fillingMethod: field.type === "array" ? "API" : "Direct",
      })),
    );
  }, [definition]);

  if (!templateMatch || !definition) {
    return <NotFound />;
  }

  const expectedTypes: ExpectedTypesObject = getExpectedTypes(definition);

  const handleGenerate = async () => {
    setShowComputing(true);
    setIsGenerating(true);
    if (mode === "Direct") {
      setRuntime({ stage: "mapping" });
      setIsGenerating(false);
      return;
    }

    const fetchStartedAt = Date.now();
    setRuntime({ stage: "fetching" });
    const result = await fetchApi({ apiUrl });
    const remainingFetchDisplayTime = Math.max(
      0,
      1000 - (Date.now() - fetchStartedAt),
    );
    if (remainingFetchDisplayTime > 0) {
      await new Promise((resolveDelay) =>
        setTimeout(resolveDelay, remainingFetchDisplayTime),
      );
    }

    if (result.ok) {
      setFullApiResponse(result.value.data);
      setApiResponse(result.value.data);
      setRuntime({ stage: "mapping", fetch: result.value });
    } else {
      setRuntime({
        stage: "error",
        error: result.error.message,
        errorAt: "fetching",
      });
    }
    setIsGenerating(false);
  };

  const handleFieldChange = (
    name: string,
    change: { data?: string; fillingMethod?: FillingMethod },
  ) => {
    setFields((current) =>
      current.map((field) =>
        field.name === name ? { ...field, ...change } : field,
      ),
    );
  };

  const handleSubmitMapping = () => {
    if (mode === "Direct") {
      const directData = Object.fromEntries(
        fields.map((field) => [field.name, field.data]),
      );
      const validation = validateDirect({ data: directData, expectedTypes });
      setRuntime({
        stage: "validating",
        validation,
        directData,
        validationFields: [
          ...new Set([
            ...fields.map((field) => field.name),
            ...validation.issues.map((issue) => issue.fieldName),
          ]),
        ],
      });
      return;
    }

    if (mode === "Hybrid") {
      const inputs = Object.fromEntries(
        fields.map((field) => [
          field.name,
          { fillingMethod: field.fillingMethod ?? "API", data: field.data },
        ]),
      );
      const mappingResult = buildHybridMapping(
        fields.map((field) => field.name),
        inputs,
        expectedTypes,
        rootPath,
        apiResponse,
      );
      if (!mappingResult.ok) {
        setRuntime({
          stage: "error",
          error: mappingResult.errors.map((error) => error.message).join(" "),
          errorAt: "mapping",
        });
        return;
      }

      const mapping = mappingResult.value.mapping;
      const validation = validateHybrid({
        apiResponse,
        mapping,
        expectedTypes: mappingResult.value.expectedTypes,
      });
      setRuntime({
        stage: "validating",
        mapping,
        validation,
        validationFields: [
          ...new Set([
            ...fields.map((field) => field.name),
            ...validation.issues.map((issue) => issue.fieldName),
          ]),
        ],
      });
      return;
    }

    const mappingResult = buildMapping(
      fields.map((field) => field.name),
      Object.fromEntries(
        fields
          .filter((field) => field.fillingMethod !== "Direct")
          .map((field) => [field.name, field.data]),
      ),
      expectedTypes,
      rootPath,
      apiResponse,
    );
    if (!mappingResult.ok) {
      setRuntime({
        stage: "error",
        error: mappingResult.errors.map((error) => error.message).join(" "),
        errorAt: "mapping",
      });
      return;
    }

    const mapping = mappingResult.value.mapping;
    const validation = validate({
      apiResponse,
      mapping,
      expectedTypes: mappingResult.value.expectedTypes,
    });
    setRuntime({
      stage: "validating",
      mapping,
      validation,
      validationFields: [
        ...new Set([
          ...fields.map((field) => field.name),
          ...validation.issues.map((issue) => issue.fieldName),
        ]),
      ],
    });
  };

  const handleValidationComplete = () => {
    if (!runtime.validation?.valid) return;

    let resolveResult: ResolveResult;
    if (mode === "Direct" && runtime.directData) {
      resolveResult = resolveDirect(runtime.directData);
    } else if (mode === "Hybrid" && runtime.mapping) {
      resolveResult = resolveHybrid(
        apiResponse,
        runtime.mapping as HybridMappingObject,
      );
    } else if (runtime.mapping) {
      resolveResult = resolve(apiResponse, runtime.mapping as MappingObject);
    } else {
      return;
    }

    if (!resolveResult.success) {
      setRuntime((current) => ({
        ...current,
        stage: "error",
        error: resolveResult.errors.map((error) => error.message).join(" "),
        errorAt: "resolving",
        resolve: resolveResult,
      }));
      return;
    }

    setRuntime((current) => ({
      ...current,
      stage: "resolving",
      resolve: resolveResult,
    }));
  };

  const handleResolveComplete = () => {
    setRuntime((current) => ({ ...current, stage: "ready" }));
  };

  const handleBackToMapping = () => {
    setRuntime((current) => ({
      ...current,
      stage: "mapping",
      validation: undefined,
      validationFields: undefined,
      resolve: undefined,
      directData: undefined,
      error: undefined,
      errorAt: undefined,
    }));
  };

  const handleInject = () => {
    if (!runtime.resolve) return;
    setResolvedData(runtime.resolve.data);
    handleCloseComputing();
  };

  const handleCloseComputing = () => {
    setIsGenerating(false);
    setShowComputing(false);
  };

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen cyber-grid antialiased selection:bg-electric-cyan selection:text-on-primary relative overflow-x-hidden pb-16">
      <style>{`
        .small-icon{
          width: 17px;
          height: 17px;
        }
        .cyber-grid {
          background-size: 32px 32px;
          background-image:
            linear-gradient(
              to right,
              rgba(0, 220, 230, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(0, 220, 230, 0.035) 1px,
              transparent 1px
            );
        }
        .glow-cyan-subtle {
          box-shadow:
            0 0 25px -4px rgba(0, 220, 230, 0.18),
            inset 0 1px 0 0 rgba(0, 242, 254, 0.3);
        }
        .glow-cyan-intense {
          box-shadow: 0 0 35px 2px rgba(0, 220, 230, 0.35);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(12, 20, 28, 0.6);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 220, 230, 0.25);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 220, 230, 0.5);
        }
      `}</style>

      {/* MAIN CANVAS */}
      <main className="max-w-[1440px] mx-auto px-4 md:px-12 pt-8 mt-20 pb-20 relative ">
        <PageBase
          category={category}
          templateId={templateId}
          onReloadTemplate={() => setResolvedData({})}
          handleGenerate={handleGenerate}
          isGenerating={isGenerating}
          mode={mode}
          onModeChange={setMode}
          apiUrl={apiUrl}
          onApiUrlChange={setApiUrl}
          resolvedData={resolvedData}
        />
        {/* WORKSPACE OVERLAY: THE COMPUTING COMPONENT */}
        <ComputingStage
          showComputing={showComputing}
          handleCloseComputing={handleCloseComputing}
          apiUrl={apiUrl}
          mode={mode}
          fields={fields}
          rootPath={rootPath}
          onRootPathChange={setRootPath}
          onFieldChange={handleFieldChange}
          apiResponse={fullApiResponse}
          onSubmitMapping={handleSubmitMapping}
          onValidationComplete={handleValidationComplete}
          onResolveComplete={handleResolveComplete}
          onBackToMapping={handleBackToMapping}
          onInject={handleInject}
          onRetryFetch={handleGenerate}
          stage={runtime.stage}
          runtimeError={runtime.error}
          errorAt={runtime.errorAt}
          validation={runtime.validation}
          validationFields={runtime.validationFields ?? []}
          resolveResult={runtime.resolve}
          responseMetadata={runtime.fetch?.metadata}
        />
      </main>
    </div>
  );
}
