<<<<<<< HEAD
import type { HybridMappingObject, MappingObject } from "./mapping";
=======
import type { MappingObject } from "./mapping";
>>>>>>> origin/main

export type TemplateData = Record<string, unknown>;

export interface ResolveError {
  templateKey: string;
  path: string;
  message: string;
}

export interface ResolveWarning {
  templateKey?: string;
  message: string;
}

export interface PathResolutionResult {
  values: TemplateData;
  errors: ResolveError[];
}

export interface ResolveInput {
  apiResponse: unknown;
  mapping: MappingObject;
}

<<<<<<< HEAD
export interface HybridResolveInput {
  apiResponse: unknown;
  mapping: HybridMappingObject;
}

export interface DirectResolveInput {
  data: TemplateData;
}

=======
>>>>>>> origin/main
export interface ResolveResult {
  success: boolean;
  ready: boolean;
  data: TemplateData;
  errors: ResolveError[];
  warnings: ResolveWarning[];
}
