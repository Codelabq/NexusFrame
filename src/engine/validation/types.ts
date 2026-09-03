// engine/validation/types.ts
export type ExpectedType =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "array"
  | "null"
  | "unknown";

export type MappingObject = Record<string, string>;
export type ExpectedTypes = Record<string, ExpectedType>;

export type InvalidValueRule = (
  value: unknown,
  fieldName: string,
) => string | null;

export interface ValidationIssue {
  block: "path-existence" | "type-compatibility" | "invalid-values";
  fieldName: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  issues: ValidationIssue[];
}