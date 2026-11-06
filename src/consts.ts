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
    { label: 'GitHub', href: 'https://github.com/your-username' },
    { label: 'Bilibili', href: 'https://space.bilibili.com/your-id' },
    { label: '邮箱', href: 'mailto:you@example.com' },
  ],
};
