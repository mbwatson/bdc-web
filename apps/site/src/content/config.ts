import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    audience: z.string().optional()
  }),
});

export const collections = {
  pages: pagesCollection
};
