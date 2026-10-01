import type {
  ExpectedDataType,
  ExpectedTypesObject,
} from "@/types/mapping";

export type TemplateField = {
  name: string;
  type: ExpectedDataType;
  required: boolean;
};

export type TemplateDefinition = {
  fields: TemplateField[];
};

export function getExpectedTypes(
  definition: TemplateDefinition,
): ExpectedTypesObject {
  return Object.fromEntries(
    definition.fields.map((field) => [field.name, field.type]),
  );
}
