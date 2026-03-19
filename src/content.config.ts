import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const deepSignals = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/deep-signals' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    topics: z.array(z.string()).default([]),
    sources: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const briefings = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/briefings' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    topics: z.array(z.string()).default([]),
    sources: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    items: z.array(
      z.object({
        title: z.string(),
        body: z.string(),
        whyItMatters: z.string(),
      })
    ).default([]),
  }),
});

const signalMaps = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/signal-maps' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    topics: z.array(z.string()).default([]),
    sources: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    mapType: z.enum(['market-map', 'tech-stack', 'competitive-landscape', 'trend-analysis']),
  }),
});

const longView = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/long-view' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    topics: z.array(z.string()).default([]),
    sources: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    series: z.string().optional(),
  }),
});

const openSource = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/open-source' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    topics: z.array(z.string()).default([]),
    sources: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    projectArea: z.enum(['infrastructure', 'content-pipeline', 'design', 'automation']),
  }),
});

export const collections = {
  'deep-signals': deepSignals,
  briefings,
  'signal-maps': signalMaps,
  'long-view': longView,
  'open-source': openSource,
};
