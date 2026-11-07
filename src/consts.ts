// ============================================
// 站点信息配置：想改名字、简介、社交链接，只改这个文件就行
// ============================================
export const SITE = {
  /** 站点名（浏览器标签页 & 左上角 logo） */
  title: 'Venti 的小站',
  /** 站点描述（SEO 用） */
  description: 'Venti 的个人小站：博客、作品与关于我。',
  /** 你的名字，会出现在首页大标题和页脚 */
  author: 'Venti',
  /**
   * 社交链接，展示在首页。不想展示哪项就删掉哪项，
   * 想加新的就照格式补一行（label 随便写）。
   */
  socials: [
    { label: 'GitHub', href: 'https://github.com/Venti-cpukiller' },
    { label: 'Bilibili', href: 'https://space.bilibili.com/516191350' },
    { label: '邮箱', href: 'mailto:1913554056@qq.com' },
  ],
  /**
   * 页脚联系方式：value 随时填，href 是点击后跳转的地址（可选）。
   * 邮箱用 mailto: 开头就会直接唤起写信；QQ 用 wpa.qq.com 链接发起临时会话。
   * 想加微信/知乎等，照格式补一行即可。
   */
  contact: [
    {
      label: 'QQ',
      value: '1913554056',
      href: 'https://wpa.qq.com/msgrd?v=3&uin=1913554056&site=qq&menu=yes',
    },
    { label: '邮箱', value: '1913554056@qq.com', href: 'mailto:1913554056@qq.com' },
    {
      label: 'Gmail',
      value: 'halenacarlee43265@gmail.com',
      href: 'mailto:halenacarlee43265@gmail.com',
    },
    { label: 'B站', value: '516191350', href: 'https://space.bilibili.com/516191350' },
  ],
  /**
   * giscus 评论系统（文章页底部，由 GitHub Discussions 驱动）。
   * 到 https://giscus.app/zh-CN 用 GitHub 授权安装 App 并选好分类后，
   * 把页面生成的 repoId 和 categoryId 填进下面两项即可启用（repo 已填好）。
   */
  giscus: {
    repo: 'Venti-cpukiller/Venti-cpukiller.github.io',
    repoId: 'R_kgDOVl0moA',
    category: 'Announcements',
    categoryId: '',
  },
  /**
   * Cloudflare Web Analytics 的 beacon token。
   * Cloudflare 控制台 → Analytics & Logs → Web Analytics → 添加站点，
   * 把复制的 token 粘贴到这里即可启用访问统计。
   */
  cfAnalyticsToken: '',
};
