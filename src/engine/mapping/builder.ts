import { MappingContract, MappingError, MappingResult } from './types';
import { validateDataPath } from './validator';

/**
 * Builds and validates a Mapping Object given template keys, user mapping inputs, root path, and API response.
 * 
 * @param templateKeys Array of valid template keys from the template contract.
 * @param userInputs Record mapping template keys to user-entered data paths.
 * @param rootPath Root path expected for all data paths (e.g. "user", "data").
 * @param apiResponse The fetched API response object.
 */
export function buildMapping(
  templateKeys: string[],
  userInputs: Record<string, string>,
  rootPath: string,
  apiResponse: unknown
): MappingResult {
  const mapping: MappingContract = {};
  const errors: MappingError[] = [];

  const validKeysSet = new Set(templateKeys);

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

    // Validate path against root, structure, and API response
    const validation = validateDataPath(key, trimmedPath, rootPath, apiResponse);
    if (!validation.ok && validation.error) {
      errors.push(validation.error);
    } else if (validation.ok) {
      mapping[key] = trimmedPath;
    }
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, value: mapping };
}
