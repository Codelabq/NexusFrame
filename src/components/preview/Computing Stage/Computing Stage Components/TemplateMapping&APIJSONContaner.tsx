import APIJSONViewer from "./API JSON Viewer/APIJSONViewer";
import TemplateMappingForm from "./Template Mapping/templateMappingForm";
import type { DataFillingMode } from "@/types/filling";
import type { PreviewField } from "./Template Mapping/templateMappingForm";
import type { ResponseMetadata } from "@/types/fetching";

export default function TemplateMappingApiJsonContainer({
  mode,
  fields,
  rootPath,
  onRootPathChange,
  onFieldChange,
  onSubmitMapping,
  apiResponse,
  responseMetadata,
}: {
  mode: DataFillingMode;
  fields: PreviewField[];
  rootPath: string;
  onRootPathChange: (rootPath: string) => void;
  onSubmitMapping: () => void;
  onFieldChange: (
    name: string,
    change: { data?: string; fillingMethod?: "API" | "Direct" },
  ) => void;
  apiResponse: unknown;
  responseMetadata?: ResponseMetadata;
}) {
  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-outline-variant bg-surface-container-lowest/70 overflow-y-auto custom-scrollbar">
      {/* LEFT COLUMN: Template Mapping Form */}
      <TemplateMappingForm
        mode={mode}
        fields={fields}
        rootPath={rootPath}
        onRootPathChange={onRootPathChange}
        onSubmitMapping={onSubmitMapping}
        onFieldChange={onFieldChange}
      />

      {/* RIGHT COLUMN: API Response Explorer */}
      {mode !== "Direct" && (
        <APIJSONViewer data={apiResponse} metadata={responseMetadata} />
      )}
    </div>
  );
}
