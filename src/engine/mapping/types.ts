export type MappingContract = Record<string, string>;

export type ExpectedDataType = 'string' | 'number' | 'array' | 'null';
export type ExpectedTypesContract = Record<string, ExpectedDataType>;

export interface MappingOutput {
  mapping: MappingContract;
  expectedTypes: ExpectedTypesContract;
}

export interface MappingError {
  kind: 'InvalidRoot' | 'MalformedPath' | 'PathNotFound' | 'IncompatibleValue' | 'UnknownTemplateKey' | 'EmptyPath' | 'UnsupportedExpression' | 'InvalidExpectedType';
  message: string;
  path?: string;
  templateKey?: string;
}

export type MappingResult =
  | { ok: true; value: MappingOutput }
  | { ok: false; errors: MappingError[] };

export interface PathValidationResult {
  ok: boolean;
  error?: MappingError;
  resolvedValue?: unknown;
}
