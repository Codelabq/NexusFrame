import PageBaseHero from "./pageBaseHero";
import TemplateViewer from "./templateViewer";
import type { DataFillingMode } from "@/types/filling";
export default function PageBase({
  category,
  templateId,
  onReloadTemplate,
  handleGenerate,
  isGenerating,
  mode,
  onModeChange,
  apiUrl,
  onApiUrlChange,
  resolvedData,
}: {
  category: string;
  templateId: string;
  onReloadTemplate: () => void;
  handleGenerate: () => void;
  isGenerating: boolean;
  mode: DataFillingMode;
  onModeChange: (mode: DataFillingMode) => void;
  apiUrl: string;
  onApiUrlChange: (value: string) => void;
  resolvedData: Record<string, unknown>;
}) {
  return (
    <>
      <PageBaseHero
        handleGenerate={handleGenerate}
        isGenerating={isGenerating}
        mode={mode}
        onModeChange={onModeChange}
        apiUrl={apiUrl}
        onApiUrlChange={onApiUrlChange}
      />
      <TemplateViewer
        category={category}
        templateId={templateId}
        onReloadTemplate={onReloadTemplate}
        data={resolvedData}
      />
    </>
  );
}
