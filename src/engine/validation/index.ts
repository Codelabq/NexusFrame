// engine/validation/index.ts
import { validateInvalidValues } from "./invalid-values";
import { validatePathExistence } from "./path-existence";
import { validateTypeCompatibility } from "./type-compatibility";
import { resolveMappingPaths } from "@/engine/resolve";
import type { ValidationInput, ValidationResult } from "@/types/validation";

export * from "./invalid-values";
export * from "./path-existence";
export * from "./type-compatibility";
export * from "@/types/validation";
export type {
  ExpectedDataType as ExpectedType,
  ExpectedTypesObject as ExpectedTypes,
  MappingObject,
} from "@/types/mapping";

export function validate(input: ValidationInput): ValidationResult {
  const resolvedValues =
    input.resolvedValues ?? resolveMappingPaths(input.apiResponse, input.mapping).values;
  const issues = [
    ...validatePathExistence(input.apiResponse, input.mapping),
    ...validateTypeCompatibility(
      resolvedValues,
      input.expectedTypes,
    ),
    ...validateInvalidValues(
      resolvedValues,
      input.invalidValueRules,
    ),
  ];

  return {
    valid: issues.length === 0,
    issues,
  };
}