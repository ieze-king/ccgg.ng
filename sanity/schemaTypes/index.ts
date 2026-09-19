import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { post } from "./post";
import { episode } from "./episode";
import { programme } from "./programme";
import { resource } from "./resource";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  post,
  episode,
  programme,
  resource,
];
