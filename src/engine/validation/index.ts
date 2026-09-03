// engine/validation/index.ts
import { validateInvalidValues } from "./invalid-values";
import { validatePathExistence } from "./path-existence";
import { validateTypeCompatibility } from "./type-compatibility";
import type {
  ExpectedTypes,
  InvalidValueRule,
  MappingObject,
  ValidationResult,
} from "./types";

export * from "./invalid-values";
export * from "./path-existence";
export * from "./type-compatibility";
export * from "./types";

export interface ValidationInput {
  // Connect these placeholders to the real project values manually.
  apiResponse: unknown;
  mapping: MappingObject;
  resolvedValues: Record<string, unknown>;
  expectedTypes: ExpectedTypes;
  invalidValueRules?: Record<string, InvalidValueRule>;
}

export function validate(input: ValidationInput): ValidationResult {
  const issues = [
    ...validatePathExistence(input.apiResponse, input.mapping),
    ...validateTypeCompatibility(
      input.resolvedValues,
      input.expectedTypes,
    ),
    ...validateInvalidValues(
      input.resolvedValues,
      input.invalidValueRules,
    ),
  ];

  return {
    valid: issues.length === 0,
    issues,
  };
}