import type {
  MappingObject,
  PathResolutionResult,
  TemplateData,
  ResolveError,
} from "./types";

function resolvePath(
  apiResponse: unknown,
  path: string,
): { found: boolean; value: unknown } {
  if (!path.trim()) {
    return { found: false, value: undefined };
  }

  let currentValue: unknown = apiResponse;

  for (const segment of path.split(".")) {
    if (
      currentValue === null ||
      (typeof currentValue !== "object" &&
        typeof currentValue !== "function")
    ) {
      return { found: false, value: undefined };
    }

    if (!Object.prototype.hasOwnProperty.call(currentValue, segment)) {
      return { found: false, value: undefined };
    }

    currentValue = (currentValue as Record<string, unknown>)[segment];
  }

  return {
    found: true,
    value: currentValue,
  };
}

export function resolveMappingPaths(
  apiResponse: unknown,
  mapping: MappingObject,
): PathResolutionResult {
  const values: TemplateData = {};
  const errors: ResolveError[] = [];

  for (const [templateKey, path] of Object.entries(mapping)) {
    const result = resolvePath(apiResponse, path);

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