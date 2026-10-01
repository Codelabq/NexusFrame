"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Activity,
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  Check,
  CircleAlert,
  CircleCheckBig,
  CircleX,
  Code2,
  Database,
  FileJson2,
  LoaderCircle,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { ValidationIssue, ValidationResult } from "@/types/validation";
import type { ResolveResult } from "@/types/resolve";
import type { PipelineStage } from "@/types/preview";

export function FetchingExperience({ apiUrl }: { apiUrl: string }) {
  return (
    <section
      aria-live="polite"
      className="flex-1 min-h-0 overflow-y-auto p-6 sm:p-10 flex items-center justify-center"
    >
      <div className="w-full max-w-4xl grid gap-8 md:grid-cols-[1fr_1.15fr] items-center">
        <div className="flex flex-col items-center text-center">
          <div className="relative flex items-center justify-center w-32 h-32 mb-6">
            <div className="absolute inset-2 rounded-full border border-electric-cyan/30 animate-ping" />
            <div className="absolute inset-0 rounded-full border border-electric-cyan/20" />
            <div className="absolute inset-4 rounded-full border border-electric-cyan/30" />
            <div className="relative w-16 h-16 rounded-full border border-electric-cyan/50 bg-electric-cyan/10 flex items-center justify-center text-electric-cyan">
              <Database className="w-8 h-8" />
            </div>
            <ArrowDownToLine className="absolute bottom-2 right-1 w-5 h-5 text-secondary animate-bounce" />
          </div>
          <div className="flex items-center gap-2 text-electric-cyan font-label-mono text-xs uppercase">
            <LoaderCircle className="w-4 h-4 animate-spin" />
            Request in progress
          </div>
          <h2 className="mt-3 text-on-surface text-2xl font-semibold">
            Fetching API data
          </h2>
          <p className="mt-2 text-sm text-on-surface-variant">
            NexusFrame is retrieving the response that will power this
            template’s mapping stage.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-stroke-cyan/40 bg-surface-container-lowest shadow-xl">
          <div className="flex items-center justify-between border-b border-outline-variant px-4 py-3">
            <span className="flex items-center gap-2 text-xs font-label-mono text-on-surface">
              <Activity className="w-4 h-4 text-electric-cyan" />
              OUTBOUND REQUEST
            </span>
            <span className="rounded bg-electric-cyan/10 px-2 py-1 text-[10px] font-label-mono text-electric-cyan">
              GET
            </span>
          </div>
          <div className="space-y-4 p-4 sm:p-5">
            <div>
              <span className="text-[10px] font-label-mono uppercase text-outline">
                Configured endpoint
              </span>
              <p className="mt-1 break-all rounded-md border border-outline-variant bg-black/30 px-3 py-2 font-mono text-xs text-secondary-fixed">
                {apiUrl || "No API URL configured"}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-on-surface-variant">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-cyan opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-electric-cyan" />
              </span>
              Opening connection
            </div>
            <div className="grid grid-cols-3 gap-1.5" aria-hidden="true">
              {Array.from({ length: 18 }, (_, index) => (
                <span
                  key={index}
                  className="h-1 rounded-full bg-electric-cyan/25 animate-pulse"
                  style={{ animationDelay: `${index * 45}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ValidationExperience({
  fields,
  result,
  onComplete,
  onBackToMapping,
}: {
  fields: string[];
  result: ValidationResult;
  onComplete: () => void;
  onBackToMapping: () => void;
}) {
  const sequenceFields = useMemo(
    () =>
      Array.from(
        new Set([...fields, ...result.issues.map((issue) => issue.fieldName)]),
      ),
    [fields, result],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [completedIndex, setCompletedIndex] = useState(-1);
  const [failure, setFailure] = useState<ValidationIssue | null>(null);
  const [finished, setFinished] = useState(false);
  const completeRef = useRef(onComplete);

  useEffect(() => {
    completeRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let cancelled = false;
    let timer = 0;

    const validateField = (index: number) => {
      if (cancelled) return;
      if (index >= sequenceFields.length) {
        timer = window.setTimeout(() => {
          if (cancelled) return;
          setFinished(true);
          completeRef.current();
        }, 350);
        return;
      }

      setActiveIndex(index);
      timer = window.setTimeout(() => {
        if (cancelled) return;
        const fieldName = sequenceFields[index];
        const issue = result.issues.find(
          (entry) => entry.fieldName === fieldName,
        );
        setCompletedIndex(index);
        if (issue) {
          setFailure(issue);
          return;
        }
        if (!result.valid && index === sequenceFields.length - 1) {
          setFailure(result.issues[0] ?? null);
          return;
        }
        timer = window.setTimeout(() => validateField(index + 1), 250);
      }, 500);
    };

    timer = window.setTimeout(() => validateField(0), 0);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [sequenceFields, result]);

  const failureField = failure?.fieldName;
  const progress = sequenceFields.length
    ? Math.max(0, (completedIndex + 1) / sequenceFields.length) * 100
    : 100;

  return (
    <section className="flex-1 min-h-0 overflow-y-auto p-5 sm:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="flex items-center gap-2 text-xs font-label-mono uppercase text-electric-cyan">
              <ShieldCheck className="w-4 h-4" />
              Contract validation
            </span>
            <h2 className="mt-2 text-2xl font-semibold text-on-surface">
              Checking mapped fields
            </h2>
            <p className="mt-1 text-sm text-on-surface-variant">
              Each result comes from the active NexusFrame validator.
            </p>
          </div>
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl border ${failure ? "border-red-400/40 bg-red-500/10 text-red-300" : finished ? "border-secondary/40 bg-secondary/10 text-secondary" : "border-electric-cyan/40 bg-electric-cyan/10 text-electric-cyan"}`}
          >
            {failure ? (
              <CircleX className="h-7 w-7" />
            ) : finished ? (
              <CircleCheckBig className="h-7 w-7" />
            ) : (
              <LoaderCircle className="h-7 w-7 animate-spin" />
            )}
          </div>
        </div>

        <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-surface-container-high">
          <div
            className={`h-full rounded-full transition-[width] duration-500 ${failure ? "bg-red-400" : "bg-electric-cyan"}`}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest">
          {sequenceFields.map((fieldName, index) => {
            const issue = result.issues.find(
              (entry) => entry.fieldName === fieldName,
            );
            const isActive = index === activeIndex && !failure && !finished;
            const isComplete = index <= completedIndex;
            const isInvalid = Boolean(issue && isComplete);
            return (
              <div
                key={fieldName}
                className={`flex items-center justify-between gap-4 border-b border-outline-variant/70 px-4 py-3 last:border-b-0 transition-colors ${isActive ? "bg-electric-cyan/5" : ""}`}
              >
                <div className="min-w-0">
                  <p className="truncate font-mono text-sm text-on-surface">
                    {isActive && !isComplete
                      ? `Validating ${fieldName}...`
                      : fieldName}
                  </p>
                  {isInvalid && issue && (
                    <p className="mt-1 text-xs text-red-300">{issue.message}</p>
                  )}
                </div>
                <span
                  className={`shrink-0 text-xs font-label-mono ${isInvalid ? "text-red-300" : isComplete ? "text-secondary" : isActive ? "text-electric-cyan" : "text-outline"}`}
                >
                  {isInvalid ? (
                    <span className="flex items-center gap-1">
                      <CircleX className="h-4 w-4" /> Invalid
                    </span>
                  ) : isComplete ? (
                    <span className="flex items-center gap-1">
                      <Check className="h-4 w-4" /> Valid
                    </span>
                  ) : isActive ? (
                    <span className="flex items-center gap-1">
                      <LoaderCircle className="h-4 w-4 animate-spin" /> Checking
                    </span>
                  ) : (
                    "Queued"
                  )}
                </span>
              </div>
            );
          })}
        </div>

        {failure && (
          <div className="mt-5 rounded-xl border border-red-400/40 bg-red-950/30 p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-red-200">
                  Validation failed{failureField ? ` for ${failureField}` : ""}
                </h3>
                <p className="mt-1 break-words text-sm text-red-100/90">
                  {failure.message ?? "The validator returned no issue detail."}
                </p>
                {failure.path && (
                  <p className="mt-2 break-all font-mono text-xs text-red-200/70">
                    {failure.path}
                  </p>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={onBackToMapping}
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-red-300/30 px-3 py-2 text-sm text-red-100 transition-colors hover:bg-red-400/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Mapping
            </button>
          </div>
        )}

        {!result.valid &&
          !failure &&
          completedIndex === sequenceFields.length - 1 && (
            <div className="mt-5 rounded-xl border border-red-400/40 bg-red-950/30 p-4 text-sm text-red-100">
              The validator reported a failure without a field-specific issue.
              <button
                type="button"
                onClick={onBackToMapping}
                className="ml-4 inline-flex items-center gap-2 underline underline-offset-4"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Mapping
              </button>
            </div>
          )}
      </div>
    </section>
  );
}

export function ResolveExperience({
  result,
  onComplete,
}: {
  result: ResolveResult;
  onComplete: () => void;
}) {
  const serialized = JSON.stringify(result.data, null, 2);
  const [visibleLength, setVisibleLength] = useState(0);
  const completeRef = useRef(onComplete);

  useEffect(() => {
    completeRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let frame = 0;
    const duration = Math.min(2500, Math.max(900, serialized.length * 1.5));
    const startedAt = performance.now();

    const reveal = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      setVisibleLength(Math.floor(serialized.length * progress));
      if (progress < 1) {
        frame = requestAnimationFrame(reveal);
      } else {
        completeRef.current();
      }
    };

    frame = requestAnimationFrame(reveal);
    return () => cancelAnimationFrame(frame);
  }, [serialized]);

  return (
    <section className="flex-1 min-h-0 overflow-y-auto p-5 sm:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <span className="flex items-center gap-2 text-xs font-label-mono uppercase text-electric-cyan">
              <Sparkles className="h-4 w-4" />
              Resolve output
            </span>
            <h2 className="mt-2 text-2xl font-semibold text-on-surface">
              Constructing template data
            </h2>
            <p className="mt-1 text-sm text-on-surface-variant">
              Revealing the object produced by the NexusFrame resolver.
            </p>
          </div>
          <div className="rounded-xl border border-electric-cyan/40 bg-electric-cyan/10 p-3 text-electric-cyan">
            <Code2 className="h-7 w-7" />
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-stroke-cyan/40 bg-[#071019] shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <span className="flex items-center gap-2 font-mono text-xs text-secondary-fixed">
              <FileJson2 className="h-4 w-4 text-electric-cyan" />
              resolved-data.json
            </span>
            <span className="text-[10px] font-label-mono text-outline">
              {Object.keys(result.data).length} template keys
            </span>
          </div>
          <pre className="max-h-[48vh] min-h-56 overflow-auto p-4 font-mono text-xs leading-6 text-secondary-fixed">
            <code>{serialized.slice(0, visibleLength)}</code>
            <span className="animate-pulse text-electric-cyan">▍</span>
          </pre>
          <div className="h-1 bg-white/5">
            <div
              className="h-full bg-electric-cyan transition-[width] duration-75"
              style={{
                width: `${(visibleLength / Math.max(1, serialized.length)) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ApprovalExperience({
  result,
  onInject,
  onBackToMapping,
}: {
  result: ResolveResult;
  onInject: () => void;
  onBackToMapping: () => void;
}) {
  return (
    <section className="flex-1 min-h-0 overflow-y-auto p-5 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl rounded-2xl border border-secondary/40 bg-surface-container-lowest p-5 shadow-2xl sm:p-7">
        <div className="flex items-start gap-4">
          <div className="rounded-xl border border-secondary/40 bg-secondary/10 p-3 text-secondary">
            <CircleCheckBig className="h-7 w-7" />
          </div>
          <div>
            <span className="text-xs font-label-mono uppercase text-secondary">
              Resolve complete
            </span>
            <h2 className="mt-1 text-2xl font-semibold text-on-surface">
              Inject resolved data?
            </h2>
            <p className="mt-2 text-sm text-on-surface-variant">
              {Object.keys(result.data).length} resolved template keys are
              ready. Review the actual resolver output, then choose whether to
              inject it.
            </p>
          </div>
        </div>
        <pre className="mt-5 max-h-64 overflow-auto rounded-lg border border-outline-variant bg-black/40 p-4 font-mono text-xs leading-5 text-secondary-fixed">
          {JSON.stringify(result.data, null, 2)}
        </pre>
        {result.warnings.length > 0 && (
          <div className="mt-4 space-y-2 rounded-lg border border-amber-400/30 bg-amber-950/20 p-3 text-sm text-amber-100">
            {result.warnings.map((warning, index) => (
              <p key={`${warning.templateKey ?? "warning"}-${index}`}>
                {warning.message}
              </p>
            ))}
          </div>
        )}
        <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onBackToMapping}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-outline-variant px-4 py-2 text-sm text-on-surface transition-colors hover:border-stroke-cyan"
          >
            <RotateCcw className="h-4 w-4" />
            Back to Mapping
          </button>
          <button
            type="button"
            onClick={onInject}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-electric-cyan px-5 py-2 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-container"
          >
            <Check className="h-4 w-4" />
            Inject
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function StageErrorExperience({
  message,
  errorAt,
  onRetry,
  onBackToMapping,
}: {
  message: string;
  errorAt?: PipelineStage;
  onRetry: () => void;
  onBackToMapping: () => void;
}) {
  const isFetchError = errorAt === "fetching";
  const isResolveError = errorAt === "resolving";
  return (
    <section className="flex-1 min-h-0 overflow-y-auto p-6 sm:p-10 flex items-center justify-center">
      <div className="w-full max-w-2xl rounded-2xl border border-red-400/40 bg-red-950/20 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="rounded-xl border border-red-400/40 bg-red-500/10 p-3 text-red-300">
            <CircleAlert className="h-7 w-7" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-label-mono uppercase text-red-300">
              {isFetchError
                ? "Fetch failed"
                : isResolveError
                  ? "Resolve failed"
                  : "Mapping could not be built"}
            </p>
            <h2 className="mt-1 text-xl font-semibold text-on-surface">
              {isFetchError
                ? "API request did not complete"
                : isResolveError
                  ? "Resolved data could not be constructed"
                  : "Review the mapping inputs"}
            </h2>
            <p className="mt-3 break-words text-sm text-red-100/90">
              {message}
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-end gap-3">
          {isFetchError ? (
            <button
              type="button"
              onClick={onRetry}
              className="inline-flex items-center gap-2 rounded-lg bg-electric-cyan px-4 py-2 text-sm font-semibold text-on-primary"
            >
              <RotateCcw className="h-4 w-4" /> Retry request
            </button>
          ) : (
            <button
              type="button"
              onClick={onBackToMapping}
              className="inline-flex items-center gap-2 rounded-lg border border-outline-variant px-4 py-2 text-sm text-on-surface"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Mapping
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
