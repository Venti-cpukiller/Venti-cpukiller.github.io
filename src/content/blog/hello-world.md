---
title: "你好，世界：我的小站上线了"
description: "这个网站是怎么搭起来的：Astro + GitHub Pages + Cloudflare Pages，全程零成本。"
date: 2026-11-06
tags: ["建站", "折腾"]
cover: "/img/covers/hello-world.svg"
---

欢迎来到我的小站！这是第一篇文章，顺便记录一下这个网站是怎么搭起来的。

## 技术方案

- **Astro**：静态站点生成器，写文章就是写 Markdown，构建出来的网站几乎不带 JS，快得很
- **GitHub Pages + Cloudflare Pages 双托管**：同一个仓库两边同时部署，push 一次全网更新
- **成本：0 元**。唯一可能花钱的是以后想买个自己的域名（一年几十块）

## 以后怎么发文章

1. 在 `src/content/blog/` 里新建一个 `my-post.md`
2. 文件开头填好标题、日期：

```markdown
---
title: "文章标题"
description: "一两句摘要"
date: 2026-11-06
tags: ["随便", "打标签"]
---

正文从这里开始，就是普通 Markdown……
```

3. `git push` 推上去，一两分钟后网站自动更新

不想让别人看到没写完的草稿？在开头加一行 `draft: true`，它就不会出现在网站上。

## 图片怎么放

把图片丢进 `public/` 文件夹（比如 `public/img/cat.png`），正文里直接引用：

```markdown
![我家猫](/img/cat.png)
```
