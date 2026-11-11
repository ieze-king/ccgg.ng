import { defineCliConfig } from "sanity/cli";

/**
 * Config for the Sanity CLI, so a content backup is one command and does
 * not prompt for the project.
 *
 * The ids are hard-coded rather than read from the environment: the CLI
 * does not load .env.local, and both values are public anyway, shipped in
 * the browser bundle on every page.
 */
export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "xqn0oplg",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  },
});
