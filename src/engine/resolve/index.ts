import { resolveHybridMapping, resolveMappingPaths } from "./path-resolution";
import type { HybridMappingObject, MappingObject } from "@/types/mapping";
import type { ResolveResult } from "@/types/resolve";

export * from "./path-resolution";
export * from "@/types/resolve";
export type { MappingObject } from "@/types/mapping";

export function resolve(
  apiResponse: unknown,
  mapping: MappingObject,
): ResolveResult {
  const pathResult = resolveMappingPaths(apiResponse, mapping);

  return {
    success: pathResult.errors.length === 0,
    ready: pathResult.errors.length === 0,
    data: pathResult.values,
    errors: pathResult.errors,
    warnings: [],
  };
}

export function resolveHybrid(
  apiResponse: unknown,
  mapping: HybridMappingObject,
): ResolveResult {
  const pathResult = resolveHybridMapping(apiResponse, mapping);
  return {
    success: pathResult.errors.length === 0,
    ready: pathResult.errors.length === 0,
    data: pathResult.values,
    errors: pathResult.errors,
    warnings: [],
  };
}

export function resolveDirect(data: Record<string, unknown>): ResolveResult {
  return {
    success: true,
    ready: true,
    data: { ...data },
    errors: [],
    warnings: [],
  };
}
