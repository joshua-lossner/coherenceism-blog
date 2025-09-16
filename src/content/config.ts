import { defineCollection, z } from 'astro:content';

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.date(),
    river: z.enum(['rest-rhythm','human-ai','history-systems','agency','awakening-alignment']),
    rivers: z.array(z.enum(['rest-rhythm','human-ai','history-systems','agency','awakening-alignment'])).optional(),
    form: z.enum(['journal','essay','announcement','transmission']).default('journal'),
    tags: z.array(z.string()).default([]),
    excerpt: z.string().optional(),
    pullQuote: z.string().optional(),
    related: z.array(z.string()).optional(),
    orderInRiver: z.number().optional(),
    status: z.enum(['draft','published']).default('published'),
    featured: z.boolean().default(false)
  })
});

export const collections = { journal };
