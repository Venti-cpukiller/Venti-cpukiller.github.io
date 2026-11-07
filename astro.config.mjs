// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 上线前把 site 改成你的真实域名或 GitHub Pages 地址
// 例如 https://你的用户名.github.io
export default defineConfig({
  site: 'https://venti-cpukiller.github.io',
  integrations: [sitemap()],
});
