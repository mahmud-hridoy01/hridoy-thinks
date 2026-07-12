import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    lang: z.string().default('বাংলা'),
    excerpt: z.string(),
    image: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
