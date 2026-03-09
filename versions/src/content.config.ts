import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const releases = defineCollection({
	// Load Markdown files in the src/content/releases directory.
	loader: glob({ base: './src/content/releases', pattern: '**/*.md' }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			versionNumber: z.string(),
			image: z.object({
				src: z.string(),
				alt: z.string(),
			}).optional(),
			// Transform string to Date object
			date: z.date({ coerce: true }),
		}),
});

export const collections = { releases };
