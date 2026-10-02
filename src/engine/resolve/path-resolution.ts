import type {
  PathResolutionResult,
  TemplateData,
  ResolveError,
} from "@/types/resolve";
import type { MappingObject } from "@/types/mapping";
import type { HybridMappingObject } from "@/types/mapping";
import { parseDataPath, resolvePathValue } from "@/engine/mapping/validator";

export function resolveMappingPaths(
  apiResponse: unknown,
  mapping: MappingObject,
): PathResolutionResult {
  const values: TemplateData = {};
  const errors: ResolveError[] = [];

  for (const [templateKey, path] of Object.entries(mapping)) {
    const segments = parseDataPath(path);
    const result = resolvePathValue(apiResponse, segments);

    if (!result.found) {
      errors.push({
        templateKey,
        path,
        message: `Unable to resolve path "${path}" for template key "${templateKey}".`,
      });
      continue;
    }

    values[templateKey] = result.value;
  }

  return {
    values,
    errors,
  };
}

export function resolveHybridMapping(
  apiResponse: unknown,
  mapping: HybridMappingObject,
): PathResolutionResult {
  const values: TemplateData = {};
  const errors: ResolveError[] = [];

  for (const [templateKey, entry] of Object.entries(mapping)) {
    if (entry.fillingMethod === "Direct") {
      values[templateKey] = entry.data;
      continue;
    }

    const result = resolvePathValue(apiResponse, parseDataPath(entry.data));
    if (!result.found) {
      errors.push({
        templateKey,
        path: entry.data,
        message: `Unable to resolve path "${entry.data}" for template key "${templateKey}".`,
      });
      continue;
    }
    values[templateKey] = result.value;
  }

  return { values, errors };
}
