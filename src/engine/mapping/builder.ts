import { MappingContract, MappingError, MappingResult, ExpectedDataType, ExpectedTypesContract, MappingOutput } from './types';
import { validateDataPath } from './validator';

/**
 * Builds and validates a Mapping Object and Expected Types Object given template keys, user mapping inputs, expected types inputs, root path, and API response.
 * 
 * @param templateKeys Array of valid template keys from the template contract.
 * @param userInputs Record mapping template keys to user-entered data paths.
 * @param expectedTypesInputs Record mapping template keys to expected data types ('string' | 'number' | 'array' | 'null').
 * @param rootPath Root path expected for all data paths (e.g. "user", "data").
 * @param apiResponse The fetched API response object.
 */
export function buildMapping(
  templateKeys: string[],
  userInputs: Record<string, string>,
  expectedTypesInputs: Record<string, ExpectedDataType>,
  rootPath: string,
  apiResponse: unknown
): MappingResult {
  const mapping: MappingContract = {};
  const expectedTypes: ExpectedTypesContract = {};
  const errors: MappingError[] = [];

  const validKeysSet = new Set(templateKeys);
  const validTypes: ExpectedDataType[] = ['string', 'number', 'array', 'null'];

  for (const [key, rawPath] of Object.entries(userInputs)) {
    // Check if template key is valid
    if (!validKeysSet.has(key)) {
      errors.push({
        kind: 'UnknownTemplateKey',
        message: `Template key "${key}" is not part of the selected template contract`,
        templateKey: key,
        path: rawPath
      });
      continue;
    }

    const trimmedPath = typeof rawPath === 'string' ? rawPath.trim() : '';

    // If path is empty, optional/unmapped fields are allowed (ignored in mapping output)
    if (!trimmedPath) {
      continue;
    }

    // Validate expected type
    const expectedType = expectedTypesInputs[key];
    if (!expectedType || !validTypes.includes(expectedType)) {
      errors.push({
        kind: 'InvalidExpectedType',
        message: `Invalid or missing expected data type for template key "${key}"`,
        templateKey: key,
        path: trimmedPath
      });
      continue;
    }

    // Validate path against root, structure, and API response
    const validation = validateDataPath(key, trimmedPath, rootPath, apiResponse);
    if (!validation.ok && validation.error) {
      errors.push(validation.error);
    } else if (validation.ok) {
      mapping[key] = trimmedPath;
      expectedTypes[key] = expectedType;
    }
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, value: { mapping, expectedTypes } };
}
