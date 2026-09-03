export type MappingObject = Record<string, string>;

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

export interface ResolveResult {
  success: boolean;
  ready: boolean;
  data: TemplateData;
  errors: ResolveError[];
  warnings: ResolveWarning[];
}