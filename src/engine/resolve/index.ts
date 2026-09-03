import { resolveMappingPaths } from "./path-resolution";
import { assembleTemplateData } from "./template-data";
import type {
  MappingObject,
  ResolveResult,
} from "./types";

export * from "./path-resolution";
export * from "./template-data";
export * from "./types";

export function resolve(
  apiResponse: unknown,
  mapping: MappingObject,
): ResolveResult {
  const pathResult = resolveMappingPaths(apiResponse, mapping);
  const data = assembleTemplateData(mapping, pathResult.values);

  return {
    success: pathResult.errors.length === 0,
    ready: pathResult.errors.length === 0,
    data,
    errors: pathResult.errors,
    warnings: [],
  };
}