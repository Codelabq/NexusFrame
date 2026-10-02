<<<<<<< HEAD
import type { MappingError, PathValidationResult } from "@/types/mapping";
=======
import type {
  MappingError,
  PathValidationResult,
} from "@/types/mapping";
>>>>>>> origin/main

/**
 * Checks if a string contains forbidden expressions or code constructs.
 * Mapping is declarative only: no functions, ternaries, callbacks, arithmetic, or array methods (.map, .filter).
 */
export function containsForbiddenExpressions(rawPath: string): boolean {
  if (!rawPath) return false;
  const forbiddenPatterns = [
    /\(/,
    /\)/, // parentheses
    /\[.*?\.\.\..*?\]/, // spread syntax
    /\bmap\b/,
    /\bfilter\b/,
    /\breduce\b/,
    /\bfind\b/,
    /\bforeach\b/,
    /\bfunction\b/,
<<<<<<< HEAD
    /=>/, // arrow functions
    /\?/, // ternaries
    /:/, // colon (ternary or object literal)
    /&&/, // logical AND
    /\|\|/, // logical OR
    /\+/, // addition/concatenation
    /\*/, // multiplication
    /\//, // division
    /===/,
    /==/,
    /!==/,
    /!=/,
    />/,
    /</, // comparisons
    /\btrue\b/,
    /\bfalse\b/,
    /\bnull\b/,
    /\bundefined\b/,
=======
    /=>/,             // arrow functions
    /\?/,             // ternaries
    /:/,              // colon (ternary or object literal)
    /&&/,             // logical AND
    /\|\|/,           // logical OR
    /\+/,             // addition/concatenation
    /\*/,             // multiplication
    /\//,             // division
    /===/, /==/, /!==/, /!=/, />/, /</, // comparisons
    /\btrue\b/, /\bfalse\b/, /\bnull\b/, /\bundefined\b/
>>>>>>> origin/main
  ];

  return forbiddenPatterns.some((pattern) => pattern.test(rawPath));
}

/**
 * Parses a dot-notation data path string into segments (handling numeric array indices and property names).
 * Example: "user.data.posts.0.title" -> ["user", "data", "posts", "0", "title"]
 */
export function parseDataPath(rawPath: string): string[] {
  if (!rawPath || typeof rawPath !== "string") return [];
  const trimmed = rawPath.trim();
  if (!trimmed) return [];

  // Split by dot, but be careful with property names. V1 supports standard dot notation.
  // Segments can be alphanumeric, underscores, hyphens, or numeric indices.
<<<<<<< HEAD
  const segments = trimmed.split(".").map((segment) => segment.trim());
=======
  const segments = trimmed.split('.').map((segment) => segment.trim());
>>>>>>> origin/main
  return segments.some((segment) => segment.length === 0) ? [] : segments;
}

/**
 * Resolves a parsed path against an API response object.
 */
export function resolvePathValue(
  data: unknown,
  segments: string[],
): { found: boolean; value?: unknown } {
  if (segments.length === 1 && segments[0] === "$") {
    return { found: true, value: data };
  }

  if (segments.some((segment) => /^\d+$/.test(segment))) {
    return { found: false };
  }

  const resolveSegments = (
    current: unknown,
    index: number,
  ): { found: boolean; value?: unknown } => {
    if (index === segments.length) {
      return { found: true, value: current };
    }

    if (current === null || current === undefined) {
      return { found: false };
    }

    const segment = segments[index];
    if (segment === "item") {
      if (!Array.isArray(current)) {
        return { found: false };
      }

      const values: unknown[] = [];
      for (const item of current) {
        const result = resolveSegments(item, index + 1);
        if (!result.found) {
          return { found: false };
        }
        values.push(result.value);
      }
      return { found: true, value: values };
    }

    if (Array.isArray(current) || typeof current !== "object") {
      return { found: false };
    }

    if (!Object.prototype.hasOwnProperty.call(current, segment)) {
      return { found: false };
    }

    return resolveSegments(
      (current as Record<string, unknown>)[segment],
      index + 1,
    );
  };

  return resolveSegments(data, 0);
}

/**
 * Validates a single data path against root path, structure, and API response.
 */
export function validateDataPath(
  templateKey: string,
  rawPath: string,
  rootPath: string,
  apiResponse: unknown,
): PathValidationResult {
  const trimmedPath = rawPath.trim();

  if (!trimmedPath) {
    return {
      ok: false,
      error: {
        kind: "EmptyPath",
        message: `Path for template key "${templateKey}" cannot be empty`,
        templateKey,
        path: rawPath,
      },
    };
  }

  // Check forbidden executable expressions
  if (containsForbiddenExpressions(trimmedPath)) {
    return {
      ok: false,
      error: {
        kind: "UnsupportedExpression",
        message: `Path "${trimmedPath}" contains forbidden expressions or executable code. Mapping must be strictly declarative.`,
        templateKey,
        path: rawPath,
      },
    };
  }

  // Check root path constraint
  const trimmedRoot = rootPath.trim();
  if (!trimmedRoot) {
    return {
      ok: false,
      error: {
        kind: "MissingRootPath",
        message: `A root path is required before mapping template key "${templateKey}"`,
        templateKey,
        path: rawPath,
      },
    };
  }

  const expectedPrefix = trimmedRoot + ".";
  if (trimmedPath !== trimmedRoot && !trimmedPath.startsWith(expectedPrefix)) {
    return {
      ok: false,
      error: {
        kind: "InvalidRoot",
        message: `Path "${trimmedPath}" must start with root path "${trimmedRoot}"`,
        templateKey,
        path: rawPath,
      },
    };
  }

  const segments = parseDataPath(trimmedPath);
  if (segments.length === 0) {
    return {
      ok: false,
      error: {
        kind: "MalformedPath",
        message: `Path "${trimmedPath}" is malformed`,
        templateKey,
        path: rawPath,
      },
    };
  }

  if (
    segments.some((segment) => /^\d+$/.test(segment) || /[\[\]]/.test(segment))
  ) {
    return {
      ok: false,
      error: {
        kind: "MalformedPath",
        message: `Path "${trimmedPath}" uses an explicit index. Use "item" for repeated arrays instead.`,
        templateKey,
        path: rawPath,
      },
    };
  }

  // Resolve against API response
  const resolution = resolvePathValue(apiResponse, segments);
  if (!resolution.found) {
    return {
      ok: false,
      error: {
        kind: "PathNotFound",
        message: `Path "${trimmedPath}" does not exist in the API response`,
        templateKey,
        path: rawPath,
      },
    };
  }

  // Ensure resolved value is not an intermediate object or unsupported container if expected to be primitive/leaf,
  // but in V1, resolution finding the value is the primary check. Requirement 9 states path must point to target value.
  // If resolved value is an object or array when a primitive was expected, validation can note it, but let's be robust.

  return {
    ok: true,
    resolvedValue: resolution.value,
  };
}
