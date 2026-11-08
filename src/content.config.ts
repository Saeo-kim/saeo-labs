import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * History journal entries. Only "Published" entries get a page, and they
 * must have a date. Add an article by adding a Markdown file to the folder.
 */
const history = defineCollection({
  loader: glob({ base: "./src/content/history", pattern: "**/*.md" }),
  schema: z
    .object({
      title: z.string(),
      date: z.coerce.date().optional(),
      category: z.string(),
      summary: z.string(),
      status: z.enum(["Planned", "Draft", "Published"]),
      order: z.number(),
    })
    .refine((entry) => entry.status !== "Published" || entry.date, {
      message: "A Published article needs a date.",
      path: ["date"],
    }),
});

export const collections = { history };
