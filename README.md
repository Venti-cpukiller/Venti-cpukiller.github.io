# Venti 的个人小站

用 [Astro](https://astro.build) 搭的个人网站：首页 + 博客 + 作品集 + 关于，深色模式，零成本托管在 GitHub Pages 和 Cloudflare Pages。

## 常用命令

在项目目录（`personal-site/`）里打开终端：

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 本地开发预览，浏览器打开 http://localhost:4321 |
| `npm run build` | 构建到 `dist/` 目录 |
| `npm run preview` | 预览构建结果 |

## 想改什么，去哪改

| 想改的东西 | 位置 |
| --- | --- |
| 站点名、你的名字、社交链接 | `src/consts.ts` |
| 首页的自我介绍 | `src/pages/index.astro`（hero 部分） |
| 关于页 | `src/pages/about.astro` |
| 网站图标 | `public/favicon.svg` |
| 正式域名 | `astro.config.mjs` 里的 `site` |

## 发文章

在 `src/content/blog/` 新建 `xxx.md`，开头：

```markdown
---
title: "标题"
description: "一两句摘要"
date: 2026-11-06
tags: ["标签"]
draft: true   # 写完删掉这行才会上线
---
```

加 `draft: true` 的文章不会出现在网站上，可以安心写草稿。

## 加作品

在 `src/content/works/` 新建 `xxx.md`，开头：

```markdown
---
title: "作品名"
description: "一句话简介（显示在卡片上）"
date: 2026-11-06
tags: ["标签"]
icon: "🚀"        # 随便一个 emoji
link: "https://…"  # 可选，外部链接
---
```

## 部署

- **GitHub Pages**：push 到 `main` 后自动构建发布（配置见 `.github/workflows/deploy.yml`）。首次需要在仓库 Settings → Pages 里把 Source 设为 **GitHub Actions**。
- **Cloudflare Pages**：Dashboard → Workers & Pages → Create → 连接本仓库，构建命令 `npm run build`，输出目录 `dist`。
- 绑定自己的域名时，记得把 `astro.config.mjs` 里的 `site` 改成真实地址。
