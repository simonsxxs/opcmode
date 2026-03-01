export default {
  title: 'AI+一人公司教程',
  description: '从零到首个成交，给小白的完整起步路线',

  base: '/',

  head: [
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }],
    ['meta', { name: 'theme-color', content: '#10b981' }],
    ['meta', { name: 'author', content: 'AI+一人公司实战营' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: 'AI+一人公司教程' }],
  ],

  themeConfig: {
    logo: { light: '/logo-light.png', dark: '/logo-dark.png' },
    siteTitle: 'AI+一人公司入门课',

    nav: [
      { text: '开始学习', link: '/1-start/' },
      { text: '场景实战', link: '/4-scenarios/' },
      { text: '进阶手册', link: '/5-advanced/' },
      { text: '速查手册', link: '/appendix/' },
      { text: '加入社群', link: '/community' },
    ],

    sidebar: {
      '/1-start/': [
        { text: '课程介绍', link: '/1-start/01-intro' },
        { text: '安装教程', link: '/1-start/02-install' },
        { text: '网络配置', link: '/1-start/03-network' },
        { text: '连接 AI', link: '/1-start/04-connect' },
        { text: '免费模型', link: '/1-start/04a-free-models' },
        { text: 'DeepSeek', link: '/1-start/04b-deepseek' },
        { text: '智谱 AI', link: '/1-start/04c-zhipu' },
        { text: 'Claude', link: '/1-start/04e-claude' },
        { text: '更新升级', link: '/1-start/05-update' },
      ],
      '/4-scenarios/': [
        { text: 'AI 写作工作流', link: '/4-scenarios/writer-workflow' },
        { text: '小红书文案创作', link: '/4-scenarios/writer-xiaohongshu' },
        { text: '程序员日常使用', link: '/4-scenarios/coder-daily' },
        { text: '办公文档处理', link: '/4-scenarios/office-files' },
        { text: '办公自动化', link: '/4-scenarios/office-automation' },
        { text: '代码 Agent', link: '/4-scenarios/coder-agents' },
      ],
      '/5-advanced/': [
        { text: 'MCP 基础', link: '/5-advanced/07a-mcp-basics' },
        { text: 'MCP 进阶', link: '/5-advanced/07b-mcp-advanced' },
        { text: 'Hooks 系统', link: '/5-advanced/hooks' },
        { text: '自定义工具', link: '/5-advanced/custom-tools' },
        { text: 'Agent 模式', link: '/5-advanced/agent-patterns' },
        { text: '远程开发', link: '/5-advanced/remote-basics' },
      ],
      '/appendix/': [
        { text: '命令速查', link: '/appendix/commands' },
        { text: '配置参考', link: '/appendix/config-ref' },
        { text: '常见问题', link: '/appendix/faq' },
        { text: '生态系统', link: '/appendix/ecosystem' },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/simonsxxs/opcmode' },
    ],

    footer: {
      message: '本站内容围绕 AI+一人公司与 AI 工具实战',
      copyright: '© 2026 AI+一人公司教程 | <a href="/1-start/">开始学习</a> | <a href="/4-scenarios/">场景实战</a> | <a href="/community">加入社群</a>',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    outline: {
      label: '本页目录',
      level: [2, 3],
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '多语言',
  },
}
