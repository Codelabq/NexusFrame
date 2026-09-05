import type {
  ExpectedDataType,
  ExpectedTypesObject,
  MappingObject,
} from "./mapping";

export type InvalidValueRule = (
  value: unknown,
  fieldName: string,
  expectedType?: ExpectedDataType,
) => string | null;

export type ValidationBlock =
  | "path-existence"
  | "type-compatibility"
  | "invalid-values";

export interface ValidationIssue {
  block: ValidationBlock;
  fieldName: string;
  path?: string;
  message: string;
}

export interface ValidationInput {
  apiResponse: unknown;
  mapping: MappingObject;
  expectedTypes: ExpectedTypesObject;
  resolvedValues?: Record<string, unknown>;
  invalidValueRules?: Record<string, InvalidValueRule>;
}

export interface ValidationResult {
  valid: boolean;
  issues: ValidationIssue[];
}
