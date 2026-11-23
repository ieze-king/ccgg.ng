import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { post } from "./post";
import { newsletter } from "./newsletter";
import { blogPost } from "./blogPost";
import { quote } from "./quote";
import { episode } from "./episode";
import { programme } from "./programme";
import { resource } from "./resource";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  post,
  newsletter,
  blogPost,
  quote,
  episode,
  programme,
  resource,
];
