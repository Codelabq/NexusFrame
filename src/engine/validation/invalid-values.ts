// engine/validation/invalid-values.ts
import type { InvalidValueRule, ValidationIssue } from "@/types/validation";

export function validateInvalidValues(
  resolvedValues: Record<string, unknown>,
  rules: Record<string, InvalidValueRule> = {},
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  for (const [fieldName, value] of Object.entries(resolvedValues)) {
    const ruleMessage = rules[fieldName]?.(value, fieldName);

    if (ruleMessage) {
      issues.push({
        block: "invalid-values",
        fieldName,
        message: ruleMessage,
      });
      continue;
    }

    if (
      value === undefined ||
      (typeof value === "number" && Number.isNaN(value))
    ) {
      issues.push({
        block: "invalid-values",
        fieldName,
        message: "The mapped value is invalid.",
      });
    }
  }

  return issues;
}