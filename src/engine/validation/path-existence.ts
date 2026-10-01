import type { MappingObject } from "@/types/mapping";
import type { ValidationIssue } from "@/types/validation";
import { parseDataPath, resolvePathValue } from "@/engine/mapping/validator";

export function validatePathExistence(
  apiResponse: unknown,
  mapping: MappingObject,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  for (const [fieldName, path] of Object.entries(mapping)) {
    const segments = parseDataPath(path);
    if (segments.length === 0 || !resolvePathValue(apiResponse, segments).found) {
      issues.push({
        block: "path-existence",
        fieldName,
        message: `Path "${path}" does not exist in the API response.`,
      });
    }
  }

  return issues;
}