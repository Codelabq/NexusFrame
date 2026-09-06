import type {
  PathResolutionResult,
  TemplateData,
  ResolveError,
} from "@/types/resolve";
import type { MappingObject } from "@/types/mapping";
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