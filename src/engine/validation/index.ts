// engine/validation/index.ts
import { validateInvalidValues } from "./invalid-values";
import { validatePathExistence } from "./path-existence";
import { validateTypeCompatibility } from "./type-compatibility";
<<<<<<< HEAD
import { resolveHybridMapping, resolveMappingPaths } from "@/engine/resolve";
import type {
  DirectValidationInput,
  HybridValidationInput,
  ValidationInput,
  ValidationResult,
} from "@/types/validation";
=======
import { resolveMappingPaths } from "@/engine/resolve";
import type { ValidationInput, ValidationResult } from "@/types/validation";
>>>>>>> origin/main

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
<<<<<<< HEAD
}

export function validateHybrid(input: HybridValidationInput): ValidationResult {
  const resolvedValues = resolveHybridMapping(input.apiResponse, input.mapping).values;
  const pathIssues = Object.entries(input.mapping).flatMap(([fieldName, entry]) =>
    entry.fillingMethod === "API"
      ? validatePathExistence(input.apiResponse, { [fieldName]: entry.data })
      : [],
  );
  const issues = [
    ...pathIssues,
    ...validateTypeCompatibility(resolvedValues, input.expectedTypes),
    ...validateInvalidValues(resolvedValues, input.invalidValueRules),
  ];

  return { valid: issues.length === 0, issues };
}

export function validateDirect(input: DirectValidationInput): ValidationResult {
  const issues = [
    ...validateTypeCompatibility(input.data, input.expectedTypes),
    ...validateInvalidValues(input.data, input.invalidValueRules),
  ];

  return { valid: issues.length === 0, issues };
=======
>>>>>>> origin/main
}