export type MappingObject = Record<string, string>;
export type MappingContract = MappingObject;

export type FillingMethod = "API" | "Direct";

export interface HybridMappingEntry {
  fillingMethod: FillingMethod;
  data: string;
}

export type HybridMappingObject = Record<string, HybridMappingEntry>;

export type ExpectedDataType = "string" | "number" | "array" | "null";
export type ExpectedTypesObject = Record<string, ExpectedDataType>;
export type ExpectedTypesContract = ExpectedTypesObject;

export interface MappingOutput {
  mapping: MappingObject;
  expectedTypes: ExpectedTypesObject;
}

export interface HybridMappingOutput {
  mapping: HybridMappingObject;
  expectedTypes: ExpectedTypesObject;
}

export type MappingErrorKind =
  | "InvalidRoot"
  | "MalformedPath"
  | "PathNotFound"
  | "IncompatibleValue"
  | "UnknownTemplateKey"
  | "EmptyPath"
  | "UnsupportedExpression"
  | "InvalidExpectedType"
  | "MissingRootPath";

export interface MappingError {
  kind: MappingErrorKind;
  message: string;
  path?: string;
  templateKey?: string;
}

export type MappingResult =
  | { ok: true; value: MappingOutput }
  | { ok: false; errors: MappingError[] };

export type HybridMappingResult =
  | { ok: true; value: HybridMappingOutput }
  | { ok: false; errors: MappingError[] };

export interface PathValidationResult {
  ok: boolean;
  error?: MappingError;
  resolvedValue?: unknown;
}
