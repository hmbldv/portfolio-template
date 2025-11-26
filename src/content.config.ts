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
			// Versioning fields
			versionStatus: z.enum(['current', 'previous']).default('current'),
			currentVersion: z.string().optional(), // For previous versions: slug to current version
			previousDate: z.coerce.date().optional(), // When this became a previous version
			// Major versions for Version History dropdown
			majorVersions: z.array(z.object({
				version: z.string(),
				date: z.coerce.date(),
				summary: z.string(),
				slug: z.string(),
			})).optional(),
			// Changelog - commit-based entries linked to GitHub
			changelog: z.array(z.object({
				commit: z.string(), // Short commit hash (e.g., "9eb4766")
				date: z.coerce.date(),
				message: z.string(), // Commit subject line
				body: z.string().optional(), // Commit body (longer description)
				url: z.string().url(), // GitHub commit URL
				repo: z.string(), // Repo name (e.g., "hmbldv/aws-sec")
			})).optional(),
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
