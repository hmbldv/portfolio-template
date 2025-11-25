import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const projects = defineCollection({
	// Load Markdown and MDX files in the `src/content/projects/` directory.
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }: { image: any }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			category: z.enum(['aws-security', 'aws-infra', 'homelab', 'ai-tools', 'local-dev', 'aws-ai', 'frontend-development']),
			tags: z.array(z.string()),
			status: z.enum(['in-development', 'launched', 'archived']).default('launched'),
			version: z.string().optional(),
			startedDate: z.coerce.date(),
			launchedDate: z.coerce.date().optional(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			techStack: z.array(z.string()),
			repoUrl: z.string().url().optional(),
			liveUrl: z.string().url().optional(),
		}),
});

const wiki = defineCollection({
	// Load Markdown and MDX files in the `src/content/wiki/` directory.
	loader: glob({ base: './src/content/wiki', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }: { image: any }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			category: z.string(),
			tags: z.array(z.string()).optional(),
			updatedDate: z.coerce.date(),
			heroImage: image().optional(),
		}),
});

export const collections = { blog, projects, wiki };
