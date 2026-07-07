import { type SchemaTypeDefinition } from "sanity";
import { contactInfo } from "./contactInfo";
import { project } from "./project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, contactInfo],
};
