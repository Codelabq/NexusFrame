import { resolveMappingPaths } from "./path-resolution";
import { assembleTemplateData } from "./template-data";
import type { MappingObject } from "@/types/mapping";
import type { ResolveResult } from "@/types/resolve";

export * from "./path-resolution";
export * from "./template-data";
export * from "@/types/resolve";
export type { MappingObject } from "@/types/mapping";

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