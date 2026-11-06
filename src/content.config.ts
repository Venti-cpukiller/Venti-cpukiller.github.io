import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 博客文章集合：在 src/content/blog/ 里放 .md 文件即成文章
 * 必填：title、date；其余可选
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/**
 * 作品集合：在 src/content/works/ 里放 .md 文件即成作品卡片
 * icon 填一个 emoji 当卡片图标；link 填外部链接（可选）
 */
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    icon: z.string().default('📦'),
    link: z.string().optional(),
  }),
});

export const collections = { blog, works };
