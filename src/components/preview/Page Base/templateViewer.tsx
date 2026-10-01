import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import NotFound from "@/app/not-found";

import {
  LayoutDashboard,
  MonitorSmartphone,
  RefreshCw,
  Maximize,
  Minimize2,
} from "lucide-react";

type TemplateProps = { resolvedData?: Record<string, unknown> };
type TemplateComponent = ComponentType<TemplateProps>;
type TemplateLoadState =
  | { key: string; status: "loaded"; component: TemplateComponent }
  | { key: string; status: "error" };

const MOBILE_FRAME_WIDTH = 390;
const MOBILE_CANVAS_WIDTH = 1440;
const MOBILE_CANVAS_SCALE = MOBILE_FRAME_WIDTH / MOBILE_CANVAS_WIDTH;

const templateLoaders: Record<
  string,
  () => Promise<{ default: TemplateComponent }>
> = {
  "RealEstate-01": () =>
    import("@/app/templates/RealEstate/template01/RealEstate-01"),
  "RealEstate-02": () =>
    import("@/app/templates/RealEstate/template02/RealEstate-02"),
  "RealEstate-03": () =>
    import("@/app/templates/RealEstate/template03/RealEstate-03"),
  "RealEstate-04": () =>
    import("@/app/templates/RealEstate/template04/RealEstate-04"),
  "RealEstate-05": () =>
    import("@/app/templates/RealEstate/template05/RealEstate-05"),
  "RealEstate-06": () =>
    import("@/app/templates/RealEstate/template06/RealEstate-06"),
  "RealEstate-07": () =>
    import("@/app/templates/RealEstate/template07/RealEstate-07"),
  "RealEstate-08": () =>
    import("@/app/templates/RealEstate/template08/RealEstate-08"),
  "RealEstate-09": () =>
    import("@/app/templates/RealEstate/template09/RealEstate-09"),
  "RealEstate-10": () =>
    import("@/app/templates/RealEstate/template10/RealEstate-10"),
};

export default function TemplateViewer({
  category,
  templateId,
  onReloadTemplate,
  data,
}: {
  category: string;
  templateId: string;
  onReloadTemplate: () => void;
  data: Record<string, unknown>;
}) {
  const templateNumber = templateId.slice(category.length + 1);
  const templateKey = `${category}-${templateNumber}`;
  const loadTemplate =
    templateKey === templateId ? templateLoaders[templateKey] : undefined;
  const [reloadVersion, setReloadVersion] = useState(0);
  const instanceKey = `${templateKey}:${reloadVersion}`;
  const [templateLoadState, setTemplateLoadState] =
    useState<TemplateLoadState | null>(null);
  const currentLoadState =
    templateLoadState?.key === instanceKey ? templateLoadState : null;
  const Template =
    currentLoadState?.status === "loaded" ? currentLoadState.component : null;
  const loadError = !loadTemplate || currentLoadState?.status === "error";
  const [isMobileView, setIsMobileView] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === viewerRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleToggleFullscreen = async () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    if (document.fullscreenElement === viewer) {
      await document.exitFullscreen();
    } else {
      await viewer.requestFullscreen();
    }
  };

  useEffect(() => {
    let cancelled = false;
    if (!loadTemplate) {
      return undefined;
    }

    loadTemplate()
      .then((module) => {
        if (!cancelled) {
          setTemplateLoadState({
            key: instanceKey,
            status: "loaded",
            component: module.default,
          });
        }
      })
      .catch(() => {
        if (!cancelled) {
          setTemplateLoadState({ key: instanceKey, status: "error" });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [instanceKey, loadTemplate]);

  return (
    <div
      ref={viewerRef}
      className={`bg-glass-fill backdrop-blur-md border border-stroke-cyan glow-cyan-subtle ${
        isFullscreen
          ? "h-screen w-screen overflow-y-auto rounded-none"
          : "rounded-2xl overflow-hidden"
      }`}
    >
      {/* Header */}
      <div className="sticky top-0 z-30 bg-black px-4 py-3 py-3 border-b border-stroke-cyan flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-error-container/80 border border-error/50 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-tertiary-container/80 border border-tertiary/50 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-secondary-container/80 border border-secondary/50 inline-block"></span>
          </div>
          <div className="h-4 w-px bg-outline-variant mx-1"></div>
          <span className="font-headline-sm text-sm text-on-surface font-semibold flex items-center gap-2">
            <LayoutDashboard className="small-icon text-cyan-400" />
            Live Previewer — {templateKey}
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-label-mono bg-secondary/15 text-secondary border border-secondary/20">
            Hydrated Live
          </span>
        </div>
        <div className="flex items-center space-x-2 text-outline">
          <button
            type="button"
            aria-label={
              isMobileView
                ? "Switch to desktop preview"
                : "Switch to mobile preview"
            }
            aria-pressed={isMobileView}
            onClick={() => setIsMobileView((current) => !current)}
            className="p-1.5 rounded hover:text-on-surface hover:bg-surface-container transition-colors"
            title={
              isMobileView
                ? "Switch to desktop preview"
                : "Switch to mobile preview"
            }
          >
            <MonitorSmartphone className="small-icon" />
          </button>
          <button
            type="button"
            aria-label="Reload template and restore placeholder data"
            onClick={() => {
              setReloadVersion((current) => current + 1);
              onReloadTemplate();
            }}
            className="p-1.5 rounded hover:text-on-surface hover:bg-surface-container transition-colors"
            title="Reload template and restore placeholder data"
          >
            <RefreshCw className="small-icon" />
          </button>
          <button
            type="button"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            aria-pressed={isFullscreen}
            onClick={handleToggleFullscreen}
            className="p-1.5 rounded hover:text-primary-container hover:bg-surface-container transition-colors"
            title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <Minimize2 className="small-icon" />
            ) : (
              <Maximize className="small-icon" />
            )}
          </button>
        </div>
      </div>
      <div
        className={
          isMobileView
            ? "flex justify-center overflow-auto bg-black/30 p-4"
            : "w-full"
        }
      >
        {/* Content */}
        <div
          className={
            isMobileView
              ? "h-[844px] w-[390px] max-w-full overflow-auto border border-stroke-cyan/40 bg-white shadow-xl"
              : "w-full"
          }
        >
          <div
            className={isMobileView ? "w-[1440px]" : "w-full"}
            style={isMobileView ? { zoom: MOBILE_CANVAS_SCALE } : undefined}
          >
            {Template ? (
              <Template key={instanceKey} resolvedData={data} />
            ) : loadError ? (
              <NotFound />
            ) : (
              <div role="status" className="p-6">
                Loading template...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
