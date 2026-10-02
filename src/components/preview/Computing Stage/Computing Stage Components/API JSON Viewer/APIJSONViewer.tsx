"use client";

import { BadgeCheck, Braces } from "lucide-react";
import { codeToHtml } from "shiki";
import { useEffect, useState } from "react";
import type { ResponseMetadata } from "@/types/fetching";

// function renderJsonLine(line: string, index: number) {
//   const match = line.match(/^(\s*)(".*?"?)(:)?(.*)$/);
//   if (!match) return <span key={index}>{line}</span>;

//   const [, indentation, key, colon, value] = match;
//   const isString = value.trim().startsWith('"');
//   const isNumber = /^-?\d/.test(value.trim());
//   const isBoolean = /^(true|false|null)/.test(value.trim());

//   return (
//     <span key={index}>
//       {indentation}
//       <span className={colon ? "text-sky-300" : "text-emerald-300"}>{key}</span>
//       {colon}
//       <span
//         className={
//           isString
//             ? "text-amber-300"
//             : isNumber
//               ? "text-purple-300"
//               : isBoolean
//                 ? "text-pink-300"
//                 : "text-slate-300"
//         }
//       >
//         {value}
//       </span>
//     </span>
//   );
// }

export default function APIJSONViewer({
  data,
  metadata,
}: {
  data: unknown;
  metadata?: ResponseMetadata;
}) {
  const [highlightedJson, setHighlightedJson] = useState<{
    code: string;
    html: string;
  } | null>(null);
  let formattedJson = "";

  try {
    formattedJson = JSON.stringify(data, null, 2) ?? "";
  } catch {
    formattedJson = "[Unable to serialize response as JSON]";
  }

  useEffect(() => {
    if (!formattedJson) return;

    let cancelled = false;
    void codeToHtml(formattedJson, { lang: "json", theme: "dark-plus" })
      .then((html) => {
        if (!cancelled) setHighlightedJson({ code: formattedJson, html });
      })
      .catch(() => {
        if (!cancelled) setHighlightedJson(null);
      });

    return () => {
      cancelled = true;
    };
  }, [formattedJson]);

  const highlightedHtml =
    highlightedJson?.code === formattedJson ? highlightedJson.html : null;

  return (
    <div className="h-full min-h-0 min-w-0 lg:col-span-6 p-5 sm:p-6 flex flex-col justify-between space-y-4">
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Braces className="w-4 h-4 text-cyan-400" />
            <span className="font-headline-sm text-base text-on-surface font-semibold">
              Live Inbound JSON Tree
            </span>
          </div>
          <div className="flex items-center space-x-2 font-label-mono text-xs">
            <span className="text-secondary">
              {metadata
                ? `${metadata.status} ${metadata.statusText ?? ""}`
                : "Waiting"}
            </span>
            <span className="text-outline">•</span>
            <span className="text-on-surface-variant">Full response</span>
            <span className="text-outline">•</span>
            <span className="text-on-surface-variant">
              {metadata?.url ?? "No response yet"}
            </span>
          </div>
        </div>

        <div className="min-h-0 min-w-0 max-w-full flex-1 rounded-xl bg-surface-container-lowest border border-outline-variant font-code-block font-mono text-xs p-4 leading-relaxed overflow-auto whitespace-pre text-on-surface-variant [&_pre]:!m-0 [&_pre]:!bg-transparent [&_pre]:!p-0">
          {highlightedHtml ? (
            <div dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
          ) : (
            formattedJson
          )}
        </div>
      </div>

      <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container border border-stroke-cyan text-xs font-label-mono w-full max-h-[400px] overflow-auto">
        <div className="flex items-center space-x-2">
          <BadgeCheck className="w-4 h-4" />
          <span className="text-on-surface font-medium">
            Full API response available for path mapping
          </span>
        </div>
        <span className="text-outline">{data ? "Ready" : "No response"}</span>
      </div>
    </div>
  );
}
