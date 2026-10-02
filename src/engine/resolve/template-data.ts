import type { MappingObject } from "@/types/mapping";
import type { TemplateData } from "@/types/resolve";

export function assembleTemplateData(
  mapping: MappingObject,
  resolvedValues: TemplateData,
): TemplateData {
  const templateData: TemplateData = {};

  for (const templateKey of Object.keys(mapping)) {
    if (Object.prototype.hasOwnProperty.call(resolvedValues, templateKey)) {
      templateData[templateKey] = resolvedValues[templateKey];
    }
  }

  return templateData;
}