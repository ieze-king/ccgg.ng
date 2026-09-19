"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "ccgg",
  title: "CCGG",
  basePath: "/studio",
  // falls back to a stub so the module can be imported before the project
  // exists; the /studio route checks isSanityConfigured before mounting
  projectId: projectId || "unconfigured",
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("CCGG")
          .items([
            S.listItem()
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.documentTypeListItem("post").title("News & Articles"),
            S.documentTypeListItem("episode").title("Media Episodes"),
            S.documentTypeListItem("programme").title("Programmes"),
            S.documentTypeListItem("resource").title("Resources & Reports"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
