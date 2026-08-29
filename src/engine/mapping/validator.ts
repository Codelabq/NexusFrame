import { MappingError, PathValidationResult } from './types';

/**
 * Checks if a string contains forbidden expressions or code constructs.
 * Mapping is declarative only: no functions, ternaries, callbacks, arithmetic, or array methods (.map, .filter).
 */
export function containsForbiddenExpressions(rawPath: string): boolean {
  if (!rawPath) return false;
  const forbiddenPatterns = [
    /\(/, /\)/,       // parentheses
    /\[.*?\.\.\..*?\]/, // spread syntax
    /\bmap\b/,
    /\bfilter\b/,
    /\breduce\b/,
    /\bfind\b/,
    /\bforeach\b/,
    /\bfunction\b/,
    /=>/,             // arrow functions
    /\?/,             // ternaries
    /:/,              // colon (ternary or object literal)
    /&&/,             // logical AND
    /\|\|/,           // logical OR
    /\+/,             // addition/concatenation
    /-/,              // subtraction
    /\*/,             // multiplication
    /\//,             // division
    /===/, /==/, /!==/, /!=/, />/, /</, // comparisons
    /\btrue\b/, /\bfalse\b/, /\bnull\b/, /\bundefined\b/
  ];

  return forbiddenPatterns.some((pattern) => pattern.test(rawPath));
}

/**
 * Parses a dot-notation data path string into segments (handling numeric array indices and property names).
 * Example: "user.data.posts.0.title" -> ["user", "data", "posts", "0", "title"]
 */
export function parseDataPath(rawPath: string): string[] {
  if (!rawPath || typeof rawPath !== 'string') return [];
  const trimmed = rawPath.trim();
  if (!trimmed) return [];

  // Split by dot, but be careful with property names. V1 supports standard dot notation.
  // Segments can be alphanumeric, underscores, hyphens, or numeric indices.
  return trimmed.split('.').map((s) => s.trim()).filter(Boolean);
}

/**
 * Resolves a parsed path against an API response object.
 */
export function resolvePathValue(data: unknown, segments: string[]): { found: boolean; value?: unknown } {
  let current: any = data;

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];

    if (current === null || current === undefined) {
      return { found: false };
    }

    // Check if segment is an array index or object property
    if (Array.isArray(current)) {
      const index = Number(segment);
      if (isNaN(index) || index < 0 || index >= current.length || !Number.isInteger(index)) {
        return { found: false };
      }
      current = current[index];
    } else if (typeof current === 'object' && current !== null) {
      if (!Object.prototype.hasOwnProperty.call(current, segment)) {
        return { found: false };
      }
      current = current[segment];
    } else {
      return { found: false };
    }
  }

  return { found: true, value: current };
}

/**
 * Validates a single data path against root path, structure, and API response.
 */
export function validateDataPath(
  templateKey: string,
  rawPath: string,
  rootPath: string,
  apiResponse: unknown
): PathValidationResult {
  const trimmedPath = rawPath.trim();

  if (!trimmedPath) {
    return {
      ok: false,
      error: { kind: 'EmptyPath', message: `Path for template key "${templateKey}" cannot be empty`, templateKey, path: rawPath }
    };
  }

  // Check forbidden executable expressions
  if (containsForbiddenExpressions(trimmedPath)) {
    return {
      ok: false,
      error: { kind: 'UnsupportedExpression', message: `Path "${trimmedPath}" contains forbidden expressions or executable code. Mapping must be strictly declarative.`, templateKey, path: rawPath }
    };
  }

  // Check root path constraint
  const trimmedRoot = rootPath.trim();
  if (trimmedRoot) {
    const expectedPrefix = trimmedRoot + '.';
    if (trimmedPath !== trimmedRoot && !trimmedPath.startsWith(expectedPrefix)) {
      return {
        ok: false,
        error: { kind: 'InvalidRoot', message: `Path "${trimmedPath}" must start with root path "${trimmedRoot}"`, templateKey, path: rawPath }
      };
    }
  }

  const segments = parseDataPath(trimmedPath);
  if (segments.length === 0) {
    return {
      ok: false,
      error: { kind: 'MalformedPath', message: `Path "${trimmedPath}" is malformed`, templateKey, path: rawPath }
    };
  }

  // Resolve against API response
  const resolution = resolvePathValue(apiResponse, segments);
  if (!resolution.found) {
    return {
      ok: false,
      error: { kind: 'PathNotFound', message: `Path "${trimmedPath}" does not exist in the API response`, templateKey, path: rawPath }
    };
  }

  // Ensure resolved value is not an intermediate object or unsupported container if expected to be primitive/leaf,
  // but in V1, resolution finding the value is the primary check. Requirement 9 states path must point to target value.
  // If resolved value is an object or array when a primitive was expected, validation can note it, but let's be robust.

  return {
    ok: true,
    resolvedValue: resolution.value
  };
}
