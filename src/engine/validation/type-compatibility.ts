import type { ExpectedDataType, ExpectedTypesObject } from "@/types/mapping";
import type { ValidationIssue } from "@/types/validation";

function matchesExpectedType(
  value: unknown,
  expectedType: ExpectedDataType,
): boolean {
  switch (expectedType) {
    case "string":
      return typeof value === "string";
    case "number":
      return typeof value === "number" && !Number.isNaN(value);
    case "array":
      return Array.isArray(value);
    case "null":
      return value === null;
  }
}

export function validateTypeCompatibility(
  resolvedValues: Record<string, unknown>,
  expectedTypes: ExpectedTypesObject,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  for (const [fieldName, expectedType] of Object.entries(expectedTypes)) {
    const value = resolvedValues[fieldName];

    if (!matchesExpectedType(value, expectedType)) {
      issues.push({
        block: "type-compatibility",
        fieldName,
        message: `Expected "${expectedType}" but received an incompatible value.`,
      });
    }
  }

  return issues;
}