// engine/validation/type-compatibility.ts
import type {
  ExpectedType,
  ExpectedTypes,
  ValidationIssue,
} from "./types";

function matchesExpectedType(
  value: unknown,
  expectedType: ExpectedType,
): boolean {
  switch (expectedType) {
    case "string":
      return typeof value === "string";
    case "number":
      return typeof value === "number" && !Number.isNaN(value);
    case "boolean":
      return typeof value === "boolean";
    case "object":
      return (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      );
    case "array":
      return Array.isArray(value);
    case "null":
      return value === null;
    case "unknown":
      return true;
  }
}

export function validateTypeCompatibility(
  resolvedValues: Record<string, unknown>,
  expectedTypes: ExpectedTypes,
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