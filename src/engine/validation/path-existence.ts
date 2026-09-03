import type {
  MappingObject,
  ValidationIssue,
} from "./types";

function hasPath(value: unknown, path: string): boolean {
  if (!path) {
    return false;
  }

  let currentValue: unknown = value;

  for (const segment of path.split(".")) {
    if (
      currentValue === null ||
      typeof currentValue !== "object" ||
      !Object.prototype.hasOwnProperty.call(currentValue, segment)
    ) {
      return false;
    }

    currentValue = (currentValue as Record<string, unknown>)[segment];
  }

  return true;
}

export function validatePathExistence(
  apiResponse: unknown,
  mapping: MappingObject,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  for (const [fieldName, path] of Object.entries(mapping)) {
    if (!hasPath(apiResponse, path)) {
      issues.push({
        block: "path-existence",
        fieldName,
        message: `Path "${path}" does not exist in the API response.`,
      });
    }
  }

  return issues;
}