export type MappingContract = Record<string, string>;

export interface MappingError {
  kind: 'InvalidRoot' | 'MalformedPath' | 'PathNotFound' | 'IncompatibleValue' | 'UnknownTemplateKey' | 'EmptyPath' | 'UnsupportedExpression';
  message: string;
  path?: string;
  templateKey?: string;
}

export type MappingResult =
  | { ok: true; value: MappingContract }
  | { ok: false; errors: MappingError[] };

export interface PathValidationResult {
  ok: boolean;
  error?: MappingError;
  resolvedValue?: unknown;
}
